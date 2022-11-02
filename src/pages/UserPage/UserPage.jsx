import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getUserTreeData } from '../../redux/treeData/treeDataSlice'

const UserPage = () => {
    let treeData = useSelector(getUserTreeData);
    treeData = _.cloneDeep(treeData);
  return (
    <div className="flex gap-5">
      <div>
        <Sidebar treeData={treeData} />
      </div>
    </div>
  )
}

export default UserPage