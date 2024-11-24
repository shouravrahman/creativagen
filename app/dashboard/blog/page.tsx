"use client"
import { useState } from 'react';
import {
   Wand2, BookOpen, Target, Sparkles, RefreshCcw, Type, Tags
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import CustomEditor from '@/components/content/CustomEditor';
import { Button } from '@/components/ui/button';


const BlogEditor = () => {
   const [content, setContent] = useState('');
   const [topic, setTopic] = useState('');
   const [keywords, setKeywords] = useState('');
   const [wordCount, setWordCount] = useState(800);
   const [loading, setLoading] = useState(false);
   const [realtime, setRealtime] = useState(false);
   const [referenceUrl, setReferenceUrl] = useState('');
   const [generateImages, setGenerateImages] = useState(false);
   const [tone, setTone] = useState('professional');
   const [layout, setLayout] = useState('standard');
   const [keywordTags, setKeywordTags] = useState([]);
   const [showOutline, setShowOutline] = useState(false);
   const [autoSeo, setAutoSeo] = useState(true);
   const [readingTime, setReadingTime] = useState('5');
   const [headingStyle, setHeadingStyle] = useState('modern');

   const toneOptions = [
      { value: 'professional', label: 'Professional' },
      { value: 'casual', label: 'Casual' },
      { value: 'humorous', label: 'Humorous' },
      { value: 'technical', label: 'Technical' },
      { value: 'storytelling', label: 'Storytelling' },
      { value: 'conversational', label: 'Conversational' },
      { value: 'academic', label: 'Academic' }
   ];

   const layoutOptions = [
      { value: 'standard', label: 'Standard' },
      { value: 'magazine', label: 'Magazine' },
      { value: 'minimal', label: 'Minimal' },
      { value: 'modern', label: 'Modern' }
   ];

   const headingStyles = [
      { value: 'modern', label: 'Modern' },
      { value: 'classic', label: 'Classic' },
      { value: 'minimal', label: 'Minimal' },
      { value: 'bold', label: 'Bold' }
   ];

   const handleAddKeyword = (e: any) => {
      if (e.key === 'Enter' && e.target.value) {
         setKeywordTags([...keywordTags, e.target.value]);
         e.target.value = '';
      }
   };

   const removeKeyword = (keyword) => {
      setKeywordTags(keywordTags.filter(k => k !== keyword));
   };

   return (
      <div className=" mx-auto p-6  bg-background">
         <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-card">
            <Wand2 className="w-8 h-8 text-primary" />
            <div>
               <h1 className="text-3xl font-bold text-card-foreground">AI Blog Generator</h1>
               <p className="text-sm text-muted-foreground">Create SEO-optimized content in minutes</p>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
               <Card>
                  <Tabs defaultValue="content" className="w-full">
                     <TabsList className="w-full grid grid-cols-4 gap-1 p-1">
                        <TabsTrigger value="content" className="flex items-center gap-2">
                           <Target className="w-4 h-4" />
                           Content
                        </TabsTrigger>
                        <TabsTrigger value="style" className="flex items-center gap-2">
                           <Type className="w-4 h-4" />
                           Style
                        </TabsTrigger>
                        <TabsTrigger value="seo" className="flex items-center gap-2">
                           <Tags className="w-4 h-4" />
                           SEO
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="flex items-center gap-2">
                           <Sparkles className="w-4 h-4" />
                           Settings
                        </TabsTrigger>
                     </TabsList>

                     <CardContent className="mt-4">
                        <TabsContent value="content" className="space-y-4">
                           <div className="space-y-2">
                              <Label>Blog Topic</Label>
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
                        </TabsContent>

                        <TabsContent value="style" className="space-y-4">
                           <div className="space-y-2">
                              <Label>Layout Style</Label>
                              <select
                                 value={layout}
                                 onChange={(e) => setLayout(e.target.value)}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 {layoutOptions?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                       {option.label}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div className="space-y-2">
                              <Label>Writing Tone</Label>
                              <select
                                 value={tone}
                                 onChange={(e) => setTone(e.target.value)}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 {toneOptions?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                       {option.label}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div className="space-y-2">
                              <Label>Heading Style</Label>
                              <select
                                 value={headingStyle}
                                 onChange={(e) => setHeadingStyle(e.target.value)}
                                 className="w-full rounded-md border border-border bg-background px-3 py-2"
                              >
                                 {headingStyles?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                       {option.label}
                                    </option>
                                 ))}
                              </select>
                           </div>
                        </TabsContent>

                        <TabsContent value="seo" className="space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label>Auto SEO Optimization</Label>
                                 <div className="text-sm text-muted-foreground">
                                    Automatically optimize for search engines
                                 </div>
                              </div>
                              <Switch
                                 checked={autoSeo}
                                 onCheckedChange={setAutoSeo}
                              />
                           </div>
                           <div className="space-y-2">
                              <Label>Target Reading Time (minutes): {readingTime}</Label>
                              <Slider
                                 value={[Number(readingTime)]}
                                 onValueChange={([value]) => setReadingTime(value.toString())}
                                 min={3}
                                 max={20}
                                 step={1}
                                 className="w-full"
                              />
                           </div>
                        </TabsContent>

                        <TabsContent value="settings" className="space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label>Show Content Outline</Label>
                                 <div className="text-sm text-muted-foreground">
                                    Display article structure
                                 </div>
                              </div>
                              <Switch
                                 checked={showOutline}
                                 onCheckedChange={setShowOutline}
                              />
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label>Real-time Generation</Label>
                                 <div className="text-sm text-muted-foreground">
                                    Generate as you type
                                 </div>
                              </div>
                              <Switch
                                 checked={realtime}
                                 onCheckedChange={setRealtime}
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
                        </TabsContent>
                     </CardContent>
                  </Tabs>
               </Card>

               <div className="flex gap-2">
                  <Button
                     onClick={() => {/* Generate content */ }}
                     disabled={loading || !topic}
                     className='w-full'
                     variant={"destructive"}
                  >
                     {loading ? (
                        <RefreshCcw className="w-4 h-4 animate-spin" />
                     ) : (
                        <Wand2 className="w-4 h-4" />
                     )}
                     {loading ? 'Generating...' : 'Generate Blog'}
                  </Button>
                  <Button
                     onClick={() => {/* Clear form */ }}
                     variant={"outline"}
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
                     {showOutline && (
                        <Button className="text-sm text-primary hover:underline">
                           View Outline
                        </Button>
                     )}
                  </div>
                  <ScrollArea className="h-full">
                     <CustomEditor initialContent={content} onSave={() => console.log("saved")} />
                  </ScrollArea>
               </Card>
            </div>
         </div>
      </div>
   );
};

export default BlogEditor;
