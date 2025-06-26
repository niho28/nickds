import { Download, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Component Library</h1>
          <p className="text-slate-600 mt-1">
            Build consistent, accessible interfaces with our design system
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button className="flex items-center">
            <Code className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </div>
      </div>
    </header>
  );
}
