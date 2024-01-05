import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ACCESS_MODE } from '../ReduxToolKit/Slice/AccessModeSlice';



export const Login = () => {

    const dispatch=useDispatch();
    const navigate = useNavigate();


    const onFinish = async(values) => {
        const { username, password } = values;

        console.log(" ---------------------- Username : ------------------- ",username);
        console.log(" ---------------------- Password : --------------------- ",password);
        try {
            const response = await axios.post('http://localhost:8000/login', {
              username: username,
              password: password
            })
            console.log('Server response:', response.data);
  
            if(response.data)
            {
              console.log(" response data  role  :   ",response.data.role);
              dispatch(ACCESS_MODE(response.data.role));
              localStorage.setItem('Role', response.data.role);
              navigate("/home")
            }
            else{
              toast(" YOU HAVE ENTERED INVALID CREDENTIALS ");
            }
  
          } catch (error) {
            console.error('Error:', error);
          }
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (

    <div className="login-container">
      <h2 className='text-center mt-3 mb-5'>Login</h2>
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
          message: 'Please input your username!',
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
          message: 'Please input your password!',
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
      <Button className='mt-1' htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>


    </div>
  )
}

export default Login;