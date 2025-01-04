import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ABTestingProps {
  results: {
    variantA: { clickThroughRate: string; conversionRate: string };
    variantB: { clickThroughRate: string; conversionRate: string };
  } | null;
}

export function ABTesting({ results }: ABTestingProps) {
  if (!results) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>A/B Testing Results</CardTitle>
        <CardDescription>Performance comparison of ad variants</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Variant A</h4>
            <p>Click-through Rate: {results.variantA.clickThroughRate}</p>
            <p>Conversion Rate: {results.variantA.conversionRate}</p>
          </div>
          <div>
            <h4 className="font-semibold">Variant B</h4>
            <p>Click-through Rate: {results.variantB.clickThroughRate}</p>
            <p>Conversion Rate: {results.variantB.conversionRate}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

