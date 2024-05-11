import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>KHOKHA</p>
      </div>
      <div className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link className="link" to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link className="link" to="/mens">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link className="link" to="/womens">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className="link"  to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />{" "}
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
