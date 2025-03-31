import { Home, FileText, Settings, LogOut, X } from "lucide-react";
// import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router

const Aside = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 w-64 p-5 shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform md:relative md:translate-x-0`}
    >
      {/* Sidebar Close Button (Only for Mobile) */}
      <button
        className="absolute top-4 right-4 md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={toggleSidebar}
      >
        <X size={24} />
      </button>

      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Blog Admin
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Home size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/posts"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FileText size={20} />
          <span>Posts</span>
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <button className="mt-10 flex items-center gap-3 p-3 w-full rounded-lg hover:bg-red-200 dark:hover:bg-red-700 text-red-600 dark:text-red-400">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Aside;
