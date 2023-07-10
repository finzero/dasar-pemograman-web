import React from 'react'
import Divider from '../Divider'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div>Logo Here</div>
      <Divider />
      <SidebarItem />
    </div>
  )
}

export default Sidebar