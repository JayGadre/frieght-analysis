"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const fuelData = [
  { month: "Jan", price: 85.2, impact: 8.5 },
  { month: "Feb", price: 87.8, impact: 8.8 },
  { month: "Mar", price: 92.3, impact: 9.2 },
  { month: "Apr", price: 95.7, impact: 9.6 },
  { month: "May", price: 98.2, impact: 9.8 },
  { month: "Jun", price: 102.5, impact: 10.3 },
  { month: "Jul", price: 105.8, impact: 10.6 },
  { month: "Aug", price: 103.2, impact: 10.3 },
  { month: "Sep", price: 99.5, impact: 10.0 },
  { month: "Oct", price: 97.3, impact: 9.7 },
  { month: "Nov", price: 94.8, impact: 9.5 },
  { month: "Dec", price: 92.1, impact: 9.2 },
]

const containerData = [
  { type: "20ft Dry", rate2022: 2500, rate2023: 1800 },
  { type: "40ft Dry", rate2022: 4200, rate2023: 3100 },
  { type: "40ft HC", rate2022: 4500, rate2023: 3300 },
  { type: "Reefer", rate2022: 6800, rate2023: 5500 },
]

export function GlobalCostFactors() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Cost Factors</CardTitle>
        <CardDescription>Key global factors affecting freight forwarding costs</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="fuel">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fuel">Fuel Prices</TabsTrigger>
            <TabsTrigger value="container">Container Rates</TabsTrigger>
          </TabsList>
          <TabsContent value="fuel" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fuelData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                  <XAxis dataKey="month" stroke={isDark ? "#888" : "#666"} />
                  <YAxis stroke={isDark ? "#888" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="price" fill="#8884d8" name="Fuel Price (USD/barrel)" />
                  <Bar dataKey="impact" fill="#82ca9d" name="Impact on Freight Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">Key Insights:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Fuel prices directly impact freight rates with ~10% correlation</li>
                <li>Seasonal fluctuations affect shipping costs</li>
                <li>Fuel surcharges are common industry practice</li>
                <li>Alternative fuels gaining traction due to IMO regulations</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="container" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={containerData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                  <XAxis dataKey="type" stroke={isDark ? "#888" : "#666"} />
                  <YAxis stroke={isDark ? "#888" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="rate2022" fill="#8884d8" name="2022 Rate (USD)" />
                  <Bar dataKey="rate2023" fill="#82ca9d" name="2023 Rate (USD)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">Container Shortages & Shipping Disruptions:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Container rates normalized in 2023 after 2021-2022 spike</li>
                <li>Reefer containers maintain premium pricing</li>
                <li>Regional imbalances still affect availability</li>
                <li>Port congestion improving but still impacts costs</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

