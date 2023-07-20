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
    <div className="card-content">
      <CSSPengenalan />
      <CSSLoad />
      <CSSSelector />
      <CSSAnimation />
      <CSSMediaQuery />
      <CSSUnit />
    </div>
  );
};

export default Css;
