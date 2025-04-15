import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { OverviewMetrics } from "@/components/dashboard/overview-metrics"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { GlobalTrendsChart } from "@/components/dashboard/global-trends-chart"
import { IndiaFreightMovement } from "@/components/dashboard/india-freight-movement"
import { UploadDataCard } from "@/components/dashboard/upload-data-card"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Freight Forwarding Analytics Dashboard"
        text="Comprehensive analysis and visualization of freight forwarding data"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <OverviewMetrics />
        <UploadDataCard />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <GlobalTrendsChart />
        <IndiaFreightMovement />
      </div>
      <RecentActivity />
    </DashboardShell>
  )
}

