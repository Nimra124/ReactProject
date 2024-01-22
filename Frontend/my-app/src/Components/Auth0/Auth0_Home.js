import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../ReduxToolKit/Slice/CounterSlice";
import { Auth0dummy } from "../../helpers/API";
import {  useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../Loading";




const Home = () => {
  const { getIdTokenClaims,getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let select = useSelector((state) => state.counter.value);

  useEffect(()=>{
    if(isAuthenticated===false)
    {
        console.log("isAuthenticated : ",isAuthenticated.toString())
     navigate("/login")
    }

  },[isAuthenticated]);


  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        try {
          // Get id token claims, which include the access token
          const idTokenClaims = await getIdTokenClaims();
          
          // Access token is available in idTokenClaims.__raw
          const idToken = idTokenClaims.__raw;

          localStorage.setItem("AuthToken",idToken)

          const accessToken = await getAccessTokenSilently();

        } catch (error) {
          console.error("Error getting access token:", error);
        }
      }
    };

    getToken();
  }, [getIdTokenClaims, isAuthenticated]);

 

  if (isLoading) {
    return <Loading/>
  }

  return (
    <>
      <h1 className="text-center mt-5"> Home Page</h1>

      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <h5
          style={{ border: " 6px solid grey", padding: "20px", margin: "20px" }}
        >
          {select}
        </h5>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>

      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-secondary"
          onClick={async () => {
            let res = await Auth0dummy();
            if (res === "Unauthorized Access" ) {
              localStorage.removeItem("AuthToken");
              navigate("/login");
            }
          }}
        >
          Check Auth0 Token
        </button>
      </div>
    </>
  );
};

export default Home;
