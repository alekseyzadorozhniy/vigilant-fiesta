import React from 'react';
import { Dropdown, Icon } from 'antd';

const NavItem = ({ menu, label }) => {
  return (
    <div className="app-nav-item">
      <Dropdown overlay={menu} trigger={['click']}>
        <span>
          {label} <Icon type="down" />
        </span>
      </Dropdown>
    </div>
  );
};

export default NavItem;
