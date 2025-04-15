"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan 22", fuelPrice: 85, freightRate: 2500 },
  { month: "Feb 22", fuelPrice: 90, freightRate: 2600 },
  { month: "Mar 22", fuelPrice: 110, freightRate: 2800 },
  { month: "Apr 22", fuelPrice: 105, freightRate: 2750 },
  { month: "May 22", fuelPrice: 112, freightRate: 2850 },
  { month: "Jun 22", fuelPrice: 120, freightRate: 3000 },
  { month: "Jul 22", fuelPrice: 115, freightRate: 2900 },
  { month: "Aug 22", fuelPrice: 105, freightRate: 2750 },
  { month: "Sep 22", fuelPrice: 100, freightRate: 2650 },
  { month: "Oct 22", fuelPrice: 95, freightRate: 2550 },
  { month: "Nov 22", fuelPrice: 90, freightRate: 2500 },
  { month: "Dec 22", fuelPrice: 88, freightRate: 2450 },
  { month: "Jan 23", fuelPrice: 85, freightRate: 2400 },
  { month: "Feb 23", fuelPrice: 88, freightRate: 2450 },
  { month: "Mar 23", fuelPrice: 92, freightRate: 2500 },
  { month: "Apr 23", fuelPrice: 95, freightRate: 2550 },
  { month: "May 23", fuelPrice: 98, freightRate: 2600 },
  { month: "Jun 23", fuelPrice: 102, freightRate: 2650 },
]

export function FuelPriceImpact() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fuel Price Impact on Freight Rates</CardTitle>
        <CardDescription>Correlation between fuel prices and freight rates</CardDescription>
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
              <XAxis dataKey="month" stroke={isDark ? "#888" : "#666"} />
              <YAxis yAxisId="left" stroke={isDark ? "#888" : "#666"} />
              <YAxis yAxisId="right" orientation="right" stroke={isDark ? "#888" : "#666"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="fuelPrice"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="Fuel Price (USD/barrel)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="freightRate"
                stroke="#82ca9d"
                name="Freight Rate (USD/container)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Strong correlation between fuel price fluctuations and freight rates</li>
            <li>Approximately 2-3 week lag between fuel price changes and freight rate adjustments</li>
            <li>Fuel surcharges typically range from 5-15% of base freight rates</li>
            <li>Bunker Adjustment Factor (BAF) is the industry standard mechanism for fuel cost recovery</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

