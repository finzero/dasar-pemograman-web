import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';

const DefaultLayout = () => {
  return (
    <div className="flex">
      <TopNavBar />
      {/* <div>
        <Sidebar />
      </div> */}
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
