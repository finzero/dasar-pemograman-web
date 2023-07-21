import React, { useState, useEffect } from 'react';
import '../../assets/css/navbar.css';
import { Link } from 'react-router-dom';

const data = [
  {
    label: 'HTML',
    link: 'html',
    active: false,
  },
  {
    label: 'CSS',
    link: 'css',
    active: false,
  },
  {
    label: 'Cheatsheet',
    link: 'cheatsheet',
    active: false,
  },
];

const TopNavBar = () => {
  const [menu, setMenu] = useState(data);

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
    setActive(menu[0]);
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
