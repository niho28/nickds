import { Button } from "@/components/ui/button";
import ComponentShowcase from "@/components/showcase/component-showcase";

export default function ButtonsSection() {
  const buttonCode = `const Button = ({ variant = "primary", size = "md", children, ...props }) => {
  const baseClasses = "inline-flex items-center border rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  
  const variants = {
    primary: "bg-blue-600 border-transparent text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-blue-500",
    outline: "border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500",
    ghost: "border-transparent text-slate-700 hover:bg-slate-100 focus:ring-blue-500"
  };
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
};`;

  return (
    <section id="buttons" className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Button</h2>
        <p className="text-lg text-slate-600 mb-6">
          Buttons are used to trigger actions and navigate through the interface.
        </p>
      </div>

      <ComponentShowcase code={buttonCode}>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200">
          <h4 className="text-sm font-medium text-slate-900 mb-4">Button Sizes</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </ComponentShowcase>
    </section>
  );
}
