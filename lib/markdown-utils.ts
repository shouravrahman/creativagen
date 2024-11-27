import { marked } from "marked";

// Configure marked to be more strict about rendering
marked.setOptions({
	breaks: true,
	gfm: true,
	headerIds: false,
	mangle: false,
});

export function markdownToHtml(markdown: string): string {
	try {
		// Convert markdown to HTML
		return marked.parse(markdown);
	} catch (error) {
		console.error("Markdown conversion error:", error);
		return markdown; // Fallback to original content if conversion fails
	}
}
