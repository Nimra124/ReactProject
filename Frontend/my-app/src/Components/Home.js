import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../ReduxToolKit/Slice/CounterSlice";
import { dummy } from "../helpers/API";
import { ACCESS_MODE } from "../ReduxToolKit/Slice/AccessModeSlice";
import { useNavigate } from "react-router-dom"



const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let select = useSelector((state) => state.counter.value);

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
            let res = await dummy();
            if (res === "Unauthorized Access") {
              localStorage.removeItem("Role");
              dispatch(ACCESS_MODE("Logout"));
              navigate("/login");
            }
          }}
        >
          Check Token
        </button>
      </div>
    </>
  );
};

export default Home;
