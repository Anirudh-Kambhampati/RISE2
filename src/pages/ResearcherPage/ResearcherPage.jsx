import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getResearcherTreeData } from "../../redux/treeData/treeDataSlice";

const ResearcherPage = () => {
  let treeData = useSelector(getResearcherTreeData);
  treeData = _.cloneDeep(treeData);
  return (
    <div className="flex gap-5">
      <div>
        <Sidebar
          treeData={treeData}
          errorMsg="You do not have access to View"
          disableRightClick
          disableFileAndFolderAddition
        />
      </div>
    </div>
  );
};

export default ResearcherPage;
