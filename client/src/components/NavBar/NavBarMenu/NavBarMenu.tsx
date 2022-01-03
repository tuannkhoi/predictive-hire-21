import "antd/dist/antd.css";
import { Menu } from "antd";
import elements from "./NavBarElements";
import { elementInterface } from "./NavBarElements";
const { SubMenu } = Menu;

const recursiveMenu = (elements: elementInterface[]) => {
  return elements.map(
    ({
      title,
      children = [],
    }: {
      title: string;
      children?: elementInterface[];
    }) => {
      if (!children.length) {
        return <Menu.Item key={title}>{title}</Menu.Item>;
      } else {
        return (
          <SubMenu key={title} title={title}>
            {recursiveMenu(children)}
          </SubMenu>
        );
      }
    }
  );
};

export default function NavBarMenu() {
  return (
    <Menu mode="horizontal" theme="dark">
      {recursiveMenu(elements)}
    </Menu>
  );
}
