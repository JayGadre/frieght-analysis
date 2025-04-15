"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "DHL", value: 22 },
  { name: "Kuehne + Nagel", value: 15 },
  { name: "DB Schenker", value: 12 },
  { name: "DSV Panalpina", value: 10 },
  { name: "Expeditors", value: 8 },
  { name: "Sinotrans", value: 7 },
  { name: "Others", value: 26 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658"]

export function MarketShareChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Market Share</CardTitle>
        <CardDescription>Market share of major freight forwarding companies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, "Market Share"]}
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
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>DHL maintains largest global market share at 22%</li>
            <li>Top 6 players control 74% of the global market</li>
            <li>Consolidation trend continues with mergers and acquisitions</li>
            <li>Regional players gaining strength in specialized markets</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

