"use client"

import { Dialog, DialogFooter, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
   Zap,
   Sparkles,
   Rocket,
   Clock,
   MessageSquareMore
} from "lucide-react"
import { useState } from "react"
import { useProModal } from "@/hooks/useProModal"
import axios from "axios"
import { toast } from "sonner"

const features = [
   {
      icon: Sparkles,
      title: "Enhanced Generation",
      description: "Access to advanced AI models and longer outputs"
   },
   {
      icon: Rocket,
      title: "Unlimited Access",
      description: "Generate unlimited content across all templates"
   },
   {
      icon: Clock,
      title: "Priority Processing",
      description: "Faster generation times with no queues"
   },
   {
      icon: MessageSquareMore,
      title: "Premium Support",
      description: "24/7 priority customer support"
   }
]

export default function SubscriptionModal() {
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
         <DialogContent className="sm:max-w-[500px]">
            <div className="flex flex-col items-center gap-6 py-8">
               <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">Upgrade to <span className="text-accent">Pro</span> </h3>
                  <p className="text-muted-foreground">
                     Take your content generation to the next level
                  </p>
               </div>

               <div className="grid w-full gap-4">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                     >
                        <div className="p-2 rounded-full bg-primary/10">
                           <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex flex-col">
                           <div className="font-medium">{feature.title}</div>
                           <div className="text-sm text-muted-foreground">
                              {feature.description}
                           </div>
                        </div>
               </div>
                  ))}
               </div>

               <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-2xl font-bold text-accent">only $19</span>
                  <span>/ month</span>
               </div>

               <DialogFooter className="w-full">
                  <Button
                     disabled={loading}
                     onClick={onSubscribe}
                     size="lg"
                     variant="default"
                     className="w-full"
                  >
                     {loading ? "Loading..." : "Upgrade Now"}
                     <Zap className="w-4 h-4 ml-2 fill-white" />
                  </Button>
               </DialogFooter>
            </div>
         </DialogContent>
      </Dialog>
   )
}
