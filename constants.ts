import { ChartBarIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import {
	BarChart4,

	Home,
	History,
	CreditCard,

	User,
   Code,
   FileText,
   Mail,
   TrendingUp,
   FolderOpen,
   Briefcase,
   BarChart,
   Video,
   Clock,
   BookOpen,
   Gift,

} from "lucide-react";


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
		name: "Developer Portfolio Post",
		description:
			"Create engaging social media posts that showcase your development projects, technical skills, and problem-solving abilities without being overtly promotional.",
		icon: Code,
		features: [
			"Project Showcase",
			"Technical Details",
			"Problem-Solution Format",
			"Social Proof",
			"Subtle CTA",
		],
		imageUrl: "/portfolio-post.jpg",
		href: "/portfolio-post",
		color: "text-blue-500",
		bgColor: "bg-blue-200",
		slug: "portfolio-post",
		category: "Developer Branding",
		aiPrompt: `Create an engaging social media post that showcases a development project while establishing authority and encouraging potential clients to reach out. The post should:

 1. Start with an attention-grabbing hook about the technical challenge
 2. Describe the problem-solution narrative in a relatable way
 3. Highlight key technical skills and technologies used
 4. Include relevant metrics or results (if provided)
 5. Add social proof elements (if provided)
 6. End with a subtle call-to-action that encourages engagement
 7. Include relevant hashtags for developer communities
 8. Maintain a professional yet conversational tone
 9. Format appropriately for the selected platform
 10. Focus on value delivery rather than direct selling`,
		formFields: [
			{
				label: "Project Type",
				field: "projectType",
				name: "projectType",
				required: true,
				type: "select",
				options: [
					{ label: "Web Application", value: "web-app" },
					{ label: "Mobile App", value: "mobile-app" },
					{ label: "API Development", value: "api" },
					{ label: "E-commerce Solution", value: "ecommerce" },
					{ label: "Custom Integration", value: "integration" },
					{
						label: "Performance Optimization",
						value: "optimization",
					},
					{
						label: "Legacy System Modernization",
						value: "modernization",
					},
				],
			},
			{
				label: "Technical Challenge",
				field: "challenge",
				name: "challenge",
				required: true,
				placeholder:
					"What was the main technical challenge you solved?",
				type: "textarea",
			},
			{
				label: "Technologies Used",
				field: "technologies",
				name: "technologies",
				required: true,
				placeholder:
					"List the key technologies, frameworks, or tools used",
				type: "textarea",
			},
			{
				label: "Results/Metrics",
				field: "results",
				name: "results",
				required: false,
				placeholder:
					"Any measurable improvements? (e.g., 40% faster loading time)",
				type: "textarea",
			},
			{
				label: "Target Platform",
				field: "platform",
				name: "platform",
				required: true,
				type: "select",
				options: [
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Facebook", value: "facebook" },
					{ label: "Twitter", value: "twitter" },
					{ label: "Dev.to", value: "devto" },
				],
			},
		],
		validationSchema: z.object({
			projectType: z.string().min(1, "Project type is required"),
			challenge: z.string().min(1, "Technical challenge is required"),
			technologies: z.string().min(1, "Technologies are required"),
			results: z.string().optional(),
			platform: z.string().min(1, "Platform is required"),
		}),
		isFavorite: false,
	},
	{
		name: "Problem-Solution Case Study",
		description:
			"Create compelling case studies that demonstrate your problem-solving abilities and technical expertise to potential clients.",
		icon: FileText,
		features: [
			"Client Problem Analysis",
			"Technical Solution Details",
			"Implementation Process",
			"Results & Benefits",
			"Technology Stack",
		],
		imageUrl: "/case-study.jpg",
		href: "/case-study",
		color: "text-purple-500",
		bgColor: "bg-purple-200",
		slug: "case-study",
		category: "Client Acquisition",
		aiPrompt: `Generate a detailed case study that demonstrates your technical expertise and problem-solving abilities. Structure the content to:

 1. Begin with a compelling business challenge that resonates with potential clients
 2. Break down the technical complexities into understandable business terms
 3. Highlight your strategic approach and technology choices
 4. Emphasize the value delivered through concrete metrics
 5. Include specific technical details that showcase expertise
 6. Demonstrate your understanding of business impact
 7. Incorporate testimonials or feedback if provided
 8. End with a solution-focused call-to-action
 9. Use a professional yet engaging tone
 10. Include relevant keywords for your target industry`,
		formFields: [
			{
				label: "Industry/Niche",
				field: "industry",
				name: "industry",
				required: true,
				type: "select",
				options: [
					{ label: "E-commerce", value: "ecommerce" },
					{ label: "Healthcare", value: "healthcare" },
					{ label: "Finance", value: "finance" },
					{ label: "Education", value: "education" },
					{ label: "Real Estate", value: "real-estate" },
					{ label: "Manufacturing", value: "manufacturing" },
					{ label: "Technology", value: "technology" },
				],
			},
			{
				label: "Client Challenge",
				field: "clientChallenge",
				name: "clientChallenge",
				required: true,
				placeholder: "What business problem did the client face?",
				type: "textarea",
			},
			{
				label: "Technical Solution",
				field: "technicalSolution",
				name: "technicalSolution",
				required: true,
				placeholder: "How did you solve it technically?",
				type: "textarea",
			},
			{
				label: "Technology Stack",
				field: "techStack",
				name: "techStack",
				required: true,
				placeholder: "What technologies did you use?",
				type: "textarea",
			},
			{
				label: "Business Impact",
				field: "businessImpact",
				name: "businessImpact",
				required: true,
				placeholder: "What were the measurable results?",
				type: "textarea",
			},
			{
				label: "Client Testimonial",
				field: "testimonial",
				name: "testimonial",
				required: false,
				placeholder: "Any feedback from the client?",
				type: "textarea",
			},
		],
		validationSchema: z.object({
			industry: z.string().min(1, "Industry is required"),
			clientChallenge: z.string().min(1, "Client challenge is required"),
			technicalSolution: z
				.string()
				.min(1, "Technical solution is required"),
			techStack: z.string().min(1, "Technology stack is required"),
			businessImpact: z.string().min(1, "Business impact is required"),
			testimonial: z.string().optional(),
		}),
		isFavorite: false,
	},
	{
		name: "Developer Value Proposition",
		description:
			"Create compelling outreach messages that highlight your unique value proposition as a developer while maintaining professionalism and authenticity.",
		icon: Mail,
		features: [
			"Personalized Approach",
			"Value Proposition",
			"Technical Expertise",
			"Project Examples",
			"Clear Next Steps",
		],
		imageUrl: "/value-prop.jpg",
		href: "/value-proposition",
		color: "text-green-500",
		bgColor: "bg-green-200",
		slug: "value-proposition",
		category: "Client Outreach",
		aiPrompt: `Create a personalized outreach message that effectively communicates your value as a developer. The message should:

 1. Start with a personalized opening that shows research about the recipient
 2. Identify a specific business challenge or opportunity
 3. Present your relevant technical expertise and experience
 4. Provide concrete examples of similar problems you've solved
 5. Include specific technologies and methodologies you're proficient in
 6. Demonstrate understanding of their industry
 7. Highlight your unique approach or methodology
 8. Include social proof or relevant achievements
 9. End with a clear but low-pressure call-to-action
 10. Maintain a professional, confident, yet humble tone`,
		formFields: [
			{
				label: "Recipient Details",
				field: "recipientInfo",
				name: "recipientInfo",
				required: true,
				placeholder: "What do you know about the recipient/company?",
				type: "textarea",
			},
			{
				label: "Outreach Type",
				field: "outreachType",
				name: "outreachType",
				required: true,
				type: "select",
				options: [
					{ label: "Cold Email", value: "email" },
					{ label: "LinkedIn Message", value: "linkedin" },
					{ label: "Proposal", value: "proposal" },
					{ label: "Follow-up", value: "followup" },
				],
			},
			{
				label: "Your Expertise",
				field: "expertise",
				name: "expertise",
				required: true,
				type: "select",
				multiple: true,
				options: [
					{ label: "Frontend Development", value: "frontend" },
					{ label: "Backend Development", value: "backend" },
					{ label: "Full Stack Development", value: "fullstack" },
					{ label: "Mobile Development", value: "mobile" },
					{ label: "DevOps", value: "devops" },
					{ label: "API Development", value: "api" },
					{ label: "Database Design", value: "database" },
				],
			},
			{
				label: "Relevant Project Example",
				field: "projectExample",
				name: "projectExample",
				required: true,
				placeholder: "Describe a similar project you've worked on",
				type: "textarea",
			},
			{
				label: "Unique Value Proposition",
				field: "valueProposition",
				name: "valueProposition",
				required: true,
				placeholder: "What makes your approach/expertise unique?",
				type: "textarea",
			},
			{
				label: "Call-to-Action Type",
				field: "ctaType",
				name: "ctaType",
				required: true,
				type: "select",
				options: [
					{ label: "Discovery Call", value: "call" },
					{ label: "Portfolio Review", value: "portfolio" },
					{ label: "Case Study Share", value: "casestudy" },
					{ label: "Quick Chat", value: "chat" },
				],
			},
		],
		validationSchema: z.object({
			recipientInfo: z
				.string()
				.min(1, "Recipient information is required"),
			outreachType: z.string().min(1, "Outreach type is required"),
			expertise: z
				.array(z.string())
				.min(1, "At least one expertise is required"),
			projectExample: z.string().min(1, "Project example is required"),
			valueProposition: z
				.string()
				.min(1, "Value proposition is required"),
			ctaType: z.string().min(1, "CTA type is required"),
		}),
		isFavorite: false,
	},
	{
		name: "Tech Insights and Trends Post",
		description:
			"Create insightful posts to keep your audience updated on the latest industry trends, tech advancements, and future predictions.",
		icon: TrendingUp,
		features: [
			"Trending Technology Overview",
			"Impact Analysis",
			"Future Predictions",
			"Social Proof",
			"Engagement-Driven CTA",
		],
		imageUrl: "/tech-trends-post.jpg",
		href: "/tech-trends-post",
		color: "text-green-500",
		bgColor: "bg-green-200",
		slug: "tech-trends-post",
		category: "Industry Updates",
		aiPrompt: `Create a social media post to share insights on a current tech trend or emerging technology. The post should:

    1. Start with an engaging introduction to the trend
    2. Explain the trend's relevance to businesses or developers
    3. Offer predictions on how it might evolve or impact the industry
    4. Mention any relevant skills, experience, or projects you have related to the trend
    5. Include a subtle call-to-action to drive engagement
    6. Use relevant hashtags to reach a wider tech audience
    7. Maintain a conversational and professional tone`,
		formFields: [
			{
				label: "Tech Trend",
				field: "trend",
				name: "trend",
				required: true,
				placeholder: "Describe the tech trend or insight",
				type: "textarea",
			},
			{
				label: "Industry Impact",
				field: "impact",
				name: "impact",
				required: true,
				placeholder: "How does this trend affect the industry?",
				type: "textarea",
			},
			{
				label: "Future Predictions",
				field: "predictions",
				name: "predictions",
				required: false,
				placeholder: "Share any predictions or thoughts on the trend",
				type: "textarea",
			},
			{
				label: "Target Platform",
				field: "platform",
				name: "platform",
				required: true,
				type: "select",
				options: [
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Twitter", value: "twitter" },
					{ label: "Facebook", value: "facebook" },
				],
			},
		],
		validationSchema: {
			trend: "z.string().min(1, 'Tech trend description is required')",
			impact: "z.string().min(1, 'Industry impact is required')",
			predictions: "z.string().optional()",
			platform: "z.string().min(1, 'Platform is required')",
		},
		isFavorite: false,
	},
	{
		name: "Case Study Post",
		description:
			"Create a post that dives into a project case study, showcasing your process, results, and client impact in a way that resonates with potential clients.",
		icon: FolderOpen,
		features: [
			"Project Background",
			"Challenges & Solutions",
			"Technology Stack",
			"Client Benefits",
			"Professional CTA",
		],
		imageUrl: "/case-study-post.jpg",
		href: "/case-study-post",
		color: "text-purple-500",
		bgColor: "bg-purple-200",
		slug: "case-study-post",
		category: "Client Success Stories",
		aiPrompt: `Craft a social media post that highlights a recent project as a case study. The post should:

    1. Begin with an engaging introduction that captures interest
    2. Provide context on the project's background and purpose
    3. Detail the primary challenges faced and the solutions implemented
    4. Outline the tech stack used in a way that adds credibility
    5. Include any measurable results or benefits to the client
    6. Conclude with a professional call-to-action
    7. Use relevant industry hashtags and maintain a concise, informative tone`,
		formFields: [
			{
				label: "Project Type",
				field: "projectType",
				name: "projectType",
				required: true,
				type: "select",
				options: [
					{ label: "Web Application", value: "web-app" },
					{ label: "Mobile App", value: "mobile-app" },
					{ label: "API Development", value: "api" },
					{ label: "E-commerce Solution", value: "ecommerce" },
				],
			},
			{
				label: "Challenge",
				field: "challenge",
				name: "challenge",
				required: true,
				placeholder: "Describe the primary challenge",
				type: "textarea",
			},
			{
				label: "Solution",
				field: "solution",
				name: "solution",
				required: true,
				placeholder: "Outline the solution provided",
				type: "textarea",
			},
			{
				label: "Results/Metrics",
				field: "results",
				name: "results",
				required: false,
				placeholder: "Any measurable improvements?",
				type: "textarea",
			},
			{
				label: "Target Platform",
				field: "platform",
				name: "platform",
				required: true,
				type: "select",
				options: [
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Facebook", value: "facebook" },
					{ label: "Twitter", value: "twitter" },
				],
			},
		],
		validationSchema: {
			projectType: "z.string().min(1, 'Project type is required')",
			challenge: "z.string().min(1, 'Challenge description is required')",
			solution: "z.string().min(1, 'Solution description is required')",
			results: "z.string().optional()",
			platform: "z.string().min(1, 'Platform is required')",
		},
		isFavorite: false,
	},
	{
		name: "Service Showcase Ad",
		description:
			"Create a concise ad to highlight the unique value and benefits of a service you offer, targeting potential clients on social media.",
		icon: Briefcase,
		features: [
			"Service Benefits",
			"Key Differentiators",
			"Client Testimonials",
			"Strong CTA",
			"Engagement-Oriented Design",
		],
		imageUrl: "/service-showcase.jpg",
		href: "/service-showcase",
		color: "text-indigo-500",
		bgColor: "bg-indigo-200",
		slug: "service-showcase",
		category: "Client Attraction",
		aiPrompt: `Compose a compelling social media ad for a specific service that attracts potential clients. The ad should:

    1. Begin with a hook to highlight the problem the service solves
    2. Briefly describe the service and its unique benefits
    3. Include a short client testimonial or proof point if available
    4. End with a clear call-to-action encouraging inquiries or sign-ups
    5. Use relevant hashtags to broaden reach
    6. Maintain a concise, persuasive, and professional tone`,
		formFields: [
			{
				label: "Service Name",
				field: "serviceName",
				name: "serviceName",
				required: true,
				placeholder: "Enter the service you are promoting",
				type: "text",
			},
			{
				label: "Service Benefits",
				field: "benefits",
				name: "benefits",
				required: true,
				placeholder: "List the main benefits of this service",
				type: "textarea",
			},
			{
				label: "Testimonial",
				field: "testimonial",
				name: "testimonial",
				required: false,
				placeholder: "Include a short client testimonial (optional)",
				type: "textarea",
			},
			{
				label: "Target Platform",
				field: "platform",
				name: "platform",
				required: true,
				type: "select",
				options: [
					{ label: "Instagram", value: "instagram" },
					{ label: "Facebook", value: "facebook" },
					{ label: "LinkedIn", value: "linkedin" },
				],
			},
		],
		validationSchema: {
			serviceName: "z.string().min(1, 'Service name is required')",
			benefits: "z.string().min(1, 'Service benefits are required')",
			testimonial: "z.string().optional()",
			platform: "z.string().min(1, 'Platform is required')",
		},
		isFavorite: false,
	},
	{
		name: "Client Success Story Ad",
		description:
			"Highlight a client’s success story, detailing the impact of your services in a way that appeals to potential clients.",
		icon: BarChart,
		features: [
			"Detailed Client Success",
			"Before-and-After Comparison",
			"Outcome-Oriented",
			"Trust-Building Elements",
			"Encouraging CTA",
		],
		imageUrl: "/client-success.jpg",
		href: "/client-success",
		color: "text-teal-500",
		bgColor: "bg-teal-200",
		slug: "client-success",
		category: "Trust Building",
		aiPrompt: `Create a social media ad that tells the story of a client’s success due to your service. The post should:

    1. Start by presenting the client's initial challenge or problem
    2. Briefly describe the service you provided to solve this problem
    3. Emphasize the measurable outcomes or success metrics
    4. Add a quote from the client if available for authenticity
    5. End with a call-to-action encouraging inquiries or visits to your website
    6. Use a conversational and trust-building tone`,
		formFields: [
			{
				label: "Client Industry",
				field: "clientIndustry",
				name: "clientIndustry",
				required: true,
				placeholder:
					"Enter the client's industry (e.g., eCommerce, SaaS)",
				type: "text",
			},
			{
				label: "Challenge",
				field: "challenge",
				name: "challenge",
				required: true,
				placeholder:
					"Describe the client's challenge before your service",
				type: "textarea",
			},
			{
				label: "Solution",
				field: "solution",
				name: "solution",
				required: true,
				placeholder: "Describe how you solved the challenge",
				type: "textarea",
			},
			{
				label: "Results/Metrics",
				field: "results",
				name: "results",
				required: true,
				placeholder:
					"List measurable results achieved (e.g., 30% increase in sales)",
				type: "textarea",
			},
			{
				label: "Testimonial",
				field: "testimonial",
				name: "testimonial",
				required: false,
				placeholder: "Client quote (optional)",
				type: "textarea",
			},
			{
				label: "Target Platform",
				field: "platform",
				name: "platform",
				required: true,
				type: "select",
				options: [
					{ label: "LinkedIn", value: "linkedin" },
					{ label: "Facebook", value: "facebook" },
					{ label: "Twitter", value: "twitter" },
				],
			},
		],
		validationSchema: {
			clientIndustry: "z.string().min(1, 'Client industry is required')",
			challenge: "z.string().min(1, 'Challenge description is required')",
			solution: "z.string().min(1, 'Solution description is required')",
			results: "z.string().min(1, 'Results description is required')",
			testimonial: "z.string().optional()",
			platform: "z.string().min(1, 'Platform is required')",
		},
		isFavorite: false,
	},
	{
		name: "Product Demo Ad",
		description:
			"Showcase your product with a short, engaging ad that highlights its top features and encourages potential clients to try it.",
		icon: Video,
		features: [
			"Feature Highlight",
			"User-Friendly Description",
			"Problem-Solution Focus",
			"Clear CTA",
			"Platform-Specific Design",
		],
		imageUrl: "/product-demo.jpg",
		href: "/product-demo",
		color: "text-red-500",
		bgColor: "bg-red-200",
		slug: "product-demo",
		category: "Product Awareness",
		aiPrompt: `Create a product demo ad that highlights the key features and benefits in a way that encourages viewers to try it out. The ad should:

    1. Start with a hook introducing the product and its primary benefit
    2. Briefly describe how it solves a specific problem or pain point
    3. Highlight the main features and unique selling points
    4. Conclude with a strong call-to-action encouraging viewers to try or sign up
    5. Use relevant hashtags for your target audience
    6. Maintain an engaging, informative tone`,
		formFields: [
			{
				label: "Product Name",
				field: "productName",
				name: "productName",
				required: true,
				placeholder: "Enter the product's name",
				type: "text",
			},
			{
				label: "Main Benefit",
				field: "benefit",
				name: "benefit",
				required: true,
				placeholder: "Describe the main benefit of the product",
				type: "textarea",
			},
			{
				label: "Features",
				field: "features",
				name: "features",
				required: true,
				placeholder: "List key features",
				type: "textarea",
			},
			{
				label: "Target Platform",
				field: "platform",
				name: "platform",
				required: true,
				type: "select",
				options: [
					{ label: "Instagram", value: "instagram" },
					{ label: "YouTube", value: "youtube" },
					{ label: "LinkedIn", value: "linkedin" },
				],
			},
		],
		validationSchema: {
			productName: "z.string().min(1, 'Product name is required')",
			benefit: "z.string().min(1, 'Main benefit is required')",
			features: "z.string().min(1, 'Features are required')",
			platform: "z.string().min(1, 'Platform is required')",
		},
		isFavorite: false,
	},
   {
      "name": "Limited-Time Offer Ad",
      "description": "Drive urgency with a time-sensitive ad that highlights a special offer, encouraging immediate action from potential clients.",
      "icon": Clock,
      "features": [
        "Urgency-Driven CTA",
        "Clear Offer Description",
        "End Date/Countdown",
        "Benefits Highlight",
        "Visual Impact"
      ],
      "imageUrl": "/limited-time-offer.jpg",
      "href": "/limited-time-offer",
      "color": "text-orange-500",
      "bgColor": "bg-orange-200",
      "slug": "limited-time-offer",
      "category": "Conversion Boost",
      "aiPrompt": `Craft an ad for a limited-time offer that prompts immediate action from viewers. The ad should:

    1. Start with an eye-catching announcement of the offer (e.g., "Flash Sale" or "Only 48 Hours Left!")
    2. Clearly state what the offer includes, such as a discount or free add-ons
    3. Emphasize the benefits of the service or product being offered
    4. Mention the end date or a countdown to create urgency
    5. Finish with a strong call-to-action (e.g., "Sign Up Now," "Get It Before It's Gone")
    6. Keep the tone persuasive and action-oriented`,
      "formFields": [
        {
          "label": "Offer Description",
          "field": "offerDescription",
          "name": "offerDescription",
          "required": true,
          "placeholder": "Describe the limited-time offer",
          "type": "textarea"
        },
        {
          "label": "Benefits",
          "field": "benefits",
          "name": "benefits",
          "required": true,
          "placeholder": "Highlight the main benefits",
          "type": "textarea"
        },
        {
          "label": "End Date or Countdown",
          "field": "endDate",
          "name": "endDate",
          "required": true,
          "placeholder": "Specify the offer's end date or countdown",
          "type": "text"
        },
        {
          "label": "Target Platform",
          "field": "platform",
          "name": "platform",
          "required": true,
          "type": "select",
          "options": [
            { "label": "Instagram", "value": "instagram" },
            { "label": "Facebook", "value": "facebook" },
            { "label": "Twitter", "value": "twitter" }
          ]
        }
      ],
      "validationSchema": {
        "offerDescription": "z.string().min(1, 'Offer description is required')",
        "benefits": "z.string().min(1, 'Benefits are required')",
        "endDate": "z.string().min(1, 'End date or countdown is required')",
        "platform": "z.string().min(1, 'Platform is required')"
      },
      "isFavorite": false
    },
    {
      "name": "Explainer Ad",
      "description": "Educate your audience about your service or product in an engaging and simplified way, making complex features easy to understand.",
      "icon": BookOpen,
      "features": [
        "Simplified Explanation",
        "Problem-Solution Approach",
        "Highlight of Key Features",
        "Clear CTA for More Info",
        "Engagement-Oriented Tone"
      ],
      "imageUrl": "/explainer-ad.jpg",
      "href": "/explainer-ad",
      "color": "text-purple-500",
      "bgColor": "bg-purple-200",
      "slug": "explainer-ad",
      "category": "Brand Awareness",
      "aiPrompt": `Compose an explainer ad that educates potential clients on the key benefits and features of your service or product. The ad should:

    1. Start by addressing a common problem or pain point your target audience faces
    2. Explain in simple terms how your service/product solves this problem
    3. Highlight the top 2-3 unique features or benefits that make it effective
    4. End with a call-to-action inviting readers to learn more or try it out
    5. Use hashtags or tags that increase discoverability
    6. Maintain an informative, approachable tone`,
      "formFields": [
        {
          "label": "Product or Service Name",
          "field": "productName",
          "name": "productName",
          "required": true,
          "placeholder": "Enter the name of your product or service",
          "type": "text"
        },
        {
          "label": "Problem Addressed",
          "field": "problem",
          "name": "problem",
          "required": true,
          "placeholder": "Describe the problem your service solves",
          "type": "textarea"
        },
        {
          "label": "Top Features",
          "field": "features",
          "name": "features",
          "required": true,
          "placeholder": "List the top features or benefits",
          "type": "textarea"
        },
        {
          "label": "Target Platform",
          "field": "platform",
          "name": "platform",
          "required": true,
          "type": "select",
          "options": [
            { "label": "Facebook", "value": "facebook" },
            { "label": "Instagram", "value": "instagram" },
            { "label": "LinkedIn", "value": "linkedin" }
          ]
        }
      ],
      "validationSchema": {
        "productName": "z.string().min(1, 'Product or service name is required')",
        "problem": "z.string().min(1, 'Problem is required')",
        "features": "z.string().min(1, 'Features are required')",
        "platform": "z.string().min(1, 'Platform is required')"
      },
      "isFavorite": false
    },
    {
      "name": "Free Resource Ad",
      "description": "Attract potential leads by offering a free resource, such as an ebook or template, with a clear CTA for download or sign-up.",
      "icon": Gift,
      "features": [
        "Resource Description",
        "Lead-Generating CTA",
        "Value-Oriented Messaging",
        "Specific Benefits",
        "Attractive Design Elements"
      ],
      "imageUrl": "/free-resource.jpg",
      "href": "/free-resource",
      "color": "text-blue-500",
      "bgColor": "bg-blue-200",
      "slug": "free-resource",
      "category": "Lead Generation",
      "aiPrompt": `Create an ad promoting a free resource (such as an ebook, checklist, or template) to attract leads. The ad should:

    1. Start with an enticing statement that introduces the free resource
    2. Briefly describe the value or knowledge the resource provides
    3. Mention specific benefits or topics covered in the resource
    4. Include a call-to-action that prompts viewers to download or sign up
    5. Use relevant hashtags to target the right audience
    6. Maintain a friendly, helpful tone`,
      "formFields": [
        {
          "label": "Resource Title",
          "field": "resourceTitle",
          "name": "resourceTitle",
          "required": true,
          "placeholder": "Enter the title of your free resource",
          "type": "text"
        },
        {
          "label": "Description",
          "field": "description",
          "name": "description",
          "required": true,
          "placeholder": "Describe the resource's value",
          "type": "textarea"
        },
        {
          "label": "Benefits",
          "field": "benefits",
          "name": "benefits",
          "required": true,
          "placeholder": "List the main benefits or topics covered",
          "type": "textarea"
        },
        {
          "label": "Target Platform",
          "field": "platform",
          "name": "platform",
          "required": true,
          "type": "select",
          "options": [
            { "label": "Instagram", "value": "instagram" },
            { "label": "LinkedIn", "value": "linkedin" },
            { "label": "Twitter", "value": "twitter" }
          ]
        }
      ],
      "validationSchema": {
        "resourceTitle": "z.string().min(1, 'Resource title is required')",
        "description": "z.string().min(1, 'Description is required')",
        "benefits": "z.string().min(1, 'Benefits are required')",
        "platform": "z.string().min(1, 'Platform is required')"
      },
      "isFavorite": false
    }
];
