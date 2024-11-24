"use client";
import { Badge } from "@/components/ui/badge";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogDescription,
} from "@/components/ui/dialog";
import { formatDate } from "@/utils/formatDateHistory";
import { GeneratedContent } from "./HistoryTable";


interface HistoryDialogProps {
   content: GeneratedContent | null;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
}

export function HistoryDialog({
   content,
   isOpen,
   onOpenChange,
}: HistoryDialogProps) {
   if (!content) return null;
   function stripHTML(html: string) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      return tempDiv.innerText || tempDiv.textContent;
   }
   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto p-6 rounded-lg  shadow-sm">
            <DialogHeader>
               <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
                  <Badge variant="secondary" className="text-sm">
                     {content.templateSlug}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                     Created on {formatDate(content.createdAt)}
                  </span>
               </DialogTitle>
               {/* <DialogDescription className="ml-3 mt-2 text-sm text-muted-foreground">
                  Generated content details and preview
               </DialogDescription> */}
            </DialogHeader>

            <div className="mt-6 space-y-6">
               {/* Generated Content Section */}
               <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">Generated Content</h3>
                  <div className="whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm border border-muted">
                     {stripHTML(content.aiResponse)}
                  </div>
               </div>

               {/* Input Parameters Section */}
               {/* {Object.entries(content.formValues).length > 0 && (
                  <div className="space-y-4">
                     <h3 className="text-lg font-semibold mb-2">Input Parameters</h3>
                     <div className="space-y-2">

                        {Object.entries(content.formValues).map(([key, value]) => (
                           <div key={key} className="flex justify-between text-sm">
                              <span className="font-medium capitalize">{key}:</span>
                              <span className="text-muted-foreground">{String(value)}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               )} */}
            </div>
         </DialogContent>
      </Dialog>

   );
}
