import {
	BarChart4,
	BookOpen,
	Handshake,
	Home,
	History,
	CreditCard,
	Settings,
	Code,
	List,
	ListTodo,
	Newspaper,
	User,
} from "lucide-react";
import { z } from "zod";
export const MAX_FREE_COUNTS = 10;

// Blog Writer Tool Schema
export const blogSchema = z.object({
	title: z.string().min(1, "Title is required."),
	keywords: z
		.string()
		.min(1, "At least one keyword is required.")
		.refine((value) => value.split(",").length <= 5, {
			message: "Maximum 5 keywords allowed.",
		}),
	wordCount: z
		.number()
		.min(500, "Minimum word count is 500.")
		.max(5000, "Maximum word count is 5000."),
	category: z.string().min(1, "Category is required."),
	tone: z.string().min(1, "Tone is required."),
	includeReferences: z.boolean().optional(),
	additionalInstructions: z.string().optional(),
});

// Freelance Proposal Generator Schema
export const freelanceProposalSchema = z.object({
	clientName: z.string().min(1, "Client name is required."),
	projectTitle: z.string().min(1, "Project title is required."),
	projectOverview: z.string().min(1, "Project overview is required."),
	deliverables: z.string().min(1, "Deliverables are required."),
	timeline: z.string().min(1, "Timeline is required."),
	budget: z.string().min(1, "Budget is required."),
	terms: z.string().min(1, "Terms are required."),
	additionalNotes: z.string().optional(),
});

// Newsletter Generator Schema
export const newsletterSchema = z.object({
	title: z.string().min(1, "Title is required."),
	topic: z.string().min(1, "Topic is required."),
	audience: z.string().min(1, "Audience is required."),
	callToAction: z.string().min(1, "Call to action is required."),
	includeImage: z.boolean().optional(),
	additionalContent: z.string().optional(),
});

// Course Outline Generator Schema
export const courseOutlineSchema = z.object({
	courseName: z.string().min(1, "Course name is required."),
	duration: z.string().min(1, "Duration is required."),
	courseType: z.string().min(1, "Course type is required."),
	targetAudience: z.string().min(1, "Target audience is required."),
	learningObjectives: z.string().min(1, "Learning objectives are required."),
	additionalResources: z.string().optional(),
	courseFormat: z.string().min(1, "Course format is required."),
	assessmentMethods: z.string().optional(),
	specialInstructions: z.string().optional(),
});

// Explain Like I'm Five Tool Schema
export const explainSchema = z.object({
	topic: z.string().min(1, "Topic to explain is required."),
	ageGroup: z.string().min(1, "Target age group is required."),
	includeExamples: z.boolean().optional(),
	language: z.string().min(1, "Language is required."),
	additionalContext: z.string().optional(),
});

// DSA Learning Tool Schema
export const dsaSchema = z.object({
	dsaTopic: z.string().min(1, "Choose a topic is required."),
	difficultyLevel: z.string().min(1, "Difficulty level is required."),
	practiceMode: z.string().optional(),
	includeHints: z.boolean().optional(),
	preferredLanguage: z.string().min(1, "Preferred language is required."),
});

export const routes = [
	{
		label: "Home",
		icon: Home,
		href: "/dashboard",
		color: "text-green-500",
	},
	{
		label: "History",
		icon: History,
		href: "/dashboard/history",
		color: "text-yellow-500",
	},
	{
		label: "Analytics",
		icon: BarChart4,
		href: "/dashboard/analytics",
		color: "text-yellow-500",
	},
	{
		label: "Billing",
		icon: CreditCard,
		href: "/dashboard/billing",
		color: "text-red-500",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/dashboard/settings",
		color: "   ",
	},
	{
		label: "Profile",
		icon: User,
		href: "/dashboard/profile",
		color: "   ",
	},
];

export const TEMPLATES = [
	{
		name: "AI Blog Writer Tool",
		description:
			"Generate high-quality, SEO-optimized blogs on various topics. Enhance your web presence with content that engages and informs your audience.",
		icon: List,
		features: [
			"AI-Powered Content",
			"SEO Optimization",
			"Real-time Suggestions",
		],
		imageUrl: "/blogwriter.jpeg",
		href: "/ai-blog-writer",
		color: "text-violet-500",
		bgColor: "bg-red-300",
		slug: "ai-blog-writer",
		category: "Content Generation",
		aiPrompt: "Write a blog on the given topic",
		formFields: [
			{
				label: "Blog Title",
				field: "title",
				name: "title",
				required: true,
				placeholder: "Enter the title of your blog",
				type: "text",
			},
			{
				label: "Blog Topic",
				field: "topic",
				name: "topic",
				required: true,
				placeholder: "Enter the main topic of your blog",
				type: "text",
			},
			{
				label: "Content Length",
				field: "length",
				name: "length",
				required: true,
				placeholder:
					"Specify the desired length of the blog (e.g., 500-1000 words)",
				type: "text",
			},
			{
				label: "Writing Tone",
				field: "tone",
				name: "tone",
				required: false,
				options: [
					{ label: "Professional", value: "professional" },
					{ label: "Casual", value: "casual" },
					{ label: "Enthusiastic", value: "enthusiastic" },
					{ label: "Informative", value: "informative" },
				],
				type: "select",
			},
			{
				label: "Additional Notes",
				field: "notes",
				name: "notes",
				required: false,
				placeholder:
					"Any additional information or specific instructions",
				type: "textarea",
			},
			{
				label: "Target Keywords",
				field: "keywords",
				name: "keywords",
				required: false,
				placeholder:
					"Enter keywords for SEO optimization (comma-separated)",
				type: "textarea",
			},
			{
				label: "Include Images",
				field: "includeImages",
				name: "includeImages",
				required: false,
				value: false,
				type: "switch",
			},
		],
		validationSchema: blogSchema,
	},
	{
		name: "Freelance Proposal Generator",
		description:
			"Create professional, persuasive proposals tailored to your freelance projects. Impress clients with well-structured and clear communication.",
		icon: Handshake,
		features: [
			"Customizable Proposals",
			"Professional Templates",
			"Easy Client Communication",
		],
		imageUrl: "/freelance.jpeg",
		href: "/freelance-proposal-generator",
		color: "text-blue-500",
		bgColor: "bg-blue-300",
		slug: "freelance-proposal-generator",
		category: "Proposal Generation",
		type: "proposal",
		formFields: [
			{
				label: "Your Name",
				field: "input",
				name: "yourName",
				required: true,
				placeholder: "Example: Gunther Smith",
				type: "text",
			},
			{
				label: "Client Name",
				field: "input",
				name: "clientName",
				required: true,
				placeholder: "Example: Central Perk, LLC",
				type: "text",
			},
			{
				label: "Proposed Fee",
				field: "input",
				name: "proposedFee",
				required: true,
				placeholder: "Example: $2,500",
				type: "text",
			},
			{
				label: "Deliverables",
				field: "textarea",
				name: "deliverables",
				required: true,
				placeholder:
					"Example: Creating a website with 5 pages, 10 blog posts, and 3 landing pages.",
				type: "textarea",
			},
			{
				label: "Tone & Writing Style",
				field: "select",
				name: "tone",
				required: true,
				options: [
					{ label: "Professional", value: "professional" },
					{ label: "Casual", value: "casual" },
					{ label: "Persuasive", value: "persuasive" },
				],
				type: "select",
			},
		],
		validationSchema: freelanceProposalSchema,
	},
	{
		name: "Newsletter Generator",
		description:
			"Create engaging newsletters with ease. Keep your audience informed with well-crafted content and seamless distribution.",
		icon: Newspaper,
		features: [
			"Content Curation",
			"Engaging Templates",
			"Easy Distribution",
		],
		imageUrl: "/newsletter.jpeg",
		href: "/newsletter-generator",
		color: "text-green-500",
		bgColor: "bg-green-300",
		slug: "newsletter-generator",
		category: "Newsletter Generation",
		formFields: [
			{
				label: "Points to Convey / Article URL / YouTube Video URL",
				field: "textarea",
				name: "pointsToConvey",
				required: true,
				placeholder: "Example: Key insights from our latest research",
				type: "textarea",
			},
			{
				label: "Newsletter Type",
				field: "select",
				name: "newsletterType",
				required: true,
				options: [
					{ label: "Automatic", value: "Automatic" },
					{ label: "Custom", value: "Custom" },
				],
				type: "select",
			},
			{
				label: "Include Link?",
				field: "switch",
				name: "includeLink",
				required: false,
				type: "switch",
			},
			{
				label: "Tone & Writing Style",
				field: "select",
				name: "tone",
				required: true,
				options: [
					{ label: "Professional", value: "professional" },
					{ label: "Casual", value: "casual" },
					{ label: "Engaging", value: "engaging" },
				],
				type: "select",
			},
			{
				label: "Language",
				field: "select",
				name: "language",
				required: true,
				options: [
					{ label: "English (US)", value: "English (US)" },
					{ label: "Spanish", value: "Spanish" },
				],
				type: "select",
			},
			{
				label: "Target Audience (optional)",
				field: "input",
				name: "targetAudience",
				required: false,
				placeholder: "Example: People who love camping.",
				type: "text",
			},
			{
				label: "Point of View",
				field: "select",
				name: "pointOfView",
				required: true,
				options: [
					{ label: "First-Person", value: "firstPerson" },
					{ label: "Third-Person", value: "thirdPerson" },
				],
				type: "select",
			},
			{
				label: "Additional Instructions (optional)",
				field: "textarea",
				name: "additionalInstructions",
				required: false,
				placeholder: "Example: Include a mention of my dog Ralph.",
				type: "textarea",
			},
			{
				label: "Creativity Level (optional)",
				field: "textarea",
				name: "creativity",
				required: false,
				placeholder: "",
				type: "textarea",
			},
		],
		validationSchema: newsletterSchema,
	},

	{
		name: "Course Outline Generator",
		description:
			"Create comprehensive course outlines for any topic. Ensure structured and well-organized content delivery.",
		icon: ListTodo,
		features: [
			"Structured Content",
			"Customizable Modules",
			"Comprehensive Outlines",
		],
		imageUrl: "/course.jpeg",
		href: "/course-outline-generator",
		color: "text-yellow-500",
		bgColor: "bg-yellow-300",
		slug: "course-outline-generator",
		category: "Course Outline Generation",
		formFields: [
			{
				label: "Course Topic",
				field: "input",
				name: "courseTopic",
				required: true,
				placeholder: "Example: Introduction to Python Programming",
				type: "text",
			},
			{
				label: "Course Length",
				field: "select",
				name: "courseLength",
				required: true,
				options: [
					{ label: "Short (1-4 weeks)", value: "short" },
					{ label: "Standard (5-8 weeks)", value: "standard" },
					{ label: "Long (9+ weeks)", value: "long" },
				],
				type: "select",
			},
			{
				label: "Course Type",
				field: "select",
				name: "courseType",
				required: true,
				options: [
					{ label: "Online", value: "online" },
					{ label: "In-Person", value: "inPerson" },
					{ label: "Hybrid", value: "hybrid" },
				],
				type: "select",
			},
			{
				label: "Target Audience",
				field: "textarea",
				name: "targetAudience",
				required: true,
				placeholder:
					"Example: Beginners with no prior programming experience.",
				type: "textarea",
			},
			{
				label: "Learning Objectives",
				field: "textarea",
				name: "learningObjectives",
				required: true,
				placeholder:
					"Example: By the end of this course, students will be able to build basic Python programs.",
				type: "textarea",
			},
			{
				label: "Additional Resources (optional)",
				field: "textarea",
				name: "additionalResources",
				required: false,
				placeholder:
					"Example: Recommended textbooks, software tools, or websites.",
				type: "textarea",
			},
			{
				label: "Course Format",
				field: "select",
				name: "courseFormat",
				required: true,
				options: [
					{ label: "Lecture-Based", value: "lectureBased" },
					{ label: "Project-Based", value: "projectBased" },
					{ label: "Discussion-Based", value: "discussionBased" },
				],
				type: "select",
			},
			{
				label: "Assessment Methods",
				field: "textarea",
				name: "assessmentMethods",
				required: false,
				placeholder: "Example: Quizzes, exams, project submissions.",
				type: "textarea",
			},
			{
				label: "Special Instructions (optional)",
				field: "textarea",
				name: "specialInstructions",
				required: false,
				placeholder:
					"Example: Include a final capstone project for students.",
				type: "textarea",
			},
		],
		validationSchema: courseOutlineSchema,
	},

	{
		name: "Explain Like I'm Five Tool",
		description:
			"Break down complex topics into simple, easy-to-understand explanations. Ideal for teaching, learning, or simplifying difficult concepts.",
		icon: BookOpen,
		features: [
			"Simple Explanations",
			"User-Friendly",
			"Broad Range of Topics",
		],
		imageUrl: "/explain.jpeg",
		href: "/explain-like-im-five",
		color: "text-yellow-300",
		bgColor: "bg-yellow-300",
		slug: "explain-like-im-five",
		category: "Learning Tools",
		formFields: [
			{
				label: "Topic to Explain",
				field: "input",
				name: "topic",
				required: true,
				placeholder: "Example: What is Quantum Computing?",
				type: "text",
			},
			{
				label: "Target Age Group",
				field: "select",
				name: "ageGroup",
				required: true,
				options: [
					{ label: "5-7 years old", value: "5-7" },
					{ label: "8-10 years old", value: "8-10" },
					{ label: "11-13 years old", value: "11-13" },
				],
				type: "select",
			},
			{
				label: "Include Examples",
				field: "switch",
				name: "includeExamples",
				required: false,
				type: "switch",
			},
			{
				label: "Language",
				field: "select",
				name: "language",
				required: true,
				options: [
					{ label: "English", value: "English" },
					{ label: "Spanish", value: "Spanish" },
				],
				type: "select",
			},
			{
				label: "Additional Context (optional)",
				field: "textarea",
				name: "additionalContext",
				required: false,
				placeholder:
					"Example: Mention how it's different from regular computers.",
				type: "textarea",
			},
		],
		validationSchema: explainSchema,
	},
	{
		name: "DSA Learning Tool",
		description:
			"Learn Data Structures and Algorithms interactively. Practice coding problems and understand core concepts step by step.",
		icon: Code,
		features: [
			"Interactive Learning",
			"Comprehensive Coverage",
			"Practice Problems",
		],
		imageUrl: "/dsa.jpeg",
		href: "/dsa-learning-tool",
		color: "text-red-500",
		bgColor: "bg-red-300",
		slug: "dsa-learning-tool",
		category: "Educational Tools",
		formFields: [
			{
				label: "Choose Topic",
				field: "select",
				name: "dsaTopic",
				required: true,
				options: [
					{ label: "Arrays", value: "arrays" },
					{ label: "Linked Lists", value: "linkedLists" },
					{ label: "Stacks", value: "stacks" },
					{ label: "Queues", value: "queues" },
					{ label: "Trees", value: "trees" },
					{ label: "Graphs", value: "graphs" },
					{
						label: "Dynamic Programming",
						value: "dynamicProgramming",
					},
				],
				type: "select",
			},
			{
				label: "Difficulty Level",
				field: "select",
				name: "difficultyLevel",
				required: true,
				options: [
					{ label: "Beginner", value: "beginner" },
					{ label: "Intermediate", value: "intermediate" },
					{ label: "Advanced", value: "advanced" },
				],
				type: "select",
			},
			{
				label: "Practice Mode",
				field: "select",
				name: "practiceMode",
				required: false,
				options: [
					{ label: "Practice", value: "practice" },
					{ label: "Timed Test", value: "timedTest" },
				],
				type: "select",
			},
			{
				label: "Include Hints",
				field: "switch",
				name: "includeHints",
				required: false,
				type: "switch",
			},
			{
				label: "Preferred Language",
				field: "select",
				name: "preferredLanguage",
				required: true,
				options: [
					{ label: "JavaScript", value: "javascript" },
					{ label: "Python", value: "python" },
					{ label: "C++", value: "cpp" },
					{ label: "Java", value: "java" },
				],
				type: "select",
			},
		],
		validationSchema: dsaSchema,
	},
];
