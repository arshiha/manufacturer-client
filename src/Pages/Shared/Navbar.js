import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navItems = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white">
        <Link to="/about">About</Link>
      </li>
      {/* <li className="text-white">
        <Link to="/purchase">Purchase</Link>
      </li> */}
      <li className="text-white">
        <Link to="/review">Review</Link>
      </li>
      <li className="text-white">
        <Link to="/blog">Blog</Link>
      </li>
      {/* <li className="text-white">
        <Link to="/contact">Contact</Link>
      </li> */}
      <li className="text-white">
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-cyan-700">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-outline btn-success lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img
          className="navbar-img"
          src="https://i.pinimg.com/originals/af/58/20/af5820d603499c6acfd5bca13cf3f76e.jpg"
          alt=""
        />
        <a className="normal-case text-2xl text-white text-bold">
          Bicycle Parts Manufacturer
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
