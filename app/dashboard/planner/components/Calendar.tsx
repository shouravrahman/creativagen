"use client"
// src/components/Calendar.tsx

import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { Content } from '../contentTypes';


const locales = {
   'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
   format,
   parse,
   startOfWeek,
   getDay,
   locales,
});

interface CalendarProps {
   events: Content[];
   onEventClick: (event: Content) => void;
}

const CalendarComponent: React.FC<CalendarProps> = ({ events, onEventClick }) => {
   const components = {
      event: (props: { event: Content }) => (
         <div onClick={() => onEventClick(props.event)}>
            <div className={`h-full border-l-4 p-2`}>
               <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{props.event.title}</span>
                  <span className="text-xs">{props.event.type}</span>
               </div>
            </div>
         </div>
      ),
   };

   return (
      <div className="flex-1 h-screen calendar-container">
         <Calendar
            localizer={localizer}
            events={events}
            components={components}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
         />
      </div>
   );
};

export default CalendarComponent;
