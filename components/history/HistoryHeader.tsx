"use client";
import { SearchIcon, ListOrderedIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

interface Sort {
   key: string;
   order: "asc" | "desc";
}

interface HistoryHeaderProps {
   search: string;
   onSearchChange: (value: string) => void;
   sort: Sort;
   onSortChange: (sort: Sort) => void;
}

export function HistoryHeader({
   search,
   onSearchChange,
   sort,
   onSortChange,
}: HistoryHeaderProps) {
   const handleSortChange = (key: string) => {
      onSortChange({
         key,
         order: sort.key === key && sort.order === "asc" ? "desc" : "asc",
      });
   };

   return (
      <div className="flex flex-col gap-4">
         <h1 className="text-3xl font-bold">Content History</h1>
         <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-96">
               <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
               <Input
                  type="search"
                  placeholder="Search by title, type, or content..."
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10"
               />
            </div>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                     <ListOrderedIcon className="w-4 h-4 mr-2" />
                     Sort by: {sort.key} ({sort.order})
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuRadioGroup value={sort.key} onValueChange={handleSortChange}>
                     <DropdownMenuRadioItem value="createdAt">Date Created</DropdownMenuRadioItem>
                     <DropdownMenuRadioItem value="templateSlug">Content Type</DropdownMenuRadioItem>
                     <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   );
}
