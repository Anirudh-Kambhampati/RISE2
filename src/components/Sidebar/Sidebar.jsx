import React from "react";



import FolderTree from "../FolderTree/FolderTree";

const Sidebar = ({ handleClick, treeData, isAdmin=false }) => {
  return (
    <div className="sidebar sticky top-0">
      <div style={{ paddingBottom: "40px" }}>
        <div className="folderTree">
          <FolderTree treeData={treeData} handleClick={handleClick} isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
