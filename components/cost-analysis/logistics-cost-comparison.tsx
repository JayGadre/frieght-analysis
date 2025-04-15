"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    subject: "Transportation",
    India: 7.5,
    Global: 5.0,
    fullMark: 10,
  },
  {
    subject: "Warehousing",
    India: 2.5,
    Global: 1.8,
    fullMark: 10,
  },
  {
    subject: "Inventory",
    India: 1.8,
    Global: 1.2,
    fullMark: 10,
  },
  {
    subject: "Admin",
    India: 1.2,
    Global: 0.8,
    fullMark: 10,
  },
  {
    subject: "Packaging",
    India: 0.5,
    Global: 0.3,
    fullMark: 10,
  },
]

export function LogisticsCostComparison() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Logistics Cost Comparison</CardTitle>
        <CardDescription>India vs Global logistics cost breakdown (% of GDP)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke={isDark ? "#444" : "#ddd"} />
              <PolarAngleAxis dataKey="subject" stroke={isDark ? "#888" : "#666"} />
              <PolarRadiusAxis angle={30} domain={[0, 10]} stroke={isDark ? "#888" : "#666"} />
              <Radar name="India" dataKey="India" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Global Average" dataKey="Global" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Transportation costs in India (7.5% of GDP) significantly higher than global average (5.0%)</li>
            <li>Warehousing costs also elevated due to fragmented storage infrastructure</li>
            <li>Higher inventory carrying costs due to longer transit times and uncertainties</li>
            <li>Administrative costs elevated due to complex regulatory environment</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

