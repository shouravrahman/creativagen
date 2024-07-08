import { useCallback, useState } from "react";

// Hook definition
export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy text
  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      // Reset the copied status after a delay
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
      setIsCopied(false);
    }
  }, []);

  return [isCopied, copy] as const;
}
