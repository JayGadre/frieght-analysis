"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileSpreadsheet, X } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function UploadDataForm() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [dataType, setDataType] = useState<string>("")
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (
        droppedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        droppedFile.type === "application/vnd.ms-excel"
      ) {
        setFile(droppedFile)
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an Excel file (.xlsx or .xls)",
          variant: "destructive",
        })
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      })
      return
    }

    if (!dataType) {
      toast({
        title: "Data type not selected",
        description: "Please select the type of data you are uploading",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded and processed.`,
      })
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Data</CardTitle>
        <CardDescription>Upload your Excel files for analysis and visualization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center h-[140px] transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {file ? (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-8 w-8 text-primary" />
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => setFile(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground text-center">
                Drag & drop an Excel file here, or click to browse
              </p>
            </>
          )}
          <input type="file" className="hidden" id="file-upload" accept=".xlsx,.xls" onChange={handleFileChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="data-type">Data Type</Label>
          <Select value={dataType} onValueChange={setDataType}>
            <SelectTrigger id="data-type">
              <SelectValue placeholder="Select data type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shipment">Shipment Data</SelectItem>
              <SelectItem value="cost">Cost & Pricing Data</SelectItem>
              <SelectItem value="transit">Transit Time Data</SelectItem>
              <SelectItem value="customs">Customs Clearance Data</SelectItem>
              <SelectItem value="utilization">Capacity Utilization Data</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="data-period">Data Period</Label>
          <div className="flex space-x-2">
            <Input type="date" id="start-date" className="flex-1" />
            <Input type="date" id="end-date" className="flex-1" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setFile(null)
            setDataType("")
          }}
        >
          Clear
        </Button>
        <div className="flex space-x-2">
          <Button onClick={() => document.getElementById("file-upload")?.click()} variant="outline">
            Browse Files
          </Button>
          <Button onClick={handleUpload} disabled={!file || !dataType || isUploading}>
            {isUploading ? "Uploading..." : "Upload & Process"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

