import React from "react";
import { useSelector } from "react-redux";
import { getAdminTreeData } from "../../redux/treeData/treeDataSlice";
import _ from "lodash";
import deepdash from "deepdash";

deepdash(_);
const Share = ({ checkboxData, doSubmit, onChange }) => {
  const treeData = useSelector(getAdminTreeData) || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const allIds = [];
    Object.entries(checkboxData).forEach(([k, v]) => {
      if (v) {
        allIds.push(k);
      }
    });
    if (allIds.length) {
      const filteredTree = _.filterDeep(
        treeData,
        (item) => {
          return allIds.includes(item.id);
        },
        { childrenPath: "children" }
      );
      doSubmit(filteredTree);
    }
  };

  const data = treeData.children || [];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container mt-3" style={{ maxWidth: 500 }}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <span style={{ color: "#2db3a7" }}>{item.module}</span>
                {item.children.map((elt) => {
                  return (
                    <div key={elt.id}>
                      <input
                        name={elt.id}
                        type="checkbox"
                        checked={checkboxData[elt.id] || false}
                        className="custom-control-input mb-3"
                        onChange={onChange}
                        id={elt.id}
                      />
                      <label
                        className="custom-control-label mx-2"
                        htmlFor={elt.id}
                      >
                        {elt.module}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}

          <button
            type="submit"
            style={{ backgroundColor: "powderblue", padding: "0 1rem" }}
            className="btn btn-blue m-3 p-1"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Share);
