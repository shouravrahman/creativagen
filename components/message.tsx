import { cn } from "@/lib/utils";

type Props = {
  isUser?: boolean;
  isSameSender?: boolean;
  children: React.ReactNode;
};

export default function Message({
  isUser = false,
  isSameSender = false,
  children,
}: Props) {
  return (
    <div className={cn(isUser && "text-right")}>
      <div
        className={cn(
          "relative p-3 rounded-lg inline-block",
          isSameSender ? "mt-2" : "mt-8",
           isUser ? "ml-16 bg-blue-600   " : "bg-gray-200 text-black"
        )}
      >
        {children}
      </div>
    </div>
  );
}
