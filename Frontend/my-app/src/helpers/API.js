import React from "react";
import axios from "axios";

// Verifying Login Credentials
export const loginapi = async (username, password) => {
  try {
    let url = process.env.REACT_APP_HOST_URL + "/getuser";
    console.log(" url : ", url);
    const response = await axios.post(url, {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Add User 
export const adduser = async (name,username,dob, password) => {
  try {
    let url = process.env.REACT_APP_HOST_URL + "/signup";
    console.log(" url : ", url);
    const response = await axios.post(url, {
      name : name ,
      username : username,
      DOB : dob ,
      password : password
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Verifying whether the user possesses authorized access or not.
export const dummy = async () => {
  try {
    let url = process.env.REACT_APP_HOST_URL + "/";
    let token = localStorage.getItem("Token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log(" response   : ", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    if (error.request.status === 401) {
      console.log(" Unauthorized Access");
      return "Unauthorized Access";
    }
    return null;
  }
};


// Verifying whether the user possesses authorized access or not.
export const Auth0dummy = async () => {
  try {
    let url = process.env.REACT_APP_HOST_URL + "/VerifyAuth0Token";
    let token = localStorage.getItem("AuthToken");
    console.log("Token : ",token)
    const response = await axios.get(url, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log(" response   : ", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    if (error.request.status === 401) {
      console.log(" Unauthorized Access");
      return "Unauthorized Access";
    }
    return null;
  }
};
