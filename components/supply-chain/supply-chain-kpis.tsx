"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, Clock, Truck, Ship, Plane } from "lucide-react"

export function SupplyChainKPIs() {
  return (
    <Card className="col-span-3 mb-4">
      <CardHeader>
        <CardTitle>Key Performance Indicators (KPIs)</CardTitle>
        <CardDescription>Supply chain efficiency metrics for freight forwarding</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="global">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="india">India</TabsTrigger>
          </TabsList>
          <TabsContent value="global" className="space-y-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transit Time</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">12.5</p>
                    <p className="text-xs text-muted-foreground">days (avg)</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowDownRight className="h-4 w-4" />
                    <span className="text-xs">-5%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">On-Time Delivery</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">87%</p>
                    <p className="text-xs text-muted-foreground">of shipments</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">+3%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Utilization</span>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">78%</p>
                    <p className="text-xs text-muted-foreground">capacity</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">+2%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cost per Ton-KM</span>
                  <Ship className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">$0.12</p>
                    <p className="text-xs text-muted-foreground">USD</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowDownRight className="h-4 w-4" />
                    <span className="text-xs">-3%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="india" className="space-y-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transit Time</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">18.3</p>
                    <p className="text-xs text-muted-foreground">days (avg)</p>
                  </div>
                  <div className="flex items-center text-red-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">+8%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">On-Time Delivery</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">72%</p>
                    <p className="text-xs text-muted-foreground">of shipments</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">+5%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Utilization</span>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">65%</p>
                    <p className="text-xs text-muted-foreground">capacity</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">+4%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cost per Ton-KM</span>
                  <Plane className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">$0.18</p>
                    <p className="text-xs text-muted-foreground">USD</p>
                  </div>
                  <div className="flex items-center text-red-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">+10%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

