"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, Ship, Truck, Train, Plane } from "lucide-react"

export function OverviewMetrics() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Overview Metrics</CardTitle>
        <CardDescription>Key metrics for freight forwarding industry</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="global">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="india">India</TabsTrigger>
          </TabsList>
          <TabsContent value="global" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Market Growth</p>
                  <p className="text-2xl font-bold">5.8%</p>
                  <p className="text-xs text-muted-foreground">CAGR (2023-2028)</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Market Size</p>
                  <p className="text-2xl font-bold">$235B</p>
                  <p className="text-xs text-muted-foreground">Global (2023)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Ship className="h-5 w-5 text-blue-500" />
                <p className="text-xs font-medium mt-1">Sea</p>
                <p className="text-sm font-bold">45%</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Truck className="h-5 w-5 text-green-500" />
                <p className="text-xs font-medium mt-1">Road</p>
                <p className="text-sm font-bold">30%</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Train className="h-5 w-5 text-orange-500" />
                <p className="text-xs font-medium mt-1">Rail</p>
                <p className="text-sm font-bold">15%</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Plane className="h-5 w-5 text-purple-500" />
                <p className="text-xs font-medium mt-1">Air</p>
                <p className="text-sm font-bold">10%</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="india" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ArrowDownRight className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Logistics Cost</p>
                  <p className="text-2xl font-bold">13-14%</p>
                  <p className="text-xs text-muted-foreground">of GDP (vs 8-9% globally)</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Growth Rate</p>
                  <p className="text-2xl font-bold">7.2%</p>
                  <p className="text-xs text-muted-foreground">CAGR (2023-2028)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Truck className="h-5 w-5 text-green-500" />
                <p className="text-xs font-medium mt-1">Road</p>
                <p className="text-sm font-bold">60%</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Train className="h-5 w-5 text-orange-500" />
                <p className="text-xs font-medium mt-1">Rail</p>
                <p className="text-sm font-bold">30%</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Ship className="h-5 w-5 text-blue-500" />
                <p className="text-xs font-medium mt-1">Sea</p>
                <p className="text-sm font-bold">7%</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-2">
                <Plane className="h-5 w-5 text-purple-500" />
                <p className="text-xs font-medium mt-1">Air</p>
                <p className="text-sm font-bold">3%</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

