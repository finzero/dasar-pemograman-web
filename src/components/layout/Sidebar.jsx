import React from 'react';
import Divider from '../Divider';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="text-white">
          <b>Dasar Aplikasi Web</b>
        </div>
        <Divider />
        <SidebarItem />
      </div>
    </div>
  );
};

export default Sidebar;
