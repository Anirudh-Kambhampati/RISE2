import React from "react";
import Icon from "react-icons-kit";
import { folder } from "react-icons-kit/feather/folder";
import { file } from "react-icons-kit/feather/file";
import { folderPlus } from "react-icons-kit/feather/folderPlus";
import { filePlus } from "react-icons-kit/feather/filePlus";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";

import "./contextMenu.css";

const TreeNode = ({
  module,
  id,
  children,
  leaf,
  addItemToTree,
  handleDelete,
  handleRename,
  handleClick = () => {},
}) => {
  const isFile = leaf && !children;
  const node = { module, id, children, leaf };

  return (
    <React.Fragment>
      {/* Tree Node */}
      <ContextMenuTrigger id={id} holdToDisplay={-1}>
        <div className="treeNode">
          <div className="treeNodeItem">
            <div
              className="moduleName"
              onClick={() => handleClick({ ...node, isFile })}
            >
              <Icon icon={isFile ? file : folder} />
              {module}
            </div>
            {!isFile && (
              <div className="folderControls">
                <Icon
                  icon={filePlus}
                  title="Add File"
                  onClick={() => addItemToTree("file", node)}
                />
                <Icon
                  icon={folderPlus}
                  title="Add Folder"
                  onClick={() => addItemToTree("folder", node)}
                />
              </div>
            )}
          </div>
        </div>
      </ContextMenuTrigger>
      {/* Context Menu */}
      <ContextMenu id={id}>
        <MenuItem onClick={() => handleRename(id)}>Rename</MenuItem>
        <MenuItem onClick={() => handleDelete(id)}>Delete</MenuItem>
      </ContextMenu>
    </React.Fragment>
  );
};

export default TreeNode;
