import React from "react";
import './layout.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
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
   <Footer />   
   </main>
    </main>

    </>
  );
}

export default Layout;
