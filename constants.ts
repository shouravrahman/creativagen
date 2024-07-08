import { Home, History, CreditCard, Settings,TrendingUp, Code, Terminal, Server, Bug, FileCode, ImageIcon, MessageSquare, Music, VideoIcon, LanguagesIcon, LinkedinIcon, FileSpreadsheetIcon, FileVideo2Icon, CookieIcon, TypeIcon, ListIcon } from "lucide-react";
export const MAX_FREE_COUNTS = 10;
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
    name: 'SEO Ready Technical Blog Writer',
    description: 'Generate engaging, SEO-optimized technical blogs tailored to your specified topics. Enhance your web presence with high-quality content that resonates with your audience.',
    icon: TrendingUp,
    href: '/conversation',
    color: "text-violet-500", // Slightly lighter violet for approachable conversations
    bgColor: "bg-violet-100/10",
    slug: "blog-writer",
    category: "Blog",
    aiPrompt: "Write a blog with the given topic",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      }
    ]
  },
  {
    name: 'Code Snippet Generator',
    description: 'Quickly generate code snippets for common web development tasks, saving time and improving productivity.',
    icon: Code,
    href: '/code-snippet',
    color: "text-blue-500", // Blue for coding-related tasks
    bgColor: "bg-blue-100/10",
    slug: "code-snippet-generator",
    category: "Development",
    aiPrompt: "Generate a code snippet for the given task",
    form: [
      {
        label: "Describe the code snippet you need",
        field: "input",
        name: "taskDescription",
        required: true,
      }
    ]
  },
  {
    name: 'Terminal Command Assistant',
    description: 'Get suggestions and explanations for terminal commands, making it easier to work with command-line interfaces.',
    icon: Terminal,
    href: '/terminal-assistant',
    color: "text-gray-500", // Gray for terminal-related tasks
    bgColor: "bg-gray-100/10",
    slug: "terminal-command-assistant",
    category: "Development",
    aiPrompt: "Suggest a terminal command for the given task",
    form: [
      {
        label: "Enter the task or issue",
        field: "input",
        name: "taskDescription",
        required: true,
      }
    ]
  },
  {
    name: 'API Endpoint Mocking Tool',
    description: 'Mock API endpoints for testing and development, ensuring your application can be tested without a live backend.',
    icon: Server,
    href: '/api-mocking',
    color: "text-green-500", // Green for server-related tasks
    bgColor: "bg-green-100/10",
    slug: "api-mocking-tool",
    category: "Development",
    aiPrompt: "Mock an API endpoint for the given specifications",
    form: [
      {
        label: "Enter the API endpoint details",
        field: "textarea",
        name: "apiDetails",
        required: true,
      }
    ]
  },
  {
    name: 'Debugging Assistant',
    description: 'Get help with debugging your code by providing error explanations and potential fixes.',
    icon: Bug,
    href: '/debug-assistant',
    color: "text-red-500", // Red for debugging-related tasks
    bgColor: "bg-red-100/10",
    slug: "debugging-assistant",
    category: "Development",
    aiPrompt: "Provide debugging assistance for the given error",
    form: [
      {
        label: "Enter the error message",
        field: "textarea",
        name: "errorMessage",
        required: true,
      }
    ]
  },
  {
    name: 'Code Review Tool',
    description: 'Automate code reviews to ensure adherence to coding standards and best practices.',
    icon: FileCode,
    href: '/code-review',
    color: "text-purple-500", // Purple for code review tasks
    bgColor: "bg-purple-100/10",
    slug: "code-review-tool",
    category: "Development",
    aiPrompt: "Review the following code for best practices and standards compliance",
    form: [
      {
        label: "Paste your code",
        field: "textarea",
        name: "code",
        required: true,
      }
    ]
  }
];
