import { Skeleton } from "@/components/ui/skeleton";

export function PlannerLoading() {
   return (
      <div className="space-y-4">
         <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-10 w-32" />
         </div>
         <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 35 }).map((_, i) => (
               <Skeleton key={i} className="h-32 w-full" />
            ))}
         </div>
      </div>
   );
}
