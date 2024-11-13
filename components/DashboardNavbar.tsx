"use client"
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import IconDropdown from './IconDropdown';

import { useSession } from 'next-auth/react';
import { useTemplate } from '@/context/TemplateContext';
import { Input } from './ui/input';
import { SearchIcon } from 'lucide-react';

export interface IMenuItem {
   label: string;
   href: string;
}

const DashboardNavbar: React.FC = () => {
   const { templates, searchText, selectedCategory, setSearchText, setSelectedCategory } = useTemplate();

   const session = useSession().data

   const menu: IMenuItem[] = [
      { label: 'Profile', href: '/profile' },
   ];

   const handleSearchChange = (value: string) => {
      setSearchText(value);
   };

   return (
      <div className="flex rounded-xl items-center px-4  py-3 bg-sidebar  mx-3 ">
         <div className="flex w-full justify-between items-center">
            <div className="relative w-full max-w-md">
               <div className="absolute inset-0 flex items-center ">
                  <SearchIcon className="text-accent w-8 h-8 z-10" />
               </div>
               <Input
                  type="text"
                  className="block w-full px-12 py-2 text-base bg-sidebar border-none focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-md placeholder:text-foreground transition-all duration-200"
                  placeholder="Search anything..."
                  value={searchText}
                  onChange={(e) => handleSearchChange(e.target.value)}
               />
            </div>
            <div className="flex items-center gap-6">
               <ThemeSwitch />
               <IconDropdown
                  menu={menu}
                  img={
                     session?.user?.image !== null ? session?.user?.image : '/avatar.svg'
                  }
               />
            </div>
         </div>
      </div>
   );
};

export default DashboardNavbar;
