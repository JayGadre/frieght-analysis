"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Layers, Lock } from "lucide-react"

export function GlobalTechTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Trends in Freight Tech</CardTitle>
        <CardDescription>Key technological trends in the freight forwarding industry</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ai">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ai">AI & Big Data</TabsTrigger>
            <TabsTrigger value="iot">IoT</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
          </TabsList>
          <TabsContent value="ai" className="space-y-4">
            <div className="flex items-start space-x-4 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">AI & Big Data for Demand Forecasting</h4>
                <p className="text-sm text-muted-foreground">
                  Machine learning algorithms analyze historical data, market trends, and external factors to predict
                  freight demand with increasing accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Demand Forecasting</Badge>
                </div>
              </div>
            </div>
            <div className="text-sm mt-4">
              <p className="font-medium">Key Applications:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Route optimization reducing transit times by 15-20%</li>
                <li>Dynamic pricing models based on real-time demand</li>
                <li>Predictive maintenance reducing vehicle downtime</li>
                <li>Customer churn prediction and prevention</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="iot" className="space-y-4">
            <div className="flex items-start space-x-4 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">IoT-based Tracking for Real-time Visibility</h4>
                <p className="text-sm text-muted-foreground">
                  Internet of Things (IoT) devices provide real-time tracking and monitoring of shipments, including
                  location, temperature, humidity, and shock.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Real-time Tracking</Badge>
                  <Badge variant="outline">Condition Monitoring</Badge>
                  <Badge variant="outline">Predictive ETA</Badge>
                </div>
              </div>
            </div>
            <div className="text-sm mt-4">
              <p className="font-medium">Key Applications:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Cold chain monitoring for pharmaceutical and food products</li>
                <li>Container utilization optimization</li>
                <li>Automated alerts for deviations from planned routes</li>
                <li>Integration with warehouse management systems</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="blockchain" className="space-y-4">
            <div className="flex items-start space-x-4 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Blockchain in Supply Chain Transparency</h4>
                <p className="text-sm text-muted-foreground">
                  Blockchain technology creates immutable, transparent records of transactions and documentation
                  throughout the supply chain.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Smart Contracts</Badge>
                  <Badge variant="outline">Document Digitization</Badge>
                  <Badge variant="outline">Traceability</Badge>
                </div>
              </div>
            </div>
            <div className="text-sm mt-4">
              <p className="font-medium">Key Applications:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Digital Bills of Lading reducing documentation time by 80%</li>
                <li>Automated customs clearance through smart contracts</li>
                <li>Product authenticity verification for high-value goods</li>
                <li>Transparent carbon footprint tracking</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="automation" className="space-y-4">
            <div className="flex items-start space-x-4 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Automation & Robotics</h4>
                <p className="text-sm text-muted-foreground">
                  Automated systems and robotics streamline warehouse operations, loading/unloading, and administrative
                  tasks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Warehouse Automation</Badge>
                  <Badge variant="outline">RPA</Badge>
                  <Badge variant="outline">Autonomous Vehicles</Badge>
                </div>
              </div>
            </div>
            <div className="text-sm mt-4">
              <p className="font-medium">Key Applications:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
                <li>Robotic Process Automation (RPA) for documentation and booking</li>
                <li>Automated Guided Vehicles (AGVs) in warehouses</li>
                <li>Autonomous trucks for long-haul transportation (testing phase)</li>
                <li>Drone delivery for last-mile in urban areas</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

