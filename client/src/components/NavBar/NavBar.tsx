import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Space } from 'antd';
import MenuItems from './NavBarMenu'
import SignInModal from '../SignInModal/SignInModal'
const { Header } = Layout;



export default function ResponsiveAppBar() {
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
