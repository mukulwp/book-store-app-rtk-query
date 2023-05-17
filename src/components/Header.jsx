import React from "react";
import LogoImg from "../images/logo.svg";
import SearchForm from "./SearchForm";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img
          src={LogoImg}
          width="150px"
          className="object-contain"
          alt="Logo"
        />

        <ul className="hidden md:flex items-center space-x-6">
          <NavLink
            className="cursor-pointer"
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </NavLink>
          <NavLink className="cursor-pointer" to="/add" id="lws-addBook">
            <li>Add Book</li>
          </NavLink>
        </ul>

        <SearchForm />
      </div>
    </nav>
  );
};

export default Header;
