"use client"

// src/components/AIGenerateModal.tsx

import React, { useState } from 'react';
import { Content, GeneratedContentResponse } from '../contentTypes';


import { Textarea } from '@/components/ui/textarea';

import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';


interface AIGenerateModalProps {
   isOpen: boolean;
   onClose: () => void;
   onGenerate: (content: Content[]) => void;
}

const AIGenerateModal: React.FC<AIGenerateModalProps> = ({ isOpen, onClose, onGenerate }) => {
   const [prompt, setPrompt] = useState('');

   const handleGenerate = () => {
      // For now, we will simulate the AI content generation
      const generatedContent: GeneratedContentResponse = {
         startDate: new Date(),
         endDate: new Date(),
         platform: 'LinkedIn',
         frequency: 5,
         contentType: 'socialPost',
         posts: [{ title: 'Sample Post', content: 'This is a generated post.' }],
      };

      onGenerate([
         {
            id: '1',
            title: 'Generated Content Block',
            type: generatedContent.contentType,
            start: generatedContent.startDate,
            end: generatedContent.endDate,
            posts: generatedContent.posts,
         },
      ]);
      onClose();
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="max-w-2xl">
            <DialogHeader>
               <h2>Generate Content with AI</h2>
            </DialogHeader>
            <div className="py-4">
               <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the content you want to generate..." />
            </div>
            <DialogFooter>
               <Button variant="outline" onClick={onClose}>Cancel</Button>
               <Button onClick={handleGenerate}>Generate Content</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default AIGenerateModal;
