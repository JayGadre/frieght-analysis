import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { GlobalCostFactors } from "@/components/cost-analysis/global-cost-factors"
import { IndiaCostFactors } from "@/components/cost-analysis/india-cost-factors"
import { FuelPriceImpact } from "@/components/cost-analysis/fuel-price-impact"
import { LogisticsCostComparison } from "@/components/cost-analysis/logistics-cost-comparison"

export default function CostAnalysisPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Cost & Pricing Analysis"
        text="Global and India-specific cost factors affecting freight forwarding"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlobalCostFactors />
        <IndiaCostFactors />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FuelPriceImpact />
        <LogisticsCostComparison />
      </div>
    </DashboardShell>
  )
}

