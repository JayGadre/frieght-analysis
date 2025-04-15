"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Sparkles, Loader2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function AIInsightsGenerator() {
  const [insightType, setInsightType] = useState<string>("")
  const [prompt, setPrompt] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedInsight, setGeneratedInsight] = useState<string>("")
  const { toast } = useToast()

  const handleGenerate = () => {
    if (!insightType) {
      toast({
        title: "Insight type not selected",
        description: "Please select the type of insight you want to generate",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate AI generation process
    setTimeout(() => {
      setIsGenerating(false)

      // Generate mock insights based on the selected type
      let insight = ""

      if (insightType === "market") {
        insight =
          "Based on the uploaded data, we've identified the following market trends:\n\n" +
          "1. The Asia-Europe trade lane shows a 12% growth compared to last year\n" +
          "2. Container rates have stabilized after the volatility of 2021-2022\n" +
          "3. Your market share in the ASEAN region has increased by 3.5%\n" +
          "4. Competitor pricing in the India-US route is 8% higher than your rates"
      } else if (insightType === "cost") {
        insight =
          "Cost analysis of your freight forwarding operations:\n\n" +
          "1. Fuel surcharges account for 15% of your total costs, above industry average\n" +
          "2. Port handling charges have increased by 7% in Q2 2023\n" +
          "3. Potential savings of 12% identified in customs brokerage fees\n" +
          "4. Last-mile delivery costs are 18% higher than industry benchmarks"
      } else if (insightType === "efficiency") {
        insight =
          "Supply chain efficiency insights:\n\n" +
          "1. Average transit time is 22% longer than industry benchmarks\n" +
          "2. On-time delivery performance has improved by 8% in the last quarter\n" +
          "3. Container utilization is at 68%, below the industry average of 78%\n" +
          "4. Customs clearance delays account for 35% of your total transit time"
      } else if (insightType === "custom") {
        insight =
          "Custom analysis based on your prompt:\n\n" +
          "The data shows significant correlation between fuel prices and freight rates with a 2-3 week lag. " +
          "Your operations in the ASEAN region show the highest efficiency, while European routes have the highest cost per ton-km. " +
          "Recommend focusing on optimizing European routes through better consolidation and carrier negotiations."
      }

      setGeneratedInsight(insight)

      toast({
        title: "Insights generated",
        description: "AI has analyzed your data and generated insights",
      })
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights Generator</CardTitle>
        <CardDescription>Use AI to generate insights from your uploaded data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="insight-type">Insight Type</Label>
          <Select value={insightType} onValueChange={setInsightType}>
            <SelectTrigger id="insight-type">
              <SelectValue placeholder="Select insight type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="market">Market Analysis</SelectItem>
              <SelectItem value="cost">Cost Optimization</SelectItem>
              <SelectItem value="efficiency">Supply Chain Efficiency</SelectItem>
              <SelectItem value="custom">Custom Analysis</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {insightType === "custom" && (
          <div className="space-y-2">
            <Label htmlFor="custom-prompt">Custom Prompt</Label>
            <Textarea
              id="custom-prompt"
              placeholder="Describe what insights you're looking for..."
              className="min-h-[100px]"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
        )}

        {generatedInsight && (
          <div className="space-y-2 mt-4">
            <Label>Generated Insights</Label>
            <div className="p-4 rounded-md bg-muted/50 whitespace-pre-line">{generatedInsight}</div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !insightType || (insightType === "custom" && !prompt)}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Insights
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

