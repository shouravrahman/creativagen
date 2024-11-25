import { BlogGenerationConfig, ResearchResult } from "@/types";
import { PromptTemplate } from "@langchain/core/prompts";

export class PromptEngineering {
	private static readonly STYLE_TEMPLATES = {
		"how-to": `Create a detailed step-by-step guide that teaches {audience} how to {topic}.
               Include practical examples, common pitfalls to avoid, and expert tips.
               Structure: Introduction → Problem Statement → Step-by-Step Solution → Tips → Conclusion`,

		technical: `Write a comprehensive technical analysis of {topic} for {audience}.
                 Include code examples, technical specifications, and implementation details.
                 Structure: Technical Overview → Detailed Analysis → Implementation → Best Practices`,

		affiliate: `Create a balanced, honest review of {topic} focusing on value proposition and user benefits.
                 Include product comparisons, real-world applications, and evidence-based recommendations.
                 Structure: Overview → Features Analysis → Comparison → Recommendation`,
	};

	static generatePrompt(
		config: BlogGenerationConfig,
		research: ResearchResult[]
	): string {
		const baseTemplate = this.STYLE_TEMPLATES[config.blogType];
		const citations = research
			.map((r) => `[Source: ${r.url}]: ${r.snippet}`)
			.join("\n");

		return new PromptTemplate({
			template: `
        Context:
        - Blog Type: ${config.blogType}
        - Target Audience: ${config.targetAudience}
        - Style: ${config.contentStyle}
        - Required Word Count: ${config.wordCount}
        - Keywords to Include: ${config.keywords.join(", ")}

        Research Materials:
        ${citations}

        Writing Instructions:
        1. Use a ${config.contentStyle} tone appropriate for ${
				config.targetAudience
			}
        2. Incorporate provided keywords naturally
        3. Include all required content elements (examples, statistics, etc.)
        4. Maintain consistent formatting and structure
        5. Ensure readability and flow
        6. Include proper citations where needed

        ${baseTemplate}

        Additional Requirements:
        - Include relevant statistics and data points from research
        - Maintain a natural, human-like writing style (${
			config.humanizeLevel
		}% humanization)
        - Format with proper headings, subheadings, and paragraphs
        - Optimize for SEO while maintaining readability

        Generate a comprehensive blog post following these guidelines.
      `,
			inputVariables: ["audience", "topic"],
		});
	}
}
