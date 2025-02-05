import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Template } from "@/types";
import { IconType } from "react-icons/lib";
import { getIconComponent } from "./IconMap";

const TemplateCard = ({
   template,
}: {
      template: Template;
   }) => {
   const IconComponent: IconType | undefined = getIconComponent(template.icon!);

   return (
     <Card className="group relative overflow-hidden transition-all duration-200 hover:bg-accent/5">
        <Link href={`/dashboard/content/${template.slug}`} className="block">
           <div className="p-4 sm:p-6">
              {/* Icon with subtle background */}
              <div className="mb-4">
                 <div className="inline-flex">
                    <div className="relative">
                       <div
                          className={cn(
                     "absolute inset-0 rounded-lg opacity-10",
                     template.color
                  )}
                       />
                       {IconComponent ? (
                          <IconComponent
                             style={{ color: template.color }}
                             className="relative z-10 h-6 w-6"
                          />
                       ) : (
                          <div
                             style={{ backgroundColor: template.color }}
                             className="h-6 w-6 rounded-lg opacity-20"
                          />
                       )}
                    </div>
                 </div>
              </div>

              {/* Title and Description */}
              <div className="space-y-2">
                 <h3 className="font-medium text-foreground">
                    {template.name}
                 </h3>
                 <p className="text-sm text-muted-foreground line-clamp-2">
                    {template.description}
                 </p>
              </div>

              {/* Features as minimal badges */}
              <div className="mt-4 flex flex-wrap gap-1">
                 {template.features.slice(0, 2).map((feature, index) => (
                    <Badge
                       key={index}
                  variant="secondary"
                  className="bg-accent/10 text-xs font-normal"
               >
                  {feature}
               </Badge>
            ))}
                 {template.features.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                       +{template.features.length - 2} more
                    </span>
                 )}
              </div>

              {/* Subtle action indicator */}
              <div className="mt-4 flex items-center justify-end">
                 <div className="flex items-center text-xs text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View template
                    <ChevronRight className="ml-1 h-3 w-3" />
                 </div>
              </div>
           </div>
        </Link>
     </Card>
  );
};

export default TemplateCard;
