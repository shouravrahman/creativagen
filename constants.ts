import {
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
  TypeIcon,
  ListIcon,
} from "lucide-react";
import { z } from "zod";
export const MAX_FREE_COUNTS = 10;

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
    bgColor: "bg-violet-100/10",
    slug: "ai-blog-writer",
    category: "Content Generation",
    aiPrompt: "Write a blog on the given topic",
    formFields: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter keywords (comma-separated)",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter metadata",
        field: "textarea",
        name: "metadata",
        required: false,
      },
      {
        label: "Enter references",
        field: "textarea",
        name: "references",
        required: false,
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
      },
    ],
    validationSchema: blogSchema,
  },
  {
    name: "Code Snippet Generator",
    description:
      "Quickly generate code snippets for common web development tasks, saving time and improving productivity.",
    icon: Code,
    href: "/code-snippet",
    color: "text-blue-500", // Blue for coding-related tasks
    bgColor: "bg-blue-100/10",
    slug: "code-snippet-generator",
    category: "Development",
    aiPrompt: "Generate a code snippet for the given task",
    formFields: [
      {
        label: "Describe the code snippet you need",
        field: "input",
        name: "taskDescription",
        required: true,
      },
    ],
  },
  {
    name: "Terminal Command Assistant",
    description:
      "Get suggestions and explanations for terminal commands, making it easier to work with command-line interfaces.",
    icon: Terminal,
    href: "/terminal-assistant",
    color: "text-gray-500", // Gray for terminal-related tasks
    bgColor: "bg-gray-100/10",
    slug: "terminal-command-assistant",
    category: "Development",
    aiPrompt: "Suggest a terminal command for the given task",
    formFields: [
      {
        label: "Enter the task or issue",
        field: "input",
        name: "taskDescription",
        required: true,
      },
    ],
  },
  {
    name: "API Endpoint Mocking Tool",
    description:
      "Mock API endpoints for testing and development, ensuring your application can be tested without a live backend.",
    icon: Server,
    href: "/api-mocking",
    color: "text-green-500", // Green for server-related tasks
    bgColor: "bg-green-100/10",
    slug: "api-mocking-tool",
    category: "Development",
    aiPrompt: "Mock an API endpoint for the given specifications",
    formFields: [
      {
        label: "Enter the API endpoint details",
        field: "textarea",
        name: "apiDetails",
        required: true,
      },
    ],
  },
  {
    name: "Debugging Assistant",
    description:
      "Get help with debugging your code by providing error explanations and potential fixes.",
    icon: Bug,
    href: "/debug-assistant",
    color: "text-red-500", // Red for debugging-related tasks
    bgColor: "bg-red-100/10",
    slug: "debugging-assistant",
    category: "Development",
    aiPrompt: "Provide debugging assistance for the given error",
    formFields: [
      {
        label: "Enter the error message",
        field: "textarea",
        name: "errorMessage",
        required: true,
      },
    ],
  },
  {
    name: "Code Review Tool",
    description:
      "Automate code reviews to ensure adherence to coding standards and best practices.",
    icon: FileCode,
    href: "/code-review",
    color: "text-purple-500", // Purple for code review tasks
    bgColor: "bg-purple-100/10",
    slug: "code-review-tool",
    category: "Development",
    aiPrompt:
      "Review the following code for best practices and standards compliance",
    formFields: [
      {
        label: "Paste your code",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
];
