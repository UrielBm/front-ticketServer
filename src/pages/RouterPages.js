import React, { useContext } from "react";
import Uicontext from "../context/Uicontext/Uicontext";
import { Layout, Menu } from "antd";
import {
  CheckCircleOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Register from "./Register";
import Stack from "./Stack";
import CreateTicket from "./CreateTicket";
import Desktop from "./Desktop";
import "./pages.css";
const { Sider, Content } = Layout;
const RouterPages = () => {
  const { hiddenMenu } = useContext(Uicontext);
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={hiddenMenu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/register">Registrar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ArrowRightOutlined />}>
              <Link to="/fila">Fila</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckCircleOutlined />}>
              <Link to="create-ticket">Create Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/fila">
                <Stack />
              </Route>
              <Route path="/create-ticket">
                <CreateTicket />
              </Route>
              <Route path="/desktop">
                <Desktop />
              </Route>
              <Redirect to="/register" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPages;
