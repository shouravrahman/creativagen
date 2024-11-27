import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
   message: string;
   onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
   return (
      <Alert variant="destructive">
         <AlertCircle className="h-4 w-4" />
         <AlertTitle>Error</AlertTitle>
         <AlertDescription className="flex items-center justify-between">
            <span>{message}</span>
            <Button variant="outline" size="sm" onClick={onRetry}>
               Retry
            </Button>
         </AlertDescription>
      </Alert>
   );
}
