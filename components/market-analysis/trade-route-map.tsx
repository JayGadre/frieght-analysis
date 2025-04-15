"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export function TradeRouteMap() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Major Trade Routes</CardTitle>
        <CardDescription>Key global shipping and trade routes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] bg-muted rounded-md overflow-hidden">
          {/* This would be replaced with an actual map visualization in a production app */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="World Map with Trade Routes"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm text-muted-foreground">(Visualization would be implemented here)</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-background/80">
              Asia-Europe
            </Badge>
            <Badge variant="outline" className="bg-background/80">
              Transpacific
            </Badge>
            <Badge variant="outline" className="bg-background/80">
              Transatlantic
            </Badge>
            <Badge variant="outline" className="bg-background/80">
              Intra-Asia
            </Badge>
            <Badge variant="outline" className="bg-background/80">
              Middle East-Asia
            </Badge>
          </div>
        </div>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Trade Routes:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Asia-Europe: Major container route via Suez Canal</li>
            <li>Transpacific: Connects Asia with North America</li>
            <li>Transatlantic: Links Europe with North America</li>
            <li>Intra-Asia: Highest volume regional trade</li>
            <li>Middle East-Asia: Growing energy and consumer goods trade</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

