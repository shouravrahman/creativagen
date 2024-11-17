"use client";
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";

interface HistoryPaginationProps {
   page: number;
   pageSize: number;
   totalItems: number;
   onPageChange: (page: number) => void;
}

export function HistoryPagination({
   page,
   pageSize,
   totalItems,
   onPageChange,
}: HistoryPaginationProps) {
   const totalPages = Math.ceil(totalItems / pageSize);
   const startItem = (page - 1) * pageSize + 1;
   const endItem = Math.min(page * pageSize, totalItems);

   return (
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
         <p className="text-sm w-full text-muted-foreground">
            Showing {startItem} to {endItem} of {totalItems} results
         </p>
         <Pagination className="justify-end">
            <PaginationContent>
               <PaginationItem>
                  <PaginationPrevious
                     onClick={() => onPageChange(Math.max(1, page - 1))}
                     disabled={page === 1}
                  />
               </PaginationItem>
               <PaginationItem>
                  <PaginationNext
                     onClick={() => onPageChange(Math.min(totalPages, page + 1))}
                     disabled={page >= totalPages}
                  />
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      </div>
   );
}
