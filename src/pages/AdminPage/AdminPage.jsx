import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RightContent from "./RightContent";
import Chart from "../../components/Chart/Chart";
import Check from "../../components/CheckBox/Check";
import { treeData } from "../../data/data";

const AdminPage = () => {
  const [rightPanelData, setRightPanelData] = useState("");
  const [chartData, setChartData] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNodeClick = (node) => {
    if (!node.isFile) {
      if (node.module === "Administrator") {
        setIsAdmin(true);
        return;
      } else {
        return;
      }
    }

    setRightPanelData((prev) => ({ ...prev, ...node }));
    if (isAdmin) {
      setIsAdmin(false);
    }

    // if(!node.isFile && node.module==='Administrator'){
    //   console.log(node);
    //   setChartData((prev) => ({...node}))
    // }
  };

  return (
    <div className="flex gap-5">
      <div>
        <Sidebar handleClick={handleNodeClick} treeData={treeData} />
      </div>
      <div className={isAdmin ? "hidden" : ""}>
        <RightContent content={rightPanelData} />
      </div>
      <div className={!isAdmin ? "hidden" : "grid grid-rows-4 grid-flow-col gap-4 mb-4"}>
        <Chart content={chartData} />
        <Check className="mt-4"/>
      </div>
    </div>
  );
};

export default AdminPage;
