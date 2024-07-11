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
      <div className="px-4 lg:px-6 flex flex-col lg:flex-row items-center gap-10">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("w-20 h-20", iconColor)} />
        </div>
        <div>
          <h2 className="text-2xl mb-2 font-bold">{title}</h2>
          <p className="hidden lg:flex text-base  text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
