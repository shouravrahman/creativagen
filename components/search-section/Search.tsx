"use client"
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const SearchInput = ({ searchText, onSearchInput }: { searchText: string, onSearchInput: (e: any) => void }) => {
   return (
      <div className="mb-4">
         <Label htmlFor="search" className="mr-2 text-sidebar-text">Search:</Label>
         <Input
            id="search"
            type="text"
            value={searchText}
            onChange={(e) => onSearchInput(e.target.value)}
            className="px-4 py-2 rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            placeholder="Search for templates..."
         />
      </div>
   );
};

export default SearchInput;
