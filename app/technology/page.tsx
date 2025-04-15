import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { GlobalTechTrends } from "@/components/technology/global-tech-trends"
import { IndiaDigitalInitiatives } from "@/components/technology/india-digital-initiatives"
import { TechnologyAdoption } from "@/components/technology/technology-adoption"
import { DigitalTransformationRoadmap } from "@/components/technology/digital-transformation-roadmap"

export default function TechnologyPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Technological Integration & Digital Transformation"
        text="Global trends and India's digital initiatives in freight forwarding"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlobalTechTrends />
        <IndiaDigitalInitiatives />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <TechnologyAdoption />
        <DigitalTransformationRoadmap />
      </div>
    </DashboardShell>
  )
}

