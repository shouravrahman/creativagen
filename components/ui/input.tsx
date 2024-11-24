import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               "flex h-11 w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm backdrop-blur-sm transition-all duration-200",
               "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50",
               "hover:border-border/80 hover:shadow-sm",
               "disabled:cursor-not-allowed disabled:opacity-50",
               "file:border-0 file:bg-transparent file:text-sm file:font-medium",
               className
            )}
               ref={ref}
               {...props}
            />
         );
      }
   );
Input.displayName = "Input";

export { Input };
