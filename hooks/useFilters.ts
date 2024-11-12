import { ContentItem } from "@/types";
import { useState } from "react";

export const useFilters = () => {
	const [platformFilter, setPlatformFilter] = useState<string>("all");
	const [contentTypeFilter, setContentTypeFilter] = useState<string>("all");

	const filterContent = (items: ContentItem[]) => {
		return items.filter(
			(item) =>
				(platformFilter === "all" ||
					item.platform === platformFilter) &&
				(contentTypeFilter === "all" ||
					item.contentType === contentTypeFilter)
		);
	};

	return {
		platformFilter,
		setPlatformFilter,
		contentTypeFilter,
		setContentTypeFilter,
		filterContent,
	};
};
