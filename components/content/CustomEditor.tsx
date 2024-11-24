import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
   Bold,
   Italic,
   List,
   ListOrdered,
   Heading2,
   Undo,
   Redo,
   Copy,
   Save
} from 'lucide-react';

const CustomEditor = ({ initialContent = '', onSave }) => {
   const [isCopied, setIsCopied] = useState(false);

   const editor = useEditor({
      extensions: [
         StarterKit
      ],
      content: initialContent,
      editorProps: {
         attributes: {
            class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none px-2 text-black dark:text-foreground '
         }
      }
   });

   if (!editor) {
      return null;
   }

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

   return (
      <div className="w-full max-w-4xl mx-auto">
         <Card className=" shadow-md">
            <CardContent className="p-4">
               <div className="border-b  pb-4 mb-4">
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
                        <Button
                           variant="outline"
                           size="sm"
                           onClick={handleCopy}
                        >
                           <Copy className="h-4 w-4 mr-2" />
                           {isCopied ? 'Copied!' : 'Copy'}
                        </Button>
                        <Button
                           variant="default"
                           size="sm"
                           onClick={handleSave}
                        >
                           <Save className="h-4 w-4 mr-2" />
                           Save
                        </Button>
                     </div>
                  </div>
               </div>

               <EditorContent editor={editor} className="min-h-screen" />
            </CardContent>
         </Card>
      </div>
   );
};

export default CustomEditor;
