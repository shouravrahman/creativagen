import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: any;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
        <div className="pt-4 lg:px-6 flex  text-foreground lg:flex-row items-center gap-6">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
              <Icon className={cn("h-10 w-10 ", iconColor)} />
        </div>
        <div>
          <h2 className="text-2xl mb-2 font-bold ">{title}</h2>
          <p className="hidden lg:flex text-base  ">{description}</p>
        </div>
      </div>
    </>
  );
};
