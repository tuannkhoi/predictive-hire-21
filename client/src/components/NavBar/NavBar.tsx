import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Space, Modal, Button } from 'antd';
import MenuItems from './NavBarMenu'
import SignInModal from '../SignInModal/SignInModal'
const { Header, Footer, Sider, Content } = Layout;



export default function ResponsiveAppBar() {
  const [signIn, toggleSignIn] = useState(false);
  return (
    <Header>
      <Space>
        <NavLink to="/products" style={{color: 'white', textDecoration: 'none'}}>
          Predictive Hire
        </NavLink>
        <MenuItems />
        <SignInModal />
      </Space>
    </Header>
  );
};
