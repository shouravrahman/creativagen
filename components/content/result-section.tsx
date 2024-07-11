import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "../ui/button.tsx";
import { CopyPlus } from "lucide-react";

const ResultSection = () => {
  const editorRef: any = useRef();
  return (
    <div className="rounded">
      <div className="bg-gray-500 flex justify-between items-center p-4">
        <h2 className="font-bold text-xl">Your Blog:</h2>
        <Button>
          <CopyPlus />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="your blog will appear here!"
        height="100%"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          console.log(editorRef.current.getInstance().getMarkdown());
        }}
      />
    </div>
  );
};

export default ResultSection;
