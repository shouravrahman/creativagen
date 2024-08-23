
"use client"
import { Dialog, DialogFooter, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { InfinityIcon, InfoIcon, PowerIcon, Zap } from "lucide-react"
import { useState } from "react";
import { useProModal } from "@/hooks/use-pro-modal";
import axios from "axios";
import { toast } from "sonner";

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
                  <h3 className="text-2xl font-bold">Buy Credits</h3>
                  <p className="text-muted-foreground">Unlock advanced features and support for your SaaS business.</p>
               </div>
               <div className="grid w-full gap-4">
                  <div className="flex items-center gap-3">
                     <InfinityIcon className="h-6 w-6 text-primary" />
                     <div>Unlimited projects</div>
                  </div>
                  <div className="flex items-center gap-3">
                     <PowerIcon className="h-6 w-6 text-primary" />
                     <div>Priority support</div>
                  </div>
                  <div className="flex items-center gap-3">
                     <InfoIcon className="h-6 w-6 text-primary" />
                     <div>Advanced analytics</div>
                  </div>
               </div>
               <DialogFooter>
                  <Button
                     disabled={loading}
                     onClick={onSubscribe}
                     size='lg'
                     variant='accent'
                     className='w-full'
                  >
                     Upgrade
                     <Zap className='w-4 h-4 ml-2 fill-white' />
                  </Button>
               </DialogFooter>
            </div>
         </DialogContent>

      </Dialog>
   )
}
