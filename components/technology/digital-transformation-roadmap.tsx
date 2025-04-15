import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const roadmapItems = [
  {
    phase: "Phase 1: Digitization",
    timeframe: "2023-2024",
    initiatives: ["Document digitization", "Basic tracking systems", "Cloud migration"],
    status: "In Progress",
  },
  {
    phase: "Phase 2: Integration",
    timeframe: "2024-2025",
    initiatives: ["IoT implementation", "API-based integrations", "Advanced analytics"],
    status: "Planning",
  },
  {
    phase: "Phase 3: Intelligence",
    timeframe: "2025-2026",
    initiatives: ["AI-driven forecasting", "Predictive maintenance", "Blockchain pilots"],
    status: "Future",
  },
  {
    phase: "Phase 4: Automation",
    timeframe: "2026-2027",
    initiatives: ["Robotic process automation", "Autonomous vehicle testing", "Smart contracts implementation"],
    status: "Future",
  },
]

export function DigitalTransformationRoadmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Digital Transformation Roadmap</CardTitle>
        <CardDescription>Strategic roadmap for digital transformation in freight forwarding</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phase</TableHead>
              <TableHead>Timeframe</TableHead>
              <TableHead>Key Initiatives</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roadmapItems.map((item) => (
              <TableRow key={item.phase}>
                <TableCell className="font-medium">{item.phase}</TableCell>
                <TableCell>{item.timeframe}</TableCell>
                <TableCell>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    {item.initiatives.map((initiative, index) => (
                      <li key={index}>{initiative}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      item.status === "In Progress"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : item.status === "Planning"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-sm mt-4">
          <p className="font-medium">Implementation Strategy:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Phased approach to minimize disruption to operations</li>
            <li>Focus on ROI-driven technology adoption</li>
            <li>Build internal capabilities alongside technology implementation</li>
            <li>Strategic partnerships with technology providers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

