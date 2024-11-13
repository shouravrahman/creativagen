
import Message from "@/components/Message";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, RefreshCwIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Messages as msg } from "./Banner";

type Props = {
   messages: msg;
   isGenerating: boolean;
};

export default function Messages({ messages, isGenerating }: Props) {
   const messagesEndRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (messages.length > 1) {
         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
   }, [messages.length]);

   return (
      <section className="w-full">
         {messages.map((message, index) => {
            if (message.image) {
               return (
                  <Message key={`image-${index}`}>
                     <Image
                        alt={message.prompt ?? "Source image"}
                        width="512"
                        height="512"
                        priority={true}
                        className="object-fit max-h-[450px] h-full rounded-lg"
                        src={message.image}
                     />
                     <div className="space-x-2 text-right absolute bottom-2 right-2 ">
                        {message.image.startsWith("https:") && (
                           <a
                              href={message.image}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Button size="icon" className="rounded-full shadow-md">
                                 <ExternalLinkIcon className="icon" />
                              </Button>
                           </a>
                        )}
                     </div>
                  </Message>
               );
            }

            if (message.prompt) {
               return (
                  <Message key={`prompt-${index}`} isUser>
                     {message.prompt}
                  </Message>
               );
            }
         })}

         {isGenerating && (
            <Message>
               <RefreshCwIcon className="animate-spin" />
            </Message>
         )}

         <div ref={messagesEndRef} />
      </section>
   );
}
