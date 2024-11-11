import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
   {
      variants: {
         variant: {
            default: "bg-primary text-primary-foreground shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
            destructive: "bg-accent text-accent-foreground shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
            outline: "border-2 border-primary bg-background hover:bg-primary/10 hover:text-primary-foreground",
            secondary: "bg-sidebar text-sidebar-text shadow-md hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
            ghost: "hover:bg-background/80 hover:text-primary backdrop-blur-sm",
            link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
         },
         size: {
            default: "h-11 px-5 py-2 rounded-lg",
            sm: "h-9 px-4 rounded-md text-xs",
            lg: "h-12 px-8 rounded-xl text-base",
            icon: "h-11 w-11 rounded-lg",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   }
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
