// src/types/contentTypes.ts

export type ContentType = "blogPost" | "socialPost" | "video" | "email";

export interface Post {
	title: string;
	content: string;
}

export interface Content {
	id: string;
	title: string;
	type: ContentType;
	start: Date;
	end: Date;
	posts: Post[];
}

export interface GeneratedContentResponse {
	startDate: Date;
	endDate: Date;
	platform: string;
	frequency: number;
	contentType: ContentType;
	posts: Post[];
}
