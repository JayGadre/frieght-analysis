import { UploadedDataProvider } from "@/context/uploadedDataContext"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UploadDataForm } from "@/components/upload/upload-data-form"
import { DataPreview } from "@/components/upload/data-preview"
import { AIInsightsGenerator } from "@/components/upload/ai-insights-generator"

export default function UploadPage() {
  return (
    <UploadedDataProvider>
      <DashboardShell>
        <DashboardHeader
          heading="Upload & Analyze Data"
          text="Upload your freight forwarding data for analysis and insights"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <UploadDataForm />
          <AIInsightsGenerator />
        </div>
        <DataPreview />
      </DashboardShell>
    </UploadedDataProvider>
  )
}

