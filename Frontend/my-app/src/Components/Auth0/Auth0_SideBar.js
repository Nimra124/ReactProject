import React, { useState } from "react";
import { Layout } from "antd";
import {
  SettingOutlined,
  HomeOutlined,
  PhoneOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { NavLink } from "react-router-dom";


const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Sider
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="bg-dark h-75"
      style={{
        background: "#232a34",
        color: "whitesmoke",
        width: 256,
        marginLeft: "12px",
        marginTop: "1px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className="bg-dark"
          type="primary"
          onClick={toggleCollapsed}
          style={{
            alignItems: "center",
            border: " 1px solid #ffff",
            marginBottom: "15px",
            marginTop: "15px",
            minHeight: "4vh",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <Menu
        className="bg-dark text-light"
        style={{ color: "whitesmoke", minHeight: "98vh" }}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key={"1"}
          icon={<HomeOutlined size={20} />}
          onMouseEnter={() => handleMouseEnter("1")}
          onMouseLeave={handleMouseLeave}
          style={{
            color: hoveredItem === "1" && "#7c7c7d",
            fontSize: hoveredItem === "1" && "large",
          }}
          className="custom-menu-item"
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </Menu.Item>

        {/* 
       { !collapsed && <Menu.Item key={"2" }   >
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
        </Menu.Item>} */}

        {!collapsed ? (
          <Menu.Item
            key={"2"}
            onMouseEnter={() => handleMouseEnter("2")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "2" && "#7c7c7d",
              fontSize: hoveredItem === "2" && "large",
            }}
            className="custom-menu-item"
          >
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              About
            </NavLink>
          </Menu.Item>
        ) : (
          <Menu.Item
            key={"2"}
            onMouseEnter={() => handleMouseEnter("2")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "2" && "#7c7c7d",
              fontSize: hoveredItem === "2" && "large",
            }}
            className="custom-menu-item"
          >
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              Ab....
            </NavLink>
          </Menu.Item>
        )}

        <Menu.Item
          key={"3"}
          icon={<PhoneOutlined />}
          onMouseEnter={() => handleMouseEnter("3")}
          onMouseLeave={handleMouseLeave}
          style={{
            color: hoveredItem === "3" && "#7c7c7d",
            fontSize: hoveredItem === "3" && "large",
          }}
          className="custom-menu-item"
        >
          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </NavLink>
        </Menu.Item>

        <SubMenu key="sub1" icon={<SettingOutlined />} title={"Navigation One"}>
          <Menu.Item
            key="11"
            onMouseEnter={() => handleMouseEnter("11")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "11" && "#7c7c7d",
              fontSize: hoveredItem === "11" && "large",
            }}
            className="custom-menu-item"
          >
            Option 3
          </Menu.Item>
          <Menu.Item
            key="4"
            onMouseEnter={() => handleMouseEnter("4")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "4" && "#7c7c7d",
              fontSize: hoveredItem === "4" && "large",
            }}
            className="custom-menu-item"
          >
            Option 4
          </Menu.Item>
          <Menu.Item
            key="5"
            onMouseEnter={() => handleMouseEnter("5")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "5" && "#7c7c7d",
              fontSize: hoveredItem === "5" && "large",
            }}
            className="custom-menu-item"
          >
            Option 5
          </Menu.Item>
          <Menu.Item
            key="6"
            onMouseEnter={() => handleMouseEnter("6")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "6" && "#7c7c7d",
              fontSize: hoveredItem === "6" && "large",
            }}
            className="custom-menu-item"
          >
            Option 6
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title={"Navigation Two"}>
          <Menu.Item
            key="7"
            onMouseEnter={() => handleMouseEnter("7")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "7" && "#7c7c7d",
              fontSize: hoveredItem === "7" && "large",
            }}
            className="custom-menu-item"
          >
            Option 7
          </Menu.Item>
          <Menu.Item
            key="8"
            onMouseEnter={() => handleMouseEnter("8")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "8" && "#7c7c7d",
              fontSize: hoveredItem === "8" && "large",
            }}
            className="custom-menu-item"
          >
            Option 8
          </Menu.Item>
          <Menu.Item
            key="9"
            onMouseEnter={() => handleMouseEnter("9")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "9" && "#7c7c7d",
              fontSize: hoveredItem === "9" && "large",
            }}
            className="custom-menu-item"
          >
            Option 9
          </Menu.Item>
          <Menu.Item
            key="10"
            onMouseEnter={() => handleMouseEnter("10")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredItem === "10" && "#7c7c7d",
              fontSize: hoveredItem === "10" && "large",
            }}
            className="custom-menu-item"
          >
            Option 10
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
export default SideBar;
