import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

export function GenerateButton({ loading, onClick }: GenerateButtonProps) {
  return (
     <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
           className="w-full"
           variant={loading ? 'outline' : 'destructive'}
           size="lg"
           onClick={onClick}
           disabled={loading}
        >
           {loading ? (
              <>
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                 Generating...
              </>
           ) : (
                 <>
                 <Wand2 className="mr-2 h-4 w-4" />
                 Generate Image
                 </>
           )}
        </Button>
     </motion.div>
  );
}
