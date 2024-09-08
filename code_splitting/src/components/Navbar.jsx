import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <Link to="/contact">
        <h1>contact</h1>
      </Link>
    </div>
  );
};

export default Navbar;
