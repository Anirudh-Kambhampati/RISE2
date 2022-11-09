import React from "react";
import ResearcherSidebarItems from "./ResearcherSidebarItems";
import items from "../../data/Sidebar.json";

const ResearcherSidebar = () => {
  return (
    <div>
      {items.map((item, index) => (
        <ResearcherSidebarItems key={index} item={item} />
      ))}
    </div>
  );
};

export default ResearcherSidebar;
