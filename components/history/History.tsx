"use client";
import { useState, useMemo } from "react";
import { GeneratedContent, HistoryTable } from "./HistoryTable";
import { HistoryHeader } from "./HistoryHeader";
import { HistoryPagination } from "./HistoryPagination";
import { HistoryDialog } from "./HistoryDialog";


interface Sort {
   key: string;
   order: "asc" | "desc";
}

interface HistoryClientProps {
   initialContent: GeneratedContent[];
}

export function HistoryClient({ initialContent }: HistoryClientProps) {
   const [search, setSearch] = useState("");
   const [sort, setSort] = useState<Sort>({ key: "createdAt", order: "desc" });
   const [page, setPage] = useState(1);
   const [pageSize] = useState(10);
   const [selectedContent, setSelectedContent] = useState<GeneratedContent | null>(null);
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const filteredContent = useMemo(() => {
      return initialContent
         ?.filter((item) => {
            const searchValue = search.toLowerCase();
            return (
               item.templateSlug.toLowerCase().includes(searchValue) ||
               item.formValues.title?.toLowerCase().includes(searchValue) ||
               item.formValues.author?.toLowerCase().includes(searchValue) ||
               item.aiResponse.toLowerCase().includes(searchValue)
            );
         })
         .sort((a: any, b: any) => {
            if (sort.order === "asc") {
               return a[sort.key] > b[sort.key] ? 1 : -1;
            }
            return a[sort.key] < b[sort.key] ? 1 : -1;
         })
         .slice((page - 1) * pageSize, page * pageSize);
   }, [search, sort, page, pageSize, initialContent]);

   return (
      <div className="flex flex-col gap-6 p-6">
         <HistoryHeader
            search={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}
         />

         <HistoryTable
            content={filteredContent}
            onViewDetails={(item) => {
               setSelectedContent(item);
               setIsDialogOpen(true);
            }}
         />

         <HistoryPagination
            page={page}
            pageSize={pageSize}
            totalItems={initialContent.length}
            onPageChange={setPage}
         />

         <HistoryDialog
            content={selectedContent}
            isOpen={isDialogOpen}
            onOpenChange={setIsDialogOpen}
         />
      </div>
   );
}
