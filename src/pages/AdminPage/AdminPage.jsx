import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RightContent from "./RightContent";
import Chart from "../../components/Chart/Chart";
import Check from "../../components/CheckBox/Check";
import { treeData } from "../../data/data";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getResearcherCheckboxData,
  getUserCheckboxData,
  handleResearcherCheckboxData,
  handleUserCheckboxData,
} from "../../redux/adminPage/adminSlice";
import {
  setResearcherTreeData,
  setUserTreeData,
} from "../../redux/treeData/treeDataSlice";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [rightPanelData, setRightPanelData] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const userCheckboxData = useSelector(getUserCheckboxData);
  const researcherCheckboxData = useSelector(getResearcherCheckboxData);

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
  };

  const doUserFormSubmit = (filteredTree) => {
    filteredTree["module"] = "User";
    dispatch(setUserTreeData(filteredTree));
  };

  const doResearcherFormSubmit = (filteredTree) => {
    filteredTree["module"] = "Researcher";
    dispatch(setResearcherTreeData(filteredTree));
  };

  const onUserFormChange = ({ target }) => {
    dispatch(
      handleUserCheckboxData({ name: target.name, checked: target.checked })
    );
  };
  const onResearcherFormChange = ({ target }) => {
    dispatch(
      handleResearcherCheckboxData({
        name: target.name,
        checked: target.checked,
      })
    );
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
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="mt-10">
            <p>User</p>
            <Check
              checkboxData={userCheckboxData}
              doSubmit={doUserFormSubmit}
              onChange={onUserFormChange}
            />
            <NavLink to="/user" className="-mt-80">
              <Button variant="contained">User</Button>
            </NavLink>
          </div>
          <div className="mt-10">
            <p>Researcher</p>
            <Check
              checkboxData={researcherCheckboxData}
              doSubmit={doResearcherFormSubmit}
              onChange={onResearcherFormChange}
            />
            <NavLink to="/researcher" className="-mt-80">
              <Button variant="contained">Researcher</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
