import React, { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Copy, RefreshCw, Save } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import ReactQuill with loading optimization
const ReactQuill = dynamic(() => import("react-quill"), {
   ssr: false,
   loading: () => (
      <Skeleton className="w-full h-[500px] rounded-lg" />
   ),
});

interface EditorProps {
   content: string;
   onSave?: (content: string) => void;
   onSchedule?: (content: string, scheduledTime: Date) => void;
}

const CustomEditor: React.FC<EditorProps> = ({
   content,
   onSave,
   onSchedule,
}) => {
   const [newContent, setNewContent] = useState<string>(content);
   const [loading, setLoading] = useState<boolean>(false);

   // Memoize toolbar configuration
   const modules = useMemo(() => ({
      toolbar: [
         [{ header: [1, 2, false] }],
         ["bold", "italic", "underline", "strike"],
         [{ list: "ordered" }, { list: "bullet" }],
         ["link", "image", "video"],
         [{ color: [] }, { background: [] }],
         ["clean"],
      ],
      clipboard: {
         matchVisual: false, // Improves paste performance
      },
   }), []);

   // Memoize formats
   const formats = useMemo(() => [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "image",
      "video",
   ], []);

   // Optimize handlers with useCallback
   const handleChange = useCallback((value: string) => {
      setNewContent(value);
   }, []);

   const handleSave = useCallback(async () => {
      if (!onSave) return;

      try {
         await onSave(newContent);
         toast.success("Content saved successfully!", {
            duration: 2000,
         });
      } catch (error) {
         toast.error("Failed to save content. Please try again.");
      }
   }, [newContent, onSave]);

   const handleRegenerate = useCallback(async () => {
      setLoading(true);
      toast("Regenerating content...");

      try {
         const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               /* your request body */
            }),
         });

        if (!response.ok) throw new Error("Failed to regenerate");

        const data = await response.json();
        setNewContent(data.content);
        toast.success("Content regenerated successfully!");
     } catch (error) {
        console.error("Error regenerating content:", error);
        toast.error("Failed to regenerate content.");
     } finally {
        setLoading(false);
     }
   }, []);

   const handleCopyToClipboard = useCallback(async () => {
      try {
         await navigator.clipboard.writeText(newContent);
         toast.success("Content copied to clipboard!");
      } catch (err) {
         console.error("Failed to copy:", err);
         toast.error("Failed to copy content.");
      }
   }, [newContent]);

   return (
      <Card className="w-full bg-white shadow-lg transition-shadow duration-200 hover:shadow-xl">
         <CardContent className="p-6">
            {/* Toolbar Section */}
            <div className="flex flex-wrap gap-3 mb-6">
               <Button
                  onClick={handleRegenerate}
                  variant="default"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-200 transform hover:scale-105"
                  disabled={loading}
               >
                  <RefreshCw size={16} className={`mr-2 ${loading ? "animate-spin" : ""}`} />
                  Regenerate
               </Button>

               <Button
                  onClick={handleSave}
                  variant="default"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transition-all duration-200 transform hover:scale-105"
                  disabled={loading}
               >
                  <Save size={16} className="mr-2" />
                  Save
               </Button>

               <Button
                  onClick={handleCopyToClipboard}
                  variant="default"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white transition-all duration-200 transform hover:scale-105"
                  disabled={loading}
               >
                  <Copy size={16} className="mr-2" />
                  Copy
               </Button>
            </div>

            {/* Editor Section */}
            <div className="relative rounded-lg border border-gray-200 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
               <ReactQuill
                  value={newContent}
                  onChange={handleChange}
                  modules={modules}
                  formats={formats}
                  className="editor-container"
                  placeholder={loading ? "Generating content..." : "Start writing something amazing..."}
                  theme="snow"
               />
            </div>

            {/* Loading Overlay */}
            {loading && (
               <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                  <div className="flex flex-col items-center gap-4">
                     <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
                     <p className="text-gray-700 font-medium">Generating your content...</p>
                  </div>
               </div>
            )}
         </CardContent>
      </Card>
   );
};

// Add custom styles to improve Quill editor appearance
const styles = `
  .editor-container {
    min-height: 500px;
    height: 100%;
  }

  .editor-container .ql-editor {
    font-size: 1rem;
    line-height: 1.75;
    padding: 1rem;
    min-height: 500px;
  }

  .editor-container .ql-toolbar {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
    padding: 0.75rem;
    background-color: #f9fafb;
  }

  .editor-container .ql-container {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: none;
  }

  .editor-container .ql-snow.ql-toolbar button:hover,
  .editor-container .ql-snow .ql-toolbar button:hover {
    color: #2563eb;
  }

  .editor-container .ql-snow.ql-toolbar button.ql-active,
  .editor-container .ql-snow .ql-toolbar button.ql-active {
    color: #2563eb;
  }

  @media (max-width: 640px) {
    .editor-container .ql-toolbar {
      flex-wrap: wrap;
      justify-content: center;
    }

    .editor-container .ql-formats {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }
`;

export default function EnhancedEditor(props: EditorProps) {
   return (
      <>
         <style>{styles}</style>
         <CustomEditor {...props} />
      </>
   );
}
