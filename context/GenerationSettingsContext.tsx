"use client"
import React, { createContext, ReactNode, useContext, useState } from "react";

interface GenerationSettings {
   model: "GROQ" | "GEMINI";
   temperature: number;
   maxTokens: number;
}

interface GenerationSettingsContextType {
   settings: GenerationSettings;
   setSettings: React.Dispatch<React.SetStateAction<GenerationSettings>>;
}

const GenerationSettingsContext = createContext<GenerationSettingsContextType | undefined>(undefined);

export const GenerationSettingsProvider = ({ children }: { children: ReactNode }) => {
   const [settings, setSettings] = useState<GenerationSettings>({
      model: "GEMINI",
      temperature: 0.7,
      maxTokens: 2000,
   });

   return (
      <GenerationSettingsContext.Provider value={{ settings, setSettings }}>
         {children}
      </GenerationSettingsContext.Provider>
   );
};

export const useGenerationSettings = (): GenerationSettingsContextType => {
   const context = useContext(GenerationSettingsContext);
   if (!context) {
      throw new Error("useGenerationSettings must be used within a GenerationSettingsProvider");
   }
   return context;
};
