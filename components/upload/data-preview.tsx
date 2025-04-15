"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

// Mock data for demonstration
const shipmentData = [
  {
    id: "SH001",
    origin: "Mumbai",
    destination: "New York",
    mode: "Sea",
    status: "In Transit",
    etd: "2023-06-15",
    eta: "2023-07-10",
  },
  {
    id: "SH002",
    origin: "Delhi",
    destination: "London",
    mode: "Air",
    status: "Delivered",
    etd: "2023-06-18",
    eta: "2023-06-20",
  },
  {
    id: "SH003",
    origin: "Chennai",
    destination: "Singapore",
    mode: "Sea",
    status: "Customs Clearance",
    etd: "2023-06-20",
    eta: "2023-07-05",
  },
  {
    id: "SH004",
    origin: "Bangalore",
    destination: "Dubai",
    mode: "Air",
    status: "Booking Confirmed",
    etd: "2023-06-25",
    eta: "2023-06-27",
  },
  {
    id: "SH005",
    origin: "Kolkata",
    destination: "Hong Kong",
    mode: "Sea",
    status: "In Transit",
    etd: "2023-06-12",
    eta: "2023-07-02",
  },
]

const costData = [
  { route: "India-US", mode: "Sea", baseRate: 2500, fuelSurcharge: 350, customsFee: 180, totalCost: 3030 },
  { route: "India-Europe", mode: "Sea", baseRate: 2200, fuelSurcharge: 320, customsFee: 150, totalCost: 2670 },
  { route: "India-ASEAN", mode: "Sea", baseRate: 1200, fuelSurcharge: 180, customsFee: 120, totalCost: 1500 },
  { route: "India-US", mode: "Air", baseRate: 5800, fuelSurcharge: 920, customsFee: 220, totalCost: 6940 },
  { route: "India-Europe", mode: "Air", baseRate: 5200, fuelSurcharge: 850, customsFee: 190, totalCost: 6240 },
]

const transitData = [
  { route: "Mumbai-New York", mode: "Sea", avgTransit: 28, minTransit: 25, maxTransit: 35 },
  { route: "Delhi-London", mode: "Air", avgTransit: 2, minTransit: 1, maxTransit: 3 },
  { route: "Chennai-Singapore", mode: "Sea", avgTransit: 12, minTransit: 10, maxTransit: 15 },
  { route: "Bangalore-Dubai", mode: "Air", avgTransit: 1, minTransit: 1, maxTransit: 2 },
  { route: "Kolkata-Hong Kong", mode: "Sea", avgTransit: 18, minTransit: 15, maxTransit: 22 },
]

export function DataPreview() {
  const [activeTab, setActiveTab] = useState("shipment")

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Data Preview</CardTitle>
        <CardDescription>Preview of your uploaded freight forwarding data</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="shipment" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="shipment">Shipment Data</TabsTrigger>
            <TabsTrigger value="cost">Cost Data</TabsTrigger>
            <TabsTrigger value="transit">Transit Time Data</TabsTrigger>
          </TabsList>
          <TabsContent value="shipment">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shipment ID</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>ETD</TableHead>
                  <TableHead>ETA</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipmentData.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell className="font-medium">{shipment.id}</TableCell>
                    <TableCell>{shipment.origin}</TableCell>
                    <TableCell>{shipment.destination}</TableCell>
                    <TableCell>{shipment.mode}</TableCell>
                    <TableCell>{shipment.status}</TableCell>
                    <TableCell>{shipment.etd}</TableCell>
                    <TableCell>{shipment.eta}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="cost">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Base Rate (USD)</TableHead>
                  <TableHead>Fuel Surcharge (USD)</TableHead>
                  <TableHead>Customs Fee (USD)</TableHead>
                  <TableHead>Total Cost (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costData.map((cost, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{cost.route}</TableCell>
                    <TableCell>{cost.mode}</TableCell>
                    <TableCell>{cost.baseRate}</TableCell>
                    <TableCell>{cost.fuelSurcharge}</TableCell>
                    <TableCell>{cost.customsFee}</TableCell>
                    <TableCell className="font-medium">{cost.totalCost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="transit">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Avg Transit Time (days)</TableHead>
                  <TableHead>Min Transit Time (days)</TableHead>
                  <TableHead>Max Transit Time (days)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transitData.map((transit, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{transit.route}</TableCell>
                    <TableCell>{transit.mode}</TableCell>
                    <TableCell>{transit.avgTransit}</TableCell>
                    <TableCell>{transit.minTransit}</TableCell>
                    <TableCell>{transit.maxTransit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

