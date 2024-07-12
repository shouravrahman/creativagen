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
        <Card
          onClick={() => router.push(`/dashboard/content/${tool.slug}`)}
          key={tool.href}
          className={`w-full bg-card bg-[${tool.bgColor}] text-primary hover:backdrop-brightness-200`}
        >
          <tool.icon className={cn("h-16 w-16 m-4 mr-3", tool.color)} />
          <CardHeader>
            <CardTitle className="mb-6 leading-2">{tool.name}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-between">
            <Button variant="secondary">
              <Link href={tool.href}>RUN</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default TemplateList;
