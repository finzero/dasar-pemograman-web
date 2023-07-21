import React, { useRef } from 'react';
import arrow from '../assets/menu-icon.png';

const AnchorNav = (props) => {
  const sidebarAnchor = useRef();
  const anchorItems = useRef();

  function toggleSidebar() {
    sidebarAnchor.current.classList.toggle('show');
    if (anchorItems.current.classList.contains('show')) {
      anchorItems.current.classList.remove('show');
    } else {
      setTimeout(() => {
        anchorItems.current.classList.add('show');
      }, 500);
    }
  }

  return (
    <div ref={sidebarAnchor} className="sidebar-anchor">
      <div
        role="button"
        className="sidebar-anchor-toggler"
        onClick={toggleSidebar}
      >
        <img src={arrow} alt="" className="rotate-180" />
      </div>
      <div ref={anchorItems} className="anchor-items">
        {props.anchors.map((anchor) => (
          <a
            onClick={toggleSidebar}
            key={anchor.target}
            href={'#' + anchor.target}
            dangerouslySetInnerHTML={{ __html: `${anchor.title}` }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default AnchorNav;
