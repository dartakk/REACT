import React, { useState } from 'react';
import './Container.css';

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='container'>
      <h2 onClick={toggleCollapse}>{title}</h2>
      {!collapsed && children}
    </div>
  );
};

export default Container;
