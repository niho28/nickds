import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: Array<{ id: string; title: string; component: any }>;
}

export default function Sidebar({ 
  searchQuery, 
  setSearchQuery, 
  activeSection, 
  setActiveSection,
  sections 
}: SidebarProps) {
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 fixed h-full overflow-y-auto">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DS</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Design System</h1>
            <p className="text-xs text-slate-500">v1.0.0</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-b border-slate-200">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-slate-400" />
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Getting Started
            </h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleSectionClick('introduction')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-md font-medium ${
                    activeSection === 'introduction'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Introduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('design-tokens')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-md ${
                    activeSection === 'design-tokens'
                      ? 'text-blue-600 bg-blue-50 font-medium'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Design Tokens
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Components
            </h3>
            <ul className="space-y-1">
              {['buttons', 'inputs', 'cards', 'data-tiles'].map((component) => (
                <li key={component}>
                  <button
                    onClick={() => handleSectionClick(component)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md ${
                      activeSection === component
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {component === 'data-tiles' ? 'Data Tile' : component.charAt(0).toUpperCase() + component.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
