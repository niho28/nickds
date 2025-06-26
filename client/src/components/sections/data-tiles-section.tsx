import { DataTile } from "@/components/ui/data-tile";
import ComponentShowcase from "@/components/showcase/component-showcase";

export default function DataTilesSection() {
  const dataTileCode = `import { DataTile } from "@/components/ui/data-tile";

// Single column layout
<DataTile
  title="Header Title"
  layout="single"
  pillLabel="PILL LABEL"
  subtitle="Data tile subtitle"
  primaryValue="#0"
/>

// Double column layout
<DataTile
  title="Header Title"
  layout="double"
  columns={[
    { pillLabel: "PILL LABEL", subtitle: "Data tile subtitle", primaryValue: "#0" },
    { pillLabel: "PILL LABEL", subtitle: "Data Subtitle 2", primaryValue: "#0" }
  ]}
  actionLabel="Actionable Link"
/>

// List layout with metrics
<DataTile
  title="Header Title"
  layout="list"
  metrics={[
    { label: "Metric Label", value: "Item 1" },
    { label: "Metric Label", value: 20 }
  ]}
  actionLabel="Actionable Link"
/>`;

  const sampleMetrics = [
    { label: "Metric Label", value: "Item 1" },
    { label: "Metric Label", value: 20 },
    { label: "Metric Label", value: "Item 1" }
  ];

  return (
    <section id="data-tiles" className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Tile</h2>
        <p className="text-lg text-slate-600 mb-6">
          Flexible containers for displaying metrics, data points, and actionable insights in different layouts.
        </p>
      </div>

      <ComponentShowcase code={dataTileCode} className="p-8 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Column - Basic */}
          <DataTile
            title="Header Title"
            layout="single"
            pillLabel="PILL LABEL"
            subtitle="Data tile subtitle"
            primaryValue="#0"
            showFooter={false}
          />
          
          {/* Single Column - With Action */}
          <DataTile
            title="Header Title"
            layout="single"
            pillLabel="PILL LABEL"
            subtitle="Data tile subtitle"
            primaryValue="#0"
            actionLabel="Actionable Link"
            onActionClick={() => console.log("Action clicked")}
          />
          
          {/* Double Column - With Action */}
          <DataTile
            title="Header Title"
            layout="double"
            columns={[
              { pillLabel: "PILL LABEL", subtitle: "Data tile subtitle", primaryValue: "#0" },
              { pillLabel: "PILL LABEL", subtitle: "Data Subtitle 2", primaryValue: "#0" }
            ]}
            actionLabel="Actionable Link"
            onActionClick={() => console.log("Action clicked")}
          />
          
          {/* Double Column - No Action */}
          <DataTile
            title="Header Title"
            layout="double"
            columns={[
              { pillLabel: "PILL LABEL", subtitle: "Data tile subtitle", primaryValue: "#0" },
              { pillLabel: "PILL LABEL", subtitle: "Data Subtitle 2", primaryValue: "#0" }
            ]}
            showFooter={false}
          />
          
          {/* List Style - With Action */}
          <DataTile
            title="Header Title"
            layout="list"
            metrics={sampleMetrics}
            actionLabel="Actionable Link"
            onActionClick={() => console.log("List action clicked")}
          />
          
          {/* List Style - No Action */}
          <DataTile
            title="Header Title"
            layout="list"
            metrics={sampleMetrics}
            showFooter={false}
          />
        </div>
      </ComponentShowcase>
    </section>
  );
}