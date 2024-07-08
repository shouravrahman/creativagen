"use client"


import {useState} from "react"
import SearchSection from "@/components/search-section/search-section";
import TemplateList from "@/components/template-list-section"
export default function Dashboard() {
   const [searchInput,setSearchInput] = useState<string>()

  return (
    <div>
      <div className="mb-8 space-y-4 ">
        <SearchSection onSearchInput={(value) => setSearchInput(value)} />
      </div>
      <div className="px-4 md:px-16   ">
        <TemplateList searchInput={searchInput}/>
      </div>
    </div>
  );
}
