import React, { useState, useEffect } from 'react';
import '../../assets/css/navbar.css';
import { Link, matchRoutes, useLocation } from 'react-router-dom';

const data = [
  {
    label: 'HTML',
    link: '/html',
    active: false,
  },
  {
    label: 'CSS',
    link: '/css',
    active: false,
  },
  {
    label: 'Javascript',
    link: '/javascript',
    active: false,
  },
  {
    label: 'Cheatsheet',
    link: '/cheatsheet',
    active: false,
  },
];

const TopNavBar = () => {
  const [menu, setMenu] = useState(data);
  const location = useLocation();
  const { pathname } = location;

  function setActive(selected) {
    setMenu(
      menu.map((item) => {
        return {
          ...item,
          active: item.label === selected.label,
        };
      })
    );
  }

  useEffect(() => {
    if (pathname === '/') {
      setActive(menu[0]);
    } else {
      const menuIdx = menu.findIndex((m) => m.link === pathname);
      setActive(menu[menuIdx]);
    }
  }, []);

  return (
    <div className="top-navbar">
      {menu.map((item, idx) => (
        <Link
          to={item.link}
          className={`top-navbar-item ${item.active ? 'active' : ''}`}
          onClick={() => setActive(item)}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default TopNavBar;
