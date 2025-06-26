import { Layers, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function IntroductionSection() {
  const features = [
    {
      icon: Layers,
      title: "Consistent",
      description: "Built on a foundation of design tokens and patterns for visual consistency across your entire product.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Accessible",
      description: "Every component is built with accessibility in mind, following WCAG guidelines and best practices.",
      color: "green"
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Optimized for performance with minimal bundle size and efficient rendering patterns.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600", 
      purple: "bg-purple-100 text-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="introduction" className="mb-12">
      <div className="prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Introduction</h2>
        <p className="text-lg text-slate-600 mb-6">
          Our design system provides a comprehensive set of components, patterns, and guidelines 
          to help you build consistent, accessible, and beautiful user interfaces.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
