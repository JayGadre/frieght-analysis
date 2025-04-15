"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { port: "JNPT", time: 72, benchmark: 48 },
  { port: "Mundra", time: 60, benchmark: 48 },
  { port: "Chennai", time: 84, benchmark: 48 },
  { port: "Kolkata", time: 96, benchmark: 48 },
  { port: "Cochin", time: 66, benchmark: 48 },
]

export function CustomsClearanceTime() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customs Clearance Time</CardTitle>
        <CardDescription>Average customs clearance time at major ports (hours)</CardDescription>
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
              <Bar dataKey="time" fill="#8884d8" name="Current Time (hours)" />
              <Bar dataKey="benchmark" fill="#82ca9d" name="Global Benchmark (hours)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>All major Indian ports exceed global benchmark clearance times</li>
            <li>Mundra Port has the most efficient customs clearance process</li>
            <li>Kolkata Port shows longest clearance times, double the global benchmark</li>
            <li>Digital initiatives like Single Window Interface for Trade (SWIFT) showing positive impact</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

