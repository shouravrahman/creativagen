import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
   ({ className, ...props }, ref) => (
      <div className="relative w-full overflow-auto rounded-xl border border-border/50 backdrop-blur-sm bg-card/30">
         <table
         ref={ref}
            className={cn("w-full caption-bottom text-sm shadow-sm", className)}
         {...props}
         />
      </div>
   )
);
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
   ({ className, ...props }, ref) => (
      <thead
         ref={ref}
         className={cn(
            "[&_tr]:border-b border-border/50 bg-accent/5 backdrop-blur-sm",
            className
         )}
         {...props}
      />
   )
);
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
   HTMLTableSectionElement,
   React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
   <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
   />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
   HTMLTableSectionElement,
   React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
   <tfoot
      ref={ref}
      className={cn(
         "border-t border-border  font-medium [&>tr]:last:border-b-0",
         className
      )}
      {...props}
   />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
   ({ className, ...props }, ref) => (
      <tr
         ref={ref}
         className={cn(
            "border-b border-border/50 transition-colors duration-200",
            "hover:bg-accent/5",
            "data-[state=selected]:bg-accent/10",
         className
         )}
         {...props}
      />
   )
);
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
   HTMLTableCellElement,
   React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
   <th
      ref={ref}
      className={cn(
         "h-12 px-4 border-r border-black text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0",
         className
      )}
      {...props}
   />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
   ({ className, ...props }, ref) => (
      <td
         ref={ref}
         className={cn(
            "p-4 align-middle transition-colors duration-200",
            "[&:not(:last-child)]:border-r border-border/30",
            "group-hover:border-border/50",
            className
         )}
         {...props}
      />
   )
);
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
   HTMLTableCaptionElement,
   React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
   <caption
      ref={ref}
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
   />
))
TableCaption.displayName = "TableCaption"

export {
   Table,
   TableHeader,
   TableBody,
   TableFooter,
   TableHead,
   TableRow,
   TableCell,
   TableCaption,
}
