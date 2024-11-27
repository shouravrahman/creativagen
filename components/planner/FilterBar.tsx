"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { usePlanner } from "@/hooks/usePlanner";
import { Platform } from "@/types";
import { Calendar, Filter, X } from "lucide-react";

export function FilterBar() {
   const { filter, setFilter } = usePlanner();

   const clearFilters = () => {
      setFilter({ platform: undefined, showToday: false });
   };

   return (
      <div className="flex items-center gap-4 mb-6">
         <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filters:</span>
         </div>

         <Select
            value={filter.platform}
            onValueChange={(value: Platform | undefined) =>
               setFilter({ platform: value as Platform })
            }
         >
            <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="All platforms" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="twitter">Twitter</SelectItem>
               <SelectItem value="instagram">Instagram</SelectItem>
               <SelectItem value="facebook">Facebook</SelectItem>
               <SelectItem value="linkedin">LinkedIn</SelectItem>
            </SelectContent>
         </Select>

         <Button
            variant={filter.showToday ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter({ showToday: !filter.showToday })}
            className="gap-2"
         >
            <Calendar className="h-4 w-4" />
            Today's Posts
         </Button>

         {(filter.platform || filter.showToday) && (
            <Button
               variant="ghost"
               size="sm"
               onClick={clearFilters}
               className="gap-2"
            >
               <X className="h-4 w-4" />
               Clear Filters
            </Button>
         )}
      </div>
   );
}
