"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useUploadedData } from "@/context/uploadedDataContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function AIInsightsGenerator() {
  const { file, setFile } = useUploadedData();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [insightType, setInsightType] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedInsight, setGeneratedInsight] = useState<string>(""); // Response from the AI
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!insightType) {
      toast({
        title: "Insight type not selected",
        description: "Please select the type of insight you want to generate",
        variant: "destructive",
      });
      return;
    }

    if (!file) {
      toast({
        title: "CSV file missing",
        description: "Please upload a CSV file to generate insights",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/analyze-freight/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Something went wrong");
      }

      const data = await res.json();
      setGeneratedInsight(data.report);

      toast({
        title: "Insights generated",
        description: "AI has analyzed your data and generated insights",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
    setIsDialogOpen(true);
  };

  const renderInsights = () => {
    if (!generatedInsight) return null;

    // Split the response into sections based on double newlines
    const sections = generatedInsight.split("\n\n");

    return (
      <div className="space-y-6">
        {sections.map((section, index) => {
          const isHeading = section.startsWith("##");
          const isSubHeading = section.startsWith("**");
          const isList = section.startsWith("* ");

          if (isHeading) {
            const headingText = section.replace(/^##\s*/, "").trim();
            return (
              <h2 key={index} className="text-xl font-bold">
                {headingText}
              </h2>
            );
          } else if (isSubHeading) {
            const subHeadingText = section.replace(/\*\*/g, "").trim();
            return (
              <h3 key={index} className="text-lg font-semibold">
                {subHeadingText}
              </h3>
            );
          } else if (isList) {
            const listItems = section.split("\n").map((item, idx) => {
              const formattedItem = item
                .replace("* ", "")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
                .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic
              return (
                <li
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: formattedItem }}
                ></li>
              );
            });
            return (
              <ul key={index} className="list-disc pl-5">
                {listItems}
              </ul>
            );
          } else {
            return (
              <p key={index} className="text-muted-foreground">
                {section.trim()}
              </p>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>AI Insights Generator</CardTitle>
          <CardDescription>
            Upload your freight data CSV and generate AI-powered insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="insight-type">Insight Type</Label>
            <Select value={insightType} onValueChange={setInsightType}>
              <SelectTrigger id="insight-type">
                <SelectValue placeholder="Select insight type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="market">Market Analysis</SelectItem>
                <SelectItem value="cost">Cost Optimization</SelectItem>
                <SelectItem value="efficiency">
                  Supply Chain Efficiency
                </SelectItem>
                <SelectItem value="custom">Custom Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {insightType === "custom" && (
            <div className="space-y-2">
              <Label htmlFor="custom-prompt">Custom Prompt</Label>
              <Textarea
                id="custom-prompt"
                placeholder="Describe what insights you're looking for..."
                className="min-h-[100px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="csv-file">Upload CSV</Label>
            <Input
              type="file"
              id="csv-file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={handleGenerate}
            disabled={
              isGenerating ||
              !insightType ||
              (insightType === "custom" && !prompt)
            }
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Insights
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[786px] overflow-hidden h-full my-2">
          <DialogHeader>
            <DialogTitle>Generated Insights</DialogTitle>
            <DialogDescription>
              AI has analyzed your data and generated the following insights:
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 rounded-md bg-muted/50 whitespace-pre-line overflow-y-scroll h-full">
            {renderInsights()}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
