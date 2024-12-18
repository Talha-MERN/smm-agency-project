import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <main className="container-fluid mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
