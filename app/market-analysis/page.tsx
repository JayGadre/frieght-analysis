import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { MarketAnalysisGlobal } from "@/components/market-analysis/market-analysis-global"
import { MarketAnalysisIndia } from "@/components/market-analysis/market-analysis-india"
import { MarketShareChart } from "@/components/market-analysis/market-share-chart"
import { TradeRouteMap } from "@/components/market-analysis/trade-route-map"
import { TradeAgreements } from "@/components/market-analysis/trade-agreements"

export default function MarketAnalysisPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Market Analysis" text="Global and India-specific freight forwarding market trends" />
      <div className="grid gap-4 md:grid-cols-2">
        <MarketAnalysisGlobal />
        <MarketAnalysisIndia />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <MarketShareChart />
        <TradeRouteMap />
      </div>
      <TradeAgreements />
    </DashboardShell>
  )
}

