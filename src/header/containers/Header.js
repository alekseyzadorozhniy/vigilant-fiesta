import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import NavItem from '../components/NavItem';
import '../styles/styles.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/">Portfolio</Link>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  return (
    <div className="app-navbar">
      <div className="left-navbar">
        <NavItem menu={menu} label="Your Account" />
        <NavItem menu={menu} label="Invest" />
        <NavItem menu={menu} label="Resources" />
      </div>
      <div className="right-navbar">
        <NavItem menu={menu} label="Joseph" />
      </div>
    </div>
  );
};

export default Header;
