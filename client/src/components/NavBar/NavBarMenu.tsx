import React, { useState } from 'react';
import "antd/dist/antd.css";
// import "./index.css";
import { Menu } from "antd";
const { SubMenu } = Menu;

interface NavBarElements {
  [key: string]: string[];
	readonly Products: string[];
	readonly Platform: string[];
	readonly "Why us": string[];
	readonly Resources: string[];
	readonly Blog: string[];
	readonly Contact: string[]
}

const elements: NavBarElements = {
	"Products": ["Chat Interview", "Video Interview", "Group Interview", "Candidate Feedback", "Candidate Insights", "People Insights", "Integration"],
	"Platform": ["Candidate Experience", "Eliminating Bias", "Speed to hire"],
	"Why us": ["The Science", "Successful Customers", "Case Study", "Award Winning", "Featured In"],
	"Resources": ["Saving Calculator", "Ultimate Guide", "DEI Report", "Fair eBook", "Inclusion eBook", "Experience eBook", "Retail eBook", "Automation eBook", "Other Resources"],
	"Blog": ["change me"],
	"Contact": ["change me"]
};

var menuItems:any = [];

const formatKey = (key: string) => {
  return key.toLowerCase().replace(" ", "-")
}

export default function MenuItems() {
  return (
    <Menu
        mode="horizontal"
      >
        {Object.keys(elements).map((key) => (
          <SubMenu key={key} title={formatKey(key)}>
            <Menu.ItemGroup>
              {elements[key].map((value) => (
                <Menu.Item>
                  {/* <a target="_blank" rel="noopener noreferrer" href=".">
                    {value}
                  </a> */}
                  <div>{formatKey(value)}</div>
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          </SubMenu>
        ))}
      </Menu>
  );
}
