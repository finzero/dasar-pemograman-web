import React, { useEffect } from 'react';
import useAnchors from '../hooks/useAnchors';
import AnchorNav from '../components/AnchorNav';
import JSPengenalan from '../components/javascript/JSPengenalan';
import JSDOM from '../components/javascript/JSDOM';
import JSCaraLoad from '../components/javascript/JSCaraLoad';
import JSVariable from '../components/javascript/JSVariable';

const Javascript = () => {
  const [anchors, setSections] = useAnchors();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    setSections(sections);
  }, []);

  return (
    <div className="flex">
      <AnchorNav anchors={anchors} />
      <div className="card-main">
        <JSPengenalan />
        <JSDOM />
        <JSCaraLoad />
        {/* <JSVariable /> */}
      </div>
    </div>
  );
};

export default Javascript;
