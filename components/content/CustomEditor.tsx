import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Markdown } from 'tiptap-markdown';

import {
   Bold,
   Italic,
   List,
   ListOrdered,
   Heading2,
   Undo,
   Redo,
   Copy,
   Save,
   RefreshCw
} from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown-utils';

interface CustomEditorProps {
   initialContent?: string;
   isLoading?: boolean;
   onSave?: (content: string) => void;
   onRegenerate?: () => void;
}

const CustomEditor: React.FC<CustomEditorProps> = ({
   initialContent = '',
   isLoading,
   onSave,
   onRegenerate
}) => {
   const [isCopied, setIsCopied] = useState(false);


   const editor = useEditor({
      extensions: [
         StarterKit,
         Markdown
      ],
      content: '',
      editorProps: {
         attributes: {
            class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none px-2 text-black dark:text-foreground'
         }
      }
   });

   // Convert markdown to HTML when initialContent changes
   useEffect(() => {
      if (editor && initialContent) {
         try {
            // Convert markdown to HTML
            const htmlContent = markdownToHtml(initialContent);

            // Set the converted content
            editor.commands.setContent(htmlContent);
         } catch (error) {
            console.error('Error converting markdown:', error);
            // Fallback to setting raw content if conversion fails
            editor.commands.setContent(initialContent);
         }
      }
   }, [initialContent, editor]);

   const handleCopy = async () => {
      if (editor) {
         await navigator.clipboard.writeText(editor.getHTML());
         setIsCopied(true);
         setTimeout(() => setIsCopied(false), 2000);
      }
   };

   const handleSave = () => {
      if (editor && onSave) {
         onSave(editor.getHTML());
      }
   };
   if (!editor) return null;
   return (
      <div className="w-full max-w-4xl mx-auto">
         <Card className="shadow-sm">
            <CardContent className="p-4">
               <div className="border-b pb-4 mb-4">
                  <div className="flex flex-wrap gap-2">
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'bg-accent text-accent-foreground' : ''}
                     >
                        <Bold className="h-4 w-4" />
                     </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'bg-accent text-accent-foreground' : ''}
                     >
                        <Italic className="h-4 w-4" />
                     </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'bg-accent text-accent-foreground' : ''}
                     >
                        <Heading2 className="h-4 w-4" />
                     </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'bg-accent text-accent-foreground' : ''}
                     >
                        <List className="h-4 w-4" />
                     </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'bg-accent text-accent-foreground' : ''}
                     >
                        <ListOrdered className="h-4 w-4" />
                     </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().undo().run()}
                     >
                        <Undo className="h-4 w-4" />
                     </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editor.chain().focus().redo().run()}
                     >
                        <Redo className="h-4 w-4" />
                     </Button>

                     <div className="ml-auto flex gap-2">
                        {onRegenerate && (
                           <Button
                              variant="outline"
                              size="sm"
                              onClick={onRegenerate}
                           >
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Regenerate
                           </Button>
                        )}
                        <Button
                           variant="outline"
                           size="sm"
                           onClick={handleCopy}
                        >
                           <Copy className="h-4 w-4 mr-2" />
                           {isCopied ? 'Copied!' : 'Copy'}
                        </Button>
                        {onSave && (
                           <Button
                              variant="default"
                              size="sm"
                              onClick={handleSave}
                           >
                              <Save className="h-4 w-4 mr-2" />
                              Save
                           </Button>
                        )}
                     </div>
                  </div>
               </div>
               {
                  isLoading && <p className='text-accent'>Generating...</p>
               }
               <EditorContent editor={editor} className="min-h-[400px] h-full" />
            </CardContent>
         </Card>
      </div>
   );
};

export default CustomEditor;
