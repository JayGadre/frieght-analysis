"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: "2018", marketSize: 180, growth: 4.2 },
  { year: "2019", marketSize: 190, growth: 5.5 },
  { year: "2020", marketSize: 175, growth: -7.9 },
  { year: "2021", marketSize: 200, growth: 14.3 },
  { year: "2022", marketSize: 220, growth: 10.0 },
  { year: "2023", marketSize: 235, growth: 6.8 },
  { year: "2024", marketSize: 250, growth: 6.4 },
  { year: "2025", marketSize: 265, growth: 6.0 },
]

export function GlobalTrendsChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Freight Forwarding Trends</CardTitle>
        <CardDescription>Market size (USD Billions) and growth rate (%)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis dataKey="year" stroke={isDark ? "#888" : "#666"} />
              <YAxis yAxisId="left" stroke={isDark ? "#888" : "#666"} />
              <YAxis yAxisId="right" orientation="right" stroke={isDark ? "#888" : "#666"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="marketSize"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="Market Size (USD Billions)"
              />
              <Line yAxisId="right" type="monotone" dataKey="growth" stroke="#82ca9d" name="Growth Rate (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

