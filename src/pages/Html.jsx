import React, { useEffect } from 'react';
import AnchorNav from '../components/AnchorNav';
import useAnchors from '../hooks/useAnchors';
import HTMLStruktur from '../components/html/HTMLStruktur';
import HTMLTag from '../components/html/HTMLTag';
import HTMLCaraBuat from '../components/html/HTMLCaraBuat';
import HTMLIndex from '../components/html/HTMLIndex';
import HTMLStyling from '../components/html/HTMLStyling';
import HTMLDiv from '../components/html/HTMLDiv';

const Html = () => {
  const [anchors, setSections] = useAnchors();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    setSections(sections);
  }, []);

  return (
    <div className="flex">
      <AnchorNav anchors={anchors} />
      <div className="card-main">
        <HTMLStruktur />
        <HTMLTag />
        <HTMLCaraBuat />
        <HTMLIndex />
        <HTMLStyling />
        <HTMLDiv />
      </div>
    </div>
  );
};

export default Html;
