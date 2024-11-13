import { Button } from "@/components/ui/button";
import { SendHorizonalIcon } from "lucide-react";

type Props = {
  initialPrompt: string;
  disabled: boolean;
  onSubmit: (e: any) => Promise<void>;
};

export default function PromptForm({
  initialPrompt,
  disabled,
  onSubmit,
}: Props) {
  return (
    <form className="fixed inset-x-0 bottom-0 w-full" onSubmit={onSubmit}>
      <div className="flex max-w-md mx-auto pb-12">
        <input
          type="text"
          name="prompt"
          defaultValue={initialPrompt}
          placeholder="What do you want to change?"
          className="border text-lg shadow-md border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none px-2 mr-2 block w-full flex-grow rounded-md"
          disabled={disabled}
        />
        <Button
          type="submit"
          size="icon"
          className="shadow-md"
          disabled={disabled}
        >
          <SendHorizonalIcon />
        </Button>
      </div>
    </form>
  );
}
