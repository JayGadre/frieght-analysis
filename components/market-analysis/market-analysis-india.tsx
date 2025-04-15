"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const industryData = [
  { name: "Textiles", exports: 15.2, imports: 5.8 },
  { name: "Pharma", exports: 12.5, imports: 8.3 },
  { name: "Auto", exports: 8.7, imports: 10.2 },
  { name: "FMCG", exports: 6.3, imports: 9.5 },
  { name: "Electronics", exports: 5.1, imports: 18.7 },
]

const portData = [
  { name: "JNPT", volume: 5.1, capacity: 7.0 },
  { name: "Mundra", volume: 6.5, capacity: 8.0 },
  { name: "Chennai", volume: 3.5, capacity: 4.5 },
  { name: "Kolkata", volume: 2.3, capacity: 3.0 },
  { name: "Cochin", volume: 1.7, capacity: 2.5 },
]

export function MarketAnalysisIndia() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>India Market Analysis</CardTitle>
        <CardDescription>India-specific freight forwarding market trends</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="industries">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="industries">Key Industries</TabsTrigger>
            <TabsTrigger value="ports">Major Ports</TabsTrigger>
          </TabsList>
          <TabsContent value="industries" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={industryData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                  <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} />
                  <YAxis stroke={isDark ? "#888" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="exports" fill="#8884d8" name="Exports (%)" />
                  <Bar dataKey="imports" fill="#82ca9d" name="Imports (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">Key Industries Driving Freight:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Textiles and Pharma lead export-oriented freight</li>
                <li>Electronics and Auto components dominate imports</li>
                <li>FMCG showing balanced trade flows</li>
                <li>Government initiatives like 'Make in India' boosting manufacturing exports</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ports" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={portData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                  <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} />
                  <YAxis stroke={isDark ? "#888" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="volume" fill="#8884d8" name="Current Volume (Million TEUs)" />
                  <Bar dataKey="capacity" fill="#82ca9d" name="Capacity (Million TEUs)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm">
              <p className="font-medium">Major Ports & Logistics Hubs:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Mundra Port has highest volume and capacity in India</li>
                <li>JNPT (Jawaharlal Nehru Port Trust) is the largest container port</li>
                <li>Chennai Port serves as gateway to South India</li>
                <li>Significant capacity expansion planned under Sagarmala project</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

