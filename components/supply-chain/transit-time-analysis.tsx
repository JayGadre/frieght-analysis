"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { route: "China-US", global: 18, india: 25 },
  { route: "EU-US", global: 12, india: 19 },
  { route: "China-EU", global: 22, india: 30 },
  { route: "India-US", global: 21, india: 21 },
  { route: "India-EU", global: 20, india: 20 },
  { route: "ASEAN-India", global: 10, india: 14 },
]

export function TransitTimeAnalysis() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transit Time Analysis</CardTitle>
        <CardDescription>Average time for freight movement (in days)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis dataKey="route" stroke={isDark ? "#888" : "#666"} />
              <YAxis stroke={isDark ? "#888" : "#666"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Legend />
              <Bar dataKey="global" fill="#8884d8" name="Global Average (days)" />
              <Bar dataKey="india" fill="#82ca9d" name="India Routes (days)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>India routes typically have 20-40% longer transit times than global averages</li>
            <li>China-EU route shows largest gap between global average and India-specific times</li>
            <li>Direct India routes (India-US, India-EU) are competitive with global standards</li>
            <li>ASEAN-India routes show potential for improvement with better connectivity</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

