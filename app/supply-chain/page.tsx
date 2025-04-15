import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SupplyChainKPIs } from "@/components/supply-chain/supply-chain-kpis"
import { TransitTimeAnalysis } from "@/components/supply-chain/transit-time-analysis"
import { FreightUtilization } from "@/components/supply-chain/freight-utilization"
import { CustomsClearanceTime } from "@/components/supply-chain/customs-clearance-time"
import { BottlenecksAnalysis } from "@/components/supply-chain/bottlenecks-analysis"

export default function SupplyChainPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Supply Chain Efficiency"
        text="Key performance indicators and bottlenecks in freight forwarding"
      />
      <SupplyChainKPIs />
      <div className="grid gap-4 md:grid-cols-2">
        <TransitTimeAnalysis />
        <FreightUtilization />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <CustomsClearanceTime />
        <BottlenecksAnalysis />
      </div>
    </DashboardShell>
  )
}

