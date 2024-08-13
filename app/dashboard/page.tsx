"use client";

import { useState } from "react";

import TemplateList from "@/components/template-list-section";
import SearchSection from "@/components/search-section/Search";
export default function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div className="">
      <div className="mb-8 px-4">
        <SearchSection onSearchInput={(value) => setSearchInput(value)} />
      </div>
      <div className="px-4 ">
        <TemplateList searchInput={searchInput} />
      </div>
    </div>
  );
}
