"use client"
import React, { useState, useEffect } from 'react';
import {
   Wand2, BookOpen, RefreshCcw, AlertTriangle, Shield
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import CustomEditor from '@/components/content/CustomEditor';
import { Textarea } from '@/components/ui/textarea';

// Comprehensive type definitions
type BlogType = 'how-to' | 'technical' | 'affiliate' | 'listicle' | 'case-study' | 'comparison';
type AudienceType = 'beginners' | 'intermediate' | 'advanced' | 'expert';
type ContentStyleType = 'informative' | 'persuasive' | 'analytical' | 'narrative' | 'tutorial';
type WritingStyleType = 'conversational' | 'professional' | 'academic' | 'technical' | 'casual' | 'journalistic' | 'storytelling';
type ResearchDepthType = 'basic' | 'moderate' | 'deep' | 'academic';
type OutlineComplexityType = 'pyramid' | 'step-by-step' | 'problem-solution' | 'compare-contrast' | 'chronological' | 'detailed';
type MetaTagType = {
   title: string;
   description: string;
   canonical?: string;
   robots?: string;
};
type SeoSettingsType = {
   metaTags: MetaTagType;
   focusKeyphrase: string;
   secondaryKeyphrases: string[];
   internalLinks: number;
   externalLinks: number;
   imageAltText: boolean;
   slugOptimization: boolean;
   schemaType: 'Article' | 'BlogPosting' | 'HowTo' | 'Product' | 'Review';
   readabilityCheck: boolean;
   keywordDensity: number;
   socialShare: {
      facebook: boolean;
      twitter: boolean;
      linkedin: boolean;
   };
};
// Define interfaces for better type safety
interface BlogEditorState {
   topic: string;
   keywords: string[];
   content: string;
   wordCount: number;
   blogTypes: { value: BlogType, label: string }[];
   blogType: BlogType;
   targetAudience: AudienceType;
   contentStyle: ContentStyleType;
   writingStyle: WritingStyleType;
   outlineComplexity: OutlineComplexityType;
   plagiarismCheck: boolean;
   humanizeLevel: number;
   researchDepth: ResearchDepthType;
   aiTemperature: number;
   includeCaseStudies: boolean;
   citations: boolean;
   monetization: boolean;
   contentElements: {
      examples: boolean;
      quotes: boolean;
      statistics: boolean;
      takeaways: boolean;
      toc: boolean;
      summary: boolean;
   };
   technicalElements?: {
      codeSnippets: boolean;
      diagrams: boolean;
   };
   affiliateElements?: {
      productComparison: boolean;
      pricingTables: boolean;
      prosCons: boolean;
      cta: boolean;
   };
   seoSettings: SeoSettingsType;
}

const BlogEditor: React.FC = () => {
   const [state, setState] = useState<BlogEditorState>({
      topic: '',
      keywords: [],
      content: '',
      wordCount: 800,
      blogTypes: [
         { value: 'how-to', label: 'How-To Guide' },
         { value: 'technical', label: 'Technical Article' },
         { value: 'affiliate', label: 'Affiliate Post' },
         { value: 'listicle', label: 'Listicle' },
         { value: 'case-study', label: 'Case Study' },
         { value: 'comparison', label: 'Comparison' }
      ],
      blogType: 'how-to',
      targetAudience: 'beginners',
      contentStyle: 'informative',
      writingStyle: 'conversational',
      outlineComplexity: 'step-by-step',
      plagiarismCheck: false,
      humanizeLevel: 70,
      researchDepth: 'moderate',
      aiTemperature: 0.7,
      includeCaseStudies: false,
      citations: true,
      monetization: false,
      contentElements: {
         examples: false,
         quotes: false,
         statistics: false,
         takeaways: false,
         toc: false,
         summary: false
      },
      technicalElements: {
         codeSnippets: false,
         diagrams: false
      },
      affiliateElements: {
         productComparison: false,
         pricingTables: false,
         prosCons: false,
         cta: false
      },
      seoSettings: {
         metaTags: {
            title: '',
            description: '',
            canonical: '',
            robots: 'index, follow'
         },
         focusKeyphrase: '',
         secondaryKeyphrases: [],
         internalLinks: 2,
         externalLinks: 3,
         imageAltText: true,
         slugOptimization: true,
         schemaType: 'BlogPosting',
         readabilityCheck: true,
         keywordDensity: 2,
         socialShare: {
            facebook: true,
            twitter: true,
            linkedin: false
         }
      }
   });

   const [loading, setLoading] = useState(false);
   const [newKeyword, setNewKeyword] = useState('');

   // Audience options
   const audienceOptions = [
      { value: 'beginners', label: 'Beginners' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
      { value: 'expert', label: 'Expert' }
   ];

   // Content style options
   const contentStyles = [
      { value: 'informative', label: 'Informative' },
      { value: 'persuasive', label: 'Persuasive' },
      { value: 'analytical', label: 'Analytical' },
      { value: 'narrative', label: 'Narrative' },
      { value: 'tutorial', label: 'Tutorial' }
   ];

   // Validation function
   const validateForm = (): boolean => {
      if (!state.topic.trim()) {
         toast.error('Please enter a blog topic');
         return false;
      }

      if (state.wordCount < 300 || state.wordCount > 3000) {
         toast.error('Word count must be between 300 and 3000');
         return false;
      }

      return true;
   };

   // Submit handler for backend API
   const handleSubmit = async () => {
      if (!validateForm()) return;

      setLoading(true);
      try {
         console.log(state)
         // return;
         const response = await axios.post('/api/generate/blog', state);
         console.log(response)
         setState(prevState => ({
            ...prevState,
            content: response.data.generatedContent
         }));
         toast.success('Blog Generated Successfully');
      } catch (error) {
         toast.error('Failed to generate blog content');
      } finally {
         setLoading(false);
      }
   };

   // Dynamic updates based on blog type
   useEffect(() => {
      setState(prevState => {
         const updates: Partial<BlogEditorState> = {};

         switch (prevState.blogType) {
            case 'technical':
               updates.citations = true;
               updates.researchDepth = 'deep';
               updates.monetization = false;
               break;
            case 'affiliate':
               updates.monetization = true;
               updates.includeCaseStudies = true;
               updates.contentStyle = 'persuasive';
               break;
            case 'how-to':
               updates.outlineComplexity = 'step-by-step';
               break;
         }

         return { ...prevState, ...updates };
      });
   }, [state.blogType]);

   // Keyword management
   const handleAddKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && newKeyword.trim()) {
         setState(prev => ({
            ...prev,
            keywords: prev.keywords.includes(newKeyword.trim())
               ? prev.keywords
               : [...prev.keywords, newKeyword.trim()]
         }));
         setNewKeyword('');
      }
   };

   const removeKeyword = (keyword: string) => {
      setState(prev => ({
         ...prev,
         keywords: prev.keywords.filter(k => k !== keyword)
      }));
   };


   return (
      <div className=" mx-auto p-6 bg-background">
         <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-card">
            <Wand2 className="w-8 h-8 text-primary" />
            <div>
               <h1 className="text-3xl font-bold text-card-foreground">Advanced AI Blog Generator</h1>
               <p className="text-sm text-muted-foreground">Create specialized, plagiarism-free content with AI</p>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
               <Card>
                  <Tabs defaultValue="type" className="w-full">
                     <TabsList className="w-full grid grid-cols-6  gap-1 p-3">
                        <TabsTrigger value="type">Type</TabsTrigger>
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                        <TabsTrigger value="quality">Quality</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                        <TabsTrigger value="seo">SEO</TabsTrigger>
                     </TabsList>

                     <CardContent className="mt-4">
                        <TabsContent value="type" className="space-y-4">
                           <div className="space-y-2">
                              <Label>Blog Type</Label>
                              <div className="grid grid-cols-2 gap-2">
                                 {state.blogTypes.map((type) => (
                                    <Button
                                       key={type.value}
                                       variant={state.blogType === type.value ? "default" : "outline"}
                                       className="justify-start"
                                       onClick={() => setState(prev => ({ ...prev, blogType: type.value }))}
                                    >
                                       {type.label}
                                    </Button>
                                 ))}
                              </div>
                           </div>

                           <div className="space-y-2">
                              <Label>Target Audience</Label>
                              <select
                                 value={state.targetAudience}
                                 onChange={(e) => setState(prev => ({ ...prev, targetAudience: e.target.value as AudienceType }))}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 {audienceOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                       {option.label}
                                    </option>
                                 ))}
                              </select>
                           </div>
                        </TabsContent>

                        <TabsContent value="content" className="space-y-4">
                           <div className="space-y-2">
                              <Label>Topic</Label>
                              <Input
                                 value={state.topic}
                                 onChange={(e) => setState(prev => ({ ...prev, topic: e.target.value }))}
                                 placeholder="Enter your blog topic..."
                                 className="bg-background border-border"
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Keywords</Label>
                              <Textarea
                                 value={newKeyword}
                                 onChange={(e) => setNewKeyword(e.target.value)}
                                 onKeyDown={handleAddKeyword}
                                 placeholder="Press Enter to add keywords..."
                                 className="bg-background border-border"
                              />
                              <div className="flex flex-wrap gap-2 mt-2">
                                 {state.keywords.map((keyword) => (
                                    <Badge
                                       key={keyword}
                                       variant="secondary"
                                       className="flex items-center gap-1"
                                       onClick={() => removeKeyword(keyword)}
                                    >
                                       {keyword}
                                       <span className="cursor-pointer">×</span>
                                    </Badge>
                                 ))}
                              </div>
                           </div>

                           <div className="space-y-2">
                              <Label>Content Style</Label>
                              <select
                                 value={state.contentStyle}
                                 onChange={(e) => setState(prev => ({ ...prev, contentStyle: e.target.value as ContentStyleType }))}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 {contentStyles.map((option) => (
                                    <option key={option.value} value={option.value}>
                                       {option.label}
                                    </option>
                                 ))}
                              </select>
                           </div>
                        </TabsContent>
                        <TabsContent value="style" className="space-y-4">
                           <div className="space-y-2">
                              <Label>Writing Style</Label>
                              <select
                                 value={state.contentStyle}
                                 onChange={(e) => setState(prev => ({ ...prev, contentStyle: e.target.value as ContentStyleType }))}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 <option value="conversational">Conversational</option>
                                 <option value="professional">Professional</option>
                                 <option value="academic">Academic</option>
                                 <option value="technical">Technical</option>
                                 <option value="casual">Casual & Friendly</option>
                                 <option value="journalistic">Journalistic</option>
                                 <option value="storytelling">Storytelling</option>
                              </select>
                           </div>

                           <div className="space-y-2">
                              <Label>Content Format</Label>
                              <select
                                 value={state.outlineComplexity}
                                 onChange={(e) => setState(prev => ({ ...prev, outlineComplexity: e.target.value as OutlineComplexityType }))}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                                 disabled={state.blogType === 'how-to'} // Disabled for how-to as it requires step-by-step
                              >
                                 <option value="pyramid">Inverted Pyramid</option>
                                 <option value="step-by-step">Step-by-Step</option>
                                 <option value="problem-solution">Problem-Solution</option>
                                 <option value="compare-contrast">Compare & Contrast</option>
                                 <option value="chronological">Chronological</option>
                                 <option value="detailed">Detailed Analysis</option>
                              </select>
                           </div>

                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label>Rich Media Suggestions</Label>
                                 <div className="text-sm text-muted-foreground">
                                    Get image and video placement recommendations
                                 </div>
                              </div>
                              <Switch
                                 checked={state.citations}
                                 onCheckedChange={() => setState(prev => ({ ...prev, citations: !state.citations }))}
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Heading Style</Label>
                              <select
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 <option value="question">Question-Based</option>
                                 <option value="descriptive">Descriptive</option>
                                 <option value="numbered">Numbered</option>
                                 <option value="action">Action-Oriented</option>
                                 <option value="benefit">Benefit-Driven</option>
                              </select>
                           </div>

                           <div className="space-y-2">
                              <Label>Paragraph Length</Label>
                              <select
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 <option value="short">Short (2-3 sentences)</option>
                                 <option value="medium">Medium (3-5 sentences)</option>
                                 <option value="long">Long (5+ sentences)</option>
                                 <option value="mixed">Mixed Lengths</option>
                              </select>
                           </div>

                           <div className="space-y-2">
                              <Label>Content Elements</Label>
                              <div className="grid grid-cols-2 gap-2">
                                 <div className="flex items-center space-x-2">
                                    <Switch id="examples" />
                                    <Label htmlFor="examples">Examples</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <Switch id="quotes" />
                                    <Label htmlFor="quotes">Expert Quotes</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <Switch id="statistics" />
                                    <Label htmlFor="statistics">Statistics</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <Switch id="takeaways" />
                                    <Label htmlFor="takeaways">Key Takeaways</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <Switch id="toc" />
                                    <Label htmlFor="toc">Table of Contents</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <Switch id="summary" />
                                    <Label htmlFor="summary">Executive Summary</Label>
                                 </div>
                              </div>
                           </div>

                           {state.blogType === 'technical' && (
                              <div className="space-y-2">
                                 <Label>Technical Elements</Label>
                                 <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center space-x-2">
                                       <Switch id="code" />
                                       <Label htmlFor="code">Code Snippets</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                       <Switch id="diagrams" />
                                       <Label htmlFor="diagrams">Diagrams</Label>
                                    </div>
                                 </div>
                              </div>
                           )}

                           {state.blogType === 'affiliate' && (
                              <div className="space-y-2">
                                 <Label>Promotional Elements</Label>
                                 <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center space-x-2">
                                       <Switch id="productComparison" />
                                       <Label htmlFor="productComparison">Product Comparison</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                       <Switch id="pricingTables" />
                                       <Label htmlFor="pricingTables">Pricing Tables</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                       <Switch id="pros-cons" />
                                       <Label htmlFor="pros-cons">Pros & Cons</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                       <Switch id="cta" />
                                       <Label htmlFor="cta">Call-to-Action</Label>
                                    </div>
                                 </div>
                              </div>
                           )}

                           <div className="space-y-2">
                              <Label>Reading Flow</Label>
                              <select
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 <option value="linear">Linear & Progressive</option>
                                 <option value="modular">Modular & Scannable</option>
                                 <option value="narrative">Narrative Flow</option>
                                 <option value="hierarchical">Hierarchical</option>
                              </select>
                           </div>
                        </TabsContent>

                        <TabsContent value="quality" className="space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label>Plagiarism Check</Label>
                                 <div className="text-sm text-muted-foreground">
                                    Scan content for originality
                                 </div>
                              </div>
                              <Switch
                                 checked={state.plagiarismCheck}
                                 onCheckedChange={() => setState(prev => ({ ...prev, plagiarismCheck: !state.plagiarismCheck }))}
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Humanize Level: {state.humanizeLevel}%</Label>
                              <Slider
                                 value={[state.humanizeLevel]}
                                 onValueChange={([value]) => setState(prev => ({ ...prev, humanizeLevel: value }))}
                                 min={0}
                                 max={100}
                                 step={10}
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Research Depth</Label>
                              <select
                                 value={state.researchDepth}
                                 onChange={(e) => setState(prev => ({ ...prev, researchDepth: e.target.value as ResearchDepthType }))}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 <option value="basic">Basic Research</option>
                                 <option value="moderate">Moderate Research</option>
                                 <option value="deep">Deep Research</option>
                                 <option value="academic">Academic Level</option>
                              </select>
                           </div>

                           {state.blogType === 'affiliate' && (
                              <Alert>
                                 <AlertTriangle className="h-4 w-4" />
                                 <AlertDescription>
                                    Affiliate content will automatically include product comparisons and buying guides
                                 </AlertDescription>
                              </Alert>
                           )}
                        </TabsContent>

                        <TabsContent value="settings" className="space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label>Citations & Sources</Label>
                                 <div className="text-sm text-muted-foreground">
                                    Include reference links
                                 </div>
                              </div>
                              <Switch
                                 checked={state.citations}
                                 onCheckedChange={() => setState(prev => ({ ...prev, citations: !state.citations }))}
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Word Count: {state.wordCount}</Label>
                              <Slider
                                 value={[state.wordCount]}
                                 onValueChange={([value]) => setState(prev => ({ ...prev, wordCount: value }))}
                                 min={300}
                                 max={3000}
                                 step={100}
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>AI Temperature: {state.aiTemperature}</Label>
                              <Slider
                                 value={[state.aiTemperature]}
                                 onValueChange={([value]) => setState(prev => ({ ...prev, aiTemperature: value }))}
                                 min={0}
                                 max={1}
                                 step={0.1}
                                 className="w-full"
                              />
                           </div>
                        </TabsContent>

                        <TabsContent value="seo" className="space-y-4">
                           <div className="space-y-4">
                              <div className="space-y-2">
                                 <Label>Focus Keyphrase</Label>
                                 <Input
                                    value={state.seoSettings.focusKeyphrase}
                                    onChange={(e) => setState(prev => ({
                                       ...prev,
                                       seoSettings: {
                                          ...prev.seoSettings,
                                          focusKeyphrase: e.target.value
                                       }
                                    }))}
                                    placeholder="Main keyword to optimize for..."
                                    className="bg-background border-border"
                                 />
                              </div>

                              <div className="space-y-2">
                                 <Label>Meta Title</Label>
                                 <Input
                                    value={state.seoSettings.metaTags.title}
                                    onChange={(e) => setState(prev => ({
                                       ...prev,
                                       seoSettings: {
                                          ...prev.seoSettings,
                                          metaTags: {
                                             ...prev.seoSettings.metaTags,
                                             title: e.target.value
                                          }
                                       }
                                    }))}
                                    placeholder="SEO title..."
                                    maxLength={60}
                                    className="bg-background border-border"
                                 />
                                 <p className="text-sm text-muted-foreground">
                                    {60 - (state.seoSettings.metaTags.title?.length || 0)} characters remaining
                                 </p>
                              </div>

                              <div className="space-y-2">
                                 <Label>Meta Description</Label>
                                 <Textarea
                                    value={state.seoSettings.metaTags.description}
                                    onChange={(e) => setState(prev => ({
                                       ...prev,
                                       seoSettings: {
                                          ...prev.seoSettings,
                                          metaTags: {
                                             ...prev.seoSettings.metaTags,
                                             description: e.target.value
                                          }
                                       }
                                    }))}
                                    placeholder="Meta description..."
                                    maxLength={160}
                                    className="bg-background border-border"
                                 />
                                 <p className="text-sm text-muted-foreground">
                                    {160 - (state.seoSettings.metaTags.description?.length || 0)} characters remaining
                                 </p>
                              </div>

                              <div className="space-y-2">
                                 <Label>Schema Type</Label>
                                 <select
                                    value={state.seoSettings.schemaType}
                                    onChange={(e) => setState(prev => ({
                                       ...prev,
                                       seoSettings: {
                                          ...prev.seoSettings,
                                          schemaType: e.target.value as SeoSettingsType['schemaType']
                                       }
                                    }))}
                                    className="w-full rounded-md border border-border bg-background px-3 py-2"
                                 >
                                    <option value="Article">Article</option>
                                    <option value="BlogPosting">Blog Post</option>
                                    <option value="HowTo">How-To Guide</option>
                                    <option value="Product">Product Review</option>
                                    <option value="Review">Review</option>
                                 </select>
                              </div>

                              <div className="space-y-2">
                                 <Label>Keyword Density: {state.seoSettings.keywordDensity}%</Label>
                                 <Slider
                                    value={[state.seoSettings.keywordDensity]}
                                    onValueChange={([value]) => setState(prev => ({
                                       ...prev,
                                       seoSettings: {
                                          ...prev.seoSettings,
                                          keywordDensity: value
                                       }
                                    }))}
                                    min={1}
                                    max={5}
                                    step={0.1}
                                    className="w-full"
                                 />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                 <div className="flex items-center space-x-2">
                                    <Switch
                                       checked={state.seoSettings.imageAltText}
                                       onCheckedChange={(checked) => setState(prev => ({
                                          ...prev,
                                          seoSettings: {
                                             ...prev.seoSettings,
                                             imageAltText: checked
                                          }
                                       }))}
                                    />
                                    <Label>Image Alt Text</Label>
                                 </div>

                                 <div className="flex items-center space-x-2">
                                    <Switch
                                       checked={state.seoSettings.readabilityCheck}
                                       onCheckedChange={(checked) => setState(prev => ({
                                          ...prev,
                                          seoSettings: {
                                             ...prev.seoSettings,
                                             readabilityCheck: checked
                                          }
                                       }))}
                                    />
                                    <Label>Readability Analysis</Label>
                                 </div>
                              </div>

                              <div className="space-y-2">
                                 <Label>Social Sharing</Label>
                                 <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(state.seoSettings.socialShare).map(([platform, enabled]) => (
                                       <div key={platform} className="flex items-center space-x-2">
                                          <Switch
                                             checked={enabled}
                                             onCheckedChange={(checked) => setState(prev => ({
                                                ...prev,
                                                seoSettings: {
                                                   ...prev.seoSettings,
                                                   socialShare: {
                                                      ...prev.seoSettings.socialShare,
                                                      [platform]: checked
                                                   }
                                                }
                                             }))}
                                          />
                                          <Label className="capitalize">{platform}</Label>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </TabsContent>
                     </CardContent>
                  </Tabs>
               </Card>

               <div className="flex gap-2">
                  <Button
                     onClick={handleSubmit}
                     disabled={loading || !state.topic}
                     className="w-full"
                     variant="destructive"
                  >
                     {loading ? (
                        <RefreshCcw className="w-4 h-4 animate-spin" />
                     ) : (
                           <Wand2 className="w-4 h-4 mr-2" />
                     )}
                     {loading ? 'Generating...' : 'Generate Blog'}
                  </Button>
                  <Button
                     onClick={() => {
                        // Reset to initial state
                        setState({
                           ...{
                              topic: '',
                              keywords: [],
                              content: '',
                              wordCount: 800,
                              blogTypes: [
                                 { value: 'how-to', label: 'How-To Guide' },
                                 { value: 'technical', label: 'Technical Article' },
                                 { value: 'affiliate', label: 'Affiliate Post' },
                                 { value: 'listicle', label: 'Listicle' },
                                 { value: 'case-study', label: 'Case Study' },
                                 { value: 'comparison', label: 'Comparison' }
                              ],
                              blogType: 'how-to',
                              targetAudience: 'beginners',
                              contentStyle: 'informative',
                              writingStyle: 'conversational',
                              outlineComplexity: 'step-by-step',
                              plagiarismCheck: false,
                              humanizeLevel: 70,
                              researchDepth: 'moderate',
                              aiTemperature: 0.7,
                              includeCaseStudies: false,
                              citations: true,
                              monetization: false,
                              contentElements: {
                                 examples: false,
                                 quotes: false,
                                 statistics: false,
                                 takeaways: false,
                                 toc: false,
                                 summary: false
                              },
                              technicalElements: {
                                 codeSnippets: false,
                                 diagrams: false
                              },
                              affiliateElements: {
                                 productComparison: false,
                                 pricingTables: false,
                                 prosCons: false,
                                 cta: false
                              }
                           }
                        });
                     }}
                     variant="outline"
                  >
                     Clear
                  </Button>
               </div>
            </div>

            <div className="space-y-4">
               <Card className="p-4">
                  <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <h2 className="text-xl font-semibold">Generated Content</h2>
                     </div>
                     {state.plagiarismCheck && (
                        <Badge variant="outline" className="flex items-center gap-1">
                           <Shield className="w-4 h-4" />
                           Originality Verified
                        </Badge>
                     )}
                  </div>
                  <ScrollArea className="h-[600px] w-full">

                     <CustomEditor initialContent={state.content} onSave={() => console.log("saved")} />
                  </ScrollArea>

               </Card>
            </div>
         </div>
      </div>
   );
};

export default BlogEditor;
