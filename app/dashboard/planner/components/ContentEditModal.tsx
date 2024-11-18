"use client"
// src/components/ContentEditModal.tsx

import React, { useState } from 'react';

import { Content } from '../contentTypes';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


interface ContentEditModalProps {
   isOpen: boolean;
   onClose: () => void;
   content: Content;
   onSave: (content: Content) => void;
}

const ContentEditModal: React.FC<ContentEditModalProps> = ({ isOpen, onClose, content, onSave }) => {
   const [editedContent, setEditedContent] = useState(content);
   console.log(content)
   const handleSave = () => {
      onSave(editedContent);
      onClose();
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>

         <DialogContent className="max-w-2xl">
            <DialogHeader>
               <DialogTitle>Edit Content</DialogTitle>
               {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
               </DialogDescription> */}
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
               <div className=" w-full">
                  <Label htmlFor="title" className="text-right">Title</Label>
                  <Input
                     id="title"
                     value={editedContent?.title || content?.title}
                     onChange={(e) => setEditedContent(prev => ({ ...prev, title: e.target.value }))} />
               </div>
               <div className="w-full">
                  <Label htmlFor="description" className="text-right">Description</Label>
                  <Textarea
                     id="description"
                     value={editedContent?.posts[0]?.content || content?.posts[0]?.content}
                     onChange={(e) => {
                        const newPosts = [...editedContent.posts];
                        newPosts[0] = { ...newPosts[0], content: e.target.value };
                        setEditedContent(prev => ({ ...prev, posts: newPosts }));
                     }} />
               </div>
            </div>
            <DialogFooter>
               <Button variant="outline" onClick={onClose}>Cancel</Button>
               <Button onClick={onClose}>Save changes</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default ContentEditModal;
