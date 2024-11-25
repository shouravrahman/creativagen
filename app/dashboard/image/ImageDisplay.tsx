"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ImageDisplayProps {
   image: string | null;
   loading: boolean;
   error?: string | null;
}

export function ImageDisplay({ image, loading, error }: ImageDisplayProps) {
   return (
     <div className="relative aspect-square w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
           {loading ? (
              <motion.div
                 key="loader"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg"
              >
                 <Loader2 className="w-8 h-8 animate-spin" />
              </motion.div>
           ) : error ? (
              <motion.div
                 key="error"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 flex items-center justify-center"
              >
                 <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                 </Alert>
              </motion.div>
           ) : image ? (
              <motion.img
                 key="image"
                 src={image}
                       alt="Generated image"
                       className="w-full h-full object-cover rounded-lg"
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.8 }}
                       transition={{ duration: 0.3 }}
                    />
                 ) : (
                    <motion.div
                       key="placeholder"
                       className="w-full h-full bg-muted rounded-lg flex items-center justify-center"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                    >
                 <p className="text-muted-foreground">
                    Your generated image will appear here
                 </p>
              </motion.div>
           )}
        </AnimatePresence>
     </div>
  );
}
