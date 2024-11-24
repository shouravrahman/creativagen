import React from 'react';
import { Wand2, Loader2 } from 'lucide-react';

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

export function GenerateButton({ loading, onClick }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-blue-700 transition-colors disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <Wand2 className="w-5 h-5" />
          <span>Generate Image</span>
        </>
      )}
    </button>
  );
}