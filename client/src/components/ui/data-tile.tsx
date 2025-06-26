import { MoreHorizontal, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DataTileMetric {
  label: string;
  value: string | number;
}

export interface DataTileColumn {
  pillLabel?: string;
  subtitle: string;
  primaryValue: string | number;
}

export interface DataTileProps {
  title: string;
  layout?: "single" | "double" | "list";
  // Single column props
  subtitle?: string;
  primaryValue?: string | number;
  pillLabel?: string;
  // Double column props
  columns?: DataTileColumn[];
  // List props
  metrics?: DataTileMetric[];
  // Footer action
  actionLabel?: string;
  onActionClick?: () => void;
  showFooter?: boolean;
  className?: string;
}

export function DataTile({
  title,
  layout = "single",
  subtitle,
  primaryValue,
  pillLabel,
  columns = [],
  metrics = [],
  actionLabel,
  onActionClick,
  showFooter = true,
  className
}: DataTileProps) {
  return (
    <Card className={cn(
      "relative border border-slate-200 bg-white shadow-sm", 
      className
    )}>
      {/* Header */}
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-6">
        <h3 className="text-base font-semibold text-slate-900">
          {title}
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-6 w-6 p-0 text-slate-400 hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="pt-0 pb-6">
        {/* Single Column Layout */}
        {layout === "single" && (
          <div className="space-y-4">
            {pillLabel && (
              <Badge 
                variant="outline" 
                className="text-xs font-medium text-pink-600 border-pink-300 bg-transparent rounded-sm px-2 py-1"
              >
                {pillLabel}
              </Badge>
            )}
            
            {subtitle && (
              <div className="text-sm text-slate-700 font-medium">
                {subtitle}
              </div>
            )}
            
            {primaryValue !== undefined && (
              <div className="text-2xl font-bold text-slate-900">
                {primaryValue}
              </div>
            )}
          </div>
        )}

        {/* Double Column Layout */}
        {layout === "double" && columns.length > 0 && (
          <div className="grid grid-cols-2 gap-8">
            {columns.map((column, index) => (
              <div key={index} className="space-y-4">
                {column.pillLabel && (
                  <Badge 
                    variant="outline" 
                    className="text-xs font-medium text-pink-600 border-pink-300 bg-transparent rounded-sm px-2 py-1"
                  >
                    {column.pillLabel}
                  </Badge>
                )}
                
                <div className="text-sm text-slate-700 font-medium">
                  {column.subtitle}
                </div>
                
                <div className="text-2xl font-bold text-slate-900">
                  {column.primaryValue}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List Layout */}
        {layout === "list" && metrics.length > 0 && (
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="text-sm text-slate-700 font-medium">
                  {metric.label}
                </div>
                <div className="text-sm text-slate-700 font-medium text-right">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Action */}
        {showFooter && actionLabel && (
          <div className="mt-6 pt-4 border-t border-slate-100">
            <Button 
              variant="ghost" 
              className="h-auto p-0 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-transparent"
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