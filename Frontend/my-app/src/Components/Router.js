import React from "react";
import Navbar from './Navbar';
import Error from './Error';
import Contact from './contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home';
import SideBar from './SideBar'
import Login from './Login'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Layout, theme, Space } from 'antd';
import { About } from "./About";
const { Content } = Layout;


let accessMode = localStorage.getItem("Role");




const Router = () => {


  const select = useSelector(st => st.ACCESS_MODE);

  useEffect(() => {
    console.log(" select : ", select);
    // accessMode=select;
   accessMode= localStorage.getItem("Role");
  }, [select])



  return (<>

    <BrowserRouter>

      <Layout>

        <Navbar/>
        <Layout>
          <SideBar />
          <Content>
            <Routes>

              <Route path='/' element={<Login />}></Route>
              <Route path='/home' element={<Logged><Home /></Logged>}></Route>
              <Route path="/contact" element={<Logged><Contact /></Logged>}></Route>
              <Route path="/about" element={<Logged><AdminAccees><About /></AdminAccees></Logged>}></Route>
              <Route path='*' element={<Error />}></Route>

            </Routes>
          </Content>
        </Layout>

      </Layout>

    </BrowserRouter>



  </>)
}

function AdminAccees({ children }) {

  if (accessMode === "admin") {
    return <>{children}</>
  }
  else {
    return <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="py-4 px-4" style={{ border: "5px solid grey", paddingTop: "10px", paddingBottom: "10px" }}>You do not have access to this page </div>
    </div>
  }
}

function Logged({ children }) {

  if (accessMode==="user"||accessMode==="admin") {
    return <>{children}</>
  }
  else {
    return <><Login/></>
  }
}

export default Router;