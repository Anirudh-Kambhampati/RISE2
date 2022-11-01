import React from 'react'
import UserSidebarItems from './UserSidebarItems'
import items from '../../data/Sidebar.json'

const UserSidebar = () => {
  return (
    <div>

        { items.map((item, index) => <UserSidebarItems key={index} item={item} />) }

    </div>
  )
}

export default UserSidebar