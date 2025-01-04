import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AdTypeSelectorProps {
   onSelect: (type: "copy" | "video") => void
}

export function AdTypeSelector({ onSelect }: AdTypeSelectorProps) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => onSelect("copy")}>
            <CardHeader>
               <CardTitle>Copy Ad</CardTitle>
               <CardDescription>Generate text-based advertisements</CardDescription>
            </CardHeader>
            <CardContent>
               <Button className="w-full">Select Copy Ad</Button>
            </CardContent>
         </Card>
         <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => onSelect("video")}>
            <CardHeader>
               <CardTitle>Video Ad</CardTitle>
               <CardDescription>Create engaging video advertisements</CardDescription>
            </CardHeader>
            <CardContent>
               <Button className="w-full">Select Video Ad</Button>
            </CardContent>
         </Card>
      </div>
   )
}
