import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SeoOptimizerProps {
  suggestions: string[] | null;
}

export function SeoOptimizer({ suggestions }: SeoOptimizerProps) {
  if (!suggestions) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Optimization</CardTitle>
        <CardDescription>Suggestions to improve ad visibility</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

