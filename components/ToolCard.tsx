import React from "react";
import Link from "next/link";
import { Star, Sparkles, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ITool {
   name: string;
   color: string;
   description: string;
   features: string[];
   slug: string;
   icon: IconType | LucideIcon;
   isFavorite?: boolean;
}

const ToolCard = ({
   tool,
   onToggleFavorite,
}: {
      tool: ITool;
      onToggleFavorite: () => void;
}) => {
   return (
      <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50">
         <Link href={`/dashboard/content/${tool.slug}`} className="block">
            <CardContent className="p-6">
               {/* Top Section with Icon and Favorite Button */}
               <div className="flex items-start justify-between mb-6">
                  <div className="relative flex items-center justify-center w-14 h-14">
                     <div
                        className={cn(
                           "absolute inset-0 rounded-xl opacity-20",
                           tool.color
                        )}
                     />
                     {typeof tool.icon === "function" ? (
                        <tool.icon
                           className={cn("w-8 h-8 relative z-10", tool.color)}
                        />
                     ) : (
                        React.createElement(tool.icon, {
                           className: cn("w-8 h-8 relative z-10", tool.color),
                        })
                     )}
                  </div>

                  <button
                     className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-200"
                     onClick={(e) => {
                        e.preventDefault();
                        onToggleFavorite();
                     }}
                  >
                     <Star
                        className={cn(
                           "w-5 h-5 transition-colors duration-200",
                           tool.isFavorite
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-foreground/50 hover:text-yellow-500"
                        )}
                     />
                  </button>
               </div>

               {/* Content Section */}
               <div className="space-y-4">
                  <div>
                     <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        {tool.name}
                        <Sparkles className="w-4 h-4 text-primary/70" />
                     </h3>
                     <p className="text-sm text-foreground/70 line-clamp-2">
                        {tool.description}
                     </p>
                  </div>

                  {/* Features Section */}
                  <div className="flex flex-wrap gap-2">
                     {tool.features.slice(0, 3).map((feature, index) => (
                        <Badge
                           key={index}
                           variant="destructive"
                           className="bg-accent/60 text-accent-foreground hover:bg-accent/30 transition-colors duration-200"
                        >
                           {feature}
                        </Badge>
                     ))}
                     {tool.features.length > 3 && (
                        <Badge
                           variant="secondary"
                           className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors duration-200"
                        >
                           +{tool.features.length - 3} more
                        </Badge>
                     )}
                  </div>
               </div>

               {/* Bottom Action Indicator */}
               <div className="mt-6 flex items-center justify-end text-sm text-foreground/50">
                  <span className="flex items-center gap-1 group-hover:text-primary transition-colors duration-200">
                     Open tool
                     <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
               </div>
            </CardContent>
         </Link>
      </Card>
   );
};

export default ToolCard;
