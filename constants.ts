import { MicrophoneIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import {
	BarChart4,
	Box,
	BrainCircuit,
	BriefcaseIcon,
	CloudLightning,
	CodeIcon,
	Home,
	History,
	CreditCard,
	MessageCircleQuestionIcon,
	User,
	Code,
	Leaf,
	Lightbulb,
	Linkedin,
	Rocket,
	Briefcase,
	Puzzle,
	BookOpen,
	Calendar,
	MegaphoneIcon,
	TargetIcon,
	Users,
	WeightIcon,
} from "lucide-react";
import { RocketIcon, BrainCircuitIcon, TrendingUpIcon } from "lucide-react";

import { Template } from "./types";
import { IoSpeedometer } from "react-icons/io5";
export const MAX_FREE_COUNTS = 10;

export const routes = [
	{
		label: "Dashboard",
		icon: Home,
		href: "/dashboard",
		color: "text-green-500",
	},
	{
		label: "Planner",
		icon: Calendar,
		href: "/dashboard/planner",
		color: "text-yellow-500",
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
		id: "1",
		name: "AI Breakthrough Spotlight",
		description:
			"Create viral LinkedIn posts about latest AI developments and their practical applications for businesses.",
		slug: "ai-breakthrough-spotlight",
		category: "Tech Innovation",
		imageUrl: "/templates/ai-spotlight.jpg",
		icon: BrainCircuitIcon,
		color: "text-purple-500",
		bgColor: "bg-purple-100",
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
		id: "2",
		name: "SaaS Launch Rocket",
		description:
			"Generate powerful Twitter threads announcing your SaaS product features and updates.",
		slug: "saas-launch-rocket",
		category: "Product Marketing",
		imageUrl: "/templates/saas-launch.jpg",
		icon: RocketIcon,
		color: "text-blue-500",
		bgColor: "bg-blue-100",
		aiPrompt: `Create a {threadLength}-tweet thread announcing {featureName} for {productName}.

  Hook: {hook}

  Key points to cover:
  1. 🎯 Problem solved: {problemSolved}
  2. ⚡️ Core features: {coreFeatures}
  3. 💪 Benefits: {keyBenefits}
  4. 🎉 Launch offer: {launchOffer}

  Include {socialProof}
  End with: {callToAction}

  Style: {threadStyle}`,
		features: [
			"Feature announcement",
			"Problem-solution format",
			"Social proof integration",
			"Launch offers",
			"Engagement hooks",
		],
		tags: [
			"saas",
			"product-launch",
			"feature-announcement",
			"twitter",
			"marketing",
		],
		formFields: [
			{
				label: "Feature Name",
				name: "featureName",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Product Name",
				name: "productName",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Hook",
				name: "hook",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Problem Solved",
				name: "problemSolved",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Core Features",
				name: "coreFeatures",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Key Benefits",
				name: "keyBenefits",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Launch Offer",
				name: "launchOffer",
				type: "text",
				required: true,
				order: 7,
			},
			{
				label: "Social Proof",
				name: "socialProof",
				type: "text",
				required: true,
				order: 8,
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 9,
			},
			{
				label: "Thread Length",
				name: "threadLength",
				type: "select",
				required: true,
				order: 10,
				options: [
					{ label: "Short (5 tweets)", value: "5" },
					{ label: "Medium (8 tweets)", value: "8" },
					{ label: "Long (12 tweets)", value: "12" },
				],
			},
			{
				label: "Thread Style",
				name: "threadStyle",
				type: "select",
				required: true,
				order: 11,
				options: [
					{ label: "Technical Deep-dive", value: "technical" },
					{ label: "User-focused Story", value: "story" },
					{ label: "Problem-Solution", value: "solution" },
				],
			},
		],
	},
	{
		id: "3",
		name: "Tech Stack Showcase",
		description:
			"Create detailed Twitter threads or LinkedIn posts about your development stack and architecture decisions.",
		slug: "tech-stack-showcase",
		category: "Technical Content",
		imageUrl: "/templates/tech-stack.jpg",
		icon: MessageCircleQuestionIcon,
		color: "text-emerald-500",
		bgColor: "bg-emerald-100",
		aiPrompt: `Create a {contentType} about building {projectType} with {mainTechnology}.

  Architecture Overview:
  1. 🏗 Infrastructure: {infrastructure}
  2. 🔧 Core Technologies: {coreTech}
  3. 📈 Performance Metrics: {metrics}

  Technical Decisions:
  - Why we chose: {techDecisions}
  - Challenges faced: {challenges}
  - Solutions implemented: {solutions}

  Include {codeExample} if relevant
  Performance Impact: {impact}
  Call-to-action: {cta}`,
		features: [
			"Architecture breakdowns",
			"Performance metrics",
			"Code examples",
			"Decision explanations",
			"Technical deep-dives",
		],
		tags: [
			"development",
			"architecture",
			"tech-stack",
			"engineering",
			"performance",
		],
		formFields: [
			{
				label: "Content Type",
				name: "contentType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Twitter Thread", value: "thread" },
					{ label: "LinkedIn Article", value: "article" },
				],
			},
			{
				label: "Project Type",
				name: "projectType",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Main Technology",
				name: "mainTechnology",
				type: "text",
				required: true,
				order: 3,
			},
			{
				label: "Infrastructure Details",
				name: "infrastructure",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Core Technologies",
				name: "coreTech",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Performance Metrics",
				name: "metrics",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Technical Decisions",
				name: "techDecisions",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Challenges Faced",
				name: "challenges",
				type: "textarea",
				required: true,
				order: 8,
			},
			{
				label: "Solutions",
				name: "solutions",
				type: "textarea",
				required: true,
				order: 9,
			},
			{
				label: "Code Example Description",
				name: "codeExample",
				type: "text",
				required: true,
				order: 10,
			},
			{
				label: "Performance Impact",
				name: "impact",
				type: "textarea",
				required: true,
				order: 11,
			},
			{
				label: "Call to Action",
				name: "cta",
				type: "text",
				required: true,
				order: 12,
			},
		],
	},
	{
		id: "4",
		name: "Growth Metrics Mastery",
		description:
			"Create data-driven LinkedIn posts showcasing your product's growth metrics and marketing wins.",
		slug: "growth-metrics-mastery",
		category: "Marketing Analytics",
		imageUrl: "/templates/growth-metrics.jpg",
		icon: TrendingUpIcon,
		color: "text-red-500",
		bgColor: "bg-red-100",
		aiPrompt: `Create a LinkedIn post about {metricType} growth for {timeframe}.

  Key Metrics:
  📈 Growth Achievement: {achievement}
  🎯 Strategy Used: {strategy}
  📊 Key Data Points: {dataPoints}

  Process Breakdown:
  1. Initial State: {initialState}
  2. Actions Taken: {actions}
  3. Results: {results}

  Learnings: {learnings}
  Next Steps: {nextSteps}

  Style: {postStyle}
  Include {visualType} visualization description`,
		features: [
			"Metric visualization",
			"Strategy breakdown",
			"Data storytelling",
			"Growth insights",
			"Actionable takeaways",
		],
		tags: ["growth", "metrics", "marketing", "analytics", "data"],
		formFields: [
			{
				label: "Metric Type",
				name: "metricType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "User Acquisition", value: "acquisition" },
					{ label: "Revenue", value: "revenue" },
					{ label: "Engagement", value: "engagement" },
					{ label: "Conversion", value: "conversion" },
				],
			},
			{
				label: "Timeframe",
				name: "timeframe",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Achievement",
				name: "achievement",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Strategy",
				name: "strategy",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Data Points",
				name: "dataPoints",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Initial State",
				name: "initialState",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Actions Taken",
				name: "actions",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Results",
				name: "results",
				type: "textarea",
				required: true,
				order: 8,
			},
			{
				label: "Key Learnings",
				name: "learnings",
				type: "textarea",
				required: true,
				order: 9,
			},
			{
				label: "Next Steps",
				name: "nextSteps",
				type: "textarea",
				required: true,
				order: 10,
			},
			{
				label: "Post Style",
				name: "postStyle",
				type: "select",
				required: true,
				order: 11,
				options: [
					{ label: "Data Story", value: "story" },
					{ label: "Technical Analysis", value: "technical" },
					{ label: "Strategic Overview", value: "strategic" },
				],
			},
			{
				label: "Visualization Type",
				name: "visualType",
				type: "select",
				required: true,
				order: 12,
				options: [
					{ label: "Growth Chart", value: "chart" },
					{ label: "Comparison Graph", value: "graph" },
					{ label: "Timeline", value: "timeline" },
				],
			},
		],
	},
	{
		id: "5",
		name: "AI Breakthrough Spotlight",
		description:
			"Create viral LinkedIn posts about latest AI developments and their practical applications for businesses.",
		slug: "ai-breakthrough-spotlight",
		category: "Tech Innovation",
		imageUrl: "/templates/ai-spotlight.jpg",
		icon: BrainCircuitIcon,
		color: "text-purple-500",
		bgColor: "bg-purple-100",
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
		id: "5",
		name: "AI Tool Evolution",
		description:
			"Create engaging Twitter threads comparing different AI tools and their practical applications.",
		slug: "ai-tool-evolution",
		category: "AI Analysis",
		imageUrl: "/templates/ai-tools.jpg",
		icon: BrainCircuitIcon,
		color: "text-yellow-500",
		bgColor: "bg-yellow-100",
		aiPrompt: `Create a {threadLength}-tweet comparison of {tool1} vs
    {tool1} vs {tool2} for {useCase}.

Thread Structure:
1. 🔥 Hook: {attentionGrabber}
2. 🎯 Use Case Overview: {useCase}

Tool Comparison:
🤖 {tool1}:
- Key Features: {features1}
- Best For: {bestUseCase1}
- Limitations: {limitations1}
- Pricing: {pricing1}

🤖 {tool2}:
- Key Features: {features2}
- Best For: {bestUseCase2}
- Limitations: {limitations2}
- Pricing: {pricing2}

Real-world Example:
- {tool1} Example: {example1}
- {tool2} Example: {example2}

Verdict: {comparison}
Pro Tips: {tips}

#AI #Tools #Tech`,
		features: [
			"Tool comparisons",
			"Use case analysis",
			"Practical examples",
			"Price comparison",
			"Expert insights",
		],
		tags: [
			"ai-tools",
			"technology",
			"comparison",
			"productivity",
			"software",
		],
		formFields: [
			{
				label: "First Tool",
				name: "tool1",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Second Tool",
				name: "tool2",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Use Case",
				name: "useCase",
				type: "text",
				required: true,
				order: 3,
			},
			{
				label: "Attention Grabber",
				name: "attentionGrabber",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Tool 1 Features",
				name: "features1",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Tool 1 Best Use Case",
				name: "bestUseCase1",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Tool 1 Limitations",
				name: "limitations1",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Tool 1 Pricing",
				name: "pricing1",
				type: "text",
				required: true,
				order: 8,
			},
			{
				label: "Tool 2 Features",
				name: "features2",
				type: "textarea",
				required: true,
				order: 9,
			},
			{
				label: "Tool 2 Best Use Case",
				name: "bestUseCase2",
				type: "textarea",
				required: true,
				order: 10,
			},
			{
				label: "Tool 2 Limitations",
				name: "limitations2",
				type: "textarea",
				required: true,
				order: 11,
			},
			{
				label: "Tool 2 Pricing",
				name: "pricing2",
				type: "text",
				required: true,
				order: 12,
			},
			{
				label: "Example for Tool 1",
				name: "example1",
				type: "textarea",
				required: true,
				order: 13,
			},
			{
				label: "Example for Tool 2",
				name: "example2",
				type: "textarea",
				required: true,
				order: 14,
			},
			{
				label: "Comparison Verdict",
				name: "comparison",
				type: "textarea",
				required: true,
				order: 15,
			},
			{
				label: "Pro Tips",
				name: "tips",
				type: "textarea",
				required: true,
				order: 16,
			},
			{
				label: "Thread Length",
				name: "threadLength",
				type: "select",
				required: true,
				order: 17,
				options: [
					{ label: "Concise (6 tweets)", value: "6" },
					{ label: "Detailed (10 tweets)", value: "10" },
					{ label: "Comprehensive (15 tweets)", value: "15" },
				],
			},
		],
	},
	{
		id: "6",
		name: "Code Journey Chronicles",
		description:
			"Create engaging dev.to or Hashnode articles about your coding journey, challenges, and solutions.",
		slug: "code-journey-chronicles",
		category: "Developer Stories",
		imageUrl: "/templates/code-journey.jpg",
		icon: CodeIcon,
		color: "text-indigo-500",
		bgColor: "bg-indigo-100",
		aiPrompt: `Create a detailed {articleType} about {challengeType} in {technology}.

Story Structure:
🎯 Problem Context: {context}
💭 Initial Approach: {initialApproach}
🚧 Challenges Faced:
- {challenge1}
- {challenge2}
- {challenge3}

Solution Journey:
1. Research Phase: {research}
2. Implementation: {implementation}
3. Optimization: {optimization}

Code Walkthrough:
{codeSection}

Key Learnings:
{learnings}

Future Improvements: {improvements}
Reader Takeaways: {takeaways}

Style: {contentStyle}
Technical Level: {techLevel}`,
		features: [
			"Problem-solution narrative",
			"Code explanations",
			"Learning insights",
			"Technical deep-dives",
			"Action steps",
		],
		tags: ["coding", "development", "learning", "tutorial", "tech-writing"],
		formFields: [
			{
				label: "Article Type",
				name: "articleType",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Tutorial", value: "tutorial" },
					{ label: "Case Study", value: "case-study" },
					{ label: "Problem-Solution", value: "problem-solution" },
				],
			},
			{
				label: "Challenge Type",
				name: "challengeType",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Technology",
				name: "technology",
				type: "text",
				required: true,
				order: 3,
			},
			{
				label: "Context",
				name: "context",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Initial Approach",
				name: "initialApproach",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Challenge 1",
				name: "challenge1",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Challenge 2",
				name: "challenge2",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Challenge 3",
				name: "challenge3",
				type: "textarea",
				required: true,
				order: 8,
			},
			{
				label: "Research Phase",
				name: "research",
				type: "textarea",
				required: true,
				order: 9,
			},
			{
				label: "Implementation Details",
				name: "implementation",
				type: "textarea",
				required: true,
				order: 10,
			},
			{
				label: "Optimization Steps",
				name: "optimization",
				type: "textarea",
				required: true,
				order: 11,
			},
			{
				label: "Code Section",
				name: "codeSection",
				type: "textarea",
				required: true,
				order: 12,
			},
			{
				label: "Key Learnings",
				name: "learnings",
				type: "textarea",
				required: true,
				order: 13,
			},
			{
				label: "Future Improvements",
				name: "improvements",
				type: "textarea",
				required: true,
				order: 14,
			},
			{
				label: "Reader Takeaways",
				name: "takeaways",
				type: "textarea",
				required: true,
				order: 15,
			},
			{
				label: "Content Style",
				name: "contentStyle",
				type: "select",
				required: true,
				order: 16,
				options: [
					{ label: "Conversational", value: "conversational" },
					{ label: "Technical", value: "technical" },
					{ label: "Story-based", value: "story" },
				],
			},
			{
				label: "Technical Level",
				name: "techLevel",
				type: "select",
				required: true,
				order: 17,
				options: [
					{ label: "Beginner", value: "beginner" },
					{ label: "Intermediate", value: "intermediate" },
					{ label: "Advanced", value: "advanced" },
				],
			},
		],
	},
	{
		id: "7",
		name: "Startup Pivot Playbook",
		description:
			"Create LinkedIn articles about product pivots, market adaptations, and business strategy shifts.",
		slug: "startup-pivot-playbook",
		category: "Business Strategy",
		imageUrl: "/templates/pivot-playbook.jpg",
		icon: TargetIcon,
		color: "text-cyan-500",
		bgColor: "bg-cyan-100",
		aiPrompt: `Create a LinkedIn article about pivoting from {originalStrategy} to {newStrategy}.

Story Arc:
🎯 Initial Vision: {initialVision}
📊 Market Reality: {marketReality}
🔄 Pivot Trigger: {pivotTrigger}

Pivot Process:
1. Data Insights: {dataInsights}
2. Customer Feedback: {customerFeedback}
3. Team Alignment: {teamAlignment}

Results:
- Before: {beforeMetrics}
- After: {afterMetrics}
- Key Wins: {keyWins}

Lessons Learned: {lessons}
Advice for Others: {advice}

Include {dataVisualization} type visualization
Style: {articleStyle}`,
		features: [
			"Pivot analysis",
			"Data visualization",
			"Strategic insights",
			"Result metrics",
			"Actionable advice",
		],
		tags: [
			"startup",
			"business-strategy",
			"pivot",
			"entrepreneurship",
			"growth",
		],
		formFields: [
			{
				label: "Original Strategy",
				name: "originalStrategy",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "New Strategy",
				name: "newStrategy",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Initial Vision",
				name: "initialVision",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Market Reality",
				name: "marketReality",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Pivot Trigger",
				name: "pivotTrigger",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Data Insights",
				name: "dataInsights",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Customer Feedback",
				name: "customerFeedback",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Team Alignment",
				name: "teamAlignment",
				type: "textarea",
				required: true,
				order: 8,
			},
			{
				label: "Before Metrics",
				name: "beforeMetrics",
				type: "textarea",
				required: true,
				order: 9,
			},
			{
				label: "After Metrics",
				name: "afterMetrics",
				type: "textarea",
				required: true,
				order: 10,
			},
			{
				label: "Key Wins",
				name: "keyWins",
				type: "textarea",
				required: true,
				order: 11,
			},
			{
				label: "Lessons Learned",
				name: "lessons",
				type: "textarea",
				required: true,
				order: 12,
			},
			{
				label: "Advice",
				name: "advice",
				type: "textarea",
				required: true,
				order: 13,
			},
			{
				label: "Data Visualization",
				name: "dataVisualization",
				type: "select",
				required: true,
				order: 14,
				options: [
					{ label: "Before/After Chart", value: "comparison" },
					{ label: "Growth Timeline", value: "timeline" },
					{ label: "Metrics Dashboard", value: "dashboard" },
				],
			},
			{
				label: "Article Style",
				name: "articleStyle",
				type: "select",
				required: true,
				order: 15,
				options: [
					{ label: "Data-Driven", value: "data-driven" },
					{ label: "Narrative", value: "narrative" },
					{ label: "Strategic Analysis", value: "analysis" },
				],
			},
		],
	},
	{
		id: "8",
		name: "API Launch Amplifier",
		description:
			"Create comprehensive Twitter threads or technical blog posts about your API launch or updates.",
		slug: "api-launch-amplifier",
		category: "API Documentation",
		imageUrl: "/templates/api-launch.jpg",
		icon: MegaphoneIcon,
		color: "text-rose-500",
		bgColor: "bg-rose-100",
		aiPrompt: `Create a {contentFormat} announcing {apiName} {contentType}.

Key Sections:
🚀 Launch Overview: {overview}
🎯 Target Developers: {targetDevs}
⚡️ Key Features:
- {feature1}
- {feature2}
- {feature3}

Technical Details:
1. Authentication: {auth}
2. Rate Limits: {rateLimits}
3. Response Format: {responseFormat}

Quick Start:
{codeExample}

Use Cases:
- {useCase1}
- {useCase2}
- {useCase3}

Documentation: {docs}
Support: {support}
Pricing: {pricing}

Style: {contentStyle}`,
		features: [
			"API documentation",
			"Code examples",
			"Use cases",
			"Technical specs",
			"Launch details",
		],
		tags: [
			"api",
			"development",
			"documentation",
			"technical-writing",
			"launch",
		],
		formFields: [
			{
				label: "Content Format",
				name: "contentFormat",
				type: "select",
				required: true,
				order: 1,
				options: [
					{ label: "Twitter Thread", value: "thread" },
					{ label: "Blog Post", value: "blog" },
					{ label: "Documentation", value: "docs" },
				],
			},
			{
				label: "API Name",
				name: "apiName",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Content Type",
				name: "contentType",
				type: "select",
				required: true,
				order: 3,
				options: [
					{ label: "Launch", value: "launch" },
					{ label: "Update", value: "update" },
					{ label: "Feature Release", value: "feature" },
				],
			},
			{
				label: "Overview",
				name: "overview",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Target Developers",
				name: "targetDevs",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Feature 1",
				name: "feature1",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Feature 2",
				name: "feature2",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Feature 3",
				name: "feature3",
				type: "textarea",
				required: true,
				order: 8,
			},
			{
				label: "Authentication",
				name: "auth",
				type: "textarea",
				required: true,
				order: 9,
			},
			{
				label: "Rate Limits",
				name: "rateLimits",
				type: "textarea",
				required: true,
				order: 10,
			},
			{
				label: "Response Format",
				name: "responseFormat",
				type: "textarea",
				required: true,
				order: 11,
			},
			{
				label: "Code Example",
				name: "codeExample",
				type: "textarea",
				required: true,
				order: 12,
			},
			{
				label: "Use Case 1",
				name: "useCase1",
				type: "textarea",
				required: true,
				order: 13,
			},
			{
				label: "Use Case 2",
				name: "useCase2",
				type: "textarea",
				required: true,
				order: 14,
			},
			{
				label: "Use Case 3",
				name: "useCase3",
				type: "textarea",
				required: true,
				order: 15,
			},
			{
				label: "Documentation",
				name: "docs",
				type: "text",
				required: true,
				order: 16,
			},
			{
				label: "Support",
				name: "support",
				type: "text",
				required: true,
				order: 17,
			},
			{
				label: "Pricing",
				name: "pricing",
				type: "textarea",
				required: true,
				order: 18,
			},
			{
				label: "Content Style",
				name: "contentStyle",
				type: "select",
				required: true,
				order: 19,
				options: [
					{ label: "Technical", value: "technical" },
					{ label: "Developer-Friendly", value: "friendly" },
					{ label: "Business-Focused", value: "business" },
				],
			},
		],
	},
	{
		id: "11",
		name: "Developer Side Project Showcase",
		description:
			"Create engaging social media posts that showcase your personal side projects and highlight your skills.",
		slug: "side-project-showcase",
		category: "Developer Branding",
		imageUrl: "/templates/side-project.jpg",
		icon: Puzzle,
		color: "text-red-500",
		bgColor: "bg-red-100",
		aiPrompt: `Create a social media post showcasing your {projectName} side project.
  Project Overview: {projectDescription}
  Key Features: {keyFeatures}
  Technologies Used: {techStack}
  Personal Takeaways: {personalTakeaways}
  Call to Action: {callToAction}
  Tone: {tone}
  Platform: {platform}`,
		features: [
			"Side project showcase",
			"Skill demonstration",
			"Personal growth sharing",
			"Engaging format",
			"Platform-optimized",
		],
		tags: [
			"developer-branding",
			"portfolio",
			"social-media",
			"side-projects",
			"personal-growth",
		],
		formFields: [
			{
				label: "Project Name",
				name: "projectName",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Project Description",
				name: "projectDescription",
				type: "textarea",
				required: true,
				order: 2,
			},
			{
				label: "Key Features",
				name: "keyFeatures",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Tech Stack",
				name: "techStack",
				type: "text",
				required: true,
				order: 4,
			},
			{
				label: "Personal Takeaways",
				name: "personalTakeaways",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 6,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 7,
				options: [
					{ label: "Conversational", value: "conversational" },
					{ label: "Enthusiastic", value: "enthusiastic" },
					{ label: "Educational", value: "educational" },
				],
			},
			{
				label: "Target Platform",
				name: "platform",
				type: "select",
				required: true,
				order: 8,
				options: [
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Twitter/X", value: "twitter" },
					{ label: "Instagram", value: "instagram" },
					{ label: "Facebook", value: "facebook" },
				],
			},
		],
	},
	{
		id: "12",
		name: "Developer Tech Stack Showcase",
		description:
			"Create visually appealing social media posts that highlight your technical skills and expertise.",
		slug: "tech-stack-showcase",
		category: "Developer Branding",
		imageUrl: "/templates/tech-stack.jpg",
		icon: Box,
		color: "text-emerald-500",
		bgColor: "bg-emerald-100",
		aiPrompt: `Create a social media post showcasing your developer tech stack.
  Key Technologies: {technologies}
  Proficiency Levels: {proficiencyLevels}
  Personal Projects/Experience: {experience}
  Call to Action: {callToAction}
  Tone: {tone}
  Platform: {platform}`,
		features: [
			"Tech stack overview",
			"Skill demonstration",
			"Visual appeal",
			"Engagement-driven",
			"Platform-optimized",
		],
		tags: [
			"developer-branding",
			"portfolio",
			"social-media",
			"tech-stack",
			"skills",
		],
		formFields: [
			{
				label: "Key Technologies",
				name: "technologies",
				type: "textarea",
				required: true,
				order: 1,
				helpText: "List the key technologies, one per line",
			},
			{
				label: "Proficiency Levels",
				name: "proficiencyLevels",
				type: "textarea",
				required: true,
				order: 2,
				helpText:
					"List the proficiency level for each technology, one per line",
			},
			{
				label: "Personal Experience",
				name: "experience",
				type: "textarea",
				required: true,
				order: 3,
				helpText: "Describe your experience with these technologies",
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 4,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 5,
				options: [
					{ label: "Professional", value: "professional" },
					{ label: "Confident", value: "confident" },
					{ label: "Enthusiastic", value: "enthusiastic" },
				],
			},
			{
				label: "Target Platform",
				name: "platform",
				type: "select",
				required: true,
				order: 6,
				options: [
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Twitter/X", value: "twitter" },
					{ label: "Instagram", value: "instagram" },
					{ label: "Facebook", value: "facebook" },
				],
			},
		],
	},
	{
		id: "13",
		name: "Developer Community Building",
		description:
			"Create engaging Twitter/X threads that foster meaningful connections and discussions within the developer community.",
		slug: "developer-community-building",
		category: "Community Engagement",
		imageUrl: "/templates/community-building.jpg",
		icon: Users,
		color: "text-violet-500",
		bgColor: "bg-violet-100",
		aiPrompt: `Create a {threadLength}-tweet thread to foster community engagement around the topic of "{topic}".
  Key discussion points:
  1. {point1}
  2. {point2}
  3. {point3}
  4. {point4}
  5. {point5}
  Include prompts for community participation, such as questions or opinions.
  Encourage authentic interaction and learning.
  End with a call to action: {callToAction}`,
		features: [
			"Community-focused content",
			"Engagement-driven",
			"Participatory format",
			"Authentic interaction",
			"Educational elements",
		],
		tags: [
			"twitter",
			"developer-community",
			"community-building",
			"engagement",
			"education",
		],
		formFields: [
			{
				label: "Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Discussion Point 1",
				name: "point1",
				type: "textarea",
				required: true,
				order: 2,
			},
			{
				label: "Discussion Point 2",
				name: "point2",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Discussion Point 3",
				name: "point3",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Discussion Point 4",
				name: "point4",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Discussion Point 5",
				name: "point5",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Thread Length",
				name: "threadLength",
				type: "select",
				required: true,
				order: 7,
				options: [
					{ label: "Short (5 tweets)", value: "5" },
					{ label: "Medium (10 tweets)", value: "10" },
					{ label: "Long (15 tweets)", value: "15" },
				],
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 8,
			},
		],
	},
	{
		id: "14",
		name: "Developer Sustainability Spotlight",
		description:
			"Create LinkedIn posts that highlight how developers are contributing to sustainable tech solutions.",
		slug: "developer-sustainability-spotlight",
		category: "Social Impact",
		imageUrl: "/templates/sustainability.jpg",
		icon: Leaf,
		color: "text-green-500",
		bgColor: "bg-green-100",
		aiPrompt: `Create a LinkedIn post showcasing how developers can contribute to sustainable tech solutions.
  Highlight the project: {projectName}
  Key sustainable features: {sustainableFeatures}
  Impact and benefits: {impact}
  Personal motivation: {personalMotivation}
  Call to action: {callToAction}
  Tone: {tone}`,
		features: [
			"Sustainability-focused",
			"Positive impact showcase",
			"Personal motivation sharing",
			"Engagement-driven",
			"Professional branding",
		],
		tags: [
			"linkedin",
			"sustainability",
			"social-impact",
			"tech-for-good",
			"developer-community",
		],
		formFields: [
			{
				label: "Project Name",
				name: "projectName",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Sustainable Features",
				name: "sustainableFeatures",
				type: "textarea",
				required: true,
				order: 2,
			},
			{
				label: "Impact and Benefits",
				name: "impact",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Personal Motivation",
				name: "personalMotivation",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 5,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 6,
				options: [
					{ label: "Inspirational", value: "inspirational" },
					{ label: "Informative", value: "informative" },
					{ label: "Passionate", value: "passionate" },
				],
			},
		],
	},
	{
		id: "15",
		name: "Developer Sustainability Spotlight",
		description:
			"Create LinkedIn posts that highlight how developers are contributing to sustainable tech solutions.",
		slug: "developer-sustainability-spotlight",
		category: "Social Impact",
		imageUrl: "/templates/sustainability.jpg",
		icon: Leaf,
		color: "text-green-500",
		bgColor: "bg-green-100",
		aiPrompt: `Create a LinkedIn post showcasing how developers can contribute to sustainable tech solutions.
  Highlight the project: {projectName}
  Key sustainable features: {sustainableFeatures}
  Impact and benefits: {impact}
  Personal motivation: {personalMotivation}
  Call to action: {callToAction}
  Tone: {tone}`,
		features: [
			"Sustainability-focused",
			"Positive impact showcase",
			"Personal motivation sharing",
			"Engagement-driven",
			"Professional branding",
		],
		tags: [
			"linkedin",
			"sustainability",
			"social-impact",
			"tech-for-good",
			"developer-community",
		],
		formFields: [
			{
				label: "Project Name",
				name: "projectName",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Sustainable Features",
				name: "sustainableFeatures",
				type: "textarea",
				required: true,
				order: 2,
			},
			{
				label: "Impact and Benefits",
				name: "impact",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Personal Motivation",
				name: "personalMotivation",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 5,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 6,
				options: [
					{ label: "Inspirational", value: "inspirational" },
					{ label: "Informative", value: "informative" },
					{ label: "Passionate", value: "passionate" },
				],
			},
		],
	},
	{
		id: "16",
		name: "Developer Mental Health Awareness",
		description:
			"Create LinkedIn posts that raise awareness about mental health challenges faced by developers and offer supportive resources.",
		slug: "developer-mental-health",
		category: "Social Impact",
		imageUrl: "/templates/mental-health.jpg",
		icon: BrainCircuit,
		color: "text-sky-500",
		bgColor: "bg-sky-100",
		aiPrompt: `Create a LinkedIn post to raise awareness about mental health in the developer community.
  Key topics to cover:
  - {topic1}
  - {topic2}
  - {topic3}
  Include personal experiences, statistics, or industry insights.
  Provide supportive resources and actionable tips.
  Tone: {tone}`,
		features: [
			"Mental health awareness",
			"Personal stories",
			"Data-driven insights",
			"Supportive resources",
			"Actionable guidance",
		],
		tags: [
			"linkedin",
			"mental-health",
			"developer-wellness",
			"self-care",
			"community-support",
		],
		formFields: [
			{
				label: "Topic 1",
				name: "topic1",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Topic 2",
				name: "topic2",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Topic 3",
				name: "topic3",
				type: "text",
				required: true,
				order: 3,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 4,
				options: [
					{ label: "Compassionate", value: "compassionate" },
					{ label: "Informative", value: "informative" },
					{ label: "Encouraging", value: "encouraging" },
				],
			},
		],
	},
	{
		id: "17",
		name: "Developer Entrepreneurship Showcase",
		description:
			"Create LinkedIn posts that highlight developers who have started their own successful tech ventures.",
		slug: "developer-entrepreneurship",
		category: "Professional Development",
		imageUrl: "/templates/entrepreneurship.jpg",
		icon: Lightbulb,
		color: "text-amber-500",
		bgColor: "bg-amber-100",
		aiPrompt: `Create a LinkedIn post showcasing a developer entrepreneur and their tech venture.
  Entrepreneur Name: {entrepreneurName}
  Company Name: {companyName}
  Product/Service: {productDescription}
  Key Achievements: {achievements}
  Entrepreneurial Journey: {journey}
  Call to Action: {callToAction}
  Tone: {tone}`,
		features: [
			"Entrepreneurship spotlight",
			"Inspirational stories",
			"Product/service showcase",
			"Key achievements highlights",
			"Engagement-driven",
		],
		tags: [
			"linkedin",
			"developer-entrepreneurship",
			"tech-startups",
			"founder-stories",
			"professional-development",
		],
		formFields: [
			{
				label: "Entrepreneur Name",
				name: "entrepreneurName",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Company Name",
				name: "companyName",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Product/Service Description",
				name: "productDescription",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Key Achievements",
				name: "achievements",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Entrepreneurial Journey",
				name: "journey",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 6,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 7,
				options: [
					{ label: "Inspirational", value: "inspirational" },
					{ label: "Informative", value: "informative" },
					{ label: "Conversational", value: "conversational" },
				],
			},
		],
	},
	{
		id: "18",
		name: "Developer Freelancing Spotlight",
		description:
			"Create LinkedIn posts that highlight the experiences and successes of developer freelancers.",
		slug: "developer-freelancing",
		category: "Professional Development",
		imageUrl: "/templates/freelancing.jpg",
		icon: Briefcase,
		color: "text-lime-500",
		bgColor: "bg-lime-100",
		aiPrompt: `Create a LinkedIn post showcasing the freelance experience of a developer.
  Freelancer Name: {freelancerName}
  Freelance Services: {services}
  Key Clients/Projects: {clientsProjects}
  Freelancing Journey: {journey}
  Advice for Other Developers: {advice}
  Call to Action: {callToAction}
  Tone: {tone}`,
		features: [
			"Freelancing spotlight",
			"Client/project showcase",
			"Personal journey sharing",
			"Actionable advice",
			"Engagement-driven",
		],
		tags: [
			"linkedin",
			"developer-freelancing",
			"professional-development",
			"entrepreneurship",
			"career-advice",
		],
		formFields: [
			{
				label: "Freelancer Name",
				name: "freelancerName",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Freelance Services",
				name: "services",
				type: "textarea",
				required: true,
				order: 2,
			},
			{
				label: "Key Clients/Projects",
				name: "clientsProjects",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Freelancing Journey",
				name: "journey",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Advice for Developers",
				name: "advice",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Call to Action",
				name: "callToAction",
				type: "text",
				required: true,
				order: 6,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 7,
				options: [
					{ label: "Inspirational", value: "inspirational" },
					{ label: "Informative", value: "informative" },
					{ label: "Conversational", value: "conversational" },
				],
			},
		],
	},
	{
		id: "19",
		name: "Developer Upskilling Recommendations",
		description:
			"Create LinkedIn posts that provide guidance and resources for developers to continually upskill and grow their careers.",
		slug: "developer-upskilling",
		category: "Professional Development",
		imageUrl: "/templates/upskilling.jpg",
		icon: CloudLightning,
		color: "text-rose-500",
		bgColor: "bg-rose-100",
		aiPrompt: `Create a LinkedIn post with recommendations for developers to upskill and grow their careers.
  Key topics to cover:
  - {topic1}
  - {topic2}
  - {topic3}
  Include resources, tools, or online learning platforms.
  Provide actionable steps or advice.
  Tone: {tone}`,
		features: [
			"Career development guidance",
			"Upskilling recommendations",
			"Resource and tool suggestions",
			"Actionable advice",
			"Engagement-driven",
		],
		tags: [
			"linkedin",
			"developer-upskilling",
			"professional-development",
			"career-growth",
			"life-long-learning",
		],
		formFields: [
			{
				label: "Topic 1",
				name: "topic1",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Topic 2",
				name: "topic2",
				type: "text",
				required: true,
				order: 2,
			},
			{
				label: "Topic 3",
				name: "topic3",
				type: "text",
				required: true,
				order: 3,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 4,
				options: [
					{ label: "Informative", value: "informative" },
					{ label: "Motivational", value: "motivational" },
					{ label: "Practical", value: "practical" },
				],
			},
		],
	},
	{
		id: "20",
		name: "Developer Technical Blogging",
		description:
			"Create a detailed technical blog post that educates and inspires other developers.",
		slug: "developer-technical-blogging",
		category: "Technical Content",
		imageUrl: "/templates/technical-blogging.jpg",
		icon: BookOpen,
		color: "text-gray-500",
		bgColor: "bg-gray-100",
		aiPrompt: `Create a comprehensive technical blog post on the topic of "{topic}".
  Outline:
  1. Introduction: {introduction}
  2. Problem/Challenge: {problem}
  3. Technical Solution: {solution}
  4. Implementation Details: {implementation}
  5. Results and Learnings: {resultsLearnings}
  6. Conclusion and Next Steps: {conclusion}
  Include relevant code samples, diagrams, or references.
  Aim to educate and inspire other developers.
  Tone: {tone}`,
		features: [
			"In-depth technical content",
			"Educational format",
			"Comprehensive coverage",
			"Practical guidance",
			"Visuals and references",
		],
		tags: [
			"technical-blogging",
			"developer-education",
			"technical-content",
			"problem-solving",
			"best-practices",
		],
		formFields: [
			{
				label: "Topic",
				name: "topic",
				type: "text",
				required: true,
				order: 1,
			},
			{
				label: "Introduction",
				name: "introduction",
				type: "textarea",
				required: true,
				order: 2,
			},
			{
				label: "Problem/Challenge",
				name: "problem",
				type: "textarea",
				required: true,
				order: 3,
			},
			{
				label: "Technical Solution",
				name: "solution",
				type: "textarea",
				required: true,
				order: 4,
			},
			{
				label: "Implementation Details",
				name: "implementation",
				type: "textarea",
				required: true,
				order: 5,
			},
			{
				label: "Results and Learnings",
				name: "resultsLearnings",
				type: "textarea",
				required: true,
				order: 6,
			},
			{
				label: "Conclusion and Next Steps",
				name: "conclusion",
				type: "textarea",
				required: true,
				order: 7,
			},
			{
				label: "Writing Tone",
				name: "tone",
				type: "select",
				required: true,
				order: 8,
				options: [
					{ label: "Educational", value: "educational" },
					{ label: "Authoritative", value: "authoritative" },
					{ label: "Conversational", value: "conversational" },
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
