import React from "react";
import logo from "../assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
export const Nav = () => {
  return (
    <div className=" px-10 flex justify-between items-center md:px-48 py-4 bg-[#F5EBDC] w-[100%]">
      <div className="flex justify-between items-center gap-36">
        <img src={logo} />

        <ul className=" hidden md:flex gap-10 text-[#6F4A3B] text-base font-medium">
          <li>
            <NavLink to="order">Order</NavLink>
          </li>
          <li>
            <NavLink to="menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="offer" >Offer</NavLink>
          </li>
          <li>
            <NavLink >Restaurants</NavLink>
          </li>
          <li>
            <NavLink to="career">Careers</NavLink>
          </li>
          <li>
            <NavLink>News</NavLink>
          </li>
        </ul>
      </div>
      <diV>
        <a className=" hidden md:flex bg-red-600 rounded-full px-6 py-2 text-white font-bold">
          Register
        </a>
      </diV>
      <div className=" text-3xl text-[#6F4A3B] md:hidden">
        <FaBars />
      </div>
    </div>
  );
};
