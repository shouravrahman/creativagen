import { cn } from "@/lib/utils";
import { LucideIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ITool {
	imageUrl: string;
	name: string;
	color: string;
	description: string;
	features: string[];
	slug: string;
	icon: IconType | LucideIcon;
	isFavorite?: boolean;
}

const ToolCard = ({
	tool,
	onToggleFavorite,
}: {
	tool: ITool;
	onToggleFavorite: () => void;
}) => {
	return (
		<Link
			className="w-full max-w-sm overflow-hidden bg-sidebar text-card-foreground rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
			href={`/dashboard/content/${tool.slug}`}
		>
			<button
				className="absolute top-2 right-2 z-10 text-yellow-500 hover:text-yellow-600"
				onClick={(e) => {
					e.preventDefault();
					onToggleFavorite();
				}}
			>
				{tool.isFavorite ? (
					<StarIcon className="w-6 h-6 fill-current" />
				) : (
					<StarIcon className="w-6 h-6" />
				)}
			</button>
			<Image
				className="object-cover w-full h-56 transition-transform duration-300 ease-in-out transform hover:scale-110"
				src={tool.imageUrl}
				alt={tool.name}
				width={200}
				height={200}
				quality={100}
			/>

			<div className={`flex items-center px-6 py-4`}>
				{typeof tool.icon === "function" ? (
					<tool.icon
						className={cn("w-6 h-6 text-white", tool.color)}
					/>
				) : (
					<>
						{React.createElement(tool.icon, {
							className: cn("w-6 h-6", tool.color),
						})}
					</>
				)}
				<h2 className="ml-3 text-lg  font-semibold">{tool.name}</h2>
			</div>
			<div className="px-6 pb-4">
				<p className="py-2 text-foreground/70">{tool.description}</p>
			</div>
		</Link>
	);
};

export default ToolCard;
