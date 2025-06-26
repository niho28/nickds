import { useState, useCallback } from "react";

export function useCopyToClipboard(): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    if (!navigator.clipboard) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      } finally {
        document.body.removeChild(textArea);
      }
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  }, []);

  return [copied, copy];
}
