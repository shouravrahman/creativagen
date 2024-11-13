"use client";

import axios from "axios";
import { useState } from "react";
import { Zap, CheckCircle2, Sparkles, Infinity, Gauge, Trophy } from "lucide-react";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogDescription,
   DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/useProModal";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const features = [
   {
      icon: Sparkles,
      title: "Advanced AI Models",
      description: "Access to more powerful AI models for higher quality outputs"
   },
   {
      icon: Infinity,
      title: "Unlimited Generations",
      description: "Generate as much content as you need without restrictions"
   },
   {
      icon: Gauge,
      title: "Priority Processing",
      description: "Faster generation times with priority queue access"
   },
   {
      icon: Trophy,
      title: "Premium Features",
      description: "Access to exclusive templates and advanced customization options"
   }
];

export const ProModal = () => {
   const proModal = useProModal();
   const [loading, setLoading] = useState(false);

   const onSubscribe = async () => {
      try {
         setLoading(true);
         const response = await axios.get("/api/stripe");
         window.location.href = response.data.url;
      } catch (error) {
         toast.error("Something went wrong");
      } finally {
         setLoading(false);
      }
   };

   return (
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                  <div className="flex items-center gap-x-2 font-bold text-2xl">
                     Unlock Full Power
                     <Badge variant="premium" className="uppercase text-sm py-1">
                        pro
                     </Badge>
                  </div>
               </DialogTitle>
               <DialogDescription className="text-center pt-2">
                  <p className="text-zinc-900 font-medium mb-4">
                     Take your content generation to the next level
                  </p>
               </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
               {features.map((feature, index) => (
                  <Card key={index} className="p-4 border-black/5">
                     <div className="flex items-start gap-x-4">
                        <div className="p-2 w-fit rounded-full bg-primary/10">
                           <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-base">{feature.title}</h3>
                           <p className="text-sm text-muted-foreground">
                              {feature.description}
                           </p>
                        </div>
                     </div>
                  </Card>
               ))}
            </div>

            <div className="mt-6 space-y-4">
               <div className="flex items-center justify-center gap-x-2">
                  <span className="font-medium text-xl">$19</span>
                  <span className="text-zinc-500">/month</span>
               </div>

               <p className="text-center text-sm text-muted-foreground">
                  Cancel anytime. No questions asked.
               </p>
            </div>

            <DialogFooter>
               <Button
                  disabled={loading}
                  onClick={onSubscribe}
                  size="lg"
                  variant="destructive"
                  className="w-full"
               >
                  {loading ? "Loading..." : "Upgrade Now"}
                  <Zap className="w-4 h-4 ml-2 fill-white" />
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};
