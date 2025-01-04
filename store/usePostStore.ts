import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SocialPost } from "@/types";

interface PostState {
	posts: SocialPost[];
	draftPosts: Record<string, Partial<SocialPost>>;
}

interface PostActions {
	setPosts: (posts: SocialPost[]) => void;
	addPost: (post: SocialPost) => void;
	updatePost: (id: string, post: Partial<SocialPost>) => void;
	deletePost: (id: string) => void;
	setDraftPost: (id: string, post: Partial<SocialPost>) => void;
	removeDraftPost: (id: string) => void;
}

export const usePostStore = create<PostState & PostActions>()(
	persist(
		(set) => ({
			posts: [],
			draftPosts: {},

			setPosts: (posts) => set({ posts }),
			addPost: (post) =>
				set((state) => ({ posts: [...state.posts, post] })),
			updatePost: (id, updatedPost) =>
				set((state) => ({
					posts: state.posts.map((post) =>
						post.id === id ? { ...post, ...updatedPost } : post
					),
				})),
			deletePost: (id) =>
				set((state) => ({
					posts: state.posts.filter((post) => post.id !== id),
				})),
			setDraftPost: (id, post) =>
				set((state) => ({
					draftPosts: { ...state.draftPosts, [id]: post },
				})),
			removeDraftPost: (id) =>
				set((state) => {
					const { [id]: removed, ...rest } = state.draftPosts;
					return { draftPosts: rest };
				}),
		}),
		{
			name: "post-store",
		}
	)
);
