import {
	BarChart4,
	Home,
	History,
	CreditCard,
	Image,
	Newspaper,
	User,
	Calendar,


} from "lucide-react";

import { Template } from "./types";
import { IoCartSharp } from "react-icons/io5";
export const MAX_FREE_COUNTS = 10;

export const routes = [
	{
		label: "Dashboard",
		icon: Home,
		href: "/dashboard",
		color: "text-green-500",
	},
	{
		label: "Image Generator",
		icon: Image,
		href: "/dashboard/image",
		color: "text-blue-500",
	},
	{
		label: "Blog Generator",
		icon: Newspaper,
		href: "/dashboard/blog",
		color: "text-blue-500",
	},
	// {
	// 	label: "Ecommerce Ads",
	// 	icon: IoCartSharp,
	// 	href: "/dashboard/ads",
	// 	color: "text-blue-500",
	// },

	{
		label: "Planner",
		icon: Calendar,
		href: "/dashboard/planner",
		color: "text-yellow-500",
		isBeta: true,
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

// export const TEMPLATES: Template[] = [
// 	{
// 		id: "controversial-takes",
// 		name: "Controversial Takes Generator",
// 		description:
// 			"Spark debate and engagement with thought-provoking, contrarian viewpoints in your niche. Great for LinkedIn posts, blog articles, or even YouTube video topics.",
// 		slug: "controversial-takes",
// 		category: "Content Ideas",
// 		icon: "Zap",
// 		color: "#FF5733",
// 		aiPrompt:
// 			"Give me 5 controversial takes in the niche of {niche}. Ensure the takes are well-reasoned but challenge common assumptions.",
// 		features: [
// 			"Generates debate-worthy content ideas",
// 			"Helps stand out from the crowd",
// 			"Boosts engagement and discussion",
// 			"Identifies untapped content angles",
// 		],
// 		tags: [
// 			"content-ideas",
// 			"controversial",
// 			"engagement",
// 			"thought-leadership",
// 			"debate",
// 		],
// 		formFields: [
// 			{
// 				label: "Your Niche",
// 				name: "niche",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Web Design, SaaS Development",
// 				validation: {
// 					maxLength: 50,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "untapped-topics",
// 		name: "Untapped Topics Finder",
// 		description:
// 			"Uncover hidden gems and fresh perspectives that no one else is talking about in your industry. Perfect for carving out a unique content niche and establishing thought leadership.",
// 		slug: "untapped-topics",
// 		category: "Content Ideas",
// 		icon: "EyeOff",
// 		color: "#007BFF",
// 		aiPrompt:
// 			"What are 10 things no one is talking about in the niche of {niche}? Focus on emerging trends, overlooked aspects, or counterintuitive insights.",
// 		features: [
// 			"Finds fresh, unexplored content angles",
// 			"Identifies niche opportunities",
// 			"Positions you as a thought leader",
// 			"Sparks original content creation",
// 		],
// 		tags: [
// 			"content-ideas",
// 			"untapped",
// 			"niche",
// 			"thought-leadership",
// 			"originality",
// 		],
// 		formFields: [
// 			{
// 				label: "Your Niche",
// 				name: "niche",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Web Design, SaaS Development",
// 				validation: {
// 					maxLength: 50,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "monetization-planner",
// 		name: "Monetization Blueprint",
// 		description:
// 			"Craft a strategic roadmap for monetizing your online business, outlining key platforms, content strategies, and revenue streams tailored to your niche.",
// 		slug: "monetization-planner",
// 		category: "Business Strategy",
// 		icon: "CreditCard",
// 		color: "#28A745",
// 		aiPrompt:
// 			"Create a comprehensive monetization strategy for a business in the niche of {niche}. Include recommended platforms, content pillars, initial monetization methods (months 0-3), short-term methods (months 3-6), and long-term methods (6+ months). Also, suggest 10 content ideas tailored to each stage.",
// 		features: [
// 			"Develops a multi-stage monetization plan",
// 			"Identifies suitable platforms and content strategies",
// 			"Outlines short-term and long-term revenue streams",
// 			"Provides actionable content ideas for each phase",
// 		],
// 		tags: [
// 			"monetization",
// 			"business-strategy",
// 			"content-strategy",
// 			"revenue",
// 			"growth",
// 		],
// 		formFields: [
// 			{
// 				label: "Your Niche",
// 				name: "niche",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Web Design, SaaS Development",
// 				validation: {
// 					maxLength: 50,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "content-machine",
// 		name: "AI Content Machine",
// 		description:
// 			"Generate a detailed content plan complete with sub-niches, keyword ideas, article outlines, and even paragraph drafts, all tailored to your chosen topic.",
// 		slug: "content-machine",
// 		category: "Content Creation",
// 		icon: "Robot",
// 		color: "#DC3545",
// 		aiPrompt:
// 			"I want to create a content plan for the niche of {niche}. \
//        1. **Identify Sub-Niches:** Suggest 5 sub-niches within {niche}. \
//        2. **Keyword Research:**  For each sub-niche, provide 2 pillar post titles and 15 informational keyword ideas and 5 transactional keyword ideas.  \
//        3. **Outline Generator:** Let me choose a keyword from the list, and you'll create a detailed outline for an article on that topic. \
//        4. **Paragraph Writer:**  I'll provide a heading from the outline, and you'll write a paragraph of content for it.",
// 		features: [
// 			"Identifies relevant sub-niches",
// 			"Generates targeted keyword ideas",
// 			"Creates detailed article outlines",
// 			"Writes content paragraphs based on headings",
// 		],
// 		tags: [
// 			"content-creation",
// 			"content-plan",
// 			"keywords",
// 			"outlines",
// 			"blog-posts",
// 			"articles",
// 		],
// 		formFields: [
// 			{
// 				label: "Your Niche",
// 				name: "niche",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Web Design, SaaS Development",
// 				validation: {
// 					maxLength: 50,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "expert-proof-showcase",
// 		name: "Expert Proof Showcase",
// 		description:
// 			"Demonstrate your expertise through detailed breakdowns and analysis of your field, showing rather than telling your capabilities",
// 		slug: "expert-proof-showcase",
// 		category: "social-media",
// 		icon: "BarChart2",
// 		color: "#0A66C2",
// 		aiPrompt:
// 			"Create a detailed LinkedIn post that demonstrates expertise in {expertiseArea} through analysis of {caseStudyTopic}, highlighting specific insights and actionable takeaways.",
// 		features: [
// 			"Expertise demonstration",
// 			"Practical analysis",
// 			"Industry insights",
// 			"Actionable takeaways",
// 			"Professional credibility building",
// 		],
// 		tags: [
// 			"expertise",
// 			"analysis",
// 			"industry-insights",
// 			"professional-tips",
// 		],
// 		formFields: [
// 			{
// 				label: "Area of Expertise",
// 				name: "expertiseArea",
// 				type: "select",
// 				required: true,
// 				order: 1,
// 				options: [
// 					{ label: "CFO/Financial Analysis", value: "finance" },
// 					{ label: "Wealth Management", value: "wealth-management" },
// 					{ label: "Design", value: "design" },
// 					{ label: "Content Writing", value: "writing" },
// 					{ label: "CRO/Conversion", value: "cro" },
// 					{ label: "Business Coaching", value: "business-coaching" },
// 					{ label: "Other", value: "other" },
// 				],
// 			},
// 			{
// 				label: "Case Study Topic",
// 				name: "caseStudyTopic",
// 				type: "textarea",
// 				required: true,
// 				order: 2,
// 				helpText: "What specific example or case will you analyze?",
// 				validation: {
// 					maxLength: 300,
// 				},
// 			},
// 			{
// 				label: "Key Findings",
// 				name: "keyFindings",
// 				type: "textarea",
// 				required: true,
// 				order: 3,
// 				helpText: "List 3-5 key insights from your analysis",
// 				validation: {
// 					maxLength: 500,
// 				},
// 			},
// 			{
// 				label: "Include Technical Details",
// 				name: "includeTechnical",
// 				type: "checkbox",
// 				required: false,
// 				order: 4,
// 				helpText: "Include specific technical analysis in your post?",
// 			},
// 			{
// 				label: "Call-to-Action Type",
// 				name: "ctaType",
// 				type: "select",
// 				required: true,
// 				order: 5,
// 				options: [
// 					{ label: "Request Consultation", value: "consult" },
// 					{ label: "Download Resource", value: "resource" },
// 					{ label: "Follow for More", value: "follow" },
// 					{ label: "Connect", value: "connect" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "ai-breakthrough-spotlight",
// 		name: "AI Breakthrough Spotlight",
// 		description:
// 			"Create viral LinkedIn posts about latest AI developments and their practical applications for businesses.",
// 		slug: "ai-breakthrough-spotlight",
// 		category: "Tech Innovation",
// 		icon: "BrainCircuit",
// 		color: "text-purple-500",
// 		aiPrompt: `Create a compelling LinkedIn post about {aiTechnology} and its impact on {industry}.

//  Key sections to cover:

//  1. 🚀 Innovation Overview: {keyInnovation}

//  2. 💡 Business Applications: {businessUse}

//  3. 🔮 Future Implications: {futureImpact}

//  Include {dataPoint} statistics/case studies.

//  Target audience: {targetAudience}

//  Call-to-action: {cta}

//  Tone: {contentStyle}`,
// 		features: [
// 			"AI trend analysis",
// 			"Business impact focus",
// 			"Data-backed insights",
// 			"Future predictions",
// 			"Industry-specific applications",
// 		],
// 		tags: ["ai", "technology", "innovation", "business", "future-tech"],
// 		formFields: [
// 			{
// 				label: "AI Technology",
// 				name: "aiTechnology",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 			},
// 			{
// 				label: "Industry Focus",
// 				name: "industry",
// 				type: "select",
// 				required: true,
// 				order: 2,
// 				options: [
// 					{ label: "SaaS", value: "saas" },
// 					{ label: "E-commerce", value: "ecommerce" },
// 					{ label: "Finance", value: "finance" },
// 					{ label: "Healthcare", value: "healthcare" },
// 				],
// 			},
// 			{
// 				label: "Key Innovation",
// 				name: "keyInnovation",
// 				type: "textarea",
// 				required: true,
// 				order: 3,
// 			},
// 			{
// 				label: "Business Use Case",
// 				name: "businessUse",
// 				type: "textarea",
// 				required: true,
// 				order: 4,
// 			},
// 			{
// 				label: "Future Impact",
// 				name: "futureImpact",
// 				type: "textarea",
// 				required: true,
// 				order: 5,
// 			},
// 			{
// 				label: "Data Point/Case Study",
// 				name: "dataPoint",
// 				type: "text",
// 				required: true,
// 				order: 6,
// 			},
// 			{
// 				label: "Target Audience",
// 				name: "targetAudience",
// 				type: "select",
// 				required: true,
// 				order: 7,
// 				options: [
// 					{ label: "C-Suite Executives", value: "executives" },
// 					{ label: "Tech Decision Makers", value: "decision-makers" },
// 					{ label: "Developers", value: "developers" },
// 					{ label: "Entrepreneurs", value: "entrepreneurs" },
// 				],
// 			},
// 			{
// 				label: "Call-to-Action",
// 				name: "cta",
// 				type: "text",
// 				required: true,
// 				order: 8,
// 			},
// 			{
// 				label: "Content Style",
// 				name: "contentStyle",
// 				type: "select",
// 				required: true,
// 				order: 9,
// 				options: [
// 					{
// 						label: "Thought Leadership",
// 						value: "thought-leadership",
// 					},
// 					{ label: "Educational", value: "educational" },
// 					{ label: "Visionary", value: "visionary" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "7",
// 		name: "Micro-SaaS Opportunity Scanner",
// 		description:
// 			"Identify untapped micro-SaaS opportunities by analyzing friction points in existing workflows and processes within specific industries.",
// 		slug: "micro-saas-scanner",
// 		category: "Business Opportunities",
// 		icon: "Telescope",
// 		color: "#9B59B6",
// 		aiPrompt: `Analyze the {industry} industry to identify potential micro-SaaS opportunities:

//   1. Pain Points Analysis: List 5 common workflow frustrations in {specificRole}
//   2. Market Gap Assessment: For each pain point, evaluate existing solutions and their limitations
//   3. Solution Blueprint: Outline a potential micro-SaaS product addressing the most promising gap
//   4. MVP Features: List core features for a minimum viable product
//   5. Growth Strategy: Suggest distribution channels and initial marketing approaches
//   6. Revenue Model: Propose pricing structure and potential revenue streams`,
// 		features: [
// 			"Identifies niche market opportunities",
// 			"Analyzes competitor gaps",
// 			"Provides MVP roadmap",
// 			"Suggests go-to-market strategies",
// 			"Outlines revenue models",
// 		],
// 		tags: [
// 			"micro-saas",
// 			"business-opportunities",
// 			"market-analysis",
// 			"mvp",
// 			"startup",
// 		],
// 		formFields: [
// 			{
// 				label: "Industry",
// 				name: "industry",
// 				type: "select",
// 				required: true,
// 				order: 1,
// 				options: [
// 					{ label: "Real Estate", value: "real-estate" },
// 					{ label: "Legal", value: "legal" },
// 					{ label: "Healthcare", value: "healthcare" },
// 					{ label: "Education", value: "education" },
// 					{ label: "Retail", value: "retail" },
// 				],
// 			},
// 			{
// 				label: "Specific Role/Position",
// 				name: "specificRole",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Real Estate Agent, Legal Assistant, Teacher",
// 			},
// 		],
// 	},
// 	{
// 		id: "8",
// 		name: "Viral Hook Matrix",
// 		description:
// 			"Generate powerful hook variations for your content using proven psychological triggers and viral mechanics.",
// 		slug: "viral-hook-matrix",
// 		category: "Content Strategy",
// 		icon: "Magnet",
// 		color: "#E74C3C",
// 		aiPrompt: `Create a matrix of viral hooks for {contentTopic} using these frameworks:

//   1. Curiosity Gaps: Generate 5 hooks using information asymmetry
//   2. Pattern Interrupts: Create 5 hooks that challenge common beliefs
//   3. Identity Triggers: Develop 5 hooks that resonate with {targetIdentity}
//   4. Status Play: Design 5 hooks leveraging social proof or status
//   5. Transformation Promise: Craft 5 hooks showcasing before/after scenarios

//   Format each hook for {platform} with appropriate tone and style.`,
// 		features: [
// 			"Psychological trigger mapping",
// 			"Platform-specific formatting",
// 			"Identity-based messaging",
// 			"Social proof integration",
// 			"Multiple hook variations",
// 		],
// 		tags: [
// 			"viral-content",
// 			"hooks",
// 			"psychology",
// 			"social-media",
// 			"engagement",
// 		],
// 		formFields: [
// 			{
// 				label: "Content Topic",
// 				name: "contentTopic",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 			},
// 			{
// 				label: "Target Identity",
// 				name: "targetIdentity",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText:
// 					"e.g., Ambitious Entrepreneurs, Working Parents, Tech Leaders",
// 			},
// 			{
// 				label: "Platform",
// 				name: "platform",
// 				type: "select",
// 				required: true,
// 				order: 3,
// 				options: [
// 					{ label: "Twitter/X", value: "twitter" },
// 					{ label: "LinkedIn", value: "linkedin" },
// 					{ label: "TikTok", value: "tiktok" },
// 					{ label: "Instagram", value: "instagram" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "9",
// 		name: "Future Skills Roadmap",
// 		description:
// 			"Create a personalized learning pathway to future-proof your career based on industry trends and emerging technologies.",
// 		slug: "future-skills-roadmap",
// 		category: "Career Development",
// 		icon: "Map",
// 		color: "#3498DB",
// 		aiPrompt: `Design a future skills roadmap for {currentRole} transitioning into {futureRole}:

//   1. Skills Gap Analysis: Compare current skills vs. future requirements
//   2. Technology Trends: Identify emerging tools and technologies in {industry}
//   3. Learning Pathway: Create 6-month, 1-year, and 2-year milestone plans
//   4. Resource Guide: Recommend specific courses, certifications, and projects
//   5. Application Strategy: Suggest real-world practice opportunities
//   6. Network Building: Identify key communities and connections to develop`,
// 		features: [
// 			"Personalized skill assessment",
// 			"Trend-based planning",
// 			"Structured learning paths",
// 			"Resource curation",
// 			"Network development strategy",
// 		],
// 		tags: [
// 			"career-development",
// 			"skills",
// 			"learning",
// 			"future-proof",
// 			"professional-growth",
// 		],
// 		formFields: [
// 			{
// 				label: "Current Role",
// 				name: "currentRole",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 			},
// 			{
// 				label: "Desired Future Role",
// 				name: "futureRole",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 			},
// 			{
// 				label: "Industry",
// 				name: "industry",
// 				type: "select",
// 				required: true,
// 				order: 3,
// 				options: [
// 					{ label: "Technology", value: "tech" },
// 					{ label: "Finance", value: "finance" },
// 					{ label: "Healthcare", value: "healthcare" },
// 					{ label: "Creative", value: "creative" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "10",
// 		name: "AI Tool Stack Architect",
// 		description:
// 			"Design a customized AI tool stack that automates and enhances your workflow, maximizing productivity while minimizing costs.",
// 		slug: "ai-stack-architect",
// 		category: "Productivity",
// 		icon: "Layers",
// 		color: "#1ABC9C",
// 		aiPrompt: `Create an optimized AI tool stack for {roleType} in {industry}:

//   1. Workflow Analysis: Map current workflow and identify automation opportunities
//   2. Tool Categories: Break down required AI capabilities for {keyTasks}
//   3. Tool Selection: Recommend specific AI tools for each category with pricing
//   4. Integration Plan: Design workflow connecting selected tools
//   5. Cost-Benefit Analysis: Calculate potential time savings vs. tool costs
//   6. Implementation Roadmap: Prioritized adoption schedule
//   7. Backup Options: Alternative tools for each category`,
// 		features: [
// 			"Personalized tool recommendations",
// 			"Cost optimization",
// 			"Workflow integration",
// 			"ROI calculation",
// 			"Implementation strategy",
// 		],
// 		tags: [
// 			"ai-tools",
// 			"productivity",
// 			"automation",
// 			"workflow",
// 			"technology",
// 		],
// 		formFields: [
// 			{
// 				label: "Role Type",
// 				name: "roleType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Content Creator, Sales Manager, Developer",
// 			},
// 			{
// 				label: "Industry",
// 				name: "industry",
// 				type: "select",
// 				required: true,
// 				order: 2,
// 				options: [
// 					{ label: "Marketing", value: "marketing" },
// 					{ label: "Software", value: "software" },
// 					{ label: "Creative", value: "creative" },
// 					{ label: "Business", value: "business" },
// 				],
// 			},
// 			{
// 				label: "Key Tasks",
// 				name: "keyTasks",
// 				type: "textarea",
// 				required: true,
// 				order: 3,
// 				helpText: "List your main recurring tasks",
// 			},
// 		],
// 	},
// 	{
// 		id: "11",
// 		name: "Community Catalyst Blueprint",
// 		description:
// 			"Create a strategic plan to build and nurture a thriving community around your brand or product, focusing on organic growth and engagement.",
// 		slug: "community-catalyst",
// 		category: "Community Building",
// 		icon: "Users",
// 		color: "#F39C12",
// 		aiPrompt: `Design a community building strategy for {communityType} with {communityGoal}:

//   1. Community Identity: Define core values, mission, and unique positioning
//   2. Platform Strategy: Select and optimize primary and secondary platforms
//   3. Content Calendar: Design engagement-focused content themes and cadence
//   4. Ritual Design: Create community rituals and recurring events
//   5. Growth Mechanics: Develop organic growth and referral systems
//   6. Value Loop: Map value creation for both community and business
//   7. Moderation Framework: Establish guidelines and processes
//   8. Metrics Dashboard: Define success metrics and tracking methods`,
// 		features: [
// 			"Community strategy development",
// 			"Platform selection",
// 			"Engagement planning",
// 			"Growth optimization",
// 			"Governance framework",
// 		],
// 		tags: ["community", "engagement", "growth", "brand-building", "social"],
// 		formFields: [
// 			{
// 				label: "Community Type",
// 				name: "communityType",
// 				type: "select",
// 				required: true,
// 				order: 1,
// 				options: [
// 					{ label: "Product Users", value: "product" },
// 					{ label: "Professional Network", value: "professional" },
// 					{ label: "Learning Community", value: "learning" },
// 					{ label: "Creator Community", value: "creator" },
// 				],
// 			},
// 			{
// 				label: "Primary Community Goal",
// 				name: "communityGoal",
// 				type: "select",
// 				required: true,
// 				order: 2,
// 				options: [
// 					{ label: "Product Feedback", value: "feedback" },
// 					{ label: "Knowledge Sharing", value: "knowledge" },
// 					{ label: "Network Building", value: "network" },
// 					{ label: "Support System", value: "support" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "12",
// 		name: "Narrative Intelligence Engine",
// 		description:
// 			"Transform complex data and insights into compelling narratives that capture attention and drive action.",
// 		slug: "narrative-intelligence",
// 		category: "Communication",
// 		icon: "BookOpen",
// 		color: "#8E44AD",
// 		aiPrompt: `Create a narrative framework for {dataType} targeting {audience}:

//   1. Story Architecture: Structure data narrative with clear arc
//   2. Data Visualization: Recommend visualization approaches for key metrics
//   3. Emotional Hooks: Identify human elements in the data
//   4. Insight Layering: Structure insights from surface to deep analysis
//   5. Action Triggers: Create compelling calls-to-action
//   6. Format Variations: Adapt story for {contentFormat}
//   7. Supporting Elements: Suggest metaphors, analogies, and examples
//   8. Distribution Strategy: Map channels and timing for maximum impact`,
// 		features: [
// 			"Data storytelling",
// 			"Visual narrative design",
// 			"Emotional engagement",
// 			"Multi-format adaptation",
// 			"Distribution planning",
// 		],
// 		tags: [
// 			"storytelling",
// 			"data",
// 			"communication",
// 			"content-strategy",
// 			"engagement",
// 		],
// 		formFields: [
// 			{
// 				label: "Data Type",
// 				name: "dataType",
// 				type: "select",
// 				required: true,
// 				order: 1,
// 				options: [
// 					{ label: "Business Metrics", value: "business" },
// 					{ label: "Research Findings", value: "research" },
// 					{ label: "Market Trends", value: "market" },
// 					{ label: "User Behavior", value: "user" },
// 				],
// 			},
// 			{
// 				label: "Target Audience",
// 				name: "audience",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Executive Team, Investors, Customers",
// 			},
// 			{
// 				label: "Content Format",
// 				name: "contentFormat",
// 				type: "select",
// 				required: true,
// 				order: 3,
// 				options: [
// 					{ label: "Presentation", value: "presentation" },
// 					{ label: "Report", value: "report" },
// 					{ label: "Social Media", value: "social" },
// 					{ label: "Newsletter", value: "newsletter" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "13",
// 		name: "SaaS Growth Architect",
// 		description:
// 			"Develop a strategic blueprint to drive user acquisition, engagement, and retention for your SaaS product, emphasizing organic and cost-efficient growth strategies.",
// 		slug: "saas-growth-architect",
// 		category: "Growth Strategy",
// 		icon: "TrendingUp",
// 		color: "#27AE60",
// 		aiPrompt:
// 			"Design a SaaS growth strategy for {productType} in {targetMarket}:\n\n1. Audience Profiling: Identify target personas and pain points\n2. Value Proposition: Distill product’s unique selling points (USPs)\n3. Onboarding Flow: Optimize onboarding steps for user activation\n4. Retention Tactics: Recommend tactics to boost user retention\n5. Viral Loops: Develop strategies for organic referral growth\n6. Feedback Loop: Create mechanisms for user feedback integration\n7. Performance Metrics: Define key metrics for tracking growth success\n8. Expansion Roadmap: Outline stages for scaling in {targetMarket}",
// 		features: [
// 			"Audience analysis",
// 			"Onboarding optimization",
// 			"Retention tactics",
// 			"Growth hacking",
// 			"Performance tracking",
// 		],
// 		tags: [
// 			"saas",
// 			"growth-strategy",
// 			"user-acquisition",
// 			"engagement",
// 			"retention",
// 		],
// 		formFields: [
// 			{
// 				label: "Product Type",
// 				name: "productType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., CRM tool, Analytics software",
// 			},
// 			{
// 				label: "Target Market",
// 				name: "targetMarket",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Small businesses, Enterprises",
// 			},
// 		],
// 	},
// 	{
// 		id: "14",
// 		name: "Developer Productivity Enhancer",
// 		description:
// 			"Create a tailored productivity stack for developers that automates repetitive tasks, streamlines workflows, and maximizes focus time.",
// 		slug: "dev-productivity-enhancer",
// 		category: "Productivity",
// 		icon: "Code",
// 		color: "#3498DB",
// 		aiPrompt:
// 			"Develop a productivity optimization stack for {devRole} working on {projectType}:\n\n1. Workflow Analysis: Map current workflow and identify bottlenecks\n2. Task Automation: Recommend tools to automate repetitive coding tasks\n3. Code Quality: Suggest tools and practices to enhance code quality\n4. Knowledge Management: Implement systems for knowledge sharing and documentation\n5. Time Management: Recommend strategies and tools for deep work sessions\n6. Collaboration Tools: Identify tools to improve team collaboration\n7. Performance Tracking: Define productivity metrics and tracking tools\n8. Resource Optimization: Ensure minimal costs while maximizing productivity",
// 		features: [
// 			"Workflow mapping",
// 			"Task automation",
// 			"Code quality enhancement",
// 			"Time management",
// 			"Collaboration tools",
// 		],
// 		tags: [
// 			"developer-tools",
// 			"productivity",
// 			"automation",
// 			"workflow",
// 			"code-quality",
// 		],
// 		formFields: [
// 			{
// 				label: "Developer Role",
// 				name: "devRole",
// 				type: "select",
// 				required: true,
// 				order: 1,
// 				options: [
// 					{ label: "Frontend Developer", value: "frontend" },
// 					{ label: "Backend Developer", value: "backend" },
// 					{ label: "Full Stack Developer", value: "fullstack" },
// 					{ label: "DevOps Engineer", value: "devops" },
// 				],
// 			},
// 			{
// 				label: "Project Type",
// 				name: "projectType",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., E-commerce platform, AI-powered application",
// 			},
// 		],
// 	},
// 	{
// 		id: "15",
// 		name: "Marketing Funnel Optimizer",
// 		description:
// 			"Develop an optimized marketing funnel strategy that converts leads into loyal customers, focusing on personalized and data-driven campaigns.",
// 		slug: "marketing-funnel-optimizer",
// 		category: "Marketing",
// 		icon: "ChartPieIcon",
// 		color: "#E74C3C",
// 		aiPrompt:
// 			"Create a marketing funnel strategy for {businessType} targeting {customerType}:\n\n1. Audience Segmentation: Identify and segment target audiences\n2. Lead Generation: Recommend channels for lead acquisition\n3. Content Strategy: Design targeted content for each stage of the funnel\n4. Lead Nurturing: Develop automated sequences to engage leads\n5. Conversion Optimization: Optimize landing pages and CTAs\n6. Retention Strategy: Implement post-conversion engagement tactics\n7. Performance Metrics: Define KPIs and analytics for each funnel stage\n8. ROI Analysis: Estimate expected return on marketing investments",
// 		features: [
// 			"Audience segmentation",
// 			"Lead generation channels",
// 			"Content creation",
// 			"Conversion tactics",
// 			"Analytics and tracking",
// 		],
// 		tags: [
// 			"marketing",
// 			"funnel",
// 			"lead-generation",
// 			"conversion",
// 			"analytics",
// 		],
// 		formFields: [
// 			{
// 				label: "Business Type",
// 				name: "businessType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., E-commerce, SaaS",
// 			},
// 			{
// 				label: "Customer Type",
// 				name: "customerType",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Small business owners, Enterprise clients",
// 			},
// 		],
// 	},
// 	{
// 		id: "16",
// 		name: "DevOps Efficiency Maximizer",
// 		description:
// 			"Optimize DevOps workflows with a custom tool stack designed to streamline deployments, improve infrastructure reliability, and enhance team collaboration.",
// 		slug: "devops-efficiency-maximizer",
// 		category: "Productivity",
// 		icon: "Server",
// 		color: "#9B59B6",
// 		aiPrompt:
// 			"Develop a DevOps efficiency stack for {projectType} on {infrastructure}:\n\n1. Infrastructure Analysis: Assess current infrastructure and workflows\n2. CI/CD Tools: Recommend tools for streamlined continuous integration/deployment\n3. Monitoring and Logging: Suggest tools for real-time monitoring and logging\n4. Collaboration: Enhance collaboration between DevOps and dev teams\n5. Automation: Identify tasks suitable for automation and recommend tools\n6. Security: Suggest tools for enforcing security protocols\n7. Performance Metrics: Define KPIs for deployment speed and reliability\n8. Cost Optimization: Recommend ways to optimize costs while maintaining quality",
// 		features: [
// 			"CI/CD optimization",
// 			"Infrastructure monitoring",
// 			"Automation and security",
// 			"Collaboration improvement",
// 			"Cost-saving strategies",
// 		],
// 		tags: ["devops", "ci-cd", "automation", "monitoring", "cloud"],
// 		formFields: [
// 			{
// 				label: "Project Type",
// 				name: "projectType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText:
// 					"e.g., Microservices application, E-commerce platform",
// 			},
// 			{
// 				label: "Infrastructure",
// 				name: "infrastructure",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., AWS, Azure, Kubernetes",
// 			},
// 		],
// 	},
// 	{
// 		id: "17",
// 		name: "AI-Powered Content Marketer",
// 		description:
// 			"Create an AI-enhanced content marketing strategy that uses data insights to drive engagement and conversions.",
// 		slug: "ai-content-marketer",
// 		category: "Marketing",
// 		icon: "PenTool",
// 		color: "#2ECC71",
// 		aiPrompt:
// 			"Design a content marketing strategy using AI for {businessType} targeting {audience}:\n\n1. Audience Insights: Use AI to segment and understand audience preferences\n2. Content Ideation: Generate data-driven content ideas\n3. Content Creation: Recommend tools to assist with content generation and curation\n4. Personalization: Implement AI to deliver personalized content experiences\n5. Distribution Strategy: Plan distribution across optimal channels\n6. Engagement Optimization: Use AI to track and boost engagement metrics\n7. Conversion Tactics: Design tactics to drive conversions\n8. Analytics: Define success metrics and AI-powered analytics for tracking",
// 		features: [
// 			"Audience insights",
// 			"Content ideation",
// 			"AI-powered content generation",
// 			"Personalized engagement",
// 			"Conversion and analytics",
// 		],
// 		tags: [
// 			"content-marketing",
// 			"ai",
// 			"engagement",
// 			"personalization",
// 			"analytics",
// 		],
// 		formFields: [
// 			{
// 				label: "Business Type",
// 				name: "businessType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., SaaS, E-commerce, Consulting",
// 			},
// 			{
// 				label: "Target Audience",
// 				name: "audience",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Small businesses, Technology enthusiasts",
// 			},
// 		],
// 	},
// 	{
// 		id: "18",
// 		name: "AI Model Selection Assistant",
// 		description:
// 			"Find the right AI model for your project, balancing performance, scalability, and cost-effectiveness.",
// 		slug: "ai-model-selection",
// 		category: "Data Science",
// 		icon: "Brain",
// 		color: "#E67E22",
// 		aiPrompt:
// 			"Create an AI model recommendation for {useCase} in {industry}:\n\n1. Requirements Analysis: Identify key needs and performance expectations\n2. Model Options: Suggest models that fit the specified use case\n3. Training Data: Outline training data requirements for optimal model performance\n4. Scalability: Assess model scalability options\n5. Cost Analysis: Provide cost estimates and infrastructure needs\n6. Evaluation Metrics: Define success metrics for model evaluation\n7. Deployment Plan: Recommend deployment methods and tools\n8. Risk Mitigation: Identify risks and suggest mitigation strategies",
// 		features: [
// 			"Model selection",
// 			"Cost analysis",
// 			"Scalability assessment",
// 			"Success metrics",
// 			"Deployment plan",
// 		],
// 		tags: [
// 			"ai",
// 			"machine-learning",
// 			"model-selection",
// 			"data-science",
// 			"scalability",
// 		],
// 		formFields: [
// 			{
// 				label: "Use Case",
// 				name: "useCase",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Predictive analytics, Image recognition",
// 			},
// 			{
// 				label: "Industry",
// 				name: "industry",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Healthcare, Finance, Retail",
// 			},
// 		],
// 	},
// 	{
// 		id: "19",
// 		name: "Customer Support AI Enhancer",
// 		description:
// 			"Implement an AI-driven customer support strategy, enhancing responsiveness and improving customer satisfaction.",
// 		slug: "customer-support-ai",
// 		category: "Customer Service",
// 		icon: "Headphones",
// 		color: "#1ABC9C",
// 		aiPrompt:
// 			"Build an AI-enhanced support strategy for {companyType} focused on {supportGoal}:\n\n1. Support Analysis: Assess current support workflows and response times\n2. Chatbot Setup: Recommend chatbot tools for common queries\n3. Sentiment Analysis: Use AI to gauge customer sentiment\n4. Ticket Prioritization: Implement AI-driven ticketing system\n5. Self-Service Options: Design a knowledge base with AI support\n6. Analytics: Set up metrics to track response time, resolution rate, and satisfaction\n7. Personalization: Provide AI-based personalization for high-value customers\n8. Training: Define training for support staff to maximize AI tool use",
// 		features: [
// 			"Chatbot integration",
// 			"Sentiment analysis",
// 			"Ticket prioritization",
// 			"Self-service setup",
// 			"Performance analytics",
// 		],
// 		tags: [
// 			"customer-support",
// 			"ai",
// 			"chatbots",
// 			"analytics",
// 			"customer-satisfaction",
// 		],
// 		formFields: [
// 			{
// 				label: "Company Type",
// 				name: "companyType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., E-commerce, SaaS, Telecom",
// 			},
// 			{
// 				label: "Primary Support Goal",
// 				name: "supportGoal",
// 				type: "select",
// 				required: true,
// 				order: 2,
// 				options: [
// 					{ label: "Faster response times", value: "response-time" },
// 					{
// 						label: "Improved resolution rates",
// 						value: "resolution-rate",
// 					},
// 					{
// 						label: "Higher customer satisfaction",
// 						value: "customer-satisfaction",
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "20",
// 		name: "Facebook Group Engagement Builder",
// 		description:
// 			"Maximize engagement within Facebook groups by creating valuable, client-attracting content and automating interactions for stronger lead generation.",
// 		slug: "facebook-group-engagement",
// 		category: "Social Media Marketing",
// 		icon: "Users",
// 		color: "#3B5998",
// 		aiPrompt:
// 			"Create an engagement strategy for Facebook groups targeting {audienceType}:\n\n1. Audience Insights: Analyze group demographics and interests\n2. Content Themes: Develop content themes relevant to group members’ needs\n3. Engagement Triggers: Plan posts to prompt comments, shares, and feedback\n4. Consistency Schedule: Create a content calendar with optimal post timings\n5. Automation Tools: Suggest tools to manage and schedule content\n6. Conversion Strategy: Design subtle CTAs that encourage direct messages\n7. Lead Tracking: Set up a system for tracking potential leads\n8. Community Building: Outline steps to establish trust and build authority",
// 		features: [
// 			"Audience analysis",
// 			"Content planning",
// 			"Engagement optimization",
// 			"Lead generation tracking",
// 			"Authority building",
// 		],
// 		tags: [
// 			"facebook-groups",
// 			"engagement",
// 			"lead-generation",
// 			"social-media",
// 			"content-creation",
// 		],
// 		formFields: [
// 			{
// 				label: "Target Audience Type",
// 				name: "audienceType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText:
// 					"e.g., Small business owners, E-commerce entrepreneurs, Freelancers",
// 			},
// 		],
// 	},
// 	{
// 		id: "21",
// 		name: "Client Lead Magnet Content Generator",
// 		description:
// 			"Design high-value content that positions you as a Next.js expert, attracting potential clients through educational and actionable content.",
// 		slug: "client-lead-magnet",
// 		category: "Content Marketing",
// 		icon: "Clipboard",
// 		color: "#3498DB",
// 		aiPrompt:
// 			"Generate a client-attracting content plan for {platform} aimed at {targetAudience}:\n\n1. Key Topics: Identify pain points and topics of interest for {targetAudience}\n2. Educational Content: Design tutorials, tips, and case studies to showcase your expertise\n3. Lead Magnets: Create downloadable guides, checklists, or templates\n4. Engagement Calls-to-Action: Develop CTAs that guide followers to DM for services\n5. Frequency Plan: Create a posting schedule to maintain visibility\n6. Platform-Specific Strategy: Optimize content formats for {platform}\n7. Analytics: Define metrics to track engagement and client interest\n8. Personal Branding: Outline tone and style guidelines to establish authority",
// 		features: [
// 			"Lead-generating content",
// 			"Pain-point targeting",
// 			"Platform optimization",
// 			"Engagement CTAs",
// 			"Personal branding",
// 		],
// 		tags: [
// 			"lead-magnet",
// 			"content-marketing",
// 			"nextjs",
// 			"client-attraction",
// 			"branding",
// 		],
// 		formFields: [
// 			{
// 				label: "Platform",
// 				name: "platform",
// 				type: "select",
// 				required: true,
// 				order: 1,
// 				options: [
// 					{ label: "Facebook", value: "facebook" },
// 					{ label: "LinkedIn", value: "linkedin" },
// 					{ label: "Twitter", value: "twitter" },
// 				],
// 			},
// 			{
// 				label: "Target Audience",
// 				name: "targetAudience",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText:
// 					"e.g., SaaS founders, small business owners, e-commerce startups",
// 			},
// 		],
// 	},
// 	{
// 		id: "22",
// 		name: "Niche Client Content Strategy for Developers",
// 		description:
// 			"Create a content strategy to connect with niche clients interested in Next.js and web development, focusing on their specific industry needs.",
// 		slug: "niche-client-content",
// 		category: "Content Marketing",
// 		icon: "Target",
// 		color: "#E74C3C",
// 		aiPrompt:
// 			"Develop a content plan to target {clientIndustry} clients as a Next.js developer:\n\n1. Industry Research: Highlight trends and pain points in {clientIndustry}\n2. Solution Showcases: Present Next.js solutions relevant to industry problems\n3. Content Types: Use tutorials, case studies, and feature highlights\n4. Value-Driven Content: Emphasize value in speed, SEO, and scalability\n5. Distribution Channels: Identify where target clients spend time online\n6. Portfolio CTAs: Showcase your past work with clear CTAs for inquiries\n7. Testimonials and Case Studies: Use social proof to build trust\n8. Interaction Strategy: Create a method to encourage comments, DMs, and leads",
// 		features: [
// 			"Industry-specific insights",
// 			"Solution-focused content",
// 			"Lead-generating CTAs",
// 			"Portfolio promotion",
// 			"Social proof",
// 		],
// 		tags: [
// 			"content-strategy",
// 			"nextjs",
// 			"client-attraction",
// 			"industry-specific",
// 			"lead-generation",
// 		],
// 		formFields: [
// 			{
// 				label: "Client Industry",
// 				name: "clientIndustry",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Real Estate, Education, E-commerce",
// 			},
// 		],
// 	},
// 	{
// 		id: "23",
// 		name: "Cold Outreach Message Generator",
// 		description:
// 			"Generate impactful and customized cold outreach messages that connect with potential clients in a meaningful way.",
// 		slug: "cold-outreach-messages",
// 		category: "Sales",
// 		icon: "Mail",
// 		color: "#2980B9",
// 		aiPrompt:
// 			"Create a cold outreach message for {clientType} in {industry} highlighting {serviceOffer}:\n\n1. Pain Point Identification: Identify the client’s pain points in {industry}\n2. Service Introduction: Briefly introduce {serviceOffer} as a solution\n3. Value Proposition: Describe the unique benefits of your services\n4. Call-to-Action: Provide a subtle, non-intrusive call to schedule a call\n5. Social Proof: Include a brief testimonial or result if applicable\n6. Personalization Tips: Add hints to personalize based on the client’s profile\n7. Follow-Up Plan: Design a follow-up message template for further engagement\n8. Feedback Loop: Request feedback on how the message resonates with clients",
// 		features: [
// 			"Pain point targeting",
// 			"Value-driven service intro",
// 			"Personalization",
// 			"Subtle CTA",
// 			"Follow-up template",
// 		],
// 		tags: [
// 			"outreach",
// 			"lead-generation",
// 			"cold-messaging",
// 			"sales",
// 			"client-acquisition",
// 		],
// 		formFields: [
// 			{
// 				label: "Client Type",
// 				name: "clientType",
// 				type: "text",
// 				required: true,
// 				order: 1,
// 				helpText: "e.g., Small business owner, Startup founder",
// 			},
// 			{
// 				label: "Industry",
// 				name: "industry",
// 				type: "text",
// 				required: true,
// 				order: 2,
// 				helpText: "e.g., Retail, SaaS, Real Estate",
// 			},
// 			{
// 				label: "Service Offer",
// 				name: "serviceOffer",
// 				type: "text",
// 				required: true,
// 				order: 3,
// 				helpText: "e.g., Next.js website development, SEO optimization",
// 			},
// 		],
// 	},
// ];
export const TEMPLATES: Template[] = [
	{
		id: "saas-email-nurture",
		name: "SaaS Email Nurture Sequence",
		description:
			"Create a strategic email nurture sequence that converts free trial users into paying customers through value demonstration and engagement.",
		slug: "saas-email-nurture",
		category: "Email Marketing",
		icon: "Mail",
		color: "#4F46E5",
		aiPrompt: `Create a {sequenceLength}-email nurture sequence for {productName} targeting {userSegment}:

    1. Sequence Strategy:
       - Welcome email
       - Value demonstration
       - Feature spotlight
       - Success stories
       - Conversion trigger

    2. Email Structure (Per Email):
       - Subject line variants (3)
       - Preview text
       - Personalization elements
       - Primary CTA
       - Secondary actions

    3. Content Progression:
       - Day 1: Welcome & Setup
       - Day 3: Core Feature Usage
       - Day 5: Success Stories
       - Day 7: Advanced Features
       - Day 10: Decision Trigger

    4. Engagement Elements:
       - Personalization tokens
       - Usage milestones
       - Social proof
       - Fear of missing out
       - Time-sensitive offers

    5. Technical Setup:
       - Segment triggers
       - A/B test elements
       - Click tracking
       - Conversion goals`,
		features: [
			"Conversion optimization",
			"Behavioral triggers",
			"Personalization",
			"A/B testing ready",
			"Engagement tracking",
		],
		tags: ["email-marketing", "saas", "nurture-sequence", "conversion"],
		formFields: [
			{
				label: "Product Name",
				name: "productName",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your SaaS product name",
			},
			{
				label: "User Segment",
				name: "userSegment",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Free Trial Users", value: "trial" },
					{ label: "Freemium Users", value: "freemium" },
					{ label: "Enterprise Leads", value: "enterprise" },
				],
			},
			{
				label: "Sequence Length",
				name: "sequenceLength",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "5 Emails", value: "5" },
					{ label: "7 Emails", value: "7" },
					{ label: "10 Emails", value: "10" },
				],
			},
		],
	},
	{
		id: "saas-content-calendar",
		name: "SaaS Content Marketing Calendar",
		description:
			"Generate a strategic content calendar that builds authority, drives organic traffic, and supports your SaaS marketing funnel.",
		slug: "saas-content-calendar",
		category: "Content Marketing",
		icon: "Calendar",
		color: "#0EA5E9",
		aiPrompt: `Create a {timeframe} content calendar for {productCategory} SaaS focusing on {primaryGoal}:

    1. Content Mix:
       - Blog posts (technical & business)
       - Case studies
       - Whitepapers
       - Video content
       - Social media

    2. Topic Clusters:
       - Industry trends
       - Problem-solution pairs
       - Feature education
       - Customer success
       - Thought leadership

    3. SEO Strategy:
       - Keyword research
       - Search intent mapping
       - Competitor analysis
       - Content gaps
       - Link building

    4. Distribution Plan:
       - Channel selection
       - Posting schedule
       - Promotion strategy
       - Repurposing plan
       - Partnership opportunities

    5. Performance Tracking:
       - Traffic goals
       - Conversion metrics
       - Engagement KPIs
       - SEO rankings
       - Lead attribution`,
		features: [
			"SEO optimization",
			"Multi-channel planning",
			"Content strategy",
			"Performance metrics",
			"Distribution tactics",
		],
		tags: ["content-marketing", "saas", "marketing-strategy", "planning"],
		formFields: [
			{
				label: "Product Category",
				name: "productCategory",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "B2B SaaS", value: "b2b" },
					{ label: "Developer Tools", value: "devtools" },
					{ label: "Marketing Tools", value: "martech" },
					{ label: "Productivity Tools", value: "productivity" },
				],
			},
			{
				label: "Primary Goal",
				name: "primaryGoal",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Lead Generation", value: "leads" },
					{ label: "Brand Authority", value: "brand" },
					{ label: "User Education", value: "education" },
					{ label: "Customer Retention", value: "retention" },
				],
			},
			{
				label: "Timeframe",
				name: "timeframe",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "Monthly", value: "monthly" },
					{ label: "Quarterly", value: "quarterly" },
					{ label: "6 Months", value: "biannual" },
				],
			},
		],
	},

	{
		id: "saas-linkedin-ads",
		name: "SaaS LinkedIn Ad Campaign",
		description:
			"Create high-converting LinkedIn ad campaigns targeting B2B decision-makers for your SaaS product.",
		slug: "linkedin-ads",
		category: "Paid Marketing",
		icon: "Linkedin",
		color: "#0A66C2",
		aiPrompt: `Create a LinkedIn ad campaign for {productName} targeting {targetAudience} with {budgetRange} budget:

    1. Campaign Structure:
       - Campaign objective
       - Audience targeting
       - Ad formats
       - Budget allocation
       - Timeline

    2. Ad Creative Sets:
       - Headline variations (5)
       - Ad copy versions (3)
       - CTA options
       - Image guidelines
       - Video scripts

    3. Targeting Strategy:
       - Job titles
       - Company size
       - Industries
       - Skills
       - Groups

    4. Lead Magnet:
       - Offer type
       - Value proposition
       - Landing page elements
       - Form fields
       - Follow-up sequence

    5. Performance Metrics:
       - CPC goals
       - CTR targets
       - Conversion rates
       - ROI calculations
       - A/B test plan`,
		features: [
			"B2B targeting",
			"Ad optimization",
			"Lead generation",
			"Performance tracking",
			"Budget optimization",
		],
		tags: ["linkedin", "paid-ads", "b2b-marketing", "lead-gen"],
		formFields: [
			{
				label: "Product Name",
				name: "productName",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your SaaS product name",
			},
			{
				label: "Target Audience",
				name: "targetAudience",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "C-Level Executives", value: "executives" },
					{
						label: "IT Decision Makers",
						value: "it-decision-makers",
					},
					{ label: "Department Heads", value: "department-heads" },
					{ label: "Small Business Owners", value: "small-business" },
				],
			},
			{
				label: "Budget Range",
				name: "budgetRange",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "$1,000-$5,000", value: "small" },
					{ label: "$5,000-$15,000", value: "medium" },
					{ label: "$15,000-$50,000", value: "large" },
				],
			},
		],
	},
	{
		id: "saas-webinar-funnel",
		name: "SaaS Webinar Marketing Funnel",
		description:
			"Create a complete webinar marketing funnel to demonstrate product value and convert enterprise prospects.",
		slug: "webinar-funnel",
		category: "Lead Generation",
		icon: "Video",
		color: "#7C3AED",
		aiPrompt: `Create a webinar marketing funnel for {productName} targeting {industryFocus} with {webinarType}:

    1. Webinar Strategy:
       - Topic selection
       - Value proposition
       - Expert speakers
       - Demo integration
       - Q&A planning

    2. Promotion Campaign:
       - Landing page copy
       - Email sequence
       - Social media posts
       - Paid ad copy
       - Partner promotion

    3. Webinar Content:
       - Introduction script
       - Main presentation
       - Demo script
       - Case studies
       - Offer presentation

    4. Follow-up System:
       - Thank you emails
       - Recording access
       - Special offers
       - Sales outreach
       - Resource sharing

    5. Conversion Elements:
       - Early bird offers
       - Attendance rewards
       - Limited-time bonuses
       - Enterprise packages
       - Implementation support`,
		features: [
			"Lead qualification",
			"Automated follow-up",
			"Content repurposing",
			"Sales enablement",
			"ROI tracking",
		],
		tags: [
			"webinar",
			"lead-generation",
			"enterprise-sales",
			"b2b-marketing",
		],
		formFields: [
			{
				label: "Product Name",
				name: "productName",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your SaaS product name",
			},
			{
				label: "Industry Focus",
				name: "industryFocus",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Technology", value: "tech" },
					{ label: "Healthcare", value: "healthcare" },
					{ label: "Finance", value: "finance" },
					{ label: "Education", value: "education" },
				],
			},
			{
				label: "Webinar Type",
				name: "webinarType",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "Product Demo", value: "demo" },
					{
						label: "Thought Leadership",
						value: "thought-leadership",
					},
					{ label: "Case Study", value: "case-study" },
					{ label: "Industry Trends", value: "trends" },
				],
			},
		],
	},
	{
		id: "dev-to-technical",
		name: "DEV.to Technical Deep Dive",
		description:
			"Create comprehensive technical articles that showcase your expertise and drive engagement on DEV.to. Focus on code explanations, best practices, and real-world implementations.",
		slug: "dev-to-technical",
		category: "Technical Writing",
		icon: "Code",
		color: "#000000",
		aiPrompt: `Create a technical article for DEV.to about {topic} following community best practices:

 1. Title Structure:
    - Create a clear, searchable title
    - Add relevant tags: #{primaryTag} #{secondaryTags}

 2. Article Structure:
    - Introduction (Problem statement & article goals)
    - Prerequisites & setup requirements
    - Step-by-step implementation with code samples
    - Common pitfalls and solutions
    - Best practices and optimization tips
    - Real-world use cases
    - Conclusion with key takeaways

 3. Code Guidelines:
    - Use syntax highlighting for code blocks
    - Include inline comments for complex logic
    - Provide working code samples
    - Add CodeSandbox/StackBlitz demos if applicable

 4. Engagement Elements:
    - Add relevant cover image
    - Include diagrams for complex concepts
    - Use proper heading hierarchy (h1, h2, h3)
    - Add table of contents for articles > 1000 words
    - End with discussion prompts

 5. DEV.to Specific:
    - Format using DEV.to Markdown
    - Include canonical URL if cross-posted
    - Add series name if part of a series
    - Use appropriate tags (max 4)`,
		features: [
			"Technical depth optimization",
			"Code sample formatting",
			"Community engagement elements",
			"SEO-friendly structure",
			"Platform-specific best practices",
		],
		tags: [
			"technical-writing",
			"dev-to",
			"coding",
			"tutorials",
			"documentation",
		],
		formFields: [
			{
				label: "Main Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., React Performance Optimization, GraphQL Best Practices",
			},
			{
				label: "Primary Tag",
				name: "primaryTag",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "JavaScript", value: "javascript" },
					{ label: "React", value: "react" },
					{ label: "Python", value: "python" },
					{ label: "DevOps", value: "devops" },
					{ label: "Web Development", value: "webdev" },
				],
			},
			{
				label: "Secondary Tags",
				name: "secondaryTags",
				type: "text",
				required: true,
				order: 3,
				helpText: "2-3 relevant tags separated by spaces",
			},
		],
	},
	{
		id: "hashnode-engineering-blog",
		name: "Hashnode Engineering Blog Post",
		description:
			"Create in-depth engineering blog posts for Hashnode that showcase technical leadership and architectural decisions.",
		slug: "hashnode-engineering",
		category: "Engineering Blog",
		icon: "DatabaseIcon",
		color: "#2962FF",
		aiPrompt: `Create an engineering blog post for Hashnode about {topic} focusing on {aspect}:

 1. Introduction:
    - Problem space overview
    - Technical challenge description
    - Business impact statement

 2. Solution Architecture:
    - System design overview
    - Technology stack justification
    - Architecture diagrams
    - Trade-offs considered

 3. Implementation Details:
    - Key code implementations
    - Performance considerations
    - Security measures
    - Scalability approach

 4. Results & Metrics:
    - Performance improvements
    - Scalability achievements
    - Business impact
    - Lessons learned

 5. Hashnode Specific:
    - Technical series integration
    - Custom domain optimization
    - Newsletter integration
    - Community engagement hooks`,
		features: [
			"Architecture documentation",
			"System design focus",
			"Performance metrics",
			"Technical leadership insights",
			"Engineering culture aspects",
		],
		tags: [
			"engineering",
			"system-design",
			"architecture",
			"technical-leadership",
			"hashnode",
		],
		formFields: [
			{
				label: "Technical Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Microservices Migration, Database Optimization",
			},
			{
				label: "Focus Aspect",
				name: "aspect",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "System Architecture", value: "architecture" },
					{ label: "Performance Optimization", value: "performance" },
					{ label: "Scalability", value: "scalability" },
					{ label: "Security", value: "security" },
				],
			},
		],
	},
	{
		id: "medium-tech-leadership",
		name: "Medium Tech Leadership Article",
		description:
			"Create thought leadership content for Medium's top tech publications, focusing on engineering management, team leadership, and technical decision-making.",
		slug: "medium-tech-leadership",
		category: "Leadership",
		icon: "Users",
		color: "#000000",
		aiPrompt: `Create a technical leadership article for Medium about {topic} focusing on {perspective}:

 1. Hook & Introduction:
    - Engaging story or scenario
    - Problem statement
    - Reader value proposition

 2. Main Content Structure:
    - Key lessons learned
    - Real-world examples
    - Data/metrics to support points
    - Team impact analysis
    - Industry context

 3. Actionable Takeaways:
    - Implementation steps
    - Common pitfalls
    - Success metrics
    - Team adoption strategies

 4. Medium Specific:
    - SEO-optimized subtitle
    - Publication guidelines check
    - Strategic image placement
    - Internal linking strategy
    - CTAs for following/newsletter`,
		features: [
			"Leadership insights",
			"Team management strategies",
			"Technical decision frameworks",
			"Cultural impact analysis",
			"Industry trends",
		],
		tags: [
			"tech-leadership",
			"engineering-management",
			"team-building",
			"technical-strategy",
			"medium",
		],
		formFields: [
			{
				label: "Leadership Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Engineering Team Scaling, Technical Debt Management",
			},
			{
				label: "Perspective",
				name: "perspective",
				type: "select",
				required: true,
				order: 2,
				options: [
					{
						label: "Engineering Manager",
						value: "engineering-manager",
					},
					{ label: "Technical Lead", value: "tech-lead" },
					{ label: "CTO", value: "cto" },
					{ label: "Team Lead", value: "team-lead" },
				],
			},
		],
	},
	{
		id: "stackoverflow-answer",
		name: "StackOverflow Answer Template",
		description:
			"Create comprehensive, well-structured StackOverflow answers that solve problems effectively while building your reputation.",
		slug: "stackoverflow-answer",
		category: "Q&A",
		icon: "HelpCircle",
		color: "#F48024",
		aiPrompt: `Create a StackOverflow answer for {problemType} question about {technology}:

 1. Solution Overview:
    - Quick summary of solution
    - Why this approach works
    - Version compatibility notes

 2. Implementation:
    - Step-by-step solution
    - Working code examples
    - Input/output examples
    - Error handling

 3. Explanation:
    - Technical background
    - Key concepts explained
    - Common pitfalls
    - Performance considerations

 4. StackOverflow Specific:
    - Markdown formatting
    - Code block syntax highlighting
    - Links to documentation
    - MCVE (Minimal, Complete, Verifiable Example)
    - Alternative approaches section`,
		features: [
			"Problem-solving focus",
			"Code example optimization",
			"Technical accuracy",
			"Best practices adherence",
			"Community guidelines compliance",
		],
		tags: [
			"stackoverflow",
			"problem-solving",
			"code-examples",
			"technical-answers",
			"documentation",
		],
		formFields: [
			{
				label: "Problem Type",
				name: "problemType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Bug Fix", value: "bug-fix" },
					{ label: "Performance Issue", value: "performance" },
					{ label: "Implementation Help", value: "implementation" },
					{ label: "Best Practices", value: "best-practices" },
				],
			},
			{
				label: "Technology",
				name: "technology",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., React Hooks, Node.js Streams",
			},
		],
	},
	{
		id: "reddit-programming",
		name: "Reddit Programming Insights",
		description:
			"Create engaging, informative content for programming-related subreddits that drives discussion and showcases expertise.",
		slug: "reddit-programming",
		category: "Community",
		icon: "MessageCircle",
		color: "#FF4500",
		aiPrompt: `Create a Reddit post for r/{subreddit} about {topic}:

 1. Title Structure:
    - Clear, engaging title
    - [Tag] if required by subreddit
    - Length within Reddit title limits

 2. Post Structure:
    - Opening hook
    - Main content with proper formatting
    - Code examples if relevant
    - Discussion prompts
    - TL;DR summary

 3. Engagement Elements:
    - Controversial/interesting angles
    - Real-world examples
    - Links to sources/docs
    - Follow-up discussion points

 4. Reddit Specific:
    - Subreddit rule compliance
    - Markdown formatting
    - Code block formatting
    - Appropriate tone for community`,
		features: [
			"Community engagement",
			"Discussion generation",
			"Technical accuracy",
			"Platform optimization",
			"Rule compliance",
		],
		tags: [
			"reddit",
			"programming",
			"community",
			"discussion",
			"technical-content",
		],
		formFields: [
			{
				label: "Subreddit",
				name: "subreddit",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Programming", value: "programming" },
					{ label: "WebDev", value: "webdev" },
					{ label: "CSCareerQuestions", value: "cscareerquestions" },
					{ label: "JavaScript", value: "javascript" },
				],
			},
			{
				label: "Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 2,
				helpText:
					"e.g., Career Advice, Technical Discussion, Project Showcase",
			},
		],
	},
	{
		id: "habr-technical",
		name: "Habr Technical Article",
		description:
			"Create in-depth technical content for Habr, focusing on system design, algorithms, and engineering practices for the Russian-speaking developer community.",
		slug: "habr-technical",
		category: "Technical Writing",
		icon: "FileText",
		color: "#303B44",
		aiPrompt: `Create a technical article for Habr about {topic} with focus on {aspect}:

 1. Article Structure:
    - Russian title with English translation
    - Technical prerequisites
    - Problem statement
    - Solution architecture
    - Implementation details
    - Performance analysis

 2. Code Examples:
    - Commented code blocks
    - Implementation variations
    - Performance comparisons
    - Testing approaches

 3. Visual Elements:
    - System diagrams
    - Performance graphs
    - Architecture schemas
    - Comparison tables

 4. Habr Specific:
    - Proper transliteration
    - Technical terminology in both languages
    - Community-specific formatting
    - Rating optimization strategies`,
		features: [
			"Bilingual optimization",
			"Technical depth",
			"System design focus",
			"Performance analysis",
			"Community engagement",
		],
		tags: [
			"habr",
			"russian",
			"technical-writing",
			"system-design",
			"engineering",
		],
		formFields: [
			{
				label: "Technical Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Microservices Architecture, Database Optimization",
			},
			{
				label: "Focus Aspect",
				name: "aspect",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "System Design", value: "system-design" },
					{ label: "Performance", value: "performance" },
					{ label: "Algorithms", value: "algorithms" },
					{ label: "Engineering Practices", value: "practices" },
				],
			},
		],
	},
	{
		id: "linkedin-tech-post",
		name: "LinkedIn Technical Leadership Post",
		description:
			"Create engaging LinkedIn posts that showcase technical leadership and drive professional networking in the development community.",
		slug: "linkedin-tech-post",
		category: "Professional Networking",
		icon: "Briefcase",
		color: "#0A66C2",
		aiPrompt: `Create a LinkedIn post about {topic} focusing on {aspect}:

 1. Hook Structure:
    - Attention-grabbing first line
    - Problem statement
    - Personal experience tie-in
    - Leadership insight

 2. Content Flow:
    - Key learning/insight
    - Real-world application
    - Technical context
    - Team/business impact
    - Action steps/takeaways

 3. Engagement Elements:
    - Questions for discussion
    - Call for experiences
    - Relevant hashtags
    - Industry connections

 4. LinkedIn Specific:
    - Professional tone
    - Text formatting for readability
    - Character limit optimization
    - Strategic emoji usage
    - Hashtag optimization`,
		features: [
			"Professional branding",
			"Leadership insights",
			"Network engagement",
			"Technical credibility",
			"Career development",
		],
		tags: [
			"linkedin",
			"tech-leadership",
			"professional-development",
			"networking",
			"career-growth",
		],
		formFields: [
			{
				label: "Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Team Leadership, Technical Architecture, Career Growth",
			},
			{
				label: "Focus Aspect",
				name: "aspect",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Leadership Lesson", value: "leadership" },
					{ label: "Technical Decision", value: "technical" },
					{ label: "Team Management", value: "management" },
					{ label: "Career Development", value: "career" },
				],
			},
		],
	},
	{
		id: "discord-tech-guide",
		name: "Discord Developer Guide",
		description:
			"Create comprehensive technical guides and resources for sharing in developer Discord communities.",
		slug: "discord-tech-guide",
		category: "Community Content",
		icon: "MessageSquare",
		color: "#5865F2",
		aiPrompt: `Create a Discord-friendly guide about {topic} for {communityType}:

     1. Message Structure:
        - Clear title with emotes
        - Table of contents with jump links
        - Sectioned content for readability
        - Code blocks with syntax highlighting

     2. Content Organization:
        - Prerequisites
        - Step-by-step instructions
        - Common issues and solutions
        - Resources and references
        - Quick copy-paste solutions

     3. Formatting:
        - Discord Markdown optimization
        - Proper code block syntax
        - Emoji usage for navigation
        - Character limit considerations

     4. Community Guidelines:
        - Channel-specific rules
        - Proper mentioning etiquette
        - Thread usage guidelines
        - Bot command integration`,
		features: [
			"Discord-optimized formatting",
			"Community guideline compliance",
			"Quick reference structure",
			"Mobile-friendly layout",
			"Easy navigation",
		],
		tags: [
			"discord",
			"community-content",
			"technical-guides",
			"documentation",
			"help-resources",
		],
		formFields: [
			{
				label: "Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Framework Setup, Debug Guide, Best Practices",
			},
			{
				label: "Community Type",
				name: "communityType",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Framework Community", value: "framework" },
					{ label: "Programming Language", value: "language" },
					{ label: "Tool/Platform", value: "tool" },
					{ label: "General Development", value: "general" },
				],
			},
		],
	},
	{
		id: "github-discussion",
		name: "GitHub Discussions Post",
		description:
			"Create engaging GitHub Discussions posts for open-source projects that drive community engagement and problem-solving.",
		slug: "github-discussion",
		category: "Open Source",
		icon: "GitBranch",
		color: "#24292E",
		aiPrompt: `Create a GitHub Discussion post about {topic} for {discussionType}:

     1. Post Structure:
        - Clear title and category
        - Problem/topic overview
        - Technical context
        - Proposed solution/discussion points
        - Action items or questions

     2. Content Elements:
        - Code examples with context
        - Links to relevant issues/PRs
        - System/architecture diagrams
        - Benchmarks/metrics if applicable

     3. Community Engagement:
        - Discussion prompts
        - Alternative approaches
        - Contributing guidelines
        - Next steps

     4. GitHub Specific:
        - Issue/PR references
        - Project board integration
        - Label suggestions
        - Contributor recognition`,
		features: [
			"Open source focus",
			"Technical documentation",
			"Community engagement",
			"Project management",
			"Collaboration tools",
		],
		tags: [
			"github",
			"open-source",
			"collaboration",
			"documentation",
			"community",
		],
		formFields: [
			{
				label: "Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Feature Proposal, Architecture Decision, Community Guidelines",
			},
			{
				label: "Discussion Type",
				name: "discussionType",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Q&A", value: "q-and-a" },
					{ label: "RFC", value: "rfc" },
					{ label: "Show and Tell", value: "show-and-tell" },
					{ label: "Ideas", value: "ideas" },
				],
			},
		],
	},
	{
		id: "codepen-tutorial",
		name: "CodePen Tutorial and Demo",
		description:
			"Create interactive tutorials and demos on CodePen that showcase front-end development techniques and best practices.",
		slug: "codepen-tutorial",
		category: "Frontend Development",
		icon: "Codesandbox",
		color: "#47CF73",
		aiPrompt: `Create a CodePen tutorial about {technique} using {technology}:

     1. Demo Structure:
        - Clear title and description
        - Live preview setup
        - Step-by-step implementation
        - Interactive elements
        - Responsive design

     2. Code Organization:
        - HTML structure
        - CSS methodology
        - JavaScript functionality
        - Framework integration
        - Performance optimization

     3. Documentation:
        - Code comments
        - Usage instructions
        - Browser compatibility
        - Dependencies listed
        - Resource credits

     4. CodePen Specific:
        - Preprocessor settings
        - External resources
        - Pen settings
        - Editor layout
        - Tags optimization`,
		features: [
			"Interactive demos",
			"Live code examples",
			"Frontend techniques",
			"Visual learning",
			"Community sharing",
		],
		tags: ["codepen", "frontend", "demos", "tutorials", "interactive"],
		formFields: [
			{
				label: "Technique",
				name: "technique",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., CSS Animation, SVG Manipulation, Interactive UI",
			},
			{
				label: "Technology",
				name: "technology",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Vanilla JS", value: "javascript" },
					{ label: "React", value: "react" },
					{ label: "Vue", value: "vue" },
					{ label: "SCSS", value: "scss" },
				],
			},
		],
	},
	{
		id: "twitter-thread-tech",
		name: "Technical Twitter Thread",
		description:
			"Create engaging technical Twitter threads that educate and drive engagement while maintaining technical accuracy.",
		slug: "twitter-tech",
		category: "Social Media",
		icon: "Twitter",
		color: "#1DA1F2",
		aiPrompt: `Create a technical Twitter thread about {topic} with {tweetCount} tweets:

    1. Hook Tweet:
       - Problem statement
       - Curiosity gap
       - Audience targeting
       - Value promise

    2. Content Structure:
       - Key concepts
       - Code snippets
       - Visual cues
       - Step-by-step breakdown

    3. Engagement Elements:
       - Questions
       - Polls
       - Call for examples
       - Discussion prompts

    4. Resource Integration:
       - GitHub links
       - Blog references
       - Tool suggestions
       - Learning resources

    5. Thread Closure:
       - Key takeaways
       - Call-to-action
       - Follow prompt
       - Thread bookmark suggestion`,
		features: [
			"Thread optimization",
			"Technical accuracy",
			"Engagement hooks",
			"Resource linking",
			"Community building",
		],
		tags: ["twitter", "technical-content", "social-media", "education"],
		formFields: [
			{
				label: "Technical Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., React Performance Tips, AWS Security",
			},
			{
				label: "Thread Length",
				name: "tweetCount",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Short (5-7 tweets)", value: "5" },
					{ label: "Medium (8-12 tweets)", value: "8" },
					{ label: "Long (13-20 tweets)", value: "13" },
				],
			},
		],
	},
	{
		id: "youtube-tech-script",
		name: "YouTube Tech Tutorial Script",
		description:
			"Create engaging, educational tech tutorial scripts optimized for YouTube with clear explanations, timestamps, and viewer retention hooks.",
		slug: "youtube-tech-script",
		category: "Video Content",
		icon: "Video",
		color: "#FF0000",
		aiPrompt: `Create a YouTube tech tutorial script for {topic} with {duration} minutes target length:

    1. Hook (0:00-0:20):
       - Attention-grabbing opening
       - Problem statement
       - Value proposition
       - Channel branding

    2. Introduction (0:20-1:00):
       - Topic overview
       - Learning outcomes
       - Prerequisites
       - Resource links

    3. Main Content Structure:
       - {duration} segments of 3-5 minutes each
       - Step-by-step instructions
       - Visual cues and transitions
       - Code/screen demonstrations
       - Common pitfalls & solutions

    4. Engagement Elements:
       - Real-world applications
       - Pro tips & shortcuts
       - Interactive elements
       - Timestamp markers

    5. Closing:
       - Key takeaways
       - Call-to-action
       - Related videos
       - Community question`,
		features: [
			"Optimized for retention",
			"Clear visual instructions",
			"Engagement hooks",
			"SEO-friendly structure",
			"Timestamp organization",
		],
		tags: ["youtube", "tutorial", "video-script", "educational"],
		formFields: [
			{
				label: "Tutorial Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., React Hooks Tutorial, Docker Basics",
			},
			{
				label: "Video Duration",
				name: "duration",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "5-7 minutes", value: "5" },
					{ label: "8-10 minutes", value: "8" },
					{ label: "11-15 minutes", value: "12" },
					{ label: "15-20 minutes", value: "15" },
				],
			},
		],
	},

	{
		id: "micro-saas-landing",
		name: "Micro SaaS Landing Page",
		description:
			"Generate conversion-optimized landing page copy for Micro SaaS products with clear value propositions and call-to-actions.",
		slug: "micro-saas-landing",
		category: "Marketing",
		icon: "Store",
		color: "#6366F1",
		aiPrompt: `Create landing page copy for {productName} micro SaaS targeting {targetAudience}:

    1. Hero Section:
       - Headline: Clear value proposition
       - Subheadline: Problem solved
       - Primary CTA
       - Social proof indicator

    2. Problem-Solution Fit:
       - Pain points (3-4)
       - Solution benefits
       - Unique selling points
       - Market differentiators

    3. Feature Breakdown:
       - Core features (3-5)
       - Use cases
       - Implementation examples
       - Technical benefits

    4. Pricing Strategy:
       - Tier structure
       - Feature distribution
       - Price points
       - Special offers

    5. Trust Elements:
       - Testimonials
       - Case studies
       - Integration logos
       - Security badges`,
		features: [
			"Conversion optimization",
			"SaaS metrics focus",
			"Technical clarity",
			"Pricing psychology",
			"Trust building",
		],
		tags: ["micro-saas", "landing-page", "copywriting", "marketing"],
		formFields: [
			{
				label: "Product Name",
				name: "productName",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your Micro SaaS product name",
			},
			{
				label: "Target Audience",
				name: "targetAudience",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Freelance Developers, Small Business Owners",
			},
		],
	},

	{
		id: "fiverr-gig-description",
		name: "Fiverr Gig Description Generator",
		description:
			"Create compelling Fiverr gig descriptions that highlight your expertise and services while optimizing for Fiverr's search algorithm.",
		slug: "fiverr-gig",
		category: "Freelance",
		icon: "DollarSign",
		color: "#1DBF73",
		aiPrompt: `Create a Fiverr gig description for {serviceType} service with {experienceLevel} experience level:

    1. Gig Overview:
       - Attention-grabbing title
       - Service summary
       - Unique value proposition
       - Experience highlight

    2. Service Packages:
       - Basic package details
       - Standard package upgrades
       - Premium package features
       - Delivery timeframes

    3. Why Choose Me:
       - Relevant experience
       - Portfolio highlights
       - Industry expertise
       - Client satisfaction

    4. Process Breakdown:
       - Step-by-step methodology
       - Communication plan
       - Revision policy
       - Quality guarantees

    5. FAQs & Requirements:
       - Common questions
       - Client requirements
       - Additional services
       - Terms & conditions`,
		features: [
			"SEO optimization",
			"Package structuring",
			"Trust building",
			"Clear deliverables",
			"Buyer protection",
		],
		tags: ["fiverr", "freelance", "gig-description", "service-offering"],
		formFields: [
			{
				label: "Service Type",
				name: "serviceType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Web Development", value: "webdev" },
					{ label: "Digital Marketing", value: "marketing" },
					{ label: "Content Writing", value: "writing" },
					{ label: "Graphic Design", value: "design" },
				],
			},
			{
				label: "Experience Level",
				name: "experienceLevel",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Entry Level", value: "entry" },
					{ label: "Intermediate", value: "intermediate" },
					{ label: "Expert", value: "expert" },
				],
			},
		],
	},

	{
		id: "indie-hacker-story",
		name: "Indie Hacker Success Story",
		description:
			"Create engaging Indie Hacker stories that share your entrepreneurial journey, lessons learned, and business metrics.",
		slug: "indie-hacker",
		category: "Entrepreneurship",
		icon: "TrendingUp",
		color: "#0E2439",
		aiPrompt: `Create an Indie Hacker success story about {product} achieving {milestone}:

    1. Journey Overview:
       - Origin story
       - Problem identification
       - Solution development
       - Market validation

    2. Building Process:
       - Tech stack decisions
       - Development timeline
       - Key features
       - Pivotal moments

    3. Marketing Strategy:
       - Channel selection
       - Content strategy
       - Community building
       - Growth tactics

    4. Business Metrics:
       - Revenue milestones
       - User growth
       - Key metrics
       - ROI analysis

    5. Lessons & Insights:
       - Major challenges
       - Success factors
       - Future plans
       - Advice for others`,
		features: [
			"Metric transparency",
			"Technical insights",
			"Growth strategies",
			"Learning outcomes",
			"Community value",
		],
		tags: [
			"indie-hacker",
			"entrepreneurship",
			"startup",
			"business-growth",
		],
		formFields: [
			{
				label: "Product Name",
				name: "product",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your product or service name",
			},
			{
				label: "Achievement Milestone",
				name: "milestone",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., $10K MRR, 1000 Active Users",
			},
		],
	},

	{
		id: "product-hunt-launch",
		name: "Product Hunt Launch Post",
		description:
			"Create an attention-grabbing Product Hunt launch post that showcases your product's value and drives user engagement.",
		slug: "product-hunt",
		category: "Product Launch",
		icon: "Rocket",
		color: "#DA552F",
		aiPrompt: `Create a Product Hunt launch post for {productName} in the {category} category:

    1. Tagline & Hook:
       - Compelling tagline
       - Problem statement
       - Solution overview
       - Unique value prop

    2. Product Description:
       - Key features (3-5)
       - Use cases
       - Target audience
       - Technical highlights

    3. Visual Assets:
       - Gallery structure
       - Screenshot descriptions
       - Demo video script
       - GIF moments

    4. Launch Specifics:
       - Special offers
       - Early bird perks
       - Maker availability
       - Support channels

    5. Community Engagement:
       - Discussion topics
       - FAQ preparation
       - Response templates
       - Follow-up strategy`,
		features: [
			"Launch optimization",
			"Visual storytelling",
			"Community engagement",
			"Offer structure",
			"Response management",
		],
		tags: ["product-hunt", "launch", "marketing", "product"],
		formFields: [
			{
				label: "Product Name",
				name: "productName",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your product name",
			},
			{
				label: "Category",
				name: "category",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Productivity", value: "productivity" },
					{ label: "Developer Tools", value: "dev-tools" },
					{ label: "Marketing", value: "marketing" },
					{ label: "Design Tools", value: "design" },
				],
			},
		],
	},
	{
		id: "chrome-extension-docs",
		name: "Chrome Extension Documentation",
		description:
			"Generate comprehensive documentation for Chrome extensions including setup, usage, and API references.",
		slug: "chrome-extension",
		category: "Documentation",
		icon: "Chrome",
		color: "#4285F4",
		aiPrompt: `Create documentation for Chrome extension {extensionName} focusing on {docType}:

    1. Overview Section:
       - Extension purpose
       - Key features
       - Installation guide
       - Requirements

    2. Technical Setup:
       - Manifest structure
       - Permissions list
       - API utilization
       - Development setup

    3. Implementation Guide:
       - Core functionality
       - Code examples
       - API references
       - Best practices

    4. User Guide:
       - Installation steps
       - Configuration options
       - Usage scenarios
       - Troubleshooting

    5. Development Notes:
       - Build process
       - Testing guide
       - Security considerations
       - Performance tips`,
		features: [
			"Technical accuracy",
			"Clear structure",
			"Code examples",
			"User-friendly",
			"Security focus",
		],
		tags: [
			"chrome-extension",
			"documentation",
			"development",
			"technical-writing",
		],
		formFields: [
			{
				label: "Extension Name",
				name: "extensionName",
				type: "text",
				required: true,
				order: 1,
				helpText: "Your Chrome extension name",
			},
			{
				label: "Documentation Type",
				name: "docType",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "User Guide", value: "user" },
					{ label: "Developer Guide", value: "developer" },
					{ label: "API Reference", value: "api" },
					{ label: "Setup Guide", value: "setup" },
				],
			},
		],
	},
];
// Export helper functions for template management
export const getTemplateBySlug = (slug: string): Template | undefined => {
	return TEMPLATES.find((template) => template.slug === slug);
};

export const getTemplatesByCategory = (category: string): Template[] => {
	return TEMPLATES.filter((template) => template.category === category);
};

export const getTemplatesByTag = (tag: string): Template[] => {
	return TEMPLATES?.filter(
		(template) => template.tags && template.tags.includes(tag)
	);
};
export const PLATFORM_CONSTRAINTS = {
	twitter: {
		maxLength: 280,
		maxImages: 4,
		maxVideoLength: 140,
		supportedFormats: ["jpg", "png", "gif", "mp4"],
	},
	instagram: {
		maxLength: 2200,
		maxImages: 10,
		aspectRatios: ["1:1", "4:5", "16:9"],
		supportedFormats: ["jpg", "png", "mp4"],
	},
	facebook: {
		maxLength: 63206,
		maxImages: 10,
		supportedFormats: ["jpg", "png", "gif", "mp4"],
	},
	linkedin: {
		maxLength: 3000,
		maxImages: 9,
		supportedFormats: ["jpg", "png", "gif", "mp4"],
	},
} as const;
