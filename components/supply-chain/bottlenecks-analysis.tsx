"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const bottlenecks = [
  {
    name: "Port Congestion",
    description: "Average waiting time at major ports",
    value: 85,
    impact: "High",
    details: "Ships wait 2-5 days for berth at major ports vs. global average of <1 day",
  },
  {
    name: "Road Infrastructure",
    description: "Last-mile connectivity issues",
    value: 75,
    impact: "High",
    details: "Poor road conditions add 30-40% to transit times in many regions",
  },
  {
    name: "Rail Freight Delays",
    description: "Limited capacity & passenger priority",
    value: 65,
    impact: "Medium",
    details: "Passenger trains given priority, causing freight delays of 12-24 hours",
  },
  {
    name: "Documentation & Compliance",
    description: "Complex paperwork requirements",
    value: 60,
    impact: "Medium",
    details: "Multiple agencies require separate documentation, despite digitization efforts",
  },
  {
    name: "Warehousing Inefficiencies",
    description: "Fragmented storage infrastructure",
    value: 50,
    impact: "Medium",
    details: "Limited automation and outdated facilities increase handling times by 20-30%",
  },
]

export function BottlenecksAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bottlenecks in India's Freight Forwarding</CardTitle>
        <CardDescription>Major challenges affecting supply chain efficiency</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {bottlenecks.map((bottleneck) => (
            <div key={bottleneck.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{bottleneck.name}</p>
                  <p className="text-xs text-muted-foreground">{bottleneck.description}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    bottleneck.impact === "High"
                      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  {bottleneck.impact} Impact
                </span>
              </div>
              <Progress value={bottleneck.value} className="h-2" />
              <p className="text-xs text-muted-foreground">{bottleneck.details}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

