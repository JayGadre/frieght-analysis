"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    subject: "AI & ML",
    global: 65,
    india: 40,
    fullMark: 100,
  },
  {
    subject: "IoT",
    global: 75,
    india: 50,
    fullMark: 100,
  },
  {
    subject: "Blockchain",
    global: 45,
    india: 25,
    fullMark: 100,
  },
  {
    subject: "Automation",
    global: 70,
    india: 45,
    fullMark: 100,
  },
  {
    subject: "Cloud",
    global: 85,
    india: 65,
    fullMark: 100,
  },
  {
    subject: "Analytics",
    global: 80,
    india: 55,
    fullMark: 100,
  },
]

export function TechnologyAdoption() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Technology Adoption Rates</CardTitle>
        <CardDescription>Global vs India technology adoption in freight forwarding (%)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke={isDark ? "#444" : "#ddd"} />
              <PolarAngleAxis dataKey="subject" stroke={isDark ? "#888" : "#666"} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke={isDark ? "#888" : "#666"} />
              <Radar name="Global" dataKey="global" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="India" dataKey="india" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>India lags global adoption rates across all technologies</li>
            <li>Cloud computing shows highest adoption in both global and Indian markets</li>
            <li>Blockchain has lowest adoption rates due to implementation complexity</li>
            <li>Government initiatives driving increased IoT adoption in India</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

