"use client";

import { SocialPost } from '@/types';
import { useEffect, useState } from 'react';


export function usePosts() {
   const [posts, setPosts] = useState<SocialPost[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      fetchPosts();
   }, []);

   const fetchPosts = async () => {
      try {
         const response = await fetch('/api/posts');
         if (!response.ok) throw new Error('Failed to fetch posts');
         const data = await response.json();
         setPosts(data);
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
         setLoading(false);
      }
   };

   const createPost = async (post: Omit<SocialPost, 'id'>) => {
      try {
         const response = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
         });
         if (!response.ok) throw new Error('Failed to create post');
         const newPost = await response.json();
         setPosts([...posts, newPost]);
         return newPost;
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Failed to create post');
         throw err;
      }
   };

   const updatePost = async (post: SocialPost) => {
      try {
         const response = await fetch(`/api/posts/${post.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
         });
         if (!response.ok) throw new Error('Failed to update post');
         const updatedPost = await response.json();
         setPosts(posts.map(p => p.id === post.id ? updatedPost : p));
         return updatedPost;
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Failed to update post');
         throw err;
      }
   };

   const deletePost = async (id: string) => {
      try {
         const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
         });
         if (!response.ok) throw new Error('Failed to delete post');
         setPosts(posts.filter(p => p.id !== id));
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Failed to delete post');
         throw err;
      }
   };

   return {
      posts,
      loading,
      error,
      createPost,
      updatePost,
      deletePost,
      refetch: fetchPosts,
   };
}
