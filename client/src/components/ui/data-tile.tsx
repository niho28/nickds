import { MoreHorizontal, ChevronRight, ExternalLink } from "lucide-react";
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
  variant?: "default" | "compact";
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
  className,
  variant = "default"
}: DataTileProps) {
  const isCompact = variant === "compact";
  
  return (
    <Card className={cn(
      "relative border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200", 
      className
    )}>
      <CardHeader className={cn(
        "flex flex-row items-start justify-between space-y-0",
        isCompact ? "pb-3" : "pb-4"
      )}>
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-semibold text-slate-900 truncate",
            isCompact ? "text-sm" : "text-base"
          )}>
            {title}
          </h3>
          {subtitle && style !== "summary" && (
            <p className="text-xs text-slate-500 mt-1 truncate">{subtitle}</p>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-6 w-6 p-0 text-slate-400 hover:text-slate-600 flex-shrink-0 ml-2"
        >
          <MoreHorizontal className="h-3 w-3" />
        </Button>
      </CardHeader>
      
      <CardContent className={cn("pt-0", isCompact ? "pb-4" : "pb-6")}>
        {style === "list" && (
          <div className={cn("space-y-3", isCompact && "space-y-2")}>
            {metrics.length > 0 && (
              <div className={cn("space-y-3", isCompact && "space-y-2")}>
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <span className={cn(
                      "text-slate-600 truncate pr-4", 
                      isCompact ? "text-xs" : "text-sm"
                    )}>
                      {metric.label}
                    </span>
                    <span className={cn(
                      "font-semibold text-slate-900 flex-shrink-0",
                      isCompact ? "text-xs" : "text-sm"
                    )}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {style === "summary" && (
          <div className={cn("space-y-4", isCompact && "space-y-3")}>
            {pillLabel && (
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs font-medium bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
                  isCompact && "text-[10px] px-2 py-0.5"
                )}
              >
                {pillLabel}
              </Badge>
            )}
            
            {subtitle && (
              <p className={cn(
                "text-slate-600 leading-relaxed",
                isCompact ? "text-xs" : "text-sm"
              )}>
                {subtitle}
              </p>
            )}
            
            {primaryValue !== undefined && (
              <div className={cn(
                "font-bold text-slate-900",
                isCompact ? "text-xl" : "text-2xl"
              )}>
                {primaryValue}
              </div>
            )}
          </div>
        )}

        {actionLabel && (
          <div className={cn(
            "mt-5 pt-4 border-t border-slate-100",
            isCompact && "mt-4 pt-3"
          )}>
            <Button 
              variant="ghost" 
              size="sm"
              className={cn(
                "h-auto p-0 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-transparent group",
                isCompact && "text-xs"
              )}
              onClick={onActionClick}
            >
              <span className="flex items-center">
                {actionLabel}
                <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}