"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const logisticsCostData = [
  { country: "India", cost: 13.5 },
  { country: "China", cost: 10.2 },
  { country: "USA", cost: 8.5 },
  { country: "Germany", cost: 8.1 },
  { country: "Japan", cost: 8.7 },
  { country: "Global Avg", cost: 9.2 },
]

const portChargesData = [
  { port: "JNPT", handling: 120, demurrage: 75 },
  { port: "Mundra", handling: 110, demurrage: 65 },
  { port: "Chennai", handling: 105, demurrage: 70 },
  { port: "Kolkata", handling: 125, demurrage: 80 },
  { port: "Cochin", handling: 100, demurrage: 60 },
]

export function IndiaCostFactors() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>India-Specific Cost Factors</CardTitle>
        <CardDescription>Cost factors affecting freight forwarding in India</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="logistics">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="logistics">Logistics Cost</TabsTrigger>
            <TabsTrigger value="port">Port Charges</TabsTrigger>
          </TabsList>
          <TabsContent value="logistics" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={logisticsCostData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                  <XAxis dataKey="country" stroke={isDark ? "#888" : "#666"} />
                  <YAxis stroke={isDark ? "#888" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="cost" fill="#8884d8" name="Logistics Cost (% of GDP)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">High Logistics Cost in India:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>India's logistics cost (13-14% of GDP) significantly higher than global average (8-9%)</li>
                <li>Inefficient transportation infrastructure a major factor</li>
                <li>Multiple taxes and regulatory hurdles add to costs</li>
                <li>Government initiatives like National Logistics Policy aim to reduce costs</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="port" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={portChargesData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                  <XAxis dataKey="port" stroke={isDark ? "#888" : "#666"} />
                  <YAxis stroke={isDark ? "#888" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="handling" fill="#8884d8" name="Handling Charges (USD)" />
                  <Bar dataKey="demurrage" fill="#82ca9d" name="Demurrage Charges (USD/day)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">Port Handling & Demurrage Charges:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Port charges vary significantly across major Indian ports</li>
                <li>Kolkata has highest handling and demurrage charges</li>
                <li>Cochin offers most competitive rates</li>
                <li>Demurrage charges significantly impact overall logistics costs</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

