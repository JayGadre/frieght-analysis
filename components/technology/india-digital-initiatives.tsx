"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const digitalCorridors = [
  {
    name: "Eastern Dedicated Freight Corridor",
    status: "Operational",
    completion: 85,
    description: "1,856 km corridor connecting Punjab to West Bengal with digital tracking",
  },
  {
    name: "Western Dedicated Freight Corridor",
    status: "Partially Operational",
    completion: 70,
    description: "1,504 km corridor connecting Delhi to Mumbai with IoT integration",
  },
  {
    name: "North-South Corridor",
    status: "Under Development",
    completion: 40,
    description: "Digital corridor connecting Delhi to Chennai with real-time monitoring",
  },
  {
    name: "East-West Corridor",
    status: "Planning Phase",
    completion: 15,
    description: "Proposed digital corridor connecting Kolkata to Mumbai",
  },
]

const digitalInitiatives = [
  {
    name: "E-Way Bill System",
    status: "Implemented",
    completion: 100,
    description: "Electronic way bill for movement of goods above ₹50,000 in value",
  },
  {
    name: "Logistics Data Bank (LDB)",
    status: "Operational",
    completion: 90,
    description: "RFID-based tracking system for container movement",
  },
  {
    name: "Port Community System (PCS)",
    status: "Operational",
    completion: 85,
    description: "Electronic platform connecting various port stakeholders",
  },
  {
    name: "National Logistics Portal",
    status: "Partially Implemented",
    completion: 60,
    description: "Single window platform for logistics service providers",
  },
]

export function IndiaDigitalInitiatives() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>India's Digital Initiatives</CardTitle>
        <CardDescription>Digital transformation initiatives in India's freight sector</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="corridors">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="corridors">Digital Freight Corridors</TabsTrigger>
            <TabsTrigger value="initiatives">Digital Initiatives</TabsTrigger>
          </TabsList>
          <TabsContent value="corridors" className="space-y-4 pt-4">
            {digitalCorridors.map((corridor) => (
              <div key={corridor.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{corridor.name}</p>
                    <p className="text-xs text-muted-foreground">{corridor.description}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      corridor.status === "Operational"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : corridor.status === "Partially Operational"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}
                  >
                    {corridor.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={corridor.completion} className="h-2" />
                  <span className="text-xs font-medium">{corridor.completion}%</span>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="initiatives" className="space-y-4 pt-4">
            {digitalInitiatives.map((initiative) => (
              <div key={initiative.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{initiative.name}</p>
                    <p className="text-xs text-muted-foreground">{initiative.description}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      initiative.status === "Implemented"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : initiative.status === "Operational"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}
                  >
                    {initiative.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={initiative.completion} className="h-2" />
                  <span className="text-xs font-medium">{initiative.completion}%</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

