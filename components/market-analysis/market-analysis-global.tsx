"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const marketSizeData = [
  { year: "2018", size: 180 },
  { year: "2019", size: 190 },
  { year: "2020", size: 175 },
  { year: "2021", size: 200 },
  { year: "2022", size: 220 },
  { year: "2023", size: 235 },
  { year: "2024", size: 250 },
  { year: "2025", size: 265 },
  { year: "2026", size: 280 },
  { year: "2027", size: 297 },
  { year: "2028", size: 315 },
]

const tradeRouteData = [
  { name: "Asia-Europe", volume: 24.5 },
  { name: "Transpacific", volume: 28.3 },
  { name: "Transatlantic", volume: 7.1 },
  { name: "Intra-Asia", volume: 32.6 },
  { name: "Other", volume: 7.5 },
]

export function MarketAnalysisGlobal() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Market Analysis</CardTitle>
        <CardDescription>Global freight forwarding market trends and analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="growth">Market Growth</TabsTrigger>
            <TabsTrigger value="routes">Trade Routes</TabsTrigger>
          </TabsList>
          <TabsContent value="growth" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={marketSizeData}
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
                  <Line
                    type="monotone"
                    dataKey="size"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    name="Market Size (USD Billions)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">Key Insights:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Global freight forwarding market expected to reach $315B by 2028</li>
                <li>CAGR of 5.8% from 2023-2028</li>
                <li>COVID-19 caused market contraction in 2020</li>
                <li>Strong recovery in 2021-2022 due to pent-up demand</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="routes">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {tradeRouteData.map((route) => (
                  <div key={route.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{route.name}</span>
                    <span className="text-sm">{route.volume}%</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">Major Trade Lanes:</p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                  <li>Intra-Asia remains the largest trade lane by volume</li>
                  <li>Transpacific routes (Asia-North America) show strong growth</li>
                  <li>Asia-Europe routes affected by geopolitical tensions</li>
                  <li>Emerging trade lanes in Africa and South America growing rapidly</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

