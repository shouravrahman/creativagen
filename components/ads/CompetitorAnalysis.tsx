import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CompetitorAnalysisProps {
  data: {
    topKeywords: string[];
    averageAdLength: number;
    commonCTAs: string[];
  } | null;
}

export function CompetitorAnalysis({ data }: CompetitorAnalysisProps) {
  if (!data) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Analysis</CardTitle>
        <CardDescription>Insights from competitor ads</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Top Keywords</h4>
            <p>{data.topKeywords.join(", ")}</p>
          </div>
          <div>
            <h4 className="font-semibold">Average Ad Length</h4>
            <p>{data.averageAdLength} characters</p>
          </div>
          <div>
            <h4 className="font-semibold">Common CTAs</h4>
            <p>{data.commonCTAs.join(", ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

