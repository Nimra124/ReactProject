import React from "react";
import Navbar from "./Auth0_Navbar";
import Error from "../Error";
import Contact from "../contact";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Auth0_Home";
import SideBar from "./Auth0_SideBar";
import Login from "../Login";
import { Layout } from "antd";
import { About } from "../About";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../Loading";
const { Content } = Layout;

const Router = () => {
 const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading/>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />}></Route>

          <Route element={<Protected />}>
          <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Protected = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    let authorized= isAuthenticated
    
  return authorized ? (
    <Layout>
      <Navbar />
      <Layout>
        <SideBar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  ):(<Navigate to='/login'/>);
};

export default Router;
