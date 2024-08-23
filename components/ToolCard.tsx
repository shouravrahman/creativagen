import { cn } from "@/lib/utils";
import Link from "next/link";


const ToolCard = ({ tool }) => {
   return (
      <Link className="w-full max-w-sm overflow-hidden bg-sidebar text-card-foreground rounded-lg shadow-lg "
         href={`/dashboard/content/${tool.slug}`}
      >
         <img
            className="object-cover object-center w-full h-56"
            src={tool.imageUrl}
            alt={tool.name}
         />

         <div className={`flex items-center px-6 py-3`}>
            <tool.icon className={cn("w-6 h-6 fill-current", tool.color)} />
            <h1 className="mx-3 mt-2 text-xl font-semibold text-white">{tool.name}</h1>
         </div>

         <div className="px-6 pb-4">
            {/* <h1 className="text-xl font-semibold ">{tool.name}</h1> */}
            <p className="py-2 text-foreground/70">
               {tool.description}
            </p>

            <div className="mt-4">
               <h2 className="text-md font-semibold ">
                  Key Features:
               </h2>
               <ul className="list-disc list-inside mt-2 ">
                  {tool?.features?.map((feature, index) => (
                     <li key={index}>{feature}</li>
                  ))}
               </ul>
            </div>
         </div>
      </Link>
   );
};
export default ToolCard
