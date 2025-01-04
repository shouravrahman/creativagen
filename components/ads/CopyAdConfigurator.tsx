"use client"

import * as React from "react"
import { Loader2, Upload } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

interface CopyAdConfiguratorProps {
   onConfigUpdate: (config: any) => void
}

export function CopyAdConfigurator({ onConfigUpdate }: CopyAdConfiguratorProps) {
   const [loading, setLoading] = React.useState(false)
   const [useAI, setUseAI] = React.useState(true)

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setLoading(true)
      const formData = new FormData(event.currentTarget)
      const config = Object.fromEntries(formData.entries())
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      onConfigUpdate({ ...config, useAI })
      setLoading(false)
   }

   return (
      <form onSubmit={handleSubmit} className="space-y-6">
         <div className="space-y-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input id="productName" name="productName" required />
         </div>
         <div className="space-y-2">
            <Label htmlFor="productDescription">Product Description</Label>
            <Textarea id="productDescription" name="productDescription" required />
         </div>
         <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Select name="targetAudience" required>
               <SelectTrigger>
                  <SelectValue placeholder="Select target audience" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="young-adults">Young Adults</SelectItem>
                  <SelectItem value="parents">Parents</SelectItem>
                  <SelectItem value="professionals">Professionals</SelectItem>
                  <SelectItem value="seniors">Seniors</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <div className="space-y-2">
            <Label htmlFor="adTone">Ad Tone</Label>
            <Select name="adTone" required>
               <SelectTrigger>
                  <SelectValue placeholder="Select ad tone" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <div className="space-y-2">
            <Label htmlFor="platform">Ad Platform</Label>
            <Select name="platform" required>
               <SelectTrigger>
                  <SelectValue placeholder="Select ad platform" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="google">Google Ads</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <div className="space-y-2">
            <Label htmlFor="keyFeatures">Key Product Features (comma-separated)</Label>
            <Input id="keyFeatures" name="keyFeatures" placeholder="e.g., voice control, AI-powered, energy-efficient" />
         </div>
         <div className="space-y-2">
            <Label htmlFor="callToAction">Call to Action</Label>
            <Input id="callToAction" name="callToAction" placeholder="e.g., Shop Now, Learn More, Get Started" />
         </div>
         <div className="space-y-2">
            <Label htmlFor="competitorUrls">Competitor URLs (comma-separated)</Label>
            <Input id="competitorUrls" name="competitorUrls" placeholder="https://competitor1.com, https://competitor2.com" />
         </div>
         <div className="flex items-center space-x-2">
            <Switch id="useAI" checked={useAI} onCheckedChange={setUseAI} />
            <Label htmlFor="useAI">Use AI for content generation</Label>
         </div>
         <div className="space-y-2">
            <Label htmlFor="aiCreativity">AI Creativity Level</Label>
            <Slider
               id="aiCreativity"
               name="aiCreativity"
               defaultValue={[0.5]}
               max={1}
               step={0.1}
               disabled={!useAI}
            />
         </div>
         <div className="space-y-2">
            <Label htmlFor="referenceUrl">Reference URL (Optional)</Label>
            <Input id="referenceUrl" name="referenceUrl" type="url" placeholder="https://example.com/product" />
         </div>
         <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
               <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating Configuration...
               </>
            ) : (
               "Update Configuration"
            )}
         </Button>
      </form>
   )
}
