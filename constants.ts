import {
  BookUser,
  Briefcase,
  Handshake,
  Home,
  History,
  CreditCard,
  Settings,
  TrendingUp,
  Code,
  Terminal,
  Server,
  Bug,
  FileCode,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  LanguagesIcon,
  LinkedinIcon,
  FileSpreadsheetIcon,
  FileVideo2Icon,
  CookieIcon,
  LibraryBig,
  ListTodo,
  Newspaper,
  TypeIcon,
  ListIcon,
} from "lucide-react";
import { z } from "zod";
export const MAX_FREE_COUNTS = 10;
const courseOutlineSchema = z.object({
  courseTopic: z.string().min(1, "Course topic is required"),
  courseLength: z.enum(["Standard"], { message: "Invalid course length" }),
  courseType: z.enum(["Online"], { message: "Invalid course type" }),
  tone: z.enum(["Default"]),
  language: z.enum(["English (US)"]),
  additionalInstructions: z.string().optional(),
  creativity: z.string().optional(),
});
const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  keywords: z.string().min(1, "Keywords are required"),
  metadata: z.string().optional(),
  references: z.string().optional(),
  category: z.enum(
    [
      "frontend",
      "backend",
      "fullstack",
      "devops",
      "machinelearning",
      "datascience",
    ],
    {
      message: "Category is required",
    }
  ),
  format: z.enum(["article", "tutorial", "opinion"], {
    message: "Format is required",
  }),
  wordCount: z.coerce
    .number()
    .min(100, "Word count should be at least 100")
    .optional(),
  topic: z.string().min(1, "Topic is required"),
  // outline: z.boolean().optional(),
  includeImages: z.boolean().optional(),
  includeLinks: z.boolean().optional(),
  realtimeKnowledge: z.boolean().optional(),
  articleLength: z.enum(["short", "long"], {
    message: "Article length is required",
  }),
  tone: z.enum(["default", "formal", "casual"], {
    message: "Tone is required",
  }),
  language: z.enum(["en_us", "en_gb", "es", "fr"], {
    message: "Language is required",
  }),
  pointOfView: z.enum(["automatic", "first", "second", "third"], {
    message: "Point of view is required",
  }),
  // blankOutline: z.boolean().optional(),
  // includeVideo: z.boolean().optional(),
  primaryKeyword: z.string().optional(),
  targetAudience: z.string().optional(),
  outlineInstructions: z.string().optional(),
  articleInstructions: z.string().optional(),
  creativity: z.enum(["low", "medium", "high"]).optional(),
});
const freelanceProposalSchema = z.object({
  yourName: z.string().min(1, "Your name is required"),
  clientName: z.string().min(1, "Client name is required"),
  proposedFee: z.string().min(1, "Proposed fee is required"),
  deliverables: z.string().min(1, "Deliverables are required"),
  tone: z.enum(["Default"]),
  language: z.enum(["English (US)"]),
});
const newsletterSchema = z.object({
  pointsToConvey: z.string().min(1, "Points to convey are required"),
  articleUrl: z.string().url({ message: "Invalid URL format" }).optional(),
  youtubeUrl: z.string().url({ message: "Invalid URL format" }).optional(),
  newsletterType: z.enum(["Automatic"], { message: "Invalid newsletter type" }),
  includeLink: z.boolean().optional(),
  tone: z.enum(["Default"]),
  language: z.enum(["English (US)"]),
  targetAudience: z.string().optional(),
  pointOfView: z.enum(["Automatic"]),
  additionalInstructions: z.string().optional(),
  creativity: z.string().optional(),
});
const explainLikeImFiveSchema = z.object({
  topic: z.string().min(1, "Topic is required"),
  tone: z.enum(["Default"]),
  language: z.enum(["English (US)"]),
  additionalInstructions: z.string().optional(),
});
const jobSearchSchema = z.object({
  jobDescription: z.string().min(1, "Job description is required"),
  resume: z.string().optional(),
  jobTitle: z.string().min(1, "Job title is required"),
  companyName: z.string().optional(),
  interviewQuestion: z.string().optional(),
  specificIndustry: z.string().optional(),
  bulletPoint: z.string().optional(),
});
const dsaLearnerSchema = z.object({
  topic: z.string().min(1, "Topic is required"),
  explanationMode: z.enum(["Simple", "Detailed"]).default("Simple"),
  language: z.enum(["English (US)"]),
  practiceProblems: z.boolean().default(false),
  codeExamples: z.boolean().default(false),
  visualizations: z.boolean().default(false),
  quizzes: z.boolean().default(false),

  algorithmComplexity: z.boolean().default(false),
  additionalResources: z.boolean().default(false),
});
export const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
    color: "text-green-500",
  },
  {
    label: "History",
    icon: History,
    href: "/history",
    color: "text-yellow-500",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/billing",
    color: "text-red-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];

export const TEMPLATES = [
  {
    name: "AI Blog Writer Tool",
    description:
      "Generate high-quality, SEO-optimized blogs on various topics. Enhance your web presence with content that engages and informs your audience.",
    icon: TrendingUp,
    href: "/ai-blog-writer",
    color: "text-violet-500",
    bgColor: "bg-red-300",
    slug: "ai-blog-writer",
    category: "Content Generation",
    aiPrompt: "Write a blog on the given topic",
    formFields: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "title",
        required: true,
        placeholder: "Example: Tips for growing your email list",
      },
      {
        label: "Enter keywords (comma-separated)",
        field: "input",
        name: "keywords",
        required: true,
        placeholder: "Example: email, marketing, list",
      },
      {
        label: "Enter metadata",
        field: "textarea",
        name: "metadata",
        required: false,
        placeholder: "Example: Blog metadata...",
      },
      {
        label: "Enter references",
        field: "textarea",
        name: "references",
        required: false,
        placeholder: "Example: Reference links...",
      },
      {
        label: "Insert Code Snippet",
        field: "textarea",
        name: "codeSnippet",
        required: false,
        placeholder: "Example: ```js console.log('Hello World'); ```",
      },
      {
        label: "Technical Terms Glossary",
        field: "textarea",
        name: "technicalTerms",
        required: false,
        placeholder: "Example: JSON: JavaScript Object Notation",
      },
      {
        label: "Markdown Content",
        field: "textarea",
        name: "markdownContent",
        required: false,
        placeholder: "Example: # Heading \n Content",
      },
      {
        label: "API/Library References",
        field: "textarea",
        name: "apiReferences",
        required: false,
        placeholder: "Example: React, Next.js",
      },
      {
        label: "Step-by-Step Instructions",
        field: "textarea",
        name: "stepByStep",
        required: false,
        placeholder: "Example: 1. Step one \n 2. Step two",
      },
      {
        label: "Use Case Scenarios",
        field: "textarea",
        name: "useCaseScenarios",
        required: false,
        placeholder: "Example: Building a chat app with React",
      },
      {
        label: "Select category",
        field: "select",
        name: "category",
        required: true,
        options: [
          { label: "Frontend", value: "frontend" },
          { label: "Backend", value: "backend" },
          { label: "Fullstack", value: "fullstack" },
          { label: "DevOps", value: "devops" },
          { label: "Machine Learning", value: "machinelearning" },
          { label: "Data Science", value: "datascience" },
        ],
      },
      {
        label: "Choose format",
        field: "radiogroup",
        name: "format",
        required: true,
        options: [
          { label: "Article", value: "article" },
          { label: "Tutorial", value: "tutorial" },
          { label: "Opinion", value: "opinion" },
        ],
      },
      {
        label: "Enter desired word count",
        field: "input",
        name: "wordCount",
        required: false,
        type: "number",
        placeholder: "Example: 1000",
      },

      {
        label: "Include Images?",
        field: "switch",
        name: "includeImages",
        required: false,
        value: false,
      },
      {
        label: "Include Links?",
        field: "switch",
        name: "includeLinks",
        required: false,
        value: false,
      },
      {
        label: "Realtime Knowledge?",
        field: "switch",
        name: "realtimeKnowledge",
        required: false,
        value: false,
      },
      {
        label: "Article Length",
        field: "radiogroup",
        name: "articleLength",
        required: true,
        options: [
          { label: "Short-form (< ~1,000 words)", value: "short" },
          { label: "Long-form (> ~1,000 words)", value: "long" },
        ],
      },
      {
        label: "Tone & Writing Style",
        field: "radiogroup",
        name: "tone",
        required: true,
        options: [
          { label: "Default", value: "default" },
          { label: "Formal", value: "formal" },
          { label: "Casual", value: "casual" },
        ],
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        required: true,
        options: [
          { label: "English (US)", value: "en_us" },
          { label: "English (GB)", value: "en_gb" },
          { label: "Spanish", value: "es" },
          { label: "French", value: "fr" },
        ],
      },
      {
        label: "Point of View",
        field: "radiogroup",
        name: "pointOfView",
        required: true,
        options: [
          { label: "Automatic", value: "automatic" },
          { label: "First Person", value: "first" },
          { label: "Second Person", value: "second" },
          { label: "Third Person", value: "third" },
        ],
      },
      // {
      //   label: "Use Blank Outline?",
      //   field: "switch",
      //   name: "blankOutline",
      //   required: false,
      //   value: false,
      // },
      // {
      //   label: "Include Relevant Video?",
      //   field: "switch",
      //   name: "includeVideo",
      //   required: false,
      //   value: false,
      // },
      {
        label: "Primary Keyword (optional)",
        field: "input",
        name: "primaryKeyword",
        required: false,
        placeholder: "A primary keyword for the blog post",
      },
      {
        label: "Target Audience (optional)",
        field: "input",
        name: "targetAudience",
        required: false,
        placeholder: "Example: People who love camping.",
      },
      {
        label: "Additional Instructions for Outline (optional)",
        field: "textarea",
        name: "outlineInstructions",
        required: false,
        placeholder:
          "Example: Make sure there is a section about my dog Ralph.",
      },
      {
        label: "Additional Instructions for Article (optional)",
        field: "textarea",
        name: "articleInstructions",
        required: false,
        placeholder: "Example: For context, the Mailchimp has a free plan.",
      },
      {
        label: "Creativity (optional)",
        field: "select",
        name: "creativity",
        required: false,
        options: [
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
        ],
      },
    ],
    validationSchema: blogSchema,
  },
  {
    name: "Job Search Accelerator Tool",
    description:
      "Utilize ChatGPT to streamline your job search and land more interviews with these actionable tips.",
    icon: Briefcase,
    href: "/job-search-accelerator",
    color: "text-blue-500",
    bgColor: "bg-yellow-300",
    slug: "job-search-accelerator",
    category: "Career Development",
    aiPrompt:
      "Optimize job search materials and preparation using the provided inputs.",
    formFields: [
      {
        label: "Job Description",
        field: "textarea",
        name: "jobDescription",
        required: true,
        placeholder: "Paste the job description here...",
      },
      {
        label: "Resume",
        field: "textarea",
        name: "resume",
        required: false,
        placeholder: "Paste your resume here...",
      },
      {
        label: "Job Title",
        field: "input",
        name: "jobTitle",
        required: true,
        placeholder: "Example: Software Engineer",
      },
      {
        label: "Company Name",
        field: "input",
        name: "companyName",
        required: false,
        placeholder: "Example: Tech Corp",
      },
      {
        label: "Interview Question",
        field: "textarea",
        name: "interviewQuestion",
        required: false,
        placeholder: "Paste an interview question here...",
      },
      {
        label: "Specific Industry",
        field: "input",
        name: "specificIndustry",
        required: false,
        placeholder: "Example: FinTech",
      },
      {
        label: "Bullet Point",
        field: "textarea",
        name: "bulletPoint",
        required: false,
        placeholder: "Paste a bullet point from your resume here...",
      },
    ],
    validationSchema: jobSearchSchema,
  },
  {
    name: "Freelance Proposal Generator Preview",
    description: "Generate a freelance proposal using details about a project.",
    icon: Handshake,
    href: "/freelance-proposal-generator",
    color: "text-violet-500",
    bgColor: "bg-violet-100/10",
    slug: "freelance-proposal-generator",
    category: "Proposal Generation",
    formFields: [
      {
        label: "Your Name",
        field: "input",
        name: "yourName",
        required: true,
        placeholder: "Example: Gunther Smith",
      },
      {
        label: "Client Name",
        field: "input",
        name: "clientName",
        required: true,
        placeholder: "Example: Central Perk, LLC",
      },
      {
        label: "Proposed Fee",
        field: "input",
        name: "proposedFee",
        required: true,
        placeholder: "Example: $2,500",
      },
      {
        label: "Deliverables",
        field: "textarea",
        name: "deliverables",
        required: true,
        placeholder:
          "Example: Creating a website with 5 pages, 10 blog posts, and 3 landing pages.",
      },
      {
        label: "Tone & writing style",
        field: "select",
        name: "tone",
        required: true,
        options: [{ label: "Default", value: "Default" }],
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        required: true,
        options: [{ label: "English (US)", value: "English (US)" }],
      },
    ],
    validationSchema: freelanceProposalSchema,
  },
  {
    name: "Newsletter Generator Preview",
    description:
      "Generate a newsletter using points to convey, an article, or a YouTube video URL.",
    icon: Newspaper,
    href: "/newsletter-generator",
    color: "text-violet-500",
    bgColor: "bg-violet-100/10",
    slug: "newsletter-generator",
    category: "Newsletter Generation",
    formFields: [
      {
        label: "Points to Convey / Article URL / YouTube Video URL",
        field: "textarea",
        name: "pointsToConvey",
        required: true,
        placeholder: "Example: Key insights from our latest research",
      },
      {
        label: "Newsletter Type",
        field: "select",
        name: "newsletterType",
        required: true,
        options: [{ label: "Automatic", value: "Automatic" }],
      },
      {
        label: "Include Link?",
        field: "switch",
        name: "includeLink",
        required: false,
      },
      {
        label: "Tone & writing style",
        field: "select",
        name: "tone",
        required: true,
        options: [{ label: "Default", value: "Default" }],
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        required: true,
        options: [{ label: "English (US)", value: "English (US)" }],
      },
      {
        label: "Target Audience (optional)",
        field: "input",
        name: "targetAudience",
        required: false,
        placeholder: "Example: People who love camping.",
      },
      {
        label: "Point of View",
        field: "select",
        name: "pointOfView",
        required: true,
        options: [{ label: "Automatic", value: "Automatic" }],
      },
      {
        label: "Additional Instructions (optional)",
        field: "textarea",
        name: "additionalInstructions",
        required: false,
        placeholder: "Example: Include a mention of my dog Ralph.",
      },
      {
        label: "Creativity (optional)",
        field: "textarea",
        name: "creativity",
        required: false,
        placeholder: "",
      },
    ],
    validationSchema: newsletterSchema,
  },
  {
    name: "Course Outline Generator Preview",
    description: "Generate a course outline based on a topic.",
    icon: ListTodo,
    href: "/course-outline-generator",
    color: "text-violet-500",
    bgColor: "bg-violet-100/10",
    slug: "course-outline-generator",
    category: "Course Outline Generation",
    formFields: [
      {
        label: "Course Topic",
        field: "input",
        name: "courseTopic",
        required: true,
        placeholder: "Example: Introduction to Python Programming",
      },
      {
        label: "Course Length",
        field: "select",
        name: "courseLength",
        required: true,
        options: [{ label: "Standard", value: "Standard" }],
      },
      {
        label: "Course Type",
        field: "select",
        name: "courseType",
        required: true,
        options: [{ label: "Online", value: "Online" }],
      },
      {
        label: "Tone & writing style",
        field: "select",
        name: "tone",
        required: true,
        options: [{ label: "Default", value: "Default" }],
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        required: true,
        options: [{ label: "English (US)", value: "English (US)" }],
      },
      {
        label: "Additional Instructions (optional)",
        field: "textarea",
        name: "additionalInstructions",
        required: false,
        placeholder: "Example: Include a mention of my dog Ralph.",
      },
      {
        label: "Creativity (optional)",
        field: "textarea",
        name: "creativity",
        required: false,
        placeholder: "",
      },
    ],
    validationSchema: courseOutlineSchema,
  },
  {
    name: "Explain Like I'm Five Tool Preview",
    description: "Get explained a topic like you're five years old.",
    icon: BookUser,
    href: "/explain-like-im-five",
    color: "text-violet-500",
    bgColor: "bg-violet-100/10",
    slug: "explain-like-im-five",
    category: "Education",
    formFields: [
      {
        label: "Topic",
        field: "input",
        name: "topic",
        required: true,
        placeholder: "Example: The Blockchain",
      },
      {
        label: "Tone & writing style",
        field: "select",
        name: "tone",
        required: true,
        options: [{ label: "Default", value: "Default" }],
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        required: true,
        options: [{ label: "English (US)", value: "English (US)" }],
      },
      {
        label: "Additional Instructions (optional)",
        field: "textarea",
        name: "additionalInstructions",
        required: false,
        placeholder: "Specify any special requests or details.",
      },
    ],
    validationSchema: explainLikeImFiveSchema,
  },
  {
    name: "DSA Learner Tool",
    description:
      "Learn Data Structures and Algorithms (DSA) concepts step-by-step.",
    icon: BookUser,
    href: "/dsa-learner",
    color: "text-orange",
    bgColor: "bg-blue-100/10",
    slug: "dsa-learner",
    category: "Education",
    formFields: [
      {
        label: "Topic",
        field: "input",
        name: "topic",
        required: true,
        placeholder: "Example: Arrays, Sorting Algorithms, etc.",
      },
      {
        label: "Explanation Mode",
        field: "select",
        name: "explanationMode",
        required: true,
        options: [
          { label: "Simple", value: "Simple" },
          { label: "Detailed", value: "Detailed" },
        ],
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        required: true,
        options: [{ label: "English (US)", value: "English (US)" }],
      },
      {
        label: "Practice Problems",
        field: "switch",
        name: "practiceProblems",
        required: false,
        value: false,
      },
      {
        label: "Code Examples",
        field: "switch",
        name: "codeExamples",
        required: false,
        value: false,
      },
      {
        label: "Visualizations",
        field: "switch",
        name: "visualizations",
        required: false,
        value: false,
      },
      {
        label: "Quizzes and Challenges",
        field: "switch",
        name: "quizzes",
        required: false,
        value: false,
      },

      {
        label: "Algorithm Complexity Analysis",
        field: "switch",
        name: "algorithmComplexity",
        required: false,
        value: false,
      },
      {
        label: "Additional Resources",
        field: "switch",
        name: "additionalResources",
        required: false,
        value: false,
      },
    ],
    validationSchema: dsaLearnerSchema,
  },
];
