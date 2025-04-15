"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "JNPT", exports: 4.5, imports: 5.2 },
  { name: "Mundra", exports: 5.8, imports: 6.3 },
  { name: "Chennai", exports: 3.2, imports: 3.8 },
  { name: "Kolkata", exports: 2.1, imports: 2.5 },
  { name: "Cochin", exports: 1.5, imports: 1.8 },
]

export function IndiaFreightMovement() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>India's Major Ports Freight Movement</CardTitle>
        <CardDescription>Export vs Import volumes (Million TEUs)</CardDescription>
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
              <Bar dataKey="exports" fill="#8884d8" name="Exports (Million TEUs)" />
              <Bar dataKey="imports" fill="#82ca9d" name="Imports (Million TEUs)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

