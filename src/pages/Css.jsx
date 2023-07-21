import React, { useEffect } from 'react';
import '../assets/css/ig.css';
import { CSSPengenalan } from '../components/css/CSSPengenalan';
import CSSLoad from '../components/css/CSSLoad';
import CSSSelector from '../components/css/CSSSelector';
import CSSAnimation from '../components/css/CSSAnimation';
import CSSMediaQuery from '../components/css/CSSMediaQuery';
import CSSUnit from '../components/css/CSSUnit';
import useAnchors from '../hooks/useAnchors';
import AnchorNav from '../components/AnchorNav';

const Css = () => {
  const [anchors, setSections] = useAnchors();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    setSections(sections);
  }, []);

  return (
    <div className="flex">
      <AnchorNav anchors={anchors} />
      <div className="card-main">
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
