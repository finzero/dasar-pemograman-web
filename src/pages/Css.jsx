import React from 'react';
import '../assets/css/ig.css';
import { CSSPengenalan } from '../components/css/CSSPengenalan';
import CSSLoad from '../components/css/CSSLoad';
import CSSSelector from '../components/css/CSSSelector';
import CSSAnimation from '../components/css/CSSAnimation';
import CSSMediaQuery from '../components/css/CSSMediaQuery';
import CSSUnit from '../components/css/CSSUnit';

const Css = () => {
  return (
    <div className="flex">
      <div className="sidebar-anchor">
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <a href="#css-pengenalan">Pengenalan CSS</a>
          <a href="#css-load">Cara Load CSS</a>
          <a href="#css-selector">Selector CSS</a>
          <a href="#css-animasi">Animasi dengan CSS</a>
          <a href="#css-media-query">CSS Media Query</a>
          <a href="#css-unit">Unit Pada CSS</a>
        </div>
      </div>
      <div className="card-content">
        <CSSPengenalan />
        <CSSLoad />
        <CSSSelector />
        <CSSAnimation />
        <CSSMediaQuery />
        <CSSUnit />
      </div>
    </div>
  );
};

export default Css;
