import { Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ComponentShowcase from "@/components/showcase/component-showcase";

export default function CardsSection() {
  const cardCode = `const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);`;

  return (
    <section id="cards" className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Card</h2>
        <p className="text-lg text-slate-600 mb-6">
          Cards are flexible containers for grouping related content and actions.
        </p>
      </div>

      <ComponentShowcase code={cardCode} className="p-8 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Basic Card
              </h3>
              <p className="text-slate-600 mb-4">
                This is a simple card with just text content. Perfect for displaying basic information.
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                Learn more →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Card with Image
              </h3>
              <p className="text-slate-600 mb-4">
                Cards can include images to make content more visually appealing and engaging.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">March 15, 2024</span>
                <Button size="sm">View</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 ml-3">
                  Interactive Card
                </h3>
              </div>
              <p className="text-slate-600 mb-4">
                This card has hover effects and can be clicked for interaction.
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </ComponentShowcase>
    </section>
  );
}
