import { useEffect } from 'react';
import useAnchors from '../hooks/useAnchors';
import AnchorNav from '../components/AnchorNav';
import Prerequisite from '../components/reactjs/Prerequisite';
import Introduction from '../components/reactjs/Introduction';

const Reactjs = () => {
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
        <Introduction />
        <Prerequisite />
      </div>
    </div>
  );
};

export default Reactjs;
