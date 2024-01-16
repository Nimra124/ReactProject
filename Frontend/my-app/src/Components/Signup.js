import React, { useState } from "react";
import { Button, Form, Input,DatePicker } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { adduser } from "../helpers/API";


const SignUp = () => { 

    const [date, setDate]=useState(""); 
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("Success:", values);
        console.log(" Date : ",date);

        const { name , username, password } = values;
    // Login api 
    let response = await adduser(name,username, date ,password); 
    console.log(" response : ", response);
    if (response.data.msg === "ADDED USER") {
        console.log(" user added ")
        navigate("/");
    } else if (response.data.msg === "USER ALREADY EXITS") {
        toast(" USER ALREADY EXITS ");
    }

      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

    const validateDOB = (rule, value) => {
        if (value && value.year() >= 2017) {
          return Promise.reject('Date of birth must be before 2017');
        } else {
          return Promise.resolve();
        }
      };

      const handleDateChange = (date, dateString) => {
        // // dateString will contain the selected date in "YYYY-MM-DD" format
        // const selectedMonth = moment(dateString).format('MMMM');
        console.log("Selected Month:      ",dateString);
        setDate(dateString);
      };


  return (
    <div className="container">
      <div className="login-container">
        <h2 className="text-center mt-3 mb-5">Sign Up </h2>
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
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              }
            ]}
          >
            <Input  />
          </Form.Item>

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
            label="DOB"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please input your date of birth !",
              },
              {
                validator: validateDOB,
              },
            ]}
          >
            <DatePicker onChange={handleDateChange} />
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
              offset: 8,
              span: 20,
            }}
          >
            <Button ><Link to='/' style={{textDecoration : "none"}}> Back to Login </Link> </Button>
          
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default SignUp;
