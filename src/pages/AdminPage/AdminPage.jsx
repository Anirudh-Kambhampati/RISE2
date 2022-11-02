import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RightContent from "./RightContent";
import Chart from "../../components/Chart/Chart";
import Check from "../../components/CheckBox/Check";
import { treeData } from "../../data/data";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const AdminPage = () => {
  const [rightPanelData, setRightPanelData] = useState("");
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
        <Sidebar handleClick={handleNodeClick} treeData={treeData} isAdmin />
      </div>
      <div className={isAdmin ? "hidden" : ""}>
        <RightContent content={rightPanelData} />
      </div>
      <div className={!isAdmin ? "hidden" : "block pb-20"}>
        <div className="flex items-center justify-center gap-5">
          <Chart content="" />
          <NavLink to="/user" className="-mt-80"><Button variant="contained" >Idhi Click Cheste User page ki veltav ra Hukka</Button></NavLink>
        </div>
        <div className="mt-10">
          <Check treeDataRole = "User" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
