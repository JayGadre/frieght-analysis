import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const agreements = [
  {
    name: "European Union (EU)",
    members: "27 member states",
    impact: "Unified customs procedures, no internal tariffs, common external tariff",
  },
  {
    name: "ASEAN",
    members: "10 Southeast Asian nations",
    impact: "Reduced tariffs, simplified customs, enhanced regional trade",
  },
  {
    name: "USMCA (formerly NAFTA)",
    members: "USA, Mexico, Canada",
    impact: "Duty-free trade for most goods, integrated supply chains",
  },
  {
    name: "RCEP",
    members: "15 Asia-Pacific nations",
    impact: "World's largest trade bloc, harmonized rules of origin",
  },
  {
    name: "India's FTAs",
    members: "UAE, Australia, ASEAN, Japan, South Korea",
    impact: "Preferential market access, reduced duties on key exports",
  },
]

export function TradeAgreements() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Free Trade Agreements & Regional Trade Blocks</CardTitle>
        <CardDescription>Impact of major trade agreements on freight forwarding</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agreement</TableHead>
              <TableHead>Member Countries</TableHead>
              <TableHead>Impact on Freight Forwarding</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agreements.map((agreement) => (
              <TableRow key={agreement.name}>
                <TableCell className="font-medium">{agreement.name}</TableCell>
                <TableCell>{agreement.members}</TableCell>
                <TableCell>{agreement.impact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-sm mt-4">
          <p className="font-medium">Key Insights:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>FTAs significantly reduce customs duties and simplify procedures</li>
            <li>Regional trade blocks create integrated supply chains</li>
            <li>India actively expanding FTA network to boost exports</li>
            <li>Geopolitical tensions affecting implementation of some agreements</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

