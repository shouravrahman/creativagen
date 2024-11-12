import React from "react";
import { ChevronLeft, ChevronRight, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { format, addMonths, subMonths } from "date-fns";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { CreateContentPlanForm } from "./CreateContentPlanForm";

interface ContentPlannerHeaderProps {
	currentDate: Date;
	setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
	platformFilter: string;
	setPlatformFilter: React.Dispatch<React.SetStateAction<string>>;
	contentTypeFilter: string;
	setContentTypeFilter: React.Dispatch<React.SetStateAction<string>>;
	handleGenerateContentPlan: any;
}

export const ContentPlannerHeader: React.FC<ContentPlannerHeaderProps> = ({
	currentDate,
	setCurrentDate,
	platformFilter,
	setPlatformFilter,
	contentTypeFilter,
	setContentTypeFilter,
   handleGenerateContentPlan
}) => {
	const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
	const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

	return (
		<header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<h1 className="text-3xl font-bold mb-4 sm:mb-0">Content Planner</h1>
			<div className="flex flex-wrap gap-2 items-center">
				<Select
					value={platformFilter}
					onValueChange={setPlatformFilter}
				>
					<SelectTrigger className="w-[140px]">
						<SelectValue placeholder="Platform" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Platforms</SelectItem>
						<SelectItem value="twitter">Twitter</SelectItem>
						<SelectItem value="facebook">Facebook</SelectItem>
						<SelectItem value="instagram">Instagram</SelectItem>
						<SelectItem value="linkedin">LinkedIn</SelectItem>
					</SelectContent>
				</Select>
				<Select
					value={contentTypeFilter}
					onValueChange={setContentTypeFilter}
				>
					<SelectTrigger className="w-[140px]">
						<SelectValue placeholder="Content Type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Types</SelectItem>
						<SelectItem value="post">Post</SelectItem>
						<SelectItem value="story">Story</SelectItem>
						<SelectItem value="reel">Reel</SelectItem>
						<SelectItem value="article">Article</SelectItem>
					</SelectContent>
				</Select>
				<Button
					variant="outline"
					size="icon"
				>
					<Filter className="h-4 w-4" />
				</Button>
			</div>
			<div className="flex items-center gap-2">
				<Button
					variant="outline"
					size="icon"
					onClick={handlePreviousMonth}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					onClick={handleNextMonth}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
				<h2 className="text-xl font-semibold">
					{format(currentDate, "MMMM yyyy")}
				</h2>
				<Button
					variant="outline"
					onClick={() => setCurrentDate(new Date())}
				>
					<Calendar className="mr-2 h-4 w-4" /> Today
				</Button>
            <Dialog>
               <DialogTrigger>
                  <Button size={"lg"} variant={"destructive"}>
                     Create Plan
                  </Button>
               </DialogTrigger>
               <DialogContent className="max-w-4xl w-full ">
                  <CreateContentPlanForm
                     onSubmit={handleGenerateContentPlan}
                  />
               </DialogContent>
            </Dialog>
			</div>
		</header>
	);
};
