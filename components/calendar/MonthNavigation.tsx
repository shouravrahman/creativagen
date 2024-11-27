"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface MonthNavigationProps {
   currentDate: Date;
   onMonthChange: (date: Date) => void;
}

export function MonthNavigation({ currentDate, onMonthChange }: MonthNavigationProps) {
   const handlePreviousMonth = () => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() - 1);
      onMonthChange(newDate);
   };

   const handleNextMonth = () => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() + 1);
      onMonthChange(newDate);
   };

   return (
      <div className="flex items-center space-x-4">
         <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
         </Button>
         <h2 className="text-xl font-semibold">
            {format(currentDate, 'MMMM yyyy')}
         </h2>
         <Button variant="outline" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
         </Button>
      </div>
   );
}
