import React from 'react';
import Divider from '../Divider';
import SidebarItem from './SidebarItem';
import logo from '../../assets/dasar-aplikasi-web.png';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="text-center">
        <img src={logo} alt="Logo" />
      </div>
      <Divider />
      <SidebarItem />
    </div>
  );
};

export default Sidebar;
