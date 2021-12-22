import 'antd/dist/antd.css';
import { Layout, Space } from 'antd';
import Logo from './Logo';
import MenuItems from './NavBarMenu'
import SignInModal from './SignInModal'
const { Header } = Layout;

export default function NavBar() {
  return (
    <Header>
      <Space size={250} align="start">
        <Logo />
        <MenuItems />
        <SignInModal />
      </Space>
    </Header>
  );
};
