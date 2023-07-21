import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import AnchorNav from '../AnchorNav';

const DefaultLayout = () => {
  return (
    <div className="flex">
      <TopNavBar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
