export default function DesignTokensSection() {
  const colors = [
    { name: "50", value: "#f8fafc", bg: "bg-slate-50" },
    { name: "100", value: "#f1f5f9", bg: "bg-slate-100" },
    { name: "200", value: "#e2e8f0", bg: "bg-slate-200" },
    { name: "300", value: "#cbd5e1", bg: "bg-slate-300" },
    { name: "400", value: "#94a3b8", bg: "bg-slate-400" },
    { name: "500", value: "#64748b", bg: "bg-slate-500" },
    { name: "600", value: "#475569", bg: "bg-slate-600" },
    { name: "700", value: "#334155", bg: "bg-slate-700" },
    { name: "800", value: "#1e293b", bg: "bg-slate-800" },
    { name: "900", value: "#0f172a", bg: "bg-slate-900" },
  ];

  const accentColors = [
    { name: "Blue", value: "#3b82f6", bg: "bg-blue-500" },
    { name: "Green", value: "#10b981", bg: "bg-green-500" },
    { name: "Red", value: "#ef4444", bg: "bg-red-500" },
    { name: "Amber", value: "#f59e0b", bg: "bg-amber-500" },
  ];

  const typography = [
    { name: "Heading 1", class: "text-4xl font-bold", size: "2.25rem", weight: "700" },
    { name: "Heading 2", class: "text-3xl font-bold", size: "1.875rem", weight: "700" },
    { name: "Heading 3", class: "text-xl font-semibold", size: "1.25rem", weight: "600" },
    { name: "Body text regular", class: "text-base", size: "1rem", weight: "400" },
    { name: "Small text", class: "text-sm", size: "0.875rem", weight: "400" },
    { name: "Caption text", class: "text-xs", size: "0.75rem", weight: "400" },
  ];

  const spacing = [
    { name: "xs (4px)", width: "w-1", value: "0.25rem" },
    { name: "sm (8px)", width: "w-2", value: "0.5rem" },
    { name: "md (16px)", width: "w-4", value: "1rem" },
    { name: "lg (24px)", width: "w-6", value: "1.5rem" },
    { name: "xl (32px)", width: "w-8", value: "2rem" },
  ];

  return (
    <section id="design-tokens" className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Design Tokens</h2>
        <p className="text-lg text-slate-600 mb-6">
          Design tokens define the visual properties of our design system, ensuring consistency across all components.
        </p>
      </div>

      {/* Color Palette */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Colors</h3>
        
        <div className="space-y-8">
          {/* Primary Colors */}
          <div>
            <h4 className="text-lg font-medium text-slate-900 mb-4">Primary</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
              {colors.map((color) => (
                <div key={color.name} className="text-center">
                  <div className={`w-full h-16 ${color.bg} rounded-lg border border-slate-200 mb-2`}></div>
                  <div className={`text-xs ${parseInt(color.name) >= 400 ? 'text-white' : 'text-slate-600'}`}>
                    {color.name}
                  </div>
                  <div className="text-xs font-mono text-slate-500">{color.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <h4 className="text-lg font-medium text-slate-900 mb-4">Accent</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {accentColors.map((color) => (
                <div key={color.name} className="text-center">
                  <div className={`w-full h-16 ${color.bg} rounded-lg mb-2`}></div>
                  <div className="text-sm font-medium text-slate-900">{color.name}</div>
                  <div className="text-xs font-mono text-slate-500">{color.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Typography</h3>
        
        <div className="space-y-6">
          {typography.map((type, index) => (
            <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
              <div className={`${type.class} text-slate-900 mb-2`}>
                {type.name}
              </div>
              <div className="text-sm text-slate-500 font-mono">
                font-size: {type.size}; font-weight: {type.weight};
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing */}
      <div className="bg-white rounded-lg border border-slate-200 p-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Spacing</h3>
        
        <div className="space-y-4">
          {spacing.map((space, index) => (
            <div key={index} className="flex items-center">
              <div className="w-16 text-sm text-slate-600">{space.name}</div>
              <div className={`${space.width} h-8 bg-blue-500 mr-4`}></div>
              <div className="text-sm font-mono text-slate-500">{space.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
