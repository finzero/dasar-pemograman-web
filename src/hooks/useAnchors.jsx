import { useEffect, useState } from 'react';

const useAnchors = () => {
  const [anchors, setAnchors] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (sections.length) {
      const _anchors = [];
      sections.forEach((section) => {
        const title = section.querySelector('.title').innerHTML;
        _anchors.push({ target: section.id, title });
      });
      setAnchors(_anchors);
    }
  }, [sections]);

  return [anchors, setSections];
};

export default useAnchors;
