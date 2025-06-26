import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ComponentShowcase from "@/components/showcase/component-showcase";

export default function InputsSection() {
  const inputCode = `const Input = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};`;

  return (
    <section id="inputs" className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Input</h2>
        <p className="text-lg text-slate-600 mb-6">
          Input fields allow users to enter and edit text information.
        </p>
      </div>

      <ComponentShowcase code={inputCode}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-2">
                Default Input
              </Label>
              <Input type="text" placeholder="Enter your name" />
            </div>
            
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-2">
                With Icon
              </Label>
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="pl-10"
                />
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-2">
                Success State  
              </Label>
              <Input 
                type="text" 
                value="Valid input" 
                className="border-green-300 focus-visible:ring-green-500"
                readOnly
              />
              <p className="mt-1 text-sm text-green-600">This input is valid!</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-2">
                Large Input
              </Label>
              <Input 
                type="text" 
                placeholder="Large size input" 
                className="h-12 text-base px-4"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-2">
                Error State
              </Label>
              <Input 
                type="text" 
                value="Invalid input" 
                className="border-red-300 focus-visible:ring-red-500"
                readOnly
              />
              <p className="mt-1 text-sm text-red-600">This field is required.</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-2">
                Disabled Input
              </Label>
              <Input 
                type="text" 
                placeholder="Disabled input" 
                disabled
              />
            </div>
          </div>
        </div>
      </ComponentShowcase>
    </section>
  );
}
