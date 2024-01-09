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
const { Content } = Layout;

let accessMode = localStorage.getItem("Role");

const Router = () => {
  const select = useSelector((st) => st.accessmode.value);

  useEffect(() => {
    accessMode = localStorage.getItem("Role");
  }, [select]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          // Protected routes can be added below this
          <Route element={<Protected />}>
            <Route path="/home" element={<Home />}></Route>
            // Admin routes can be added below this
            <Route element={<Admin />}>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
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
    <Login />
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
