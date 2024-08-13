"use client";

import PreviewTab from "@/components/PreviewTab";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { CheckIcon, CopyIcon, XIcon } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import "prismjs/themes/prism-okaidia.css";
import { useEffect, useState } from "react";

type Props = {
  html: string | null;
  setHtml: (html: string | null) => void;
};

export default function PreviewModal({ html, setHtml }: Props) {
  const [isCopied, copy] = useCopyToClipboard();
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    Prism.highlightAll();
  }, [html, activeTab]);

  if (!html) {
    return null;
  }

  return (
    <dialog className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[2000] bg-black/50 h-screen w-screen">
      <div className="bg-white h-[calc(100%-100px)] w-[calc(100%-100px)] rounded-lg shadow-xl flex flex-col">
        <header className="relative p-3 border-b">
          <div className="space-x-2 flex justify-center">
            <PreviewTab
              active={activeTab === "preview"}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </PreviewTab>
            <PreviewTab
              active={activeTab === "code"}
              onClick={() => setActiveTab("code")}
            >
              Code
            </PreviewTab>
          </div>

          <button
            className="absolute right-3 top-3 p-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring"
            onClick={() => setHtml(null)}
          >
                 <XIcon className="w-6 h-6   " />
          </button>
        </header>

        {activeTab === "preview" ? (
          <iframe className="w-full h-full" srcDoc={html} />
        ) : (
          <pre className="overflow-auto relative h-full">
            <button
              onClick={() => copy(html)}
                       className="absolute right-2 top-2 p-2 rounded-lg "
            >
              {isCopied ? (
                <CheckIcon className="w-6 h-6" />
              ) : (
                <CopyIcon className="w-6 h-6" />
              )}
            </button>
            <code className="language-markup">{html}</code>
          </pre>
        )}
      </div>
    </dialog>
  );
}
