import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to="/login">
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Navbar;
