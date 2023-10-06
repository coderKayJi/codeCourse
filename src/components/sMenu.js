import React, { useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const sideMenuStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: '15vw',
  minWidth: '100px',
  backgroundColor: '#ffffff',
  paddingTop: '10vh',
  borderRight: '2px solid rgb(42, 118, 172)',
  transition: 'transform 0.3s ease',
  zIndex: 1,
};

const menuButtonStyle = {
  position: 'fixed',
  top: '4rem',
  left: '0',
  padding: '10px',
  zIndex: 2,
};

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getMenuStyle = () => {
    return {
      ...sideMenuStyle,
      transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
    };
  };

  const getContentStyle = () => {
    return {
      marginLeft: menuOpen ? '15vw' : '0',
      transition: 'margin-left 0.3s ease',
    };
  };

  return (
    <>
      {menuOpen ? (
        <div style={getMenuStyle()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <h2 style={{ color: '#333', textAlign: 'center', padding: '0 0', margin: '0' }}>Menu</h2>
            <CloseOutlined onClick={closeMenu} style={{ fontSize: '24px', cursor: 'pointer' }} />
          </div>
          <Menu mode="vertical" style={{ textAlign: 'left', marginLeft: '10px' }}>
            <Menu.Item>
              <NavLink to="/">Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="plansAvailable">Plan Available</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      ) : (
        <div style={menuButtonStyle}>
          <MenuOutlined onClick={toggleMenu} style={{ fontSize: '24px', cursor: 'pointer' }} />
        </div>
      )}
      <div style={getContentStyle()}>
       {''}
      </div>
    </>
  );
}

export default SideMenu;
