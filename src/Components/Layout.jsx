import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Renders nested child routes */}
      <Footer />
    </>
  );
}

export default Layout;
