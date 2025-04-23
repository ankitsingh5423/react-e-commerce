import React, { useState } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  const [isSidebarOpen, setIsSiebarOpen] = useState(false);

  return (
    <div className="admin-css">
      <Aside isSidebarOpen={isSidebarOpen} setIsSiebarOpen={setIsSiebarOpen} />
      <main
        className={`bg-amber-900 min-h-screen  ${
          isSidebarOpen
            ? "w-full ml-0"
            : "md:w-[cal(100%-300px)] md:ml-[300px] ml-0"
        }`}
      >
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSiebarOpen={setIsSiebarOpen}
        />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
