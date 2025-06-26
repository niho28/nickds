import { DataTile } from "@/components/ui/data-tile";
import ComponentShowcase from "@/components/showcase/component-showcase";

export default function DataTilesSection() {
  const dataTileCode = `import { DataTile } from "@/components/ui/data-tile";

// List style with metrics
<DataTile
  title="Header Title"
  style="list"
  metrics={[
    { label: "Metric Label", value: "Item 1" },
    { label: "Metric Label", value: 20 },
    { label: "Metric Label", value: "Item 1" }
  ]}
  actionLabel="Actionable Link"
/>

// Summary style with pill label and primary value
<DataTile
  title="Header Title"
  style="summary"
  pillLabel="PILL LABEL"
  subtitle="Data tile subtitle"
  primaryValue={0}
  actionLabel="Actionable Link"
/>`;

  const sampleMetrics = [
    { label: "Metric Label", value: "Item 1" },
    { label: "Metric Label", value: 20 },
    { label: "Metric Label", value: "Item 1" },
    { label: "Metric Label", value: 20 },
    { label: "Metric Label", value: "Item 1" },
    { label: "Metric Label", value: 20 }
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
          {/* List Style Data Tile */}
          <DataTile
            title="Header Title"
            style="list"
            metrics={sampleMetrics.slice(0, 3)}
            actionLabel="Actionable Link"
            onActionClick={() => console.log("Action clicked")}
          />
          
          {/* Summary Style Data Tile */}
          <DataTile
            title="Header Title"
            style="summary"
            pillLabel="PILL LABEL"
            subtitle="Data tile subtitle"
            primaryValue={0}
            actionLabel="Actionable Link"
            onActionClick={() => console.log("Action clicked")}
          />
          
          {/* List Style with More Metrics */}
          <DataTile
            title="Analytics Overview"
            style="list"
            metrics={sampleMetrics}
            actionLabel="View Details"
            onActionClick={() => console.log("View details clicked")}
          />
          
          {/* Summary Style with Different Data */}
          <DataTile
            title="Performance Metrics"
            style="summary"
            pillLabel="ACTIVE"
            subtitle="Current status overview"
            primaryValue={42}
            actionLabel="View Report"
            onActionClick={() => console.log("View report clicked")}
          />
          
          {/* List Style with Mixed Data Types */}
          <DataTile
            title="System Status"
            style="list"
            metrics={[
              { label: "Active Users", value: "1,234" },
              { label: "Success Rate", value: "99.9%" },
              { label: "Response Time", value: "120ms" },
              { label: "Uptime", value: "99.99%" }
            ]}
            actionLabel="System Dashboard"
            onActionClick={() => console.log("Dashboard clicked")}
          />
          
          {/* Summary Style with Text Value */}
          <DataTile
            title="Latest Update"
            style="summary"
            pillLabel="NEW"
            subtitle="Feature release notes"
            primaryValue="v2.1.0"
            actionLabel="View Changes"
            onActionClick={() => console.log("Changes clicked")}
          />
        </div>
      </ComponentShowcase>
    </section>
  );
}