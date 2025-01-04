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

interface VideoAdConfiguratorProps {
   onConfigUpdate: (config: any) => void
}

export function VideoAdConfigurator({ onConfigUpdate }: VideoAdConfiguratorProps) {
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
            <Label htmlFor="adStyle">Video Ad Style</Label>
            <Select name="adStyle" required>
               <SelectTrigger>
                  <SelectValue placeholder="Select video ad style" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="animated">Animated</SelectItem>
                  <SelectItem value="live-action">Live Action</SelectItem>
                  <SelectItem value="whiteboard">Whiteboard</SelectItem>
                  <SelectItem value="product-demo">Product Demo</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <div className="space-y-2">
            <Label htmlFor="duration">Video Duration (seconds)</Label>
            <Input id="duration" name="duration" type="number" min="15" max="120" required />
         </div>
         <div className="space-y-2">
            <Label htmlFor="backgroundMusic">Background Music</Label>
            <Select name="backgroundMusic" required>
               <SelectTrigger>
                  <SelectValue placeholder="Select background music" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="upbeat">Upbeat</SelectItem>
                  <SelectItem value="inspirational">Inspirational</SelectItem>
                  <SelectItem value="relaxing">Relaxing</SelectItem>
                  <SelectItem value="dramatic">Dramatic</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <div className="space-y-2">
            <Label htmlFor="voiceOver">Voice-Over Style</Label>
            <Select name="voiceOver" required>
               <SelectTrigger>
                  <SelectValue placeholder="Select voice-over style" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <div className="space-y-2">
            <Label htmlFor="callToAction">Call to Action</Label>
            <Input id="callToAction" name="callToAction" placeholder="e.g., Shop Now, Learn More, Get Started" />
         </div>
         <div className="space-y-2">
            <Label htmlFor="logoUpload">Upload Logo (Optional)</Label>
            <Input id="logoUpload" name="logoUpload" type="file" accept="image/*" />
         </div>
         <div className="space-y-2">
            <Label htmlFor="productImages">Upload Product Images (Optional)</Label>
            <Input id="productImages" name="productImages" type="file" accept="image/*" multiple />
         </div>
         <div className="flex items-center space-x-2">
            <Switch id="useAI" checked={useAI} onCheckedChange={setUseAI} />
            <Label htmlFor="useAI">Use AI for video generation</Label>
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
