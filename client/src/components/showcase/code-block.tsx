import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = "jsx", filename }: CodeBlockProps) {
  const [copied, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy(code);
  };

  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
        <span className="text-sm font-medium text-slate-300">
          {filename || `Component.${language}`}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-slate-400 hover:text-slate-300 h-auto p-1"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className={`language-${language} text-slate-300`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
