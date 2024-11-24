import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({ className, ...props }, ref) => {
      return (
         <textarea
            className={cn(
            "flex min-h-[80px] w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3",
            "text-sm text-foreground placeholder:text-muted-foreground/60",
            "shadow-sm backdrop-blur-sm transition-all duration-200",
               "hover:border-border/80 hover:shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none scrollbar-thin scrollbar-thumb-accent/10 scrollbar-track-transparent",
            className
         )}
              ref={ref}
              {...props}
           />
        )
     }
  );
Textarea.displayName = "Textarea"

export { Textarea }
