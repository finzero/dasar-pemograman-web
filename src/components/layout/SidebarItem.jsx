import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    label: 'HTML',
    link: 'html',
    active: false,
  },
  {
    label: 'Cheatsheet',
    link: 'cheatsheet',
    active: false,
  },
];

const SidebarItem = () => {
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
    <>
      {menu.map((item, idx) => (
        <Link
          to={item.link}
          className={`sidebar-item ${item.active ? 'active' : ''}`}
          onClick={() => setActive(item)}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default SidebarItem;
