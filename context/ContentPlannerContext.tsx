"use client";
import { ContentItem, demoContentPlan } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ContentContextType {
	contentItems: ContentItem[];
	addContent: (content: ContentItem) => void;
	editContent: (content: ContentItem) => void;
	deleteContent: (id: string) => void;
	setAllContent?: (items: ContentItem[]) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [contentItems, setContentItems] =
		useState<ContentItem[]>(demoContentPlan);

	useEffect(() => {
		const storedContent = localStorage.getItem("contentPlan");

		if (storedContent && storedContent.length > 0) {
			setContentItems(JSON.parse(storedContent));
		}
		//  else {
		// 	setContentItems(demoContentPlan);
		// }
	}, []);

	useEffect(() => {
		localStorage.setItem("contentPlan", JSON.stringify(contentItems));
	}, [contentItems]);

	const addContent = (newContent: ContentItem) => {
		const updatedItems = [
			...contentItems,
			{ ...newContent, id: Date.now().toString() },
		];
		setContentItems(updatedItems);
	};

	const editContent = (editedContent: ContentItem) => {
		const updatedItems = contentItems.map((item) =>
			item.id === editedContent.id ? editedContent : item
		);
		setContentItems(updatedItems);
	};

	const deleteContent = (id: string) => {
		const updatedItems = contentItems.filter((item) => item.id !== id);
		setContentItems(updatedItems);
	};

	const setAllContent = (items: ContentItem[]) => {
		setContentItems(items);
	};

	return (
		<ContentContext.Provider
			value={{
				contentItems,
				addContent,
				editContent,
				deleteContent,
				setAllContent,
			}}
		>
			{children}
		</ContentContext.Provider>
	);
};

export const useContent = () => {
	const context = useContext(ContentContext);
	if (context === undefined) {
		throw new Error("useContent must be used within a ContentProvider");
	}
	return context;
};
