"use client"
import React, { useState, useMemo, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
   Table,
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   TableCell,
} from "@/components/ui/table";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogDescription,
} from "@/components/ui/dialog";
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";
import {
   ListOrderedIcon,
   SearchIcon,
   CalendarIcon,
   FileTextIcon,
   TagIcon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GeneratedContent {
   id: string;
   formValues: any;
   aiResponse: string;
   templateSlug: string;
   createdAt: string;
}

const History = () => {
   const { data: session } = useSession();
   const [search, setSearch] = useState("");
   const [sort, setSort] = useState({ key: "createdAt", order: "desc" });
   const [page, setPage] = useState(1);
   const [pageSize] = useState(10);
   const [content, setContent] = useState<GeneratedContent[]>([]);
   const [selectedContent, setSelectedContent] = useState<GeneratedContent | null>(null);
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchContent = async () => {
         if (session?.user) {
            setIsLoading(true);
            try {
               const response = await fetch("/api/generate/history", {
                  cache: "force-cache",
               });
               if (response.ok) {
                  const data = await response.json();
                  setContent(data);
               }
            } catch (error) {
               console.error("Failed to fetch content:", error);
            } finally {
               setIsLoading(false);
            }
         }
      };
      fetchContent();
   }, []);

   const filteredContent = useMemo(() => {
      return content
         .filter((item) => {
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
   }, [search, sort, page, pageSize, content]);

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setPage(1);
   };

   const handleSort = (key: string) => {
      setSort((prev) => ({
         key,
         order: prev.key === key && prev.order === "asc" ? "desc" : "asc",
      }));
   };

   const handleViewDetails = (item: GeneratedContent) => {
      setSelectedContent(item);
      setIsDialogOpen(true);
   };

   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'short',
         day: 'numeric',
         hour: '2-digit',
         minute: '2-digit'
      });
   };

   return (
      <div className="flex flex-col gap-6 p-6">
         <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Content History</h1>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
               <div className="relative w-full sm:w-96">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                     type="search"
                     placeholder="Search by title, type, or content..."
                     value={search}
                     onChange={handleSearch}
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
                     <DropdownMenuRadioGroup value={sort.key} onValueChange={handleSort}>
                        <DropdownMenuRadioItem value="createdAt">Date Created</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="templateSlug">Content Type</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                     </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>

         <Card>
            <CardContent className="p-0">
               <div className="overflow-x-auto">
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Type</TableHead>
                           <TableHead>Preview</TableHead>
                           <TableHead>Created</TableHead>
                           <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {isLoading ? (
                           <TableRow>
                              <TableCell colSpan={4} className="text-center py-8">
                                 Loading content...
                              </TableCell>
                           </TableRow>
                        ) : filteredContent.length === 0 ? (
                           <TableRow>
                              <TableCell colSpan={4} className="text-center py-8">
                                 No content found
                              </TableCell>
                           </TableRow>
                        ) : (
                           filteredContent.map((item) => (
                              <TableRow key={item.id} className="group">
                                 <TableCell>
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                       <TagIcon className="w-3 h-3" />
                                       {item.templateSlug}
                                    </Badge>
                                 </TableCell>
                                 <TableCell className="max-w-md">
                                    <p className="truncate">{item.aiResponse.slice(0, 100)}...</p>
                                 </TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                       <CalendarIcon className="w-4 h-4" />
                                       {formatDate(item.createdAt)}
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-right">
                                    <Button
                                       variant="default"
                                       size="sm"
                                       onClick={() => handleViewDetails(item)}
                                       className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                       <FileTextIcon className="w-4 h-4 mr-2" />
                                       View Details
                                    </Button>
                                 </TableCell>
                              </TableRow>
                           ))
                        )}
                     </TableBody>
                  </Table>
               </div>
            </CardContent>
         </Card>

         <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
            <p className="text-sm w-full text-muted-foreground">
               Showing {(page - 1) * pageSize + 1} to{" "}
               {Math.min(page * pageSize, content.length)} of {content.length} results
            </p>
            <Pagination className="justify-end">
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                     // isActive={page > 0}
                     />
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationNext
                        onClick={() => setPage((p) => Math.min(Math.ceil(content.length / pageSize), p + 1))}
                        disabled={page >= Math.ceil(content.length / pageSize)}
                     // isActive={page <= Math.ceil(content.length / pageSize)}
                     />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </div>

         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
               {selectedContent && (
                  <>
                     <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                           <Badge variant="secondary" className="text-sm">
                              {selectedContent.templateSlug}
                           </Badge>
                           <span className="text-muted-foreground text-sm">
                              Created on {formatDate(selectedContent.createdAt)}
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
                              {selectedContent.aiResponse}
                           </div>
                        </div>
                        {Object.entries(selectedContent.formValues).length > 0 && (
                           <div>
                              <h3 className="text-lg font-semibold mb-2">Input Parameters</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 {Object.entries(selectedContent.formValues).map(([key, value]) => (
                                    <div key={key} className="space-y-1">
                                       <p className="text-sm font-medium capitalize">{key}:</p>
                                       <p className="text-sm text-muted-foreground">{String(value)}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>
                  </>
               )}
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default History;
