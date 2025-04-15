"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { mode: "Container Ships", global: 82, india: 68 },
  { mode: "Trucks", global: 75, india: 62 },
  { mode: "Rail Freight", global: 78, india: 65 },
  { mode: "Air Cargo", global: 85, india: 72 },
]

export function FreightUtilization() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Freight Utilization</CardTitle>
        <CardDescription>Capacity utilization of different freight modes (%)</CardDescription>
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
              <XAxis dataKey="mode" stroke={isDark ? "#888" : "#666"} />
              <YAxis stroke={isDark ? "#888" : "#666"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Legend />
              <Bar dataKey="global" fill="#8884d8" name="Global Average (%)" />
              <Bar dataKey="india" fill="#82ca9d" name="India (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>India consistently shows 15-20% lower utilization across all transport modes</li>
            <li>Truck utilization in India particularly low due to fragmented ownership</li>
            <li>Air cargo shows highest utilization due to premium pricing and limited capacity</li>
            <li>Improving utilization could reduce logistics costs by 8-12%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

