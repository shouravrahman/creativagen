// Types for Enums
enum UserRole {
	Admin = "Admin",
	User = "User",
}

enum AiModel {
	GPT4 = "GPT4",
	GROQ = "GROQ",
	GEMINI = "GEMINI",
	CLAUDE = "CLAUDE",
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
	aiModel: AiModel;
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
interface User {
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

// Template Interface
export interface Template {
	id: string;
	name: string;
	description: string;
	slug: string;
	category: string;
	imageUrl: string;
	icon: any;
	color: string;
	bgColor: string;
	aiPrompt: string;
	features: string[];
	tags: string[];
	aiModel?: any;
	formFields: FormField[];
	favoritedBy?: FavoritedTemplate[];
	generatedContents?: GeneratedContent[];
}

export type FormFieldType =
	| "text"
	| "textarea"
	| "select"
	| "radio"
	| "slider"
	| "number";

export interface Option {
	label: string;
	value: string;
}

export interface FormField {
	label: string;
	name: string;
	type: FormFieldType;
	required: boolean;
	order: number;
	options?: Option[];
	helpText?: string;
	min?: number;
	max?: number;
	step?: number;
}
