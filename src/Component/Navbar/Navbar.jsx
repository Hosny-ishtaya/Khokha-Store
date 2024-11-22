import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Navbar.css";
import logo from "../Assets/KHOKHA1.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const { getTotalCartItem } = useContext(ShopContext);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      {/* Mobile Menu Icon */}
      <div className="mobile-menu" onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* Navigation Links */}
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setMenu("shop")}>
            <Link className="link" to="/">
              Shop
            </Link>{" "}
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("men")}>
            <Link className="link" to="/mens">
              Men
            </Link>{" "}
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("women")}>
            <Link className="link" to="/womens">
              Women
            </Link>{" "}
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link className="link" to="/kids">
              Kids
            </Link>{" "}
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      {/* Login and Cart Icons */}
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem("auth-token");
      window.location.replace("/")}}>Logout</button>:        <Link to="/login">
      <button>Login</button>
    </Link>}

        <Link to="/cart">
          <img src={cart_icon} alt="" />{" "}
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}

export default Navbar;