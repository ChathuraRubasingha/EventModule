import React from "react";
import { Layout, Menu, Avatar } from "antd";
import styles from "./StudentDefaultLayout.module.css";
import Fillter from "../components/Fillter";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

class StudentDefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            {this.state.collapsed ? <h1>Be</h1> : <h1>BeExpo</h1>}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/studentprofile" icon={<UserOutlined />}>
              <Link to="/studentprofile">Profile</Link>
            </Menu.Item>

            <Menu.Item key="/getallevents" icon={<PlusCircleOutlined />}>
              <Link to="/getallevents"> Events</Link>
            </Menu.Item>
            <Menu.Item key="/appliedEvent" icon={<PlusCircleOutlined />}>
              <Link to="/appliedEvent"> AppliedEvents</Link>
            </Menu.Item>

            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link to="login">Logout</Link>{" "}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className={styles.header}>
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>

              <div>
                <Fillter />
              </div>

              <div
                style={{ display: this.state.collapsed ? "none" : "inline" }}
              >
                <h5 className="mr-2">
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  <b>Mifras</b>
                </h5>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default StudentDefaultLayout;
