import { MoreHorizontal, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DataTileMetric {
  label: string;
  value: string | number;
}

export interface DataTileProps {
  title: string;
  style?: "list" | "summary";
  subtitle?: string;
  primaryValue?: string | number;
  pillLabel?: string;
  metrics?: DataTileMetric[];
  actionLabel?: string;
  onActionClick?: () => void;
  className?: string;
}

export function DataTile({
  title,
  style = "list",
  subtitle,
  primaryValue,
  pillLabel,
  metrics = [],
  actionLabel = "Actionable Link",
  onActionClick,
  className
}: DataTileProps) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <Button variant="ghost" size="sm" className="h-auto p-1 text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="pt-0">
        {style === "list" && (
          <div className="space-y-4">
            {metrics.length > 0 && (
              <div className="space-y-3">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{metric.label}</span>
                    <span className="font-medium text-slate-900">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {style === "summary" && (
          <div className="space-y-4">
            {pillLabel && (
              <Badge variant="outline" className="text-xs font-medium text-pink-600 border-pink-200 bg-transparent">
                {pillLabel}
              </Badge>
            )}
            
            {subtitle && (
              <p className="text-sm text-slate-600">{subtitle}</p>
            )}
            
            {primaryValue && (
              <div className="text-3xl font-bold text-slate-900">
                {typeof primaryValue === 'number' ? `#${primaryValue}` : primaryValue}
              </div>
            )}
          </div>
        )}

        {actionLabel && (
          <div className="mt-6 pt-4 border-t border-slate-100">
            <Button 
              variant="ghost" 
              className="h-auto p-0 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-transparent"
              onClick={onActionClick}
            >
              <ChevronRight className="mr-1 h-3 w-3" />
              {actionLabel}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}