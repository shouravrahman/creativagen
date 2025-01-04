"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyAdConfigurator } from "./CopyAdConfigurator"
import { AdTypeSelector } from "./AdTypeSelector"
import { VideoAdConfigurator } from "./VideoAdConfigurator"
import { AdPreview } from "./AdPreview"
import { CompetitorAnalysis } from "./CompetitorAnalysis"
import { ABTesting } from "./ABTesting"
import { SeoOptimizer } from "./SeoOptimizer"
import { PerformancePredictor } from "./PerformancePredictor"

type AdType = "copy" | "video"

export function AdGenerator() {
   const [adType, setAdType] = React.useState<AdType | null>(null)
   const [step, setStep] = React.useState(1)
   const [adConfig, setAdConfig] = React.useState({})
   const [generatedAd, setGeneratedAd] = React.useState<string | null>(null)
   const [competitorData, setCompetitorData] = React.useState(null)
   const [abTestResults, setABTestResults] = React.useState(null)
   const [seoSuggestions, setSeoSuggestions] = React.useState(null)
   const [performancePrediction, setPerformancePrediction] = React.useState(null)

   const handleAdTypeSelect = (type: AdType) => {
      setAdType(type)
      setStep(2)
   }

   const handleConfigUpdate = (config: any) => {
      setAdConfig({ ...adConfig, ...config })
   }

   const handleGenerate = async () => {
      setStep(3)
      // Simulate API calls for ad generation and advanced features
      await Promise.all([
         generateAd(),
         analyzeCompetitors(),
         runABTest(),
         getSeoSuggestions(),
         predictPerformance(),
      ])
   }

   const generateAd = async () => {
      // Simulate API call to generate ad
      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (adType === "copy") {
         setGeneratedAd("Experience the future of shopping with our AI-powered smart home assistant. Control your home, manage your schedule, and shop effortlessly - all with just your voice. Order now and step into a smarter, more connected lifestyle!")
      } else {
         setGeneratedAd("https://example.com/generated-video-ad.mp4")
      }
   }

   const analyzeCompetitors = async () => {
      // Simulate API call for competitor analysis
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setCompetitorData({
         topKeywords: ["smart home", "voice assistant", "AI shopping"],
         averageAdLength: 150,
         commonCTAs: ["Shop now", "Learn more", "Get started"],
      })
   }

   const runABTest = async () => {
      // Simulate API call for A/B testing
      await new Promise((resolve) => setTimeout(resolve, 1800))
      setABTestResults({
         variantA: { clickThroughRate: "2.5%", conversionRate: "1.2%" },
         variantB: { clickThroughRate: "2.8%", conversionRate: "1.5%" },
      })
   }

   const getSeoSuggestions = async () => {
      // Simulate API call for SEO suggestions
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setSeoSuggestions([
         "Include target keyword 'smart home assistant' in the ad title",
         "Use long-tail keyword 'voice-controlled shopping' in the description",
         "Add alt text to ad images for better accessibility and SEO",
      ])
   }

   const predictPerformance = async () => {
      // Simulate API call for performance prediction
      await new Promise((resolve) => setTimeout(resolve, 1600))
      setPerformancePrediction({
         estimatedReach: "50,000 - 75,000 impressions",
         predictedCTR: "2.7%",
         estimatedConversionRate: "1.4%",
      })
   }

   const handleReset = () => {
      setAdType(null)
      setStep(1)
      setAdConfig({})
      setGeneratedAd(null)
      setCompetitorData(null)
      setABTestResults(null)
      setSeoSuggestions(null)
      setPerformancePrediction(null)
   }

   return (
      <Card className="w-full max-w-6xl mx-auto">
         <CardContent className="p-6">
            <Tabs value={String(step)} className="w-full">
               <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="1" disabled={step < 1}>
                     Select Ad Type
                  </TabsTrigger>
                  <TabsTrigger value="2" disabled={step < 2}>
                     Configure Ad
                  </TabsTrigger>
                  <TabsTrigger value="3" disabled={step < 3}>
                     Preview & Analyze
                  </TabsTrigger>
               </TabsList>
               <div className="mt-8">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                     >
                        {step === 1 && <AdTypeSelector onSelect={handleAdTypeSelect} />}
                        {step === 2 && adType === "copy" && (
                           <CopyAdConfigurator onConfigUpdate={handleConfigUpdate} />
                        )}
                        {step === 2 && adType === "video" && (
                           <VideoAdConfigurator onConfigUpdate={handleConfigUpdate} />
                        )}
                        {step === 3 && (
                           <div className="space-y-8">
                              <AdPreview adType={adType!} adContent={generatedAd} />
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <CompetitorAnalysis data={competitorData} />
                                 <ABTesting results={abTestResults} />
                                 <SeoOptimizer suggestions={seoSuggestions} />
                                 <PerformancePredictor prediction={performancePrediction} />
                              </div>
                           </div>
                        )}
                     </motion.div>
                  </AnimatePresence>
               </div>
            </Tabs>
            <div className="mt-8 flex justify-between">
               {step > 1 && (
                  <Button onClick={() => setStep((prev) => prev - 1)} variant="outline">
                     Back
                  </Button>
               )}
               {step < 3 ? (
                  <Button onClick={step === 2 ? handleGenerate : () => setStep((prev) => prev + 1)} className="ml-auto">
                     {step === 2 ? "Generate Ad" : "Next"}
                  </Button>
               ) : (
                  <Button onClick={handleReset} className="ml-auto">
                     Create New Ad
                  </Button>
               )}
            </div>
         </CardContent>
      </Card>
   )
}
