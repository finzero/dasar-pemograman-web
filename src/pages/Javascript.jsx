import { useEffect } from 'react';
import useAnchors from '../hooks/useAnchors';
import AnchorNav from '../components/AnchorNav';
import JSPengenalan from '../components/javascript/JSPengenalan';
import JSDOM from '../components/javascript/JSDOM';
import JSCaraLoad from '../components/javascript/JSCaraLoad';
import JSVariable from '../components/javascript/JSVariable';
import JSOperator from '../components/javascript/JSOperator';
import JSArray from '../components/javascript/JSArray';
import JSFunction from '../components/javascript/JSFunction';
import JSEvent from '../components/javascript/JSEvent';
import JSCondition from '../components/javascript/JSCondition';
import JSLoop from '../components/javascript/JSLoop';
import JSTryCatch from '../components/javascript/JSTryCatch';
import JSASync from '../components/javascript/JSASync';
import JSFetch from '../components/javascript/JSFetch';
import JSES6Function from '../components/javascript/JSES6Function';

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
        <JSOperator />
        <JSArray />
        <JSFunction />
        <JSEvent />
        <JSCondition />
        <JSLoop />
        <JSTryCatch />
        <JSASync />
        <JSFetch />
        <JSES6Function />
      </div>
    </div>
  );
};

export default Javascript;
