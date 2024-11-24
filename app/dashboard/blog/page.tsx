"use client"
import React, { useState, useEffect } from 'react';
import {
   Wand2, BookOpen, Target, Sparkles, RefreshCcw, Type,
   Tags, Shield, Brain, PenTool, Search, AlertTriangle
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
import CustomEditor from '@/components/content/CustomEditor';
import { Button } from '@/components/ui/button';

const BlogEditor = () => {
   // Core states
   const [content, setContent] = useState('');
   const [topic, setTopic] = useState('');
   const [keywords, setKeywords] = useState('');
   const [wordCount, setWordCount] = useState(800);
   const [loading, setLoading] = useState(false);
   const [keywordTags, setKeywordTags] = useState([]);

   // Enhanced features states
   const [blogType, setBlogType] = useState('how-to');
   const [targetAudience, setTargetAudience] = useState('beginners');
   const [contentStyle, setContentStyle] = useState('informative');
   const [plagiarismCheck, setPlagiarismCheck] = useState(false);
   const [humanizeLevel, setHumanizeLevel] = useState(70);
   const [researchDepth, setResearchDepth] = useState('moderate');
   const [includeCaseStudies, setIncludeCaseStudies] = useState(false);
   const [monetization, setMonetization] = useState(false);
   const [readabilityScore, setReadabilityScore] = useState('intermediate');
   const [outlineComplexity, setOutlineComplexity] = useState('detailed');
   const [citations, setCitations] = useState(true);

   // Advanced settings
   const [aiTemperature, setAiTemperature] = useState(0.7);
   const [realtime, setRealtime] = useState(false);
   const [autoSeo, setAutoSeo] = useState(true);
   const [readingTime, setReadingTime] = useState('5');

   const blogTypes = [
      { value: 'how-to', label: 'How-To Guide', icon: PenTool },
      { value: 'technical', label: 'Technical Documentation', icon: Target },
      { value: 'affiliate', label: 'Affiliate Content', icon: Search },
      { value: 'listicle', label: 'List-Based Article', icon: Tags },
      { value: 'case-study', label: 'Case Study', icon: Brain },
      { value: 'comparison', label: 'Comparison Review', icon: RefreshCcw }
   ];

   const audienceOptions = [
      { value: 'beginners', label: 'Beginners' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
      { value: 'expert', label: 'Expert' }
   ];

   const contentStyles = [
      { value: 'informative', label: 'Informative' },
      { value: 'persuasive', label: 'Persuasive' },
      { value: 'analytical', label: 'Analytical' },
      { value: 'narrative', label: 'Narrative' },
      { value: 'tutorial', label: 'Tutorial' }
   ];

   // Dynamic feature enabling/disabling based on blog type
   useEffect(() => {
      if (blogType === 'technical') {
         setCitations(true);
         setResearchDepth('deep');
         setMonetization(false);
      } else if (blogType === 'affiliate') {
         setMonetization(true);
         setIncludeCaseStudies(true);
         setContentStyle('persuasive');
      } else if (blogType === 'how-to') {
         setOutlineComplexity('step-by-step');
         setReadabilityScore('beginner-friendly');
      }
   }, [blogType]);

   const handleAddKeyword = (e) => {
      if (e.key === 'Enter' && e.target.value) {
         setKeywordTags([...keywordTags, e.target.value]);
         e.target.value = '';
      }
   };

   const removeKeyword = (keyword) => {
      setKeywordTags(keywordTags.filter(k => k !== keyword));
   };

   return (
      <div className="mx-auto p-6 bg-background">
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
                     <TabsList className="w-full grid grid-cols-5 gap-1 p-1">
                        <TabsTrigger value="type">Type</TabsTrigger>
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                        <TabsTrigger value="quality">Quality</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                     </TabsList>

                     <CardContent className="mt-4">
                        <TabsContent value="type" className="space-y-4">
                           <div className="space-y-2">
                              <Label>Blog Type</Label>
                              <div className="grid grid-cols-2 gap-2">
                                 {blogTypes.map((type) => (
                                    <Button
                                       key={type.value}
                                       variant={blogType === type.value ? "default" : "outline"}
                                       className="justify-start"
                                       onClick={() => setBlogType(type.value)}
                                    >
                                       <type.icon className="w-4 h-4 mr-2" />
                                       {type.label}
                                    </Button>
                                 ))}
                              </div>
                           </div>

                           <div className="space-y-2">
                              <Label>Target Audience</Label>
                              <select
                                 value={targetAudience}
                                 onChange={(e) => setTargetAudience(e.target.value)}
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
                                 value={topic}
                                 onChange={(e) => setTopic(e.target.value)}
                                 placeholder="Enter your blog topic..."
                                 className="bg-background border-border"
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Keywords</Label>
                              <Input
                                 placeholder="Press Enter to add keywords..."
                                 onKeyPress={handleAddKeyword}
                                 className="bg-background border-border"
                              />
                              <div className="flex flex-wrap gap-2 mt-2">
                                 {keywordTags?.map((keyword) => (
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
                                 value={contentStyle}
                                 onChange={(e) => setContentStyle(e.target.value)}
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
                                 value={contentStyle}
                                 onChange={(e) => setContentStyle(e.target.value)}
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
                                 value={outlineComplexity}
                                 onChange={(e) => setOutlineComplexity(e.target.value)}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                                 disabled={blogType === 'how-to'} // Disabled for how-to as it requires step-by-step
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
                                 checked={citations}
                                 onCheckedChange={setCitations}
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

                           {blogType === 'technical' && (
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

                           {blogType === 'affiliate' && (
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
                                 checked={plagiarismCheck}
                                 onCheckedChange={setPlagiarismCheck}
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Humanize Level: {humanizeLevel}%</Label>
                              <Slider
                                 value={[humanizeLevel]}
                                 onValueChange={([value]) => setHumanizeLevel(value)}
                                 min={0}
                                 max={100}
                                 step={10}
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Research Depth</Label>
                              <select
                                 value={researchDepth}
                                 onChange={(e) => setResearchDepth(e.target.value)}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 <option value="basic">Basic Research</option>
                                 <option value="moderate">Moderate Research</option>
                                 <option value="deep">Deep Research</option>
                                 <option value="academic">Academic Level</option>
                              </select>
                           </div>

                           {blogType === 'affiliate' && (
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
                                 checked={citations}
                                 onCheckedChange={setCitations}
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>Word Count: {wordCount}</Label>
                              <Slider
                                 value={[wordCount]}
                                 onValueChange={([value]) => setWordCount(value)}
                                 min={300}
                                 max={3000}
                                 step={100}
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-2">
                              <Label>AI Temperature: {aiTemperature}</Label>
                              <Slider
                                 value={[aiTemperature]}
                                 onValueChange={([value]) => setAiTemperature(value)}
                                 min={0}
                                 max={1}
                                 step={0.1}
                                 className="w-full"
                              />
                           </div>
                        </TabsContent>
                     </CardContent>
                  </Tabs>
               </Card>

               <div className="flex gap-2">
                  <Button
                     onClick={() => {/* Generate content */ }}
                     disabled={loading || !topic}
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
                     onClick={() => {/* Clear form */ }}
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
                     {plagiarismCheck && (
                        <Badge variant="outline" className="flex items-center gap-1">
                           <Shield className="w-4 h-4" />
                           Originality Verified
                        </Badge>
                     )}
                  </div>
                  <ScrollArea className="h-[600px]">
                     <CustomEditor initialContent={content} onSave={() => console.log("saved")} />
                  </ScrollArea>
               </Card>
            </div>
         </div>
      </div>
   );
};

export default BlogEditor;
