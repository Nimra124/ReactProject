import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACCESS_MODE } from "../ReduxToolKit/Slice/AccessModeSlice";
import { loginapi } from "../helpers/API";
import AuthLogin from './Auth0/Auth0_Login'

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    // Login api
    let response = await loginapi(username, password);
    console.log(" response : ", response);
    if (response.data.match === false) {
      toast(" YOU HAVE ENTERED INVALID CREDENTIALS ");
    } else if (response.data.match === true) {
      dispatch(ACCESS_MODE(response.data.data.role));
      localStorage.setItem("Role", response.data.data.role);
      localStorage.setItem("Token", response.data.token);
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="text-center mt-3 mb-5">Login</h2>
        <ToastContainer />

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 20,
            }}
          >
            <Button className="mt-1" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 20,
            }}
          >
            <AuthLogin/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 2,
              span: 18,
            }}
          >
            Don't have an account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", marginLeft: "5px" }}
            >
              Signup 
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
