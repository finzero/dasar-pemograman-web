import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
