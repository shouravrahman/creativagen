"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { TEMPLATES } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ToolCard from "./ToolCard";
const toolInfo = {
   toolName: 'Blog Writer',
   toolDescription: 'Generate high-quality blogs with AI-powered content suggestions and formatting.',
   features: ['AI-Powered Content', 'SEO Optimization', 'Real-time Suggestions'],
   imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
   toolIcon: (
      <path fillRule="evenodd" clipRule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" />
   ),
   backgroundColor: 'bg-gray-900',
};
const TemplateList = ({ searchInput }) => {
  const router = useRouter();

  console.log(searchInput);
  const [list, setList] = useState(TEMPLATES);
  useEffect(() => {
    if (searchInput) {
      const filteredData = TEMPLATES.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setList(filteredData);
    } else {
      setList(TEMPLATES);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {list.map((tool) => (
         //   <Card
         //     onClick={() => router.push(`/dashboard/content/${tool.slug}`)}
         //     key={tool.href}
         //       className={`w-full   text-card-foreground  hover:backdrop-brightness-200`}
         //   >
         //     <tool.icon className={cn("h-16 w-16 m-4 mr-3", tool.color)} />
         //     <CardHeader>
         //       <CardTitle className="mb-6 leading-2">{tool.name}</CardTitle>
         //       <CardDescription>{tool.description}</CardDescription>
         //     </CardHeader>

         //     <CardFooter className="flex justify-between">
         //       <Button variant="accent">
         //         <Link href={tool.href}>RUN</Link>
         //       </Button>
         //     </CardFooter>
         //   </Card>


         <ToolCard tool={tool} />
      ))}
    </div>
  );
};
export default TemplateList;
