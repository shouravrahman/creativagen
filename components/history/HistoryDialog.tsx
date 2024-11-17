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

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
               <DialogTitle className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                     {content.templateSlug}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                     Created on {formatDate(content.createdAt)}
                  </span>
               </DialogTitle>
               <DialogDescription>
                  Generated content details and preview
               </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
               <div className="prose prose-sm max-w-none">
                  <h3 className="text-lg font-semibold mb-2">Generated Content</h3>
                  <div className="whitespace-pre-wrap rounded-lg bg-muted p-4">
                     {content.aiResponse}
                  </div>
               </div>
               {Object.entries(content.formValues).length > 0 && (
                  <div>
                     <h3 className="text-lg font-semibold mb-2">Input Parameters</h3>
                     {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(content.formValues).map(([key, value]) => (
                           <div key={key} className="space-y-1">
                              <p className="text-sm font-medium capitalize">{key}:</p>
                              <p className="text-sm text-muted-foreground">{String(value)}</p>
                           </div>
                        ))}
                     </div> */}
                     {
                        content.formValues
                     }
                  </div>
               )}
            </div>
         </DialogContent>
      </Dialog>
   );
}
