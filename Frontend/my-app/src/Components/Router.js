import React from "react";
import Navbar from "./Navbar";
import Error from "./Error";
import Contact from "./contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import SideBar from "./SideBar";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Layout } from "antd";
import { About } from "./About";
import { Outlet, Navigate } from "react-router-dom";
import SignUp from "./Signup";
import Auth0_Login from './Auth0/Auth0_Login'
import { useAuth0 } from "@auth0/auth0-react";
const { Content } = Layout;

let accessMode = localStorage.getItem("Role");

const Router = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const select = useSelector((st) => st.accessmode.value);

  useEffect(() => {
    accessMode = localStorage.getItem("Role");
  }, [select]);


  return (
      <>
      <BrowserRouter>
        <Routes>
          // Protected routes can be added below this
          <Route element={<Protected />}>
            <Route path="/" element={<Home />}></Route>
            // Admin routes can be added below this
            <Route element={<Admin />}>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Route>
          </Route>
          // Non-Protected routes can be added below this
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<Error />}></Route>

        </Routes> 
      </BrowserRouter>
    </>
  );
};

const Protected = () => {
  let protect = localStorage.getItem("Role");
  return protect ? (
    <Layout>
      <Navbar />
      <Layout>
        <SideBar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Navigate to='/login'/>
  );
};

const Admin = () => {
  let protect = localStorage.getItem("Role");
  return protect === "admin" ? <Outlet /> : <Invalid_Access />;
};

const Invalid_Access = () => {
  return (
    <div
      className="mt-5"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="py-4 px-4 lead text-muted"
        style={{
          border: "5px solid grey",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "250px",
        }}
      >
        <i>
          {" "}
          <b>You do not have access to this page </b>
        </i>
      </div>
    </div>
  );
};

export default Router;
