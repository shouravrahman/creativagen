import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import axios from "axios";
import { z } from "zod";

// Validation schema for blog generation request
const BlogRequestSchema = z.object({
	topic: z.string().min(1, "Topic is required"),
	keywords: z.array(z.string()),
	wordCount: z.number().min(300).max(3000),
	blogType: z.enum([
		"how-to",
		"technical",
		"affiliate",
		"listicle",
		"case-study",
		"comparison",
	]),
	targetAudience: z.enum(["beginners", "intermediate", "advanced", "expert"]),
	contentStyle: z.enum([
		"informative",
		"persuasive",
		"analytical",
		"narrative",
		"technical",
		"tutorial",
	]),
	writingStyle: z.enum([
		"conversational",
		"professional",
		"academic",
		"technical",
		"casual",
		"journalistic",
		"storytelling",
	]),
	outlineComplexity: z.enum([
		"pyramid",
		"step-by-step",
		"problem-solution",
		"compare-contrast",
		"chronological",
		"detailed",
	]),
	plagiarismCheck: z.boolean(),
	humanizeLevel: z.number().min(0).max(100),
	researchDepth: z.enum(["basic", "moderate", "deep", "academic"]),
	aiTemperature: z.number().min(0).max(1),
	citations: z.boolean(),
	contentElements: z.object({
		examples: z.boolean(),
		quotes: z.boolean(),
		statistics: z.boolean(),
		takeaways: z.boolean(),
		toc: z.boolean(),
		summary: z.boolean(),
	}),
	seoSettings: z.object({
		metaTags: z.object({
			title: z.string(),
			description: z.string(),
			canonical: z.string().optional(),
			robots: z.string().optional(),
		}),
		focusKeyphrase: z.string(),
		keywordDensity: z.number(),
		readabilityCheck: z.boolean(),
	}),
});

// Helper function to get AI model instance
const getAIModel = (temperature: number) => {
  // Prefer Gemini for better performance and lower cost
  return new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-pro",
    maxOutputTokens:500,
    temperature,
    apiKey: process.env.GOOGLE_API_KEY!
  }).pipe(new StringOutputParser());
};

// Function to generate blog outline
async function generateOutline(params: z.infer<typeof BlogRequestSchema>) {
  const outlinePrompt = new PromptTemplate({
    template: `Create a detailed outline for a {blogType} blog post about {topic}.
    Target audience: {audience}
    Style: {contentStyle}
    Complexity: {outlineComplexity}
    Required sections: {sections}

    Create a comprehensive outline with main sections and subsections. Include placeholder sections for examples, statistics, and other required elements.`,
    inputVariables: ["blogType", "topic", "audience", "contentStyle", "outlineComplexity", "sections"]
  });

  const sections = [
    params.contentElements.toc ? "Table of Contents" : null,
    params.contentElements.summary ? "Executive Summary" : null,
    "Main Content",
    params.contentElements.takeaways ? "Key Takeaways" : null
  ].filter(Boolean);

  const outline = await getAIModel(0.3).invoke(await outlinePrompt.format({
    blogType: params.blogType,
    topic: params.topic,
    audience: params.targetAudience,
    contentStyle: params.contentStyle,
    outlineComplexity: params.outlineComplexity,
    sections: sections.join(", ")
  }));

  return outline;
}

// Function to perform research and gather relevant information
async function performResearch(topic: string, depth: string, keywords: string[]) {
  const researchPrompt = new PromptTemplate({
    template: `Conduct {depth} research on {topic}. Focus on these key aspects: {keywords}.
    Include verified statistics, expert opinions, and relevant examples.
    If citations are needed, generate placeholder citations in the format [Source: Description].`,
    inputVariables: ["depth", "topic", "keywords"]
  });

  const research = await getAIModel(0.7).invoke(await researchPrompt.format({
    depth,
    topic,
    keywords: keywords.join(", ")
  }));

  return research;
}

// Function to generate the main content
async function generateContent(params: z.infer<typeof BlogRequestSchema>, outline: string, research: string) {
  const contentPrompt = new PromptTemplate({
    template: `Write a {wordCount}-word {blogType} blog post about {topic}.
    Use this outline: {outline}
    Incorporate this research: {research}
    Writing style: {writingStyle}
    Target audience: {audience}

    Requirements:
    - Maintain a {style} tone throughout
    - Include {elements} where relevant
    - Ensure content flows naturally between sections
    - Use appropriate technical depth for the audience level
    - Format with proper markdown headings and structure

    Additional notes:
    - Keyword density target: {keywordDensity}%
    - Primary keyword: {focusKeyphrase}`,
    inputVariables: ["wordCount", "blogType", "topic", "outline", "research", "writingStyle", "audience", "style", "elements", "keywordDensity", "focusKeyphrase"]
  });

  const elements = Object.entries(params.contentElements)
    .filter(([_, included]) => included)
    .map(([element]) => element)
    .join(", ");

  const content = await getAIModel(params.aiTemperature).invoke(await contentPrompt.format({
    wordCount: params.wordCount,
    blogType: params.blogType,
    topic: params.topic,
    outline,
    research,
    writingStyle: params.writingStyle,
    audience: params.targetAudience,
    style: params.contentStyle,
    elements,
    keywordDensity: params.seoSettings.keywordDensity,
    focusKeyphrase: params.seoSettings.focusKeyphrase
  }));

  return content;
}

// Function to humanize content
async function humanizeContent(content: string, level: number) {
  if (level < 30) return content;

  const humanizePrompt = new PromptTemplate({
    template: `Rewrite the following content to make it more natural and engaging,
    maintaining a humanization level of {level}%. Keep the same information and structure,
    but make it feel more conversational and less AI-generated:

    {content}`,
    inputVariables: ["level", "content"]
  });

  const humanized = await getAIModel(0.8).invoke(await humanizePrompt.format({
    level,
    content
  }));

  return humanized;
}

// Function to check readability and SEO
async function analyzeSEO(content: string, params: z.infer<typeof BlogRequestSchema>) {
  const seoPrompt = new PromptTemplate({
    template: `Analyze and optimize the following content for SEO:
    Content: {content}
    Focus Keyphrase: {keyphrase}
    Target Keyword Density: {density}%

    Provide optimization suggestions and ensure:
    - Proper keyword placement
    - Meta description optimization
    - Header tag optimization
    - Internal linking opportunities
    Return the optimized content.`,
    inputVariables: ["content", "keyphrase", "density"]
  });

  const optimized = await getAIModel(0.3).invoke(await seoPrompt.format({
    content,
    keyphrase: params.seoSettings.focusKeyphrase,
    density: params.seoSettings.keywordDensity
  }));

  return optimized;
}

// Function to check for potential plagiarism markers
async function checkPlagiarismRisk(content: string) {
  const checkPrompt = new PromptTemplate({
    template: `Analyze the following content for potential plagiarism risks.
    Look for phrases that seem too common or might be directly copied from other sources.
    Suggest replacements for any concerning phrases:

    {content}`,
    inputVariables: ["content"]
  });

  const analysis = await getAIModel(0.3).invoke(await checkPrompt.format({
    content
  }));

  return analysis;
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const params = BlogRequestSchema.parse(body);

    // Generate outline
    const outline = await generateOutline(params);

    // Perform research
    const research = await performResearch(params.topic, params.researchDepth, params.keywords);

    // Generate initial content
    let content = await generateContent(params, outline, research);

    // Apply humanization if requested
    if (params.humanizeLevel > 30) {
      content = await humanizeContent(content, params.humanizeLevel);
    }

    // Check for plagiarism if requested
    if (params.plagiarismCheck) {
      const plagiarismAnalysis = await checkPlagiarismRisk(content);
      if (plagiarismAnalysis.includes("high risk")) {
        content = await humanizeContent(content, 90); // Aggressively humanize if plagiarism risk detected
      }
    }

    // Optimize for SEO if requested
    if (params.seoSettings.readabilityCheck) {
      content = await analyzeSEO(content, params);
    }

    return NextResponse.json({
      success: true,
      content,
      metadata: {
        wordCount: content.split(/\s+/).length,
        seoScore: params.seoSettings.readabilityCheck ? "Optimized" : "Not checked",
        plagiarismCheck: params.plagiarismCheck ? "Completed" : "Not performed"
      }
    });

  } catch (error) {
    console.error("Blog generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate blog content" },
      { status: 500 }
    );
  }
}
