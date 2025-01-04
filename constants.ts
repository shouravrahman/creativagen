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

export const TEMPLATES: Template[] = [
	{
		id: "controversial-takes",
		name: "Controversial Takes Generator",
		description:
			"Spark debate and engagement with thought-provoking, contrarian viewpoints in your niche. Great for LinkedIn posts, blog articles, or even YouTube video topics.",
		slug: "controversial-takes",
		category: "Content Ideas",
		icon: "Zap",
		color: "#FF5733",
		aiPrompt:
			"Give me 5 controversial takes in the niche of {niche}. Ensure the takes are well-reasoned but challenge common assumptions.",
		features: [
			"Generates debate-worthy content ideas",
			"Helps stand out from the crowd",
			"Boosts engagement and discussion",
			"Identifies untapped content angles",
		],
		tags: [
			"content-ideas",
			"controversial",
			"engagement",
			"thought-leadership",
			"debate",
		],
		formFields: [
			{
				label: "Your Niche",
				name: "niche",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Web Design, SaaS Development",
				validation: {
					maxLength: 50,
				},
			},
		],
	},
	{
		id: "untapped-topics",
		name: "Untapped Topics Finder",
		description:
			"Uncover hidden gems and fresh perspectives that no one else is talking about in your industry. Perfect for carving out a unique content niche and establishing thought leadership.",
		slug: "untapped-topics",
		category: "Content Ideas",
		icon: "EyeOff",
		color: "#007BFF",
		aiPrompt:
			"What are 10 things no one is talking about in the niche of {niche}? Focus on emerging trends, overlooked aspects, or counterintuitive insights.",
		features: [
			"Finds fresh, unexplored content angles",
			"Identifies niche opportunities",
			"Positions you as a thought leader",
			"Sparks original content creation",
		],
		tags: [
			"content-ideas",
			"untapped",
			"niche",
			"thought-leadership",
			"originality",
		],
		formFields: [
			{
				label: "Your Niche",
				name: "niche",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Web Design, SaaS Development",
				validation: {
					maxLength: 50,
				},
			},
		],
	},
	{
		id: "monetization-planner",
		name: "Monetization Blueprint",
		description:
			"Craft a strategic roadmap for monetizing your online business, outlining key platforms, content strategies, and revenue streams tailored to your niche.",
		slug: "monetization-planner",
		category: "Business Strategy",
		icon: "CreditCard",
		color: "#28A745",
		aiPrompt:
			"Create a comprehensive monetization strategy for a business in the niche of {niche}. Include recommended platforms, content pillars, initial monetization methods (months 0-3), short-term methods (months 3-6), and long-term methods (6+ months). Also, suggest 10 content ideas tailored to each stage.",
		features: [
			"Develops a multi-stage monetization plan",
			"Identifies suitable platforms and content strategies",
			"Outlines short-term and long-term revenue streams",
			"Provides actionable content ideas for each phase",
		],
		tags: [
			"monetization",
			"business-strategy",
			"content-strategy",
			"revenue",
			"growth",
		],
		formFields: [
			{
				label: "Your Niche",
				name: "niche",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Web Design, SaaS Development",
				validation: {
					maxLength: 50,
				},
			},
		],
	},
	{
		id: "content-machine",
		name: "AI Content Machine",
		description:
			"Generate a detailed content plan complete with sub-niches, keyword ideas, article outlines, and even paragraph drafts, all tailored to your chosen topic.",
		slug: "content-machine",
		category: "Content Creation",
		icon: "Robot",
		color: "#DC3545",
		aiPrompt:
			"I want to create a content plan for the niche of {niche}. \
       1. **Identify Sub-Niches:** Suggest 5 sub-niches within {niche}. \
       2. **Keyword Research:**  For each sub-niche, provide 2 pillar post titles and 15 informational keyword ideas and 5 transactional keyword ideas.  \
       3. **Outline Generator:** Let me choose a keyword from the list, and you'll create a detailed outline for an article on that topic. \
       4. **Paragraph Writer:**  I'll provide a heading from the outline, and you'll write a paragraph of content for it.",
		features: [
			"Identifies relevant sub-niches",
			"Generates targeted keyword ideas",
			"Creates detailed article outlines",
			"Writes content paragraphs based on headings",
		],
		tags: [
			"content-creation",
			"content-plan",
			"keywords",
			"outlines",
			"blog-posts",
			"articles",
		],
		formFields: [
			{
				label: "Your Niche",
				name: "niche",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Web Design, SaaS Development",
				validation: {
					maxLength: 50,
				},
			},
		],
	},
	{
		id: "expert-proof-showcase",
		name: "Expert Proof Showcase",
		description:
			"Demonstrate your expertise through detailed breakdowns and analysis of your field, showing rather than telling your capabilities",
		slug: "expert-proof-showcase",
		category: "social-media",
		icon: "BarChart2",
		color: "#0A66C2",
		aiPrompt:
			"Create a detailed LinkedIn post that demonstrates expertise in {expertiseArea} through analysis of {caseStudyTopic}, highlighting specific insights and actionable takeaways.",
		features: [
			"Expertise demonstration",
			"Practical analysis",
			"Industry insights",
			"Actionable takeaways",
			"Professional credibility building",
		],
		tags: [
			"expertise",
			"analysis",
			"industry-insights",
			"professional-tips",
		],
		formFields: [
			{
				label: "Area of Expertise",
				name: "expertiseArea",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "CFO/Financial Analysis", value: "finance" },
					{ label: "Wealth Management", value: "wealth-management" },
					{ label: "Design", value: "design" },
					{ label: "Content Writing", value: "writing" },
					{ label: "CRO/Conversion", value: "cro" },
					{ label: "Business Coaching", value: "business-coaching" },
					{ label: "Other", value: "other" },
				],
			},
			{
				label: "Case Study Topic",
				name: "caseStudyTopic",
				type: "textarea",
				required: true,
				order: 2,
				helpText: "What specific example or case will you analyze?",
				validation: {
					maxLength: 300,
				},
			},
			{
				label: "Key Findings",
				name: "keyFindings",
				type: "textarea",
				required: true,
				order: 3,
				helpText: "List 3-5 key insights from your analysis",
				validation: {
					maxLength: 500,
				},
			},
			{
				label: "Include Technical Details",
				name: "includeTechnical",
				type: "checkbox",
				required: false,
				order: 4,
				helpText: "Include specific technical analysis in your post?",
			},
			{
				label: "Call-to-Action Type",
				name: "ctaType",
				type: "select",
				required: true,
				order: 5,
				options: [
					{ label: "Request Consultation", value: "consult" },
					{ label: "Download Resource", value: "resource" },
					{ label: "Follow for More", value: "follow" },
					{ label: "Connect", value: "connect" },
				],
			},
		],
	},
	{
		id: "ai-breakthrough-spotlight",
		name: "AI Breakthrough Spotlight",
		description:
			"Create viral LinkedIn posts about latest AI developments and their practical applications for businesses.",
		slug: "ai-breakthrough-spotlight",
		category: "Tech Innovation",
		icon: "BrainCircuit",
		color: "text-purple-500",
		aiPrompt: `Create a compelling LinkedIn post about {aiTechnology} and its impact on {industry}.

 Key sections to cover:

 1. 🚀 Innovation Overview: {keyInnovation}

 2. 💡 Business Applications: {businessUse}

 3. 🔮 Future Implications: {futureImpact}

 Include {dataPoint} statistics/case studies.

 Target audience: {targetAudience}

 Call-to-action: {cta}

 Tone: {contentStyle}`,
		features: [
			"AI trend analysis",
			"Business impact focus",
			"Data-backed insights",
			"Future predictions",
			"Industry-specific applications",
		],
		tags: ["ai", "technology", "innovation", "business", "future-tech"],
		formFields: [
			{
				label: "AI Technology",
				name: "aiTechnology",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Industry Focus",
				name: "industry",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "SaaS", value: "saas" },
					{ label: "E-commerce", value: "ecommerce" },
					{ label: "Finance", value: "finance" },
					{ label: "Healthcare", value: "healthcare" },
				],
			},
			{
				label: "Key Innovation",
				name: "keyInnovation",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Business Use Case",
				name: "businessUse",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Future Impact",
				name: "futureImpact",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Data Point/Case Study",
				name: "dataPoint",
				type: "text",
				required: true,
				order: 6,
			},
			{
				label: "Target Audience",
				name: "targetAudience",
				type: "select",
				required: true,
				order: 7,
				options: [
					{ label: "C-Suite Executives", value: "executives" },
					{ label: "Tech Decision Makers", value: "decision-makers" },
					{ label: "Developers", value: "developers" },
					{ label: "Entrepreneurs", value: "entrepreneurs" },
				],
			},
			{
				label: "Call-to-Action",
				name: "cta",
				type: "text",
				required: true,
				order: 8,
			},
			{
				label: "Content Style",
				name: "contentStyle",
				type: "select",
				required: true,
				order: 9,
				options: [
					{
						label: "Thought Leadership",
						value: "thought-leadership",
					},
					{ label: "Educational", value: "educational" },
					{ label: "Visionary", value: "visionary" },
				],
			},
		],
	},
	{
		id: "7",
		name: "Micro-SaaS Opportunity Scanner",
		description:
			"Identify untapped micro-SaaS opportunities by analyzing friction points in existing workflows and processes within specific industries.",
		slug: "micro-saas-scanner",
		category: "Business Opportunities",
		icon: "Telescope",
		color: "#9B59B6",
		aiPrompt: `Analyze the {industry} industry to identify potential micro-SaaS opportunities:

  1. Pain Points Analysis: List 5 common workflow frustrations in {specificRole}
  2. Market Gap Assessment: For each pain point, evaluate existing solutions and their limitations
  3. Solution Blueprint: Outline a potential micro-SaaS product addressing the most promising gap
  4. MVP Features: List core features for a minimum viable product
  5. Growth Strategy: Suggest distribution channels and initial marketing approaches
  6. Revenue Model: Propose pricing structure and potential revenue streams`,
		features: [
			"Identifies niche market opportunities",
			"Analyzes competitor gaps",
			"Provides MVP roadmap",
			"Suggests go-to-market strategies",
			"Outlines revenue models",
		],
		tags: [
			"micro-saas",
			"business-opportunities",
			"market-analysis",
			"mvp",
			"startup",
		],
		formFields: [
			{
				label: "Industry",
				name: "industry",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Real Estate", value: "real-estate" },
					{ label: "Legal", value: "legal" },
					{ label: "Healthcare", value: "healthcare" },
					{ label: "Education", value: "education" },
					{ label: "Retail", value: "retail" },
				],
			},
			{
				label: "Specific Role/Position",
				name: "specificRole",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Real Estate Agent, Legal Assistant, Teacher",
			},
		],
	},
	{
		id: "8",
		name: "Viral Hook Matrix",
		description:
			"Generate powerful hook variations for your content using proven psychological triggers and viral mechanics.",
		slug: "viral-hook-matrix",
		category: "Content Strategy",
		icon: "Magnet",
		color: "#E74C3C",
		aiPrompt: `Create a matrix of viral hooks for {contentTopic} using these frameworks:

  1. Curiosity Gaps: Generate 5 hooks using information asymmetry
  2. Pattern Interrupts: Create 5 hooks that challenge common beliefs
  3. Identity Triggers: Develop 5 hooks that resonate with {targetIdentity}
  4. Status Play: Design 5 hooks leveraging social proof or status
  5. Transformation Promise: Craft 5 hooks showcasing before/after scenarios

  Format each hook for {platform} with appropriate tone and style.`,
		features: [
			"Psychological trigger mapping",
			"Platform-specific formatting",
			"Identity-based messaging",
			"Social proof integration",
			"Multiple hook variations",
		],
		tags: [
			"viral-content",
			"hooks",
			"psychology",
			"social-media",
			"engagement",
		],
		formFields: [
			{
				label: "Content Topic",
				name: "contentTopic",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Target Identity",
				name: "targetIdentity",
				type: "text",
				required: true,
				order: 2,
				helpText:
					"e.g., Ambitious Entrepreneurs, Working Parents, Tech Leaders",
			},
			{
				label: "Platform",
				name: "platform",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "Twitter/X", value: "twitter" },
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "TikTok", value: "tiktok" },
					{ label: "Instagram", value: "instagram" },
				],
			},
		],
	},
	{
		id: "9",
		name: "Future Skills Roadmap",
		description:
			"Create a personalized learning pathway to future-proof your career based on industry trends and emerging technologies.",
		slug: "future-skills-roadmap",
		category: "Career Development",
		icon: "Map",
		color: "#3498DB",
		aiPrompt: `Design a future skills roadmap for {currentRole} transitioning into {futureRole}:

  1. Skills Gap Analysis: Compare current skills vs. future requirements
  2. Technology Trends: Identify emerging tools and technologies in {industry}
  3. Learning Pathway: Create 6-month, 1-year, and 2-year milestone plans
  4. Resource Guide: Recommend specific courses, certifications, and projects
  5. Application Strategy: Suggest real-world practice opportunities
  6. Network Building: Identify key communities and connections to develop`,
		features: [
			"Personalized skill assessment",
			"Trend-based planning",
			"Structured learning paths",
			"Resource curation",
			"Network development strategy",
		],
		tags: [
			"career-development",
			"skills",
			"learning",
			"future-proof",
			"professional-growth",
		],
		formFields: [
			{
				label: "Current Role",
				name: "currentRole",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Desired Future Role",
				name: "futureRole",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Industry",
				name: "industry",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "Technology", value: "tech" },
					{ label: "Finance", value: "finance" },
					{ label: "Healthcare", value: "healthcare" },
					{ label: "Creative", value: "creative" },
				],
			},
		],
	},
	{
		id: "10",
		name: "AI Tool Stack Architect",
		description:
			"Design a customized AI tool stack that automates and enhances your workflow, maximizing productivity while minimizing costs.",
		slug: "ai-stack-architect",
		category: "Productivity",
		icon: "Layers",
		color: "#1ABC9C",
		aiPrompt: `Create an optimized AI tool stack for {roleType} in {industry}:

  1. Workflow Analysis: Map current workflow and identify automation opportunities
  2. Tool Categories: Break down required AI capabilities for {keyTasks}
  3. Tool Selection: Recommend specific AI tools for each category with pricing
  4. Integration Plan: Design workflow connecting selected tools
  5. Cost-Benefit Analysis: Calculate potential time savings vs. tool costs
  6. Implementation Roadmap: Prioritized adoption schedule
  7. Backup Options: Alternative tools for each category`,
		features: [
			"Personalized tool recommendations",
			"Cost optimization",
			"Workflow integration",
			"ROI calculation",
			"Implementation strategy",
		],
		tags: [
			"ai-tools",
			"productivity",
			"automation",
			"workflow",
			"technology",
		],
		formFields: [
			{
				label: "Role Type",
				name: "roleType",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Content Creator, Sales Manager, Developer",
			},
			{
				label: "Industry",
				name: "industry",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Marketing", value: "marketing" },
					{ label: "Software", value: "software" },
					{ label: "Creative", value: "creative" },
					{ label: "Business", value: "business" },
				],
			},
			{
				label: "Key Tasks",
				name: "keyTasks",
				type: "textarea",
				required: true,
				order: 3,
				helpText: "List your main recurring tasks",
			},
		],
	},
	{
		id: "11",
		name: "Community Catalyst Blueprint",
		description:
			"Create a strategic plan to build and nurture a thriving community around your brand or product, focusing on organic growth and engagement.",
		slug: "community-catalyst",
		category: "Community Building",
		icon: "Users",
		color: "#F39C12",
		aiPrompt: `Design a community building strategy for {communityType} with {communityGoal}:

  1. Community Identity: Define core values, mission, and unique positioning
  2. Platform Strategy: Select and optimize primary and secondary platforms
  3. Content Calendar: Design engagement-focused content themes and cadence
  4. Ritual Design: Create community rituals and recurring events
  5. Growth Mechanics: Develop organic growth and referral systems
  6. Value Loop: Map value creation for both community and business
  7. Moderation Framework: Establish guidelines and processes
  8. Metrics Dashboard: Define success metrics and tracking methods`,
		features: [
			"Community strategy development",
			"Platform selection",
			"Engagement planning",
			"Growth optimization",
			"Governance framework",
		],
		tags: ["community", "engagement", "growth", "brand-building", "social"],
		formFields: [
			{
				label: "Community Type",
				name: "communityType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Product Users", value: "product" },
					{ label: "Professional Network", value: "professional" },
					{ label: "Learning Community", value: "learning" },
					{ label: "Creator Community", value: "creator" },
				],
			},
			{
				label: "Primary Community Goal",
				name: "communityGoal",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Product Feedback", value: "feedback" },
					{ label: "Knowledge Sharing", value: "knowledge" },
					{ label: "Network Building", value: "network" },
					{ label: "Support System", value: "support" },
				],
			},
		],
	},
	{
		id: "12",
		name: "Narrative Intelligence Engine",
		description:
			"Transform complex data and insights into compelling narratives that capture attention and drive action.",
		slug: "narrative-intelligence",
		category: "Communication",
		icon: "BookOpen",
		color: "#8E44AD",
		aiPrompt: `Create a narrative framework for {dataType} targeting {audience}:

  1. Story Architecture: Structure data narrative with clear arc
  2. Data Visualization: Recommend visualization approaches for key metrics
  3. Emotional Hooks: Identify human elements in the data
  4. Insight Layering: Structure insights from surface to deep analysis
  5. Action Triggers: Create compelling calls-to-action
  6. Format Variations: Adapt story for {contentFormat}
  7. Supporting Elements: Suggest metaphors, analogies, and examples
  8. Distribution Strategy: Map channels and timing for maximum impact`,
		features: [
			"Data storytelling",
			"Visual narrative design",
			"Emotional engagement",
			"Multi-format adaptation",
			"Distribution planning",
		],
		tags: [
			"storytelling",
			"data",
			"communication",
			"content-strategy",
			"engagement",
		],
		formFields: [
			{
				label: "Data Type",
				name: "dataType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Business Metrics", value: "business" },
					{ label: "Research Findings", value: "research" },
					{ label: "Market Trends", value: "market" },
					{ label: "User Behavior", value: "user" },
				],
			},
			{
				label: "Target Audience",
				name: "audience",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Executive Team, Investors, Customers",
			},
			{
				label: "Content Format",
				name: "contentFormat",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "Presentation", value: "presentation" },
					{ label: "Report", value: "report" },
					{ label: "Social Media", value: "social" },
					{ label: "Newsletter", value: "newsletter" },
				],
			},
		],
	},
	{
		id: "13",
		name: "SaaS Growth Architect",
		description:
			"Develop a strategic blueprint to drive user acquisition, engagement, and retention for your SaaS product, emphasizing organic and cost-efficient growth strategies.",
		slug: "saas-growth-architect",
		category: "Growth Strategy",
		icon: "TrendingUp",
		color: "#27AE60",
		aiPrompt:
			"Design a SaaS growth strategy for {productType} in {targetMarket}:\n\n1. Audience Profiling: Identify target personas and pain points\n2. Value Proposition: Distill product’s unique selling points (USPs)\n3. Onboarding Flow: Optimize onboarding steps for user activation\n4. Retention Tactics: Recommend tactics to boost user retention\n5. Viral Loops: Develop strategies for organic referral growth\n6. Feedback Loop: Create mechanisms for user feedback integration\n7. Performance Metrics: Define key metrics for tracking growth success\n8. Expansion Roadmap: Outline stages for scaling in {targetMarket}",
		features: [
			"Audience analysis",
			"Onboarding optimization",
			"Retention tactics",
			"Growth hacking",
			"Performance tracking",
		],
		tags: [
			"saas",
			"growth-strategy",
			"user-acquisition",
			"engagement",
			"retention",
		],
		formFields: [
			{
				label: "Product Type",
				name: "productType",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., CRM tool, Analytics software",
			},
			{
				label: "Target Market",
				name: "targetMarket",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Small businesses, Enterprises",
			},
		],
	},
	{
		id: "14",
		name: "Developer Productivity Enhancer",
		description:
			"Create a tailored productivity stack for developers that automates repetitive tasks, streamlines workflows, and maximizes focus time.",
		slug: "dev-productivity-enhancer",
		category: "Productivity",
		icon: "Code",
		color: "#3498DB",
		aiPrompt:
			"Develop a productivity optimization stack for {devRole} working on {projectType}:\n\n1. Workflow Analysis: Map current workflow and identify bottlenecks\n2. Task Automation: Recommend tools to automate repetitive coding tasks\n3. Code Quality: Suggest tools and practices to enhance code quality\n4. Knowledge Management: Implement systems for knowledge sharing and documentation\n5. Time Management: Recommend strategies and tools for deep work sessions\n6. Collaboration Tools: Identify tools to improve team collaboration\n7. Performance Tracking: Define productivity metrics and tracking tools\n8. Resource Optimization: Ensure minimal costs while maximizing productivity",
		features: [
			"Workflow mapping",
			"Task automation",
			"Code quality enhancement",
			"Time management",
			"Collaboration tools",
		],
		tags: [
			"developer-tools",
			"productivity",
			"automation",
			"workflow",
			"code-quality",
		],
		formFields: [
			{
				label: "Developer Role",
				name: "devRole",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Frontend Developer", value: "frontend" },
					{ label: "Backend Developer", value: "backend" },
					{ label: "Full Stack Developer", value: "fullstack" },
					{ label: "DevOps Engineer", value: "devops" },
				],
			},
			{
				label: "Project Type",
				name: "projectType",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., E-commerce platform, AI-powered application",
			},
		],
	},
	{
		id: "15",
		name: "Marketing Funnel Optimizer",
		description:
			"Develop an optimized marketing funnel strategy that converts leads into loyal customers, focusing on personalized and data-driven campaigns.",
		slug: "marketing-funnel-optimizer",
		category: "Marketing",
		icon: "ChartPieIcon",
		color: "#E74C3C",
		aiPrompt:
			"Create a marketing funnel strategy for {businessType} targeting {customerType}:\n\n1. Audience Segmentation: Identify and segment target audiences\n2. Lead Generation: Recommend channels for lead acquisition\n3. Content Strategy: Design targeted content for each stage of the funnel\n4. Lead Nurturing: Develop automated sequences to engage leads\n5. Conversion Optimization: Optimize landing pages and CTAs\n6. Retention Strategy: Implement post-conversion engagement tactics\n7. Performance Metrics: Define KPIs and analytics for each funnel stage\n8. ROI Analysis: Estimate expected return on marketing investments",
		features: [
			"Audience segmentation",
			"Lead generation channels",
			"Content creation",
			"Conversion tactics",
			"Analytics and tracking",
		],
		tags: [
			"marketing",
			"funnel",
			"lead-generation",
			"conversion",
			"analytics",
		],
		formFields: [
			{
				label: "Business Type",
				name: "businessType",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., E-commerce, SaaS",
			},
			{
				label: "Customer Type",
				name: "customerType",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Small business owners, Enterprise clients",
			},
		],
	},
	{
		id: "16",
		name: "DevOps Efficiency Maximizer",
		description:
			"Optimize DevOps workflows with a custom tool stack designed to streamline deployments, improve infrastructure reliability, and enhance team collaboration.",
		slug: "devops-efficiency-maximizer",
		category: "Productivity",
		icon: "Server",
		color: "#9B59B6",
		aiPrompt:
			"Develop a DevOps efficiency stack for {projectType} on {infrastructure}:\n\n1. Infrastructure Analysis: Assess current infrastructure and workflows\n2. CI/CD Tools: Recommend tools for streamlined continuous integration/deployment\n3. Monitoring and Logging: Suggest tools for real-time monitoring and logging\n4. Collaboration: Enhance collaboration between DevOps and dev teams\n5. Automation: Identify tasks suitable for automation and recommend tools\n6. Security: Suggest tools for enforcing security protocols\n7. Performance Metrics: Define KPIs for deployment speed and reliability\n8. Cost Optimization: Recommend ways to optimize costs while maintaining quality",
		features: [
			"CI/CD optimization",
			"Infrastructure monitoring",
			"Automation and security",
			"Collaboration improvement",
			"Cost-saving strategies",
		],
		tags: ["devops", "ci-cd", "automation", "monitoring", "cloud"],
		formFields: [
			{
				label: "Project Type",
				name: "projectType",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Microservices application, E-commerce platform",
			},
			{
				label: "Infrastructure",
				name: "infrastructure",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., AWS, Azure, Kubernetes",
			},
		],
	},
	{
		id: "17",
		name: "AI-Powered Content Marketer",
		description:
			"Create an AI-enhanced content marketing strategy that uses data insights to drive engagement and conversions.",
		slug: "ai-content-marketer",
		category: "Marketing",
		icon: "PenTool",
		color: "#2ECC71",
		aiPrompt:
			"Design a content marketing strategy using AI for {businessType} targeting {audience}:\n\n1. Audience Insights: Use AI to segment and understand audience preferences\n2. Content Ideation: Generate data-driven content ideas\n3. Content Creation: Recommend tools to assist with content generation and curation\n4. Personalization: Implement AI to deliver personalized content experiences\n5. Distribution Strategy: Plan distribution across optimal channels\n6. Engagement Optimization: Use AI to track and boost engagement metrics\n7. Conversion Tactics: Design tactics to drive conversions\n8. Analytics: Define success metrics and AI-powered analytics for tracking",
		features: [
			"Audience insights",
			"Content ideation",
			"AI-powered content generation",
			"Personalized engagement",
			"Conversion and analytics",
		],
		tags: [
			"content-marketing",
			"ai",
			"engagement",
			"personalization",
			"analytics",
		],
		formFields: [
			{
				label: "Business Type",
				name: "businessType",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., SaaS, E-commerce, Consulting",
			},
			{
				label: "Target Audience",
				name: "audience",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Small businesses, Technology enthusiasts",
			},
		],
	},
	{
		id: "18",
		name: "AI Model Selection Assistant",
		description:
			"Find the right AI model for your project, balancing performance, scalability, and cost-effectiveness.",
		slug: "ai-model-selection",
		category: "Data Science",
		icon: "Brain",
		color: "#E67E22",
		aiPrompt:
			"Create an AI model recommendation for {useCase} in {industry}:\n\n1. Requirements Analysis: Identify key needs and performance expectations\n2. Model Options: Suggest models that fit the specified use case\n3. Training Data: Outline training data requirements for optimal model performance\n4. Scalability: Assess model scalability options\n5. Cost Analysis: Provide cost estimates and infrastructure needs\n6. Evaluation Metrics: Define success metrics for model evaluation\n7. Deployment Plan: Recommend deployment methods and tools\n8. Risk Mitigation: Identify risks and suggest mitigation strategies",
		features: [
			"Model selection",
			"Cost analysis",
			"Scalability assessment",
			"Success metrics",
			"Deployment plan",
		],
		tags: [
			"ai",
			"machine-learning",
			"model-selection",
			"data-science",
			"scalability",
		],
		formFields: [
			{
				label: "Use Case",
				name: "useCase",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Predictive analytics, Image recognition",
			},
			{
				label: "Industry",
				name: "industry",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Healthcare, Finance, Retail",
			},
		],
	},
	{
		id: "19",
		name: "Customer Support AI Enhancer",
		description:
			"Implement an AI-driven customer support strategy, enhancing responsiveness and improving customer satisfaction.",
		slug: "customer-support-ai",
		category: "Customer Service",
		icon: "Headphones",
		color: "#1ABC9C",
		aiPrompt:
			"Build an AI-enhanced support strategy for {companyType} focused on {supportGoal}:\n\n1. Support Analysis: Assess current support workflows and response times\n2. Chatbot Setup: Recommend chatbot tools for common queries\n3. Sentiment Analysis: Use AI to gauge customer sentiment\n4. Ticket Prioritization: Implement AI-driven ticketing system\n5. Self-Service Options: Design a knowledge base with AI support\n6. Analytics: Set up metrics to track response time, resolution rate, and satisfaction\n7. Personalization: Provide AI-based personalization for high-value customers\n8. Training: Define training for support staff to maximize AI tool use",
		features: [
			"Chatbot integration",
			"Sentiment analysis",
			"Ticket prioritization",
			"Self-service setup",
			"Performance analytics",
		],
		tags: [
			"customer-support",
			"ai",
			"chatbots",
			"analytics",
			"customer-satisfaction",
		],
		formFields: [
			{
				label: "Company Type",
				name: "companyType",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., E-commerce, SaaS, Telecom",
			},
			{
				label: "Primary Support Goal",
				name: "supportGoal",
				type: "select",
				required: true,
				order: 2,
				options: [
					{ label: "Faster response times", value: "response-time" },
					{
						label: "Improved resolution rates",
						value: "resolution-rate",
					},
					{
						label: "Higher customer satisfaction",
						value: "customer-satisfaction",
					},
				],
			},
		],
	},
	{
		id: "20",
		name: "Facebook Group Engagement Builder",
		description:
			"Maximize engagement within Facebook groups by creating valuable, client-attracting content and automating interactions for stronger lead generation.",
		slug: "facebook-group-engagement",
		category: "Social Media Marketing",
		icon: "Users",
		color: "#3B5998",
		aiPrompt:
			"Create an engagement strategy for Facebook groups targeting {audienceType}:\n\n1. Audience Insights: Analyze group demographics and interests\n2. Content Themes: Develop content themes relevant to group members’ needs\n3. Engagement Triggers: Plan posts to prompt comments, shares, and feedback\n4. Consistency Schedule: Create a content calendar with optimal post timings\n5. Automation Tools: Suggest tools to manage and schedule content\n6. Conversion Strategy: Design subtle CTAs that encourage direct messages\n7. Lead Tracking: Set up a system for tracking potential leads\n8. Community Building: Outline steps to establish trust and build authority",
		features: [
			"Audience analysis",
			"Content planning",
			"Engagement optimization",
			"Lead generation tracking",
			"Authority building",
		],
		tags: [
			"facebook-groups",
			"engagement",
			"lead-generation",
			"social-media",
			"content-creation",
		],
		formFields: [
			{
				label: "Target Audience Type",
				name: "audienceType",
				type: "text",
				required: true,
				order: 1,
				helpText:
					"e.g., Small business owners, E-commerce entrepreneurs, Freelancers",
			},
		],
	},
	{
		id: "21",
		name: "Client Lead Magnet Content Generator",
		description:
			"Design high-value content that positions you as a Next.js expert, attracting potential clients through educational and actionable content.",
		slug: "client-lead-magnet",
		category: "Content Marketing",
		icon: "Clipboard",
		color: "#3498DB",
		aiPrompt:
			"Generate a client-attracting content plan for {platform} aimed at {targetAudience}:\n\n1. Key Topics: Identify pain points and topics of interest for {targetAudience}\n2. Educational Content: Design tutorials, tips, and case studies to showcase your expertise\n3. Lead Magnets: Create downloadable guides, checklists, or templates\n4. Engagement Calls-to-Action: Develop CTAs that guide followers to DM for services\n5. Frequency Plan: Create a posting schedule to maintain visibility\n6. Platform-Specific Strategy: Optimize content formats for {platform}\n7. Analytics: Define metrics to track engagement and client interest\n8. Personal Branding: Outline tone and style guidelines to establish authority",
		features: [
			"Lead-generating content",
			"Pain-point targeting",
			"Platform optimization",
			"Engagement CTAs",
			"Personal branding",
		],
		tags: [
			"lead-magnet",
			"content-marketing",
			"nextjs",
			"client-attraction",
			"branding",
		],
		formFields: [
			{
				label: "Platform",
				name: "platform",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Facebook", value: "facebook" },
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Twitter", value: "twitter" },
				],
			},
			{
				label: "Target Audience",
				name: "targetAudience",
				type: "text",
				required: true,
				order: 2,
				helpText:
					"e.g., SaaS founders, small business owners, e-commerce startups",
			},
		],
	},
	{
		id: "22",
		name: "Niche Client Content Strategy for Developers",
		description:
			"Create a content strategy to connect with niche clients interested in Next.js and web development, focusing on their specific industry needs.",
		slug: "niche-client-content",
		category: "Content Marketing",
		icon: "Target",
		color: "#E74C3C",
		aiPrompt:
			"Develop a content plan to target {clientIndustry} clients as a Next.js developer:\n\n1. Industry Research: Highlight trends and pain points in {clientIndustry}\n2. Solution Showcases: Present Next.js solutions relevant to industry problems\n3. Content Types: Use tutorials, case studies, and feature highlights\n4. Value-Driven Content: Emphasize value in speed, SEO, and scalability\n5. Distribution Channels: Identify where target clients spend time online\n6. Portfolio CTAs: Showcase your past work with clear CTAs for inquiries\n7. Testimonials and Case Studies: Use social proof to build trust\n8. Interaction Strategy: Create a method to encourage comments, DMs, and leads",
		features: [
			"Industry-specific insights",
			"Solution-focused content",
			"Lead-generating CTAs",
			"Portfolio promotion",
			"Social proof",
		],
		tags: [
			"content-strategy",
			"nextjs",
			"client-attraction",
			"industry-specific",
			"lead-generation",
		],
		formFields: [
			{
				label: "Client Industry",
				name: "clientIndustry",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Real Estate, Education, E-commerce",
			},
		],
	},
	{
		id: "23",
		name: "Cold Outreach Message Generator",
		description:
			"Generate impactful and customized cold outreach messages that connect with potential clients in a meaningful way.",
		slug: "cold-outreach-messages",
		category: "Sales",
		icon: "Mail",
		color: "#2980B9",
		aiPrompt:
			"Create a cold outreach message for {clientType} in {industry} highlighting {serviceOffer}:\n\n1. Pain Point Identification: Identify the client’s pain points in {industry}\n2. Service Introduction: Briefly introduce {serviceOffer} as a solution\n3. Value Proposition: Describe the unique benefits of your services\n4. Call-to-Action: Provide a subtle, non-intrusive call to schedule a call\n5. Social Proof: Include a brief testimonial or result if applicable\n6. Personalization Tips: Add hints to personalize based on the client’s profile\n7. Follow-Up Plan: Design a follow-up message template for further engagement\n8. Feedback Loop: Request feedback on how the message resonates with clients",
		features: [
			"Pain point targeting",
			"Value-driven service intro",
			"Personalization",
			"Subtle CTA",
			"Follow-up template",
		],
		tags: [
			"outreach",
			"lead-generation",
			"cold-messaging",
			"sales",
			"client-acquisition",
		],
		formFields: [
			{
				label: "Client Type",
				name: "clientType",
				type: "text",
				required: true,
				order: 1,
				helpText: "e.g., Small business owner, Startup founder",
			},
			{
				label: "Industry",
				name: "industry",
				type: "text",
				required: true,
				order: 2,
				helpText: "e.g., Retail, SaaS, Real Estate",
			},
			{
				label: "Service Offer",
				name: "serviceOffer",
				type: "text",
				required: true,
				order: 3,
				helpText: "e.g., Next.js website development, SEO optimization",
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
