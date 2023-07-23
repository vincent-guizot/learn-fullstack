import React from "react";
import { Link } from "react-router-dom";

import { AiFillHome, AiOutlineUser, AiOutlineSnippets } from "react-icons/ai";

const SideBar = () => {
  return (
    <div className="w-100 vh-100 sidebar ">
      <div className="sidebar-logo py-2 px-3">
        <img
          className="w-100 rounded-circle"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRiKk6_PBR4alTmYCt-5kyx7BPx-nMJq0DA&usqp=CAU"
          alt="Logo"
        />
        <hr />
      </div>
      <div className="p-3 menu-bar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="" to="/">
              <AiFillHome className="me-2 " />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/users">
              <AiOutlineUser className="me-2" />
              Authors
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/items">
              <AiOutlineSnippets className="me-2" />
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/items">
              <AiOutlineSnippets className="me-2" />
              Books Genres
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
