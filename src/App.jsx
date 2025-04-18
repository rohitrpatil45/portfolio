import React from "react";
import Navbar from "./components/Navbar";
import { Routes ,Route } from "react-router-dom";
import Layout from "./assets/layouts/Layout";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout/>} />
      

      
      
    // </Routes>
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* All pages that use the same Navbar go here */}
      {/* <Route index element={<Home />} /> */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
  );
}

export default App;
