import React from "react";
import './layout.css'
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
   <main className="main-container">
   <Navbar />
      <main>
        <Outlet />
      </main>
   </main>
    </>
  );
}

export default Layout;
