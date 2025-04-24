import React from "react";
import './layout.css'
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <main className="main">
    <main className="main-container">
   <Navbar />
      <main className="outlet-container">
        <Outlet />
      </main>
   </main>
    </main>

    </>
  );
}

export default Layout;
