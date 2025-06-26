import { useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import IntroductionSection from "@/components/sections/introduction-section";
import ButtonsSection from "@/components/sections/buttons-section";
import InputsSection from "@/components/sections/inputs-section";
import CardsSection from "@/components/sections/cards-section";
import DataTilesSection from "@/components/sections/data-tiles-section";
import DesignTokensSection from "@/components/sections/design-tokens-section";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", component: IntroductionSection },
    { id: "design-tokens", title: "Design Tokens", component: DesignTokensSection },
    { id: "buttons", title: "Button", component: ButtonsSection },
    { id: "inputs", title: "Input", component: InputsSection },
    { id: "cards", title: "Card", component: CardsSection },
    { id: "data-tiles", title: "Data Tile", component: DataTilesSection },
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
      />
      
      <main className="flex-1 ml-64">
        <Header />
        
        <div className="px-8 py-8">
          {filteredSections.map(({ id, component: Component }) => (
            <div key={id} id={id}>
              <Component />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
