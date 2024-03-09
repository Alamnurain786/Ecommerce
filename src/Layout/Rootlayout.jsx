import React from "react";
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div>
      <Header />
      <main>
        <main>{location.pathname === "/" ? <Home /> : <Outlet />}</main>
      </main>
      <Footer />
    </div>
  );
};

export default Rootlayout;
