import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACCESS_MODE } from "../ReduxToolKit/Slice/AccessModeSlice";
import { loginapi } from "../helpers/API";

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
      navigate("/home");
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
        </Form>
      </div>
    </div>
  );
};

export default Login;
