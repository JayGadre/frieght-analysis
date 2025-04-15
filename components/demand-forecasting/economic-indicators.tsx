"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: "2018", gdp: 3.6, trade: 3.9 },
  { year: "2019", gdp: 2.9, trade: 0.9 },
  { year: "2020", gdp: -3.1, trade: -5.3 },
  { year: "2021", gdp: 6.1, trade: 9.8 },
  { year: "2022", gdp: 3.4, trade: 3.2 },
  { year: "2023", gdp: 3.0, trade: 3.5 },
  { year: "2024", gdp: 3.3, trade: 3.8 },
  { year: "2025", gdp: 3.4, trade: 4.0 },
]

export function EconomicIndicators() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Economic Indicators & Trade Growth</CardTitle>
        <CardDescription>Correlation between global economic growth and trade volume</CardDescription>
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
              <Line type="monotone" dataKey="gdp" stroke="#8884d8" activeDot={{ r: 8 }} name="Global GDP Growth (%)" />
              <Line type="monotone" dataKey="trade" stroke="#82ca9d" name="Global Trade Volume Growth (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Strong correlation between global GDP growth and trade volume</li>
            <li>Trade typically fluctuates more dramatically than GDP</li>
            <li>COVID-19 pandemic caused significant disruption in 2020</li>
            <li>Trade growth expected to outpace GDP growth in coming years</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

