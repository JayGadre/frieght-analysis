"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useUploadedData } from "@/context/uploadedDataContext";
import * as XLSX from "xlsx";

export function DataPreview() {
  const { file } = useUploadedData();
  const [tableData, setTableData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (jsonData.length > 0) {
          setHeaders(jsonData[0] as string[]);
          setTableData(jsonData.slice(1));
        }
      };

      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Data Preview</CardTitle>
        <CardDescription>
          Preview of your uploaded freight forwarding data
        </CardDescription>
      </CardHeader>
      <CardContent>
        {tableData.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((header, index) => (
                  <TableHead key={index}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell: any, cellIndex: number) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-muted-foreground">
            No data to preview. Please upload a valid file.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
