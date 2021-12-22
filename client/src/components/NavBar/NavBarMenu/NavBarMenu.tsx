import "antd/dist/antd.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
const { SubMenu } = Menu;

interface NavBarElements {
  [key: string]: string[];
	readonly Products: string[];
	readonly Platform: string[];
	readonly "Why Us": string[];
	readonly Resources: string[];
	readonly Blog: string[];
	readonly Contact: string[]
}

export const elements: NavBarElements = {
	"Products": ["Chat Interview", "Video Interview", "Group Interview", "Candidate Feedback", "Candidate Insights", "People Insights", "Integration"],
	"Platform": ["Candidate Experience", "Eliminating Bias", "Speed to hire"],
	"Why Us": ["The Science", "Successful Customers", "Case Study", "Award Winning", "Featured In"],
	"Resources": ["Saving Calculator", "Ultimate Guide", "DEI Report", "Fair eBook", "Inclusion eBook", "Experience eBook", "Retail eBook", "Automation eBook", "Other Resources"],
	"Blog": ["Candidate Experience With AI", "Conversational AI", "In The Press"],
	"Contact": ["Phone And Email", "Carrier Pigeon", "Hogwarts Owl"]
};

/**
 * lowercase the key & replace the " " with "-" (for URL)
 * @param key
 * @returns
 */
export const formatKey = (key: string) => {
  return key.replace(/\s+/g, '-').toLowerCase();
}

export default function NavBarMenu() {
  return (
    <Menu mode="horizontal" theme="dark">
      {Object.keys(elements).map((key) => (
        <SubMenu key={formatKey(key)} title={key}>
          <Menu.ItemGroup data-testid="dropdown-menu">
            {elements[key].map((value) => (
              <Menu.Item key={formatKey(value)}>
                <NavLink to={formatKey(value)}>
                   {value}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </SubMenu>
      ))}
    </Menu>
  );
}
