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
			className="w-full max-w-sm overflow-hidden bg-sidebar text-card-foreground rounded-lg shadow-lg relative "
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
				className="object-cover   w-full h-56"
				src={tool.imageUrl}
				alt={tool.name}
				width={200}
				height={200}
				quality={100}
			/>

			<div className={`flex items-center px-6 py-3`}>
				{typeof tool.icon === "function" ? (
					<tool.icon
						className={cn("w-6 h-6 fill-current", tool.color)}
					/>
				) : (
					<>
						{React.createElement(tool.icon, {
							className: cn("w-6 h-6", tool.color),
						})}
					</>
				)}
				<h1 className="mx-3 mt-2 text-xl font-semibold ">
					{tool.name}
				</h1>
			</div>
			<div className="px-6 pb-4">
				{/* <h1 className="text-xl font-semibold ">{tool.name}</h1> */}
				<p className="py-2 text-foreground/70">{tool.description}</p>
			</div>
		</Link>
	);
};
export default ToolCard
