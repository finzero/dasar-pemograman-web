import React, { useEffect } from 'react';
import useAnchors from '../hooks/useAnchors';
import AnchorNav from '../components/AnchorNav';
import JSPengenalan from '../components/javascript/JSPengenalan';
import JSDOM from '../components/javascript/JSDOM';
import JSCaraLoad from '../components/javascript/JSCaraLoad';
import JSVariable from '../components/javascript/JSVariable';
import JSConsole from '../components/javascript/JSConsole';
import JSOperator from '../components/javascript/JSOperator';
import JSArray from '../components/javascript/JSArray';
import JSFunction from '../components/javascript/JSFunction';
import JSEvent from '../components/javascript/JSEvent';

const Javascript = () => {
  const [anchors, setSections] = useAnchors();

  useEffect(() => {
    let sections = document.querySelectorAll('section');
    setSections(sections);

    return () => {
      sections = null;
    };
  }, []);

  return (
    <div className="flex">
      <AnchorNav anchors={anchors} />
      <div className="card-main">
        <JSPengenalan />
        <JSDOM />
        <JSCaraLoad />
        <JSVariable />
        {/* <JSConsole /> */}
        <JSOperator />
        <JSArray />
        <JSFunction />
        <JSEvent />
      </div>
    </div>
  );
};

export default Javascript;
