import React, { useState, useCallback, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { Copy, Edit, Save } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), {
   ssr: false,
   loading: () => (
      <Skeleton className="w-full h-[400px] rounded-lg" />
   ),
});

interface EditorProps {
   content: string;
   onSave?: (content: string) => void;
   isLoading?: boolean;
}

const CustomEditor: React.FC<EditorProps> = ({
   content,
   onSave,
   isLoading = false,
}) => {
   const [editorContent, setEditorContent] = useState<string>("");

   useEffect(() => {
      if (content) {
         setEditorContent(content);
      }
   }, [content]);

   const modules = useMemo(
      () => ({
         toolbar: [
            [{ header: [2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
         ],
         clipboard: {
            matchVisual: false,
         },
      }),
      []
   );

   const formats = useMemo(
      () => [
         "header",
         "bold",
         "italic",
         "underline",
         "list",
         "bullet",
         "link",
      ],
      []
   );

   const handleChange = useCallback((value: string) => {
      setEditorContent(value);
   }, []);

   const handleSave = useCallback(async () => {
      if (!onSave) return;

      try {
         await onSave(editorContent);
         toast.success("Changes saved successfully", {
            duration: 2000,
         });
      } catch (error) {
         toast.error("Failed to save changes");
      }
   }, [editorContent, onSave]);

   const handleCopyToClipboard = useCallback(async () => {
      try {
         await navigator.clipboard.writeText(editorContent);
         toast.success("Content copied to clipboard");
      } catch (err) {
         toast.error("Failed to copy content");
      }
   }, [editorContent]);

   return (
      <div className="w-full max-w-4xl mx-auto">
         <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-0">
               <div className=" p-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-background flex gap-2">Editor<Edit /></h2>
                  <div className="flex gap-2">
                     <Button
                        onClick={handleCopyToClipboard}
                        variant="outline"
                        size="sm"
                        disabled={isLoading}
                     >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                     </Button>
                     <Button
                        onClick={handleSave}
                        size="sm"
                        variant="outline"
                        disabled={isLoading}
                     >
                        <Save className="w-4 h-4 mr-2" />
                        Save
                     </Button>
                  </div>
               </div>

               <div className="relative">
                  <ReactQuill
                     value={editorContent}
                     onChange={handleChange}
                     modules={modules}
                     formats={formats}
                     className="editor-container"
                     placeholder="Your content will appear here"
                     theme="snow"
                  />

                  {isLoading && (
                     <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                           <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                           <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                        </div>
                     </div>
                  )}
               </div>
            </CardContent>
         </Card>


      </div>
   );
};

export default CustomEditor;
