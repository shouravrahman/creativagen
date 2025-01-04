import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AdPreviewProps {
   adType: "copy" | "video"
   adContent: string | null
}

export function AdPreview({ adType, adContent }: AdPreviewProps) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Ad Preview</CardTitle>
            <CardDescription>Here's your generated {adType} ad</CardDescription>
         </CardHeader>
         <CardContent>
            {adType === "copy" ? (
               <div className="whitespace-pre-wrap">{adContent}</div>
            ) : (
               <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {adContent ? (
                     <video src={adContent} controls className="w-full h-full rounded-lg">
                        Your browser does not support the video tag.
                     </video>
                  ) : (
                     <p className="text-muted-foreground">Video preview not available</p>
                  )}
               </div>
            )}
         </CardContent>
      </Card>
   )
}
