import { useState } from "react";
import { Button } from "@/components/ui/button";
import CodeBlock from "./code-block";

interface ComponentShowcaseProps {
  title?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
}

export default function ComponentShowcase({ 
  title, 
  children, 
  code, 
  className = "p-8" 
}: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-8">
      <div className="border-b border-slate-200">
        <div className="flex">
          <Button 
            variant="ghost"
            className={`px-4 py-2 text-sm font-medium rounded-none border-b-2 ${
              activeTab === "preview" 
                ? "text-blue-600 border-blue-600" 
                : "text-slate-500 border-transparent hover:text-slate-700"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </Button>
          {code && (
            <Button 
              variant="ghost"
              className={`px-4 py-2 text-sm font-medium rounded-none border-b-2 ${
                activeTab === "code" 
                  ? "text-blue-600 border-blue-600" 
                  : "text-slate-500 border-transparent hover:text-slate-700"
              }`}
              onClick={() => setActiveTab("code")}
            >
              Code
            </Button>
          )}
        </div>
      </div>
      
      <div className={className}>
        {activeTab === "preview" ? (
          children
        ) : (
          code && <CodeBlock code={code} language="jsx" />
        )}
      </div>
    </div>
  );
}
