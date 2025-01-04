import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PerformancePredictorProps {
  prediction: {
    estimatedReach: string;
    predictedCTR: string;
    estimatedConversionRate: string;
  } | null;
}

export function PerformancePredictor({ prediction }: PerformancePredictorProps) {
  if (!prediction) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Prediction</CardTitle>
        <CardDescription>Estimated ad performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><strong>Estimated Reach:</strong> {prediction.estimatedReach}</p>
          <p><strong>Predicted Click-through Rate:</strong> {prediction.predictedCTR}</p>
          <p><strong>Estimated Conversion Rate:</strong> {prediction.estimatedConversionRate}</p>
        </div>
      </CardContent>
    </Card>
  )
}

