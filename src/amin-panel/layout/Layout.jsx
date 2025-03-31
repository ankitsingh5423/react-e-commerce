import { useState } from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar (Hidden on Mobile) */}
      <Aside isOpen={isSidebarOpen} />

      <div className="flex flex-col w-full">
        {/* Top Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="p-4">Your Content Here</main>
      </div>
    </div>
  );
};

export default Layout;
