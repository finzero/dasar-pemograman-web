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

  function handleAnchorClick(target) {
    toggleSidebar();
    const el = document.getElementById(target);
    const headerOffset = 55;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
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
            onClick={() => handleAnchorClick(anchor.target)}
            key={anchor.target}
            dangerouslySetInnerHTML={{ __html: `${anchor.title}` }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default AnchorNav;
