import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACCESS_MODE } from "../ReduxToolKit/Slice/AccessModeSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-5" to={"/home"}>
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                onClick={() => {
                  localStorage.removeItem("Role");
                  localStorage.removeItem("Token");
                  dispatch(ACCESS_MODE("Logout"));
                }}
                to=""
              >
                <FiLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
