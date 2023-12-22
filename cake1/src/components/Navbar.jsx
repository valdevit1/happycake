import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-danger bg-danger p-2">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <Link to="/home">
            <p>Home 🏠​​</p>
          </Link>
          <Link to="/contacto">
            <p>Contacto 📒​</p>
          </Link>
          <Link to="/products">
            <p>Products</p>
          </Link>
          <Link to="/notfound">
            <p>NotFound</p>
          </Link>
        </div>
      </div>
      <div>Happy Cake 🍰</div>
    </nav>
  );
};

export default Navbar;
