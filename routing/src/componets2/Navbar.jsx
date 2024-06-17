import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/home">
        <h5>Home</h5>
      </Link>
      <Link to="/login">
        <h5>Login</h5>
      </Link>
    </div>
  );
};

export default Navbar;
