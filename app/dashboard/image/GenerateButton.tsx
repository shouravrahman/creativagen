import React from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

export function GenerateButton({ loading, onClick }: GenerateButtonProps) {
  return (
     <Button
      onClick={onClick}
      disabled={loading}
        size={'lg'}
        variant={'destructive'}
        className='w-full'
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
     </Button>
  );
}
