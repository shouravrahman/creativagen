
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"

export default function Component() {
   const [search, setSearch] = useState("")
   const [sort, setSort] = useState({ key: "createdAt", order: "desc" })
   const [page, setPage] = useState(1)
   const [pageSize, setPageSize] = useState(10)
   const [content, setContent] = useState([
      {
         id: 1,
         type: "Blog Post",
         title: "The Future of AI-Generated Content",
         createdAt: "2023-04-15",
         author: "John Doe",
         wordCount: 1200,
         status: "Published",
      },
      {
         id: 2,
         type: "Social Media Post",
         title: "Top 5 AI Trends to Watch in 2023",
         createdAt: "2023-05-01",
         author: "Jane Smith",
         characterCount: 280,
         status: "Scheduled",
      },
      {
         id: 3,
         type: "Product Description",
         title: "AI-Powered Chatbot for Customer Support",
         createdAt: "2023-06-10",
         author: "Michael Johnson",
         wordCount: 500,
         status: "Draft",
      },
      {
         id: 4,
         type: "Email Newsletter",
         title: "AI Advancements and Their Impact on Businesses",
         createdAt: "2023-07-01",
         author: "Sarah Lee",
         wordCount: 800,
         status: "Published",
      },
      {
         id: 5,
         type: "Blog Post",
         title: "Ethical Considerations in AI Content Generation",
         createdAt: "2023-08-20",
         author: "David Kim",
         wordCount: 1500,
         status: "Draft",
      },
      {
         id: 6,
         type: "Social Media Post",
         title: "AI-Generated Art: The New Frontier of Creativity",
         createdAt: "2023-09-01",
         author: "Emily Chen",
         characterCount: 280,
         status: "Scheduled",
      },
      {
         id: 7,
         type: "Product Description",
         title: "AI-Powered Copywriting Assistant",
         createdAt: "2023-10-15",
         author: "Robert Gonzalez",
         wordCount: 600,
         status: "Published",
      },
      {
         id: 8,
         type: "Email Newsletter",
         title: "The Rise of AI-Generated Content in Marketing",
         createdAt: "2023-11-01",
         author: "Jessica Patel",
         wordCount: 900,
         status: "Draft",
      },
      {
         id: 9,
         type: "Blog Post",
         title: "Unlocking the Potential of AI-Powered Creativity",
         createdAt: "2023-12-01",
         author: "Daniel Ramirez",
         wordCount: 1800,
         status: "Published",
      },
      {
         id: 10,
         type: "Social Media Post",
         title: "AI-Generated Content: Opportunities and Challenges",
         createdAt: "2024-01-01",
         author: "Olivia Hernandez",
         characterCount: 280,
         status: "Scheduled",
      },
   ])
   const filteredContent = useMemo(() => {
      return content
         .filter((item) => {
            const searchValue = search.toLowerCase()
            return (
               item.title.toLowerCase().includes(searchValue) ||
               item.author.toLowerCase().includes(searchValue) ||
               item.type.toLowerCase().includes(searchValue) ||
               item.status.toLowerCase().includes(searchValue)
            )
         })
         .sort((a, b) => {
            if (sort.order === "asc") {
               return a[sort.key] > b[sort.key] ? 1 : -1
            } else {
               return a[sort.key] < b[sort.key] ? 1 : -1
            }
         })
         .slice((page - 1) * pageSize, page * pageSize)
   }, [search, sort, page, pageSize, content])
   const handleSearch = (e) => setSearch(e.target.value)
   const handleSort = (key) => {
      if (sort.key === key) {
         setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
      } else {
         setSort({ key, order: "asc" })
      }
   }
   const handlePageChange = (page) => setPage(page)
   const handlePageSizeChange = (size) => setPageSize(size)
   return (
      <div className="flex flex-col gap-4 mt-10">
         <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">AI Content History</h1>
            <div className="flex items-center gap-2">
               <Input
                  type="search"
                  placeholder="Search content..."
                  value={search}
                  onChange={handleSearch}
                  className=" px-4 py-2 rounded-lg"
               />
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="outline" className="px-4 py-2 rounded-lg">
                        <ListOrderedIcon className="w-4 h-4 mr-2" />
                        Sort by: {sort.key}
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-background">
                     <DropdownMenuRadioGroup value={sort.key} onValueChange={handleSort}>
                        <DropdownMenuRadioItem value="createdAt">Date Created</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="author">Author</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="type">Content Type</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                     </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>
         <div className="overflow-x-auto border border-border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>Content Type</TableHead>
                     <TableHead>Title</TableHead>
                     <TableHead>Created At</TableHead>
                     <TableHead>Author</TableHead>
                     <TableHead>Details</TableHead>
                     <TableHead>Status</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {filteredContent.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.createdAt}</TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>
                           {item.type === "Blog Post" && (
                              <div>
                                 <div>Word Count: {item.wordCount}</div>
                              </div>
                           )}
                           {item.type === "Social Media Post" && (
                              <div>
                                 <div>Character Count: {item.characterCount}</div>
                              </div>
                           )}
                           {item.type === "Product Description" && (
                              <div>
                                 <div>Word Count: {item.wordCount}</div>
                              </div>
                           )}
                           {item.type === "Email Newsletter" && (
                              <div>
                                 <div>Word Count: {item.wordCount}</div>
                              </div>
                           )}
                        </TableCell>
                        <TableCell>
                           <Badge
                              variant={item.status === "Published" ? "success" : item.status === "Scheduled" ? "info" : "warning"}
                           >
                              {item.status}
                           </Badge>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
         <div className="flex items-center justify-between">
            <div className="text-sm text-foreground w-full">
               Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, filteredContent.length)} of{" "}
               {filteredContent.length} results
            </div>
            <Pagination
               currentPage={page}
               totalPages={Math.ceil(filteredContent.length / pageSize)}
               onPageChange={handlePageChange}
               onPageSizeChange={handlePageSizeChange}
            />
         </div>
      </div>
   )
}

function ListOrderedIcon(props) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <line x1="10" x2="21" y1="6" y2="6" />
         <line x1="10" x2="21" y1="12" y2="12" />
         <line x1="10" x2="21" y1="18" y2="18" />
         <path d="M4 6h1v4" />
         <path d="M4 10h2" />
         <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
      </svg>
   )
}
