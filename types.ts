// Types for Enums
enum UserRole {
	Admin = "Admin",
	User = "User",
}
export enum ModelTypeEnum {
	GEMINI = "GEMINI",
	GROQ = "GROQ",
	OPENAI = "OPENAI",
}

export interface GenerationSettings {
	model: ModelTypeEnum;
	temperature: number;
	maxTokens: number;
}
// Account Interface (related to User)
interface Account {
	id: string;
	userId: string;
	type: string;
	provider: string;
	providerAccountId: string;
	refreshToken?: string;
	accessToken?: string;
	expiresAt?: number;
	tokenType?: string;
	scope?: string;
	idToken?: string;
	sessionState?: string;
}

// GeneratedContent Interface (related to User and Template)
interface GeneratedContent {
	id: string;
	formValues: Record<string, unknown>; // JSON object for form values
	aiResponse: string;
	templateId: string;
	aiModel: ModelTypeEnum;
	createdBy: string;
	createdAt: Date;
	temperature: number;
	maxTokens: number;
}

// FavoritedTemplate Interface (relation between User and Template)
interface FavoritedTemplate {
	id: string;
	userId: string;
	templateId: string;
	createdAt: Date;
}

// ContentPlan Interface (related to User)
interface ContentPlan {
	id: string;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
	platforms: ContentPlanPlatform[];
}

// ContentPlanPlatform Interface (relation between ContentPlan and Platform)
interface ContentPlanPlatform {
	id: string;
	contentPlanId: string;
	platformId: string;
}

// User Interface
export interface User {
	id: string;
	name?: string;
	email?: string;
	emailVerified?: Date;
	image?: string;
	password?: string;
	role: UserRole;
	isTwoFactorEnabled: boolean;
	accounts?: Account[];
	generatedContents?: GeneratedContent[];
	favoritedTemplates?: FavoritedTemplate[];
	scheduledPosts?: any;
	contentPlans?: ContentPlan[];
}

type FormFieldType =
	| "text"
	| "textarea"
	| "select"
	| "multiselect"
	| "radio"
	| "checkbox"
	| "slider"
	| "number"
	| "date";

export interface Template {
	id: string;
	name: string;
	description: string;
	slug: string;
	category: string;
	icon: string;
	color: string;
	aiPrompt: string;
	features: string[];
	tags: string[];
	formFields: FormField[];
	generatedContents?: GeneratedContent[];
}
export interface BlogGenerationConfig {
	topic: string;
	blogType:
		| "how-to"
		| "technical"
		| "affiliate"
		| "listicle"
		| "case-study"
		| "comparison";
	targetAudience: string;
	contentStyle: string;
	wordCount: number;
	keywords: string[];
	plagiarismCheck: boolean;
	humanizeLevel: number;
	researchDepth: "basic" | "moderate" | "deep" | "academic";
	citations: boolean;
	aiTemperature: number;
	outlineComplexity: string;
	contentElements: {
		examples: boolean;
		quotes: boolean;
		statistics: boolean;
		takeaways: boolean;
		tableOfContents: boolean;
		executiveSummary: boolean;
	};
}

export interface ResearchResult {
	url: string;
	title: string;
	snippet: string;
	relevanceScore: number;
}
export interface FormField {
	label: string;
	name: string;
	type: FormFieldType;
	required: boolean;
	order: number;
	options?: Array<{ label: string; value: string }>;
	validation?: Record<string, any>;
	helpText?: string;
	default?: string;
	min?: number;
	max?: number;
	step?: number;
}

export interface Option {
	label: string;
	value: string;
}
export interface ContentItem {
	id: string;
	title: string;
	description: string;
	platform: string;
	contentType: string;
	date: string;
}

export const demoContentPlan: ContentItem[] = [
	{
		id: "1",
		title: "Product Launch Announcement",
		description:
			"Exciting new features coming to our platform! Join us for the live demo.",
		platform: "linkedin",
		contentType: "post",
		date: "2024-11-15",
	},
	{
		id: "2",
		title: "Behind the Scenes",
		description:
			"Take a peek at our development team working on the new features!",
		platform: "instagram",
		contentType: "story",
		date: "2024-11-15",
	},
	{
		id: "3",
		title: "User Success Story",
		description:
			"How Company X increased their productivity by 200% using our platform",
		platform: "twitter",
		contentType: "article",
		date: "2024-11-20",
	},
];
