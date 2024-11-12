import React from 'react';
import { Search, Sparkles } from "lucide-react";

const SearchSection = ({ onSearchInput }) => {
   return (
      <div className="relative px-10 pb-12 flex flex-col justify-center items-center">
         {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-xl" /> */}

         <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
               Browse Templates
            </h2>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
         </div>

         <div className="w-full max-w-3xl mx-auto relative">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" /> */}

            <div className="relative group">
               {/* <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-5 group-hover:opacity-10 transition duration-200" /> */}

               <div className="relative bg-card rounded-xl shadow-lg">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                     <Search className="h-6 w-6 text-primary transition-transform duration-200 group-hover:scale-110" />
                  </div>

                  <input
                     onChange={(e) => onSearchInput(e.target.value)}
                     type="search"
                     className="block w-full px-12 py-4 text-base bg-transparent border-none focus:ring-2 focus:ring-primary/20 rounded-xl placeholder:text-foreground/50 transition-all duration-200"
                     placeholder="Try searching:  Blog Post, Social Media, Email Template..."
                     required
                  />
               </div>
            </div>

            {/* <div className="absolute -bottom-1 translate-y-full  px-4 w-full text-xs text-foreground/60">
               Try searching: "Blog Post", "Social Media", "Email Template"
            </div> */}
         </div>
      </div>
   );
};

export default SearchSection;
