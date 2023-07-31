import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import { Toaster } from 'react-hot-toast';

const DefaultLayout = () => {
  return (
    <div className="flex">
      <TopNavBar />
      <div className="content-container">
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
};

export default DefaultLayout;
