import React, { useState } from "react";
import Aside from "./Aside";

const Layout = () => {
  const [isSidebarOpen, setIsSiebarOpen] = useState(false);

  return (
    <>
      <Aside isSidebarOpen={isSidebarOpen} setIsSiebarOpen={setIsSiebarOpen} />
      <main
        className={`bg-amber-900 min-h-screen  ${
          isSidebarOpen
            ? "w-full ml-0"
            : "md:w-[cal(100%-300px)] w-full md:ml-[300px] ml-0"
        }`}
      >
        <button
          className="bg-black text-white p-2"
          onClick={() => setIsSiebarOpen(!isSidebarOpen)}
        >
          Toggle
        </button>
      </main>
    </>
  );
};

export default Layout;
