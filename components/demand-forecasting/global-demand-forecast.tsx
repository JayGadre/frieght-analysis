"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: "2020", actual: 180, forecast: 185 },
  { year: "2021", actual: 210, forecast: 205 },
  { year: "2022", actual: 230, forecast: 225 },
  { year: "2023", actual: 245, forecast: 240 },
  { year: "2024", actual: null, forecast: 260 },
  { year: "2025", actual: null, forecast: 280 },
  { year: "2026", actual: null, forecast: 300 },
]

export function GlobalDemandForecast() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Freight Demand Forecast</CardTitle>
        <CardDescription>Actual and forecasted global freight demand (USD Billions)</CardDescription>
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
              <YAxis stroke={isDark ? "#888" : "#666"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} name="Actual Demand" />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#82ca9d"
                strokeDasharray="5 5"
                name="Forecasted Demand"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Global freight demand expected to grow at 7-8% annually through 2026</li>
            <li>Emerging markets driving significant portion of growth</li>
            <li>E-commerce continues to be a major growth driver</li>
            <li>Geopolitical tensions creating regional shifts in trade patterns</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

