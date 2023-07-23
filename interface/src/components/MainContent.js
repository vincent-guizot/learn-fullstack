import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import { Home, User, Item } from "../pages";

const MainContent = () => {
  return (
    <div className="w-100 vh-100 main-content">
        <div className="w-100 main-content-header">
            <h3>Users and Items Application Fullstack</h3>
        </div>
        <div className="content p-2">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="users" element={<User></User>}></Route>
        <Route path="items" element={<Item></Item>}></Route>
      </Routes>
      </div>
    </div>
  );
};

export default MainContent;
