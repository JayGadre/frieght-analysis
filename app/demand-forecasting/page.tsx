import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { GlobalDemandForecast } from "@/components/demand-forecasting/global-demand-forecast"
import { IndiaTradeFlows } from "@/components/demand-forecasting/india-trade-flows"
import { EconomicIndicators } from "@/components/demand-forecasting/economic-indicators"
import { EcommerceGrowth } from "@/components/demand-forecasting/ecommerce-growth"

export default function DemandForecastingPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Demand Forecasting & Trade Flow Analysis"
        text="Global and India-specific demand forecasting and trade flow analysis"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlobalDemandForecast />
        <IndiaTradeFlows />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <EconomicIndicators />
        <EcommerceGrowth />
      </div>
    </DashboardShell>
  )
}

