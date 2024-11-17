"use client";
import { CalendarIcon, FileTextIcon, TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
   Table,
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   TableCell,
} from "@/components/ui/table";
import { formatDate } from "@/utils/formatDateHistory";


export interface GeneratedContent {
   id: string;
   formValues: any;
   aiResponse: string;
   templateSlug: string;
   createdAt: string;
}
interface HistoryTableProps {
   content: GeneratedContent[];
   onViewDetails: (content: GeneratedContent) => void;
}

export function HistoryTable({ content, onViewDetails }: HistoryTableProps) {
   return (
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
                     {content.length === 0 ? (
                        <TableRow>
                           <TableCell colSpan={4} className="text-center py-8">
                              No content found
                           </TableCell>
                        </TableRow>
                     ) : (
                        content.map((item) => (
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
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => onViewDetails(item)}
                                    className=""
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
   );
}
