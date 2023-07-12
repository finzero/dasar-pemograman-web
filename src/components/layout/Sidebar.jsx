import React, { useRef, useState } from 'react';
import Divider from '../Divider';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={`sidebar-container ${expand ? 'expand' : ''}`}>
      <div className="flex justify-content-between text-white pt-1">
        <b className="sidebar-title">Dasar Aplikasi Web</b>
        <b onClick={() => setExpand((expand) => !expand)}>&gt;</b>
      </div>
      <div className="sidebar-content">
        <Divider />
        <SidebarItem />
      </div>
    </div>
  );
};

export default Sidebar;
