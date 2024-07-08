import { Search } from "lucide-react";
import {debounce} from "@/lib/utils"
const SearchSection = ({onSearchInput}) => {

  return (
    <div className="px-10 py-6 bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">BROWSE All TEMPLATES</h2>
      <p className="text-zinc-300 hidden lg:block">Find the right tool for you</p>
      <div className='w-full flex items-center justify-center'>
       
          
<div className=" mx-auto my-4 w-full md:w-[50%] ">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={(e) => onSearchInput(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    </div>
</div>

     
      </div>
    </div>
  );
};

export default SearchSection;
