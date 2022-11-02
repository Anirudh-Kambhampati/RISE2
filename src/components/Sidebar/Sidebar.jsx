import React from 'react';

import FolderTree from '../FolderTree/FolderTree';

const Sidebar = ({
  handleClick,
  treeData,
  isAdmin = false,
  errorMsg = 'Provide treeData',
  disableRightClick = false,
  disableFileAndFolderAddition = false,
}) => {
  return (
    <div className='sidebar sticky top-0'>
      <div style={{ paddingBottom: '40px' }}>
        <div className='folderTree'>
          <FolderTree
            treeData={treeData}
            handleClick={handleClick}
            isAdmin={isAdmin}
            errorMsg={errorMsg}
            disableRightClick={disableRightClick}
            disableFileAndFolderAddition={disableFileAndFolderAddition}
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
