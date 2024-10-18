import { VideoCameraIcon } from "@heroicons/react/20/solid";
import {
	BarChart4,
	BookOpen,
	Home,
	History,
	CreditCard,
	Newspaper,
	Settings,
	User,
	Briefcase,
	Award,
	Globe,
	Megaphone,
	Pencil,
	Share,
	Users,
	Calendar,
	Star,
	MessageSquare,
	TrendingUp,
	Edit,
	FileText,
} from "lucide-react";
import { FcMoneyTransfer } from "react-icons/fc";

import { z } from "zod";
export const MAX_FREE_COUNTS = 10;

export const routes = [
	{
		label: "Dashboard",
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
		label: "Profile",
		icon: User,
		href: "/dashboard/profile",
		color: "   ",
	},
];

export const TEMPLATES = [
	{
		name: "YouTube Tutorial Description",
		description:
			"This AI tool helps summarize YouTube tutorial scripts by crafting catchy video titles, concise descriptions, and SEO-friendly tags, helping your content reach the right audience.",
		icon: VideoCameraIcon,
		features: [
			"Video Script",
			"Language",
			"SEO Tags",
			"Video Title",
			"Video Description",
		],
		imageUrl: "/youtube-tutorial.jpg",
		href: "/youtube-tutorial-description",
		color: "text-red-500",
		bgColor: "bg-red-200",
		slug: "youtube-tutorial-description",
		category: "YouTube Content",
		aiPrompt:
			"Summarize the following YouTube tutorial script into a catchy title, description, and SEO-friendly tags. Include relevant keywords for discoverability.",
		formFields: [
			{
				label: "Video Script",
				field: "videoScript",
				name: "videoScript",
				required: true,
				placeholder: "Enter your video script",
				type: "textarea",
			},
			{
				label: "Language",
				field: "language",
				name: "language",
				required: true,
				placeholder: "Enter the language (e.g., English, Spanish)",
				type: "text",
			},
		],
		validationSchema: z.object({
			videoScript: z.string().min(1, "Video script is required"),
			language: z.string().min(1, "Language is required"),
		}),
      isFavorite: false,
	},
	{
		name: "All-in-One YouTube Content",
		description:
			"Streamline your YouTube content creation process with 'All-in-One YT Content' – your go-to tool for crafting engaging titles, scripts, descriptions, and tags, all from one easy-to-use platform.",
		icon: VideoCameraIcon,
		features: [
			"Video Topic",
			"Key Points to Cover",
			"Language",
			"Video Title",
			"Video Script",
			"Video Description",
			"SEO Tags",
		],
		imageUrl: "/allinone-youtube.jpg",
		href: "/all-in-one-yt-content",
		color: "text-purple-500",
		bgColor: "bg-purple-200",
		slug: "all-in-one-yt-content",
		category: "YouTube Content",
		aiPrompt: `Generate a comprehensive YouTube content package based on the following details:
        - Create a compelling video title that grabs attention and includes relevant keywords.
        - Write a complete video script that incorporates the provided points and engages the audience.
        - Provide a concise yet informative video description that encourages viewers to watch and includes SEO-friendly keywords.
        - Suggest a list of SEO-friendly tags that can help the video rank better on YouTube.

        Use a professional tone and ensure the content aligns with the given video topic and points. Generate everything in the specified language.`,
		formFields: [
			{
				label: "Video Topic & Key Points",
				field: "videoTopic",
				name: "videoTopic",
				required: true,
				placeholder:
					"Enter your video topic & the points you want to cover",
				type: "textarea",
			},
			{
				label: "Language",
				field: "language",
				name: "language",
				required: true,
				placeholder: "Enter the language (e.g., English, Spanish)",
				type: "text",
			},
		],
		validationSchema: z.object({
			videoTopic: z
				.string()
				.min(1, "Video topic and key points are required"),
			language: z.string().min(1, "Language is required"),
		}),
      isFavorite: false,},
	{
		name: "Code Documentation",
		description:
			"This tool streamlines the creation of clear and concise code documentation, making it easier for developers to understand, maintain, and collaborate on software projects.",
		icon: FileText,
		features: [
			"Source Code Input",
			"Documentation Type",
			"Project Goal",
			"Additional Information",
			"Generated Documentation",
		],
		imageUrl: "/codedocumentation.jpg",
		href: "/code-documentation",
		color: "text-indigo-500",
		bgColor: "bg-indigo-200",
		slug: "code-documentation",
		category: "Developer Tools",
		aiPrompt: `Generate clear and concise code documentation based on the provided source code and selected type of documentation.
        - Include relevant comments and explanations for functions, methods, and classes.
        - Provide an overview of how the code works, what it achieves, and any important details regarding its use.
        - If a project goal is provided, incorporate how the code aligns with the goal.
        - Include any additional specific information provided by the user, making the documentation detailed and informative for developers working on or maintaining the project.`,
		formFields: [
			{
				label: "Source Code",
				field: "sourceCode",
				name: "sourceCode",
				required: true,
				placeholder: "Please paste your source code here",
				type: "textarea",
			},
			{
				label: "Documentation Type",
				field: "documentationType",
				name: "documentationType",
				required: true,
				placeholder:
					"Select the type of documentation (e.g., API reference, user guide)",
				type: "select",
            options: [
				{ label: "API Reference", value: "api-reference" },
				{ label: "User Guide", value: "user-guide" },
				{ label: "Installation Guide", value: "installation-guide" },
				{ label: "Troubleshooting Guide", value: "troubleshooting-guide" },
				{ label: "Best Practices Guide", value: "best-practices-guide" },
				{ label: "FAQ", value: "faq" },
				{ label: "Release Notes", value: "release-notes" },
				{ label: "Changelog", value: "changelog" },
			],
			},
			{
				label: "Project Goal",
				field: "projectGoal",
				name: "projectGoal",
				required: false,
				placeholder: "Describe your project's goal (optional)",
				type: "textarea",
			},
			{
				label: "Additional Information",
				field: "additionalInfo",
				name: "additionalInfo",
				required: false,
				placeholder:
					"Include any specific details for the documentation (optional)",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			sourceCode: z.string().min(1, "Source code is required"),
			documentationType: z
				.string()
				.min(1, "Documentation type is required"),
			projectGoal: z.string().optional(),
			additionalInfo: z.string().optional(),
		}),
      isFavorite: false,},
	{
		name: "A-I-D-A Model Content Creator",
		description:
			"A tool that helps you craft compelling content using the AIDA model. It's designed to grab attention, generate interest, create desire, and provoke action.",
		icon: FcMoneyTransfer,
		features: [
			"Content Type",
			"Offer/Service Details",
			"Ideal Customer",
			"Customer Action Steps",
		],
		imageUrl: "/aida-model.jpg",
		href: "/aida-model-content",
		color: "text-orange-500",
		bgColor: "bg-orange-200",
		slug: "aida-model-content",
		category: "Marketing Content",
		aiPrompt: `Create a compelling piece of content using the AIDA model (Attention, Interest, Desire, Action) based on the following details:
        - Start by grabbing the audience's attention with a bold statement or question.
        - Generate interest by explaining the offered product/service and highlighting its key benefits.
        - Create desire by focusing on the value this product/service offers to the ideal customer, addressing their specific pain points or needs.
        - Conclude with a clear call-to-action that explains the steps the customer needs to take to start working with the business.`,
		formFields: [
			{
				label: "Content Type",
				field: "contentType",
				name: "contentType",
				required: true,
				placeholder:
					"Select the type of content (e.g., blog post, email, ad)",
				type: "select",
            options: [
				{ label: "Blog Post", value: "blog-post" },
				{ label: "Email", value: "email" },
				{ label: "Ad", value: "ad" },
				{ label: "Social Media Post", value: "social-media-post" },
				{ label: "Video Script", value: "video-script" },
				{ label: "Website Copy", value: "website-copy" },
				{ label: "Product Description", value: "product-description" },
				{ label: "Sales Letter", value: "sales-letter" },
				{ label: "Newsletter", value: "newsletter" },

				],
			},
			{
				label: "Offer/Service",
				field: "offerService",
				name: "offerService",
				required: true,
				placeholder:
					"What do you offer or sell? Or what services do you provide?",
				type: "textarea",
			},
			{
				label: "Ideal Customer",
				field: "idealCustomer",
				name: "idealCustomer",
				required: true,
				placeholder: "Describe your ideal customer",
				type: "textarea",
			},
			{
				label: "Customer Action Steps",
				field: "customerActionSteps",
				name: "customerActionSteps",
				required: true,
				placeholder:
					"What steps do customers need to take to start working with your business?",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			contentType: z.string().min(1, "Content type is required"),
			offerService: z
				.string()
				.min(1, "Offer or service details are required"),
			idealCustomer: z
				.string()
				.min(1, "Ideal customer description is required"),
			customerActionSteps: z
				.string()
				.min(1, "Customer action steps are required"),
		}),
      isFavorite: false,},
	{
		name: "Creative Home Page",
		description:
			"This is your go-to AI for creating high-converting landing pages. It is adept at structuring content, selecting templates, and writing compelling website copy that speaks to your target audience.",
		icon: Home,
		features: [
			"Product/Brand Name",
			"Product or Service Details",
			"Ideal Customer",
			"Landing Page Structure",
			"Compelling Copy",
		],
		imageUrl: "/creative-homepage.jpg",
		href: "/creative-home-page",
		color: "text-green-500",
		bgColor: "bg-green-200",
		slug: "creative-home-page",
		category: "Website Content",
		aiPrompt: `Create a high-converting landing page based on the following details:
     - Start with a bold, eye-catching headline using the provided product/brand name.
     - Introduce the product or service, highlighting its key features and benefits.
     - Tailor the messaging to resonate with the described ideal customer, addressing their specific needs and interests.
     - Organize the content into sections for ease of reading, and include a strong call-to-action that aligns with the product or service.
     - Optimize the copy for conversion, ensuring the language is persuasive and engaging.`,
		formFields: [
			{
				label: "Product/Brand Name",
				field: "brandName",
				name: "brandName",
				required: true,
				placeholder: "Enter your Product/Brand name here",
				type: "text",
			},
			{
				label: "What are you selling or promoting?",
				field: "productDetails",
				name: "productDetails",
				required: true,
				placeholder:
					"Describe what you are selling or promoting, and include key features",
				type: "textarea",
			},
			{
				label: "Ideal Customer",
				field: "idealCustomer",
				name: "idealCustomer",
				required: true,
				placeholder: "Describe your ideal customer and their interests",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			brandName: z.string().min(1, "Product/Brand name is required"),
			productDetails: z
				.string()
				.min(1, "Product or service details are required"),
			idealCustomer: z
				.string()
				.min(1, "Ideal customer description is required"),
		}),
      isFavorite: true,},
	{
		name: "Ad Copy",
		description:
			"Let us launch your product into the spotlight with ad copies that captivate and compel your audience to click and explore.",
		icon: Megaphone,
		features: [
			"Product Name",
			"Product Details",
			"Key Features",
			"Ad Copy Creation",
			"Call-to-Action",
		],
		imageUrl: "/ad-copy.jpg",
		href: "/ad-copy",
		color: "text-yellow-500",
		bgColor: "bg-yellow-200",
		slug: "ad-copy",
		category: "Marketing Content",
		aiPrompt: `Create a highly engaging and click-worthy ad copy based on the following product details:
        - Start with a catchy headline that captures attention and highlights the product's main feature or unique selling point.
        - Craft a concise but compelling description of the product, focusing on its key features and benefits.
        - Make the copy enticing for the target audience, ensuring it appeals to their needs or pain points.
        - Include a strong call-to-action that encourages the reader to click and explore the product further.
        - If more details are needed for the ad copy, prompt the user for additional information about the product's target market, pricing, promotions, or any special offers.`,
		formFields: [
			{
				label: "Product Name",
				field: "productName",
				name: "productName",
				required: true,
				placeholder:
					"Enter the product name (e.g., iPhone 12, Samsung Galaxy Note 20)",
				type: "text",
			},
			{
				label: "Product Details",
				field: "productDetails",
				name: "productDetails",
				required: true,
				placeholder:
					"Provide key features, benefits, and any other relevant details about the product",
				type: "textarea",
			},
			{
				label: "Target Audience (Optional)",
				field: "targetAudience",
				name: "targetAudience",
				required: false,
				placeholder: "Describe the target audience (optional)",
				type: "textarea",
			},
			{
				label: "Promotions or Special Offers (Optional)",
				field: "promotions",
				name: "promotions",
				required: false,
				placeholder:
					"Include any promotions or special offers (optional)",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			productName: z.string().min(1, "Product name is required"),
			productDetails: z.string().min(1, "Product details are required"),
			targetAudience: z.string().optional(),
			promotions: z.string().optional(),
		}),
      isFavorite: false,},
	{
		name: "All-in-One SEO Tool",
		description:
			"This tool generates optimized meta titles, descriptions, and keywords to improve your website's search engine visibility. It also helps create Open Graph images for better social media sharing.",
		icon: Globe,
		features: [
			"Meta Title Generator",
			"Meta Description Generator",
			"Keyword Suggestions",
			"Open Graph Image Creator",
			"SEO Best Practices",
		],
		imageUrl: "/seo-tool.jpg",
		href: "/all-in-one-seo-tool",
		color: "text-green-500",
		bgColor: "bg-green-200",
		slug: "all-in-one-seo-tool",
		category: "SEO Tools",
		aiPrompt: `Generate optimized meta tags and keywords for the following webpage:
        - Create a compelling meta title that includes the primary keyword and adheres to SEO best practices.
        - Write a concise meta description that captures the essence of the page and entices clicks while including relevant keywords.
        - Provide a list of suggested keywords to target for this webpage.
        - Create a suggestion for an Open Graph image that would enhance the webpage's social media presence, including key visual elements.`,
		formFields: [
			{
				label: "Page Title",
				field: "pageTitle",
				name: "pageTitle",
				required: true,
				placeholder: "Enter the title of the webpage",
				type: "text",
			},
			{
				label: "Primary Keyword",
				field: "primaryKeyword",
				name: "primaryKeyword",
				required: true,
				placeholder: "Enter the primary keyword for SEO",
				type: "text",
			},
			{
				label: "Page Content Overview",
				field: "contentOverview",
				name: "contentOverview",
				required: true,
				placeholder: "Provide a brief overview of the page content",
				type: "textarea",
			},
			{
				label: "Target Audience (Optional)",
				field: "targetAudience",
				name: "targetAudience",
				required: false,
				placeholder:
					"Describe the target audience for this page (optional)",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			pageTitle: z.string().min(1, "Page title is required"),
			primaryKeyword: z.string().min(1, "Primary keyword is required"),
			contentOverview: z.string().min(1, "Content overview is required"),
			targetAudience: z.string().optional(),
		}),
      isFavorite: false,},
	{
		name: "Blog Content Calendar",
		description:
			"This tool crafts an organized content calendar for your blog, targeting transactional-style search terms to boost your online presence. Stay ahead in content planning and optimize your blogging strategy.",
		icon: Calendar,
		features: [
			"Target Keyword Input",
			"Content Ideas Generation",
			"Publishing Schedule",
			"SEO Optimization Tips",
			"Analytics Tracking",
		],
		imageUrl: "/blog-content-calendar.jpg",
		href: "/blog-content-calendar",
		color: "text-blue-500",
		bgColor: "bg-blue-200",
		slug: "blog-content-calendar",
		category: "Blogging Tools",
		aiPrompt: `Create a detailed blog content calendar based on the provided target keyword:
        - Generate content ideas that target transactional-style search terms relevant to the keyword.
        - Organize the ideas into a monthly calendar format, including suggested publishing dates.
        - Provide SEO optimization tips for each content idea to enhance search engine visibility.
        - Include suggestions for promoting each blog post on social media and other platforms.`,
		formFields: [
			{
				label: "Target Keyword",
				field: "targetKeyword",
				name: "targetKeyword",
				required: true,
				placeholder: "Enter your target keyword",
				type: "text",
			},
		],
		validationSchema: z.object({
			targetKeyword: z.string().min(1, "Target keyword is required"),
		}),
      isFavorite: false,},
	{
		name: "LinkedIn Article Writer",
		description:
			"Write long-form LinkedIn articles that showcase your expertise and thoughts on industry-related topics, helping you establish authority.",
		icon: FileText,
		features: [
			"Article Writing",
			"Long-Form Content",
			"Showcase Expertise",
		],
		imageUrl: "/articlewriter.jpg",
		href: "/linkedin-article-writer",
		color: "text-gray-500",
		bgColor: "bg-gray-200",
		slug: "linkedin-article-writer",
		category: "LinkedIn Content",
		aiPrompt: "Write a LinkedIn article on the provided topic",
		formFields: [
			{
				label: "Article Title",
				field: "articleTitle",
				name: "articleTitle",
				required: true,
				placeholder: "Enter the title of your article",
				type: "text",
			},
			{
				label: "Article Topic",
				field: "articleTopic",
				name: "articleTopic",
				required: true,
				placeholder: "Specify the topic of the article",
				type: "text",
			},
			{
				label: "Article Body",
				field: "articleBody",
				name: "articleBody",
				required: true,
				placeholder: "Write the main content of the article",
				type: "textarea",
			},
			{
				label: "Writing Tone",
				field: "tone",
				name: "tone",
				required: false,
				options: [
					{ label: "Professional", value: "professional" },
					{ label: "Casual", value: "casual" },
					{ label: "Informative", value: "informative" },
				],
				type: "select",
			},
		],
		validationSchema: z.object({
			articleTitle: z.string().min(1, "Article title is required"),
			articleTopic: z.string().min(1, "Article topic is required"),
			articleBody: z.string().min(1, "Article body is required"),
			tone: z.enum(["professional", "casual", "informative"]).optional(),
		}),
      isFavorite: false,},
	{
		name: "SEO-Optimized Blog Post",
		description:
			"This tool helps you create an SEO-optimized, compelling, and reader-friendly blog post using a given title and designated keywords. Enhance your blog's visibility and engagement with expertly crafted content.",
		icon: Pencil,
		features: [
			"Focus Keyword Input",
			"Additional Keywords",
			"Content Structure Suggestions",
			"SEO Best Practices",
			"Readability Checks",
		],
		imageUrl: "/seo-optimized-blog-post.jpg",
		href: "/seo-optimized-blog-post",
		color: "text-orange-500",
		bgColor: "bg-orange-200",
		slug: "seo-optimized-blog-post",
		category: "Blogging Tools",
		aiPrompt: `Generate a comprehensive SEO-optimized blog post based on the following inputs:
        - Create a compelling introduction that hooks the reader while incorporating the focus keyword.
        - Structure the post with appropriate headings, subheadings, and bullet points for clarity.
        - Incorporate the additional keywords seamlessly throughout the content while maintaining readability.
        - Conclude with a strong call-to-action that encourages reader engagement and sharing.
        - Provide SEO best practices and readability checks to ensure the post meets current standards.`,
		formFields: [
			{
				label: "Focus Keyword",
				field: "focusKeyword",
				name: "focusKeyword",
				required: true,
				placeholder: "Enter your focus keyword",
				type: "text",
			},
			{
				label: "Additional Keywords (Optional)",
				field: "additionalKeywords",
				name: "additionalKeywords",
				required: false,
				placeholder:
					"List additional keywords to incorporate (comma-separated)",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			focusKeyword: z.string().min(1, "Focus keyword is required"),
			additionalKeywords: z.string().optional(),
		}),
      isFavorite: false,},
	{
		name: "All-in-One Social Post",
		description:
			"Create effective posts for every social media platform, from Facebook to YouTube. This tool ensures your content fits within the character limits and includes relevant hashtags, emojis, and keywords for maximum engagement.",
		icon: Share,
		features: [
			"Post Content Input",
			"Character Limit Checks",
			"Hashtag Suggestions",
			"Emoji Integration",
			"Platform-Specific Formatting",
		],
		imageUrl: "/social-post.jpg",
		href: "/all-in-one-social-post",
		color: "text-pink-500",
		bgColor: "bg-pink-200",
		slug: "all-in-one-social-post",
		category: "Social Media Tools",
		aiPrompt: `Create optimized social media posts based on the following inputs:
        - Generate engaging content tailored to the specified social media platform(s).
        - Ensure the content adheres to character limits and formatting rules for each platform.
        - Provide relevant hashtags and emojis to enhance engagement and visibility.
        - Suggest any additional keywords that can improve discoverability on social media.`,
		formFields: [
			{
				label: "Post Topic",
				field: "postTopic",
				name: "postTopic",
				required: true,
				placeholder: "What is your post about?",
				type: "textarea",
			},
			{
				label: "Target Platforms",
				field: "targetPlatforms",
				name: "targetPlatforms",
				required: true,
				placeholder:
					"Select the platforms (e.g., Facebook, Twitter, Instagram, LinkedIn, YouTube)",
				type: "select",
				options: [
					{ value: "facebook", label: "Facebook" },
					{ value: "twitter", label: "Twitter" },
					{ value: "instagram", label: "Instagram" },
					{ value: "linkedin", label: "LinkedIn" },
					{ value: "youtube", label: "YouTube" },
				],
			},
			{
				label: "Preferred Hashtags (Optional)",
				field: "preferredHashtags",
				name: "preferredHashtags",
				required: false,
				placeholder: "List preferred hashtags (comma-separated)",
				type: "textarea",
			},
			{
				label: "Tone of Voice (Optional)",
				field: "toneOfVoice",
				name: "toneOfVoice",
				required: false,
				placeholder:
					"Describe the desired tone (e.g., professional, casual, humorous)",
				type: "text",
			},
		],
		validationSchema: z.object({
			postTopic: z.string().min(1, "Post topic is required"),
			targetPlatforms: z
				.string()
				.min(1, "At least one platform must be selected"),
			preferredHashtags: z.string().optional(),
			toneOfVoice: z.string().optional(),
		}),
      isFavorite: false,},
	{
		name: "Advanced Blog Post",
		description:
			"This tool helps you write engaging, detailed blog posts tailored for specific types of content. It ensures your writing is unique, SEO-friendly, and resonates with your target audience, making it easier to connect with readers and improve search rankings.",
		icon: BookOpen,
		features: [
			"Blog Title Input",
			"Target Audience Specification",
			"Blog Type Selection",
			"Focus Keyword Integration",
			"Word Count Selection",
			"Tone of Voice Customization",
			"Additional Instructions",
		],
		imageUrl: "/advanced-blog-post.jpg",
		href: "/advanced-blog-post",
		color: "text-purple-500",
		bgColor: "bg-purple-200",
		slug: "advanced-blog-post",
		category: "Blogging Tools",
		aiPrompt: `Generate a comprehensive and engaging blog post based on the following inputs:
     - **Blog Type**: The blog type selected will tailor the content appropriately. For instance:
       - **Affiliate Blog**: Include product recommendations, comparison charts, and links to affiliate products.
       - **Product Blog**: Provide in-depth product reviews, specifications, and user experiences.
       - **Coding Blog**: Integrate relevant code snippets, explanations, and best practices.
     - **Title**: Create a unique and captivating introduction based on the provided blog title.
     - **Target Audience**: Tailor the language, style, and examples to resonate with the specified audience.
     - **Focus Keywords**: Incorporate the given keywords naturally throughout the post while maintaining readability and flow.
     - **Word Count**: Adhere to the specified word count while ensuring the content is comprehensive and engaging.
     - **Tone of Voice**: Adjust the tone to match the brand's voice, whether it's professional, casual, or informative.
     - **Additional Instructions**: Incorporate any specific requests or details to enhance the content further, such as SEO optimization strategies, readability enhancements, and style preferences.`,
		formFields: [
			{
				label: "Blog Title",
				field: "blogTitle",
				name: "blogTitle",
				required: true,
				placeholder: "What is your blog title?",
				type: "text",
			},
			{
				label: "Target Audience",
				field: "targetAudience",
				name: "targetAudience",
				required: true,
				placeholder: "Enter your target audience here",
				type: "textarea",
			},
			{
				label: "Blog Type",
				field: "blogType",
				name: "blogType",
				required: true,
				placeholder: "Select the type of blog content",
				type: "select",
				options: [
					{ value: "affiliate", label: "Affiliate Blog" },
					{ value: "product", label: "Product Blog" },
					{ value: "coding", label: "Coding Blog" },
					{ value: "lifestyle", label: "Lifestyle Blog" },
					{ value: "travel", label: "Travel Blog" },
					{ value: "finance", label: "Finance Blog" },
				],
			},
			{
				label: "Focus Keyword(s)",
				field: "focusKeywords",
				name: "focusKeywords",
				required: true,
				placeholder:
					"e.g., Artificial Intelligence, Future (comma-separated)",
				type: "textarea",
			},
			{
				label: "Word Count",
				field: "wordCount",
				name: "wordCount",
				required: true,
				placeholder: "Select your desired word count",
				type: "select",
				options: [
					{ value: "500", label: "500 words" },
					{ value: "1000", label: "1000 words" },
					{ value: "1500", label: "1500 words" },
					{ value: "2000", label: "2000 words" },
				],
			},
			{
				label: "Tone of Voice",
				field: "toneOfVoice",
				name: "toneOfVoice",
				required: false,
				placeholder:
					"Describe the desired tone (e.g., professional, casual, informative)",
				type: "text",
			},
			{
				label: "Additional Instructions (Optional)",
				field: "additionalInstructions",
				name: "additionalInstructions",
				required: false,
				placeholder: "Any other specific requests or details?",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			blogTitle: z.string().min(1, "Blog title is required"),
			targetAudience: z.string().min(1, "Target audience is required"),
			blogType: z.string().min(1, "Blog type must be selected"),
			focusKeywords: z
				.string()
				.min(1, "At least one focus keyword is required"),
			wordCount: z.string().min(1, "Word count must be selected"),
			toneOfVoice: z.string().optional(),
			additionalInstructions: z.string().optional(),
		}),
      isFavorite: false,},
	{
		name: "LinkedIn Comment Generator",
		description:
			"Create thoughtful and engaging comments on LinkedIn posts to build your network, engage with thought leaders, and contribute to discussions.",
		icon: MessageSquare,
		features: [
			"Engage with Content",
			"Networking Opportunities",
			"Thoughtful Responses",
		],
		imageUrl: "/commentgenerator.jpg",
		href: "/linkedin-comment-generator",
		color: "text-red-500",
		bgColor: "bg-red-200",
		slug: "linkedin-comment-generator",
		category: "LinkedIn Content",
		aiPrompt:
			"Generate a thoughtful LinkedIn comment for the following post",
		formFields: [
			{
				label: "Post Content",
				field: "postContent",
				name: "postContent",
				required: true,
				placeholder:
					"Enter the content or summary of the LinkedIn post",
				type: "textarea",
			},
			{
				label: "Comment Intent",
				field: "commentIntent",
				name: "commentIntent",
				required: true,
				placeholder: "What is your goal? (e.g., agree, ask, add value)",
				type: "text",
			},
			{
				label: "Writing Tone",
				field: "tone",
				name: "tone",
				required: false,
				options: [
					{ label: "Professional", value: "professional" },
					{ label: "Friendly", value: "friendly" },
					{ label: "Inquisitive", value: "inquisitive" },
				],
				type: "select",
			},
		],
		validationSchema: z.object({
			postContent: z.string().min(1, "Post content is required"),
			commentIntent: z.string().min(1, "Comment intent is required"),
			tone: z
				.enum(["professional", "friendly", "inquisitive"])
				.optional(),
		}),
      isFavorite: false,
	},
];
