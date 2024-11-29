import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
        <ul>
          <li><Link to="/content">Home</Link></li> |
          <li><Link to="/cart">Cart</Link></li> |
          <li><Link to="/Login">Login</Link></li> |
          <li><Link to="/Admin">Admin</Link></li>
        </ul>
    </div>
  );
}