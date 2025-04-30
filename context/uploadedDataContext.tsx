"use client";

import React, { createContext, useContext, useState } from "react";

interface UploadedDataContextType {
  file: File | null;
  setFile: (file: File | null) => void;
}

const UploadedDataContext = createContext<UploadedDataContextType | undefined>(
  undefined
);

export const UploadedDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <UploadedDataContext.Provider value={{ file, setFile }}>
      {children}
    </UploadedDataContext.Provider>
  );
};

export const useUploadedData = () => {
  const context = useContext(UploadedDataContext);
  if (!context) {
    throw new Error(
      "useUploadedData must be used within an UploadedDataProvider"
    );
  }
  return context;
};
