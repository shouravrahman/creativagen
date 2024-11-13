import { ChartBarIcon, ChartPieIcon, MicrophoneIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import {
   BarChart4,
   Box,
   Brain,
   BrainCircuit,
   BriefcaseIcon,
   Clipboard,
   CloudLightning,
   CodeIcon,
   Headphones,
   Home,
   History,
   CreditCard,
   Layers,
   Magnet,
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
   Mail,
   Map,
   MegaphoneIcon,
   PenTool,
   Server,
   Target,
   TargetIcon,
   Telescope,
   TrendingUp,
   Trophy,
   Users,
   WeightIcon,
   RocketIcon, BrainCircuitIcon, TrendingUpIcon
} from "lucide-react";



import { IoSpeedometer } from "react-icons/io5";

// Define your icon maps
const reactIconMap = {
   IoSpeedometer
};

const lucideIconMap = {
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
   Telescope,
   TrendingUp,
   Map,
   Magnet,
   Users,
   Layers,
   WeightIcon,
   RocketIcon,
   BrainCircuitIcon,
   TrendingUpIcon,
   Trophy,
   ChartBarIcon,
   Mail,
   Target,
   Clipboard,
   Headphones,
   Brain,
   PenTool,
   Server,

};
const heroIconMap = {
   MicrophoneIcon, UserGroupIcon, ChartPieIcon
};

// Combine both maps into a single map for easier access
const iconMap = { ...reactIconMap, ...lucideIconMap, ...heroIconMap };

// Function to get the icon component by name
export const getIconComponent = (iconName: string) => iconMap[iconName];
