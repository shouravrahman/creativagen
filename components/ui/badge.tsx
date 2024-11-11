import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
   "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 shadow-sm backdrop-blur-[2px]",
   {
      variants: {
         variant: {
            default: "bg-primary/90 text-primary-foreground hover:bg-primary/70 hover:scale-105",
            secondary: "bg-sidebar/90 text-sidebar-text hover:bg-sidebar/70 hover:scale-105",
            destructive: "bg-accent/90 text-accent-foreground hover:bg-accent/70 hover:scale-105",
            outline: "border-2 border-border/50 text-foreground hover:border-border hover:bg-background/50 hover:scale-105",
            premium: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-foreground hover:shadow-lg hover:scale-105 hover:brightness-110 border-0 animate-gradient",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
