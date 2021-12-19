import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Space } from 'antd';
import MenuItems from './NavBarMenu'
import SignInModal from '../SignInModal'
const { Header } = Layout;



export default function ResponsiveAppBar() {
  return (
    <Header>
      <Space size={300}>
        <NavLink to="/" style={{color: 'white', fontSize: "medium"}}>
          Predictive Hire
        </NavLink>
        <MenuItems />
        <SignInModal />
      </Space>
    </Header>
  );
};
