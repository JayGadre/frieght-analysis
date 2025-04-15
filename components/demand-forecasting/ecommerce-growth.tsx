"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: "2020", global: 18, india: 30 },
  { year: "2021", global: 16, india: 28 },
  { year: "2022", global: 12, india: 22 },
  { year: "2023", global: 10, india: 18 },
  { year: "2024", global: 9, india: 15 },
  { year: "2025", global: 8, india: 14 },
]

export function EcommerceGrowth() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>E-commerce Logistics Growth</CardTitle>
        <CardDescription>Growth in e-commerce logistics (% YoY)</CardDescription>
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
              <Bar dataKey="global" fill="#8884d8" name="Global Growth (%)" />
              <Bar dataKey="india" fill="#82ca9d" name="India Growth (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>E-commerce logistics growth normalizing after pandemic surge</li>
            <li>India consistently outpacing global growth rates</li>
            <li>Major players like Amazon, Flipkart driving logistics innovation</li>
            <li>Last-mile delivery remains a key challenge and opportunity</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

