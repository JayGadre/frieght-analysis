"use client"

import { TabsContent } from "@/components/ui/tabs"

import { TabsTrigger } from "@/components/ui/tabs"

import { TabsList } from "@/components/ui/tabs"

import { Tabs } from "@/components/ui/tabs"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const exportData = [
  { name: "USA", value: 18 },
  { name: "UAE", value: 12 },
  { name: "China", value: 8 },
  { name: "EU", value: 15 },
  { name: "Others", value: 47 },
]

const importData = [
  { name: "China", value: 22 },
  { name: "UAE", value: 10 },
  { name: "USA", value: 8 },
  { name: "Saudi Arabia", value: 7 },
  { name: "Others", value: 53 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export function IndiaTradeFlows() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>India's Trade Flows</CardTitle>
        <CardDescription>Major export destinations and import sources (% share)</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="exports">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="exports">Exports</TabsTrigger>
            <TabsTrigger value="imports">Imports</TabsTrigger>
          </TabsList>
          <TabsContent value="exports">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={exportData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {exportData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Share"]}
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="imports">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={importData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {importData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Share"]}
                    contentStyle={{
                      backgroundColor: isDark ? "#1f2937" : "#fff",
                      border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                      color: isDark ? "#fff" : "#000",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>USA remains India's largest export destination (18% share)</li>
            <li>China dominates India's imports (22% share)</li>
            <li>UAE is a significant partner for both exports and imports</li>
            <li>Trade diversification efforts ongoing to reduce dependency on specific markets</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

