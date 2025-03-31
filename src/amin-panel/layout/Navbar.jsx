import { Bell, Moon, Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow-md">
      {/* Left Side - Sidebar Toggle & Search */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button (for mobile) */}
        <button
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden"
          onClick={toggleSidebar} // Call the function to open sidebar
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2 w-64 max-w-xs">
          <input
            type="text"
            placeholder="Search or type command..."
            className="bg-transparent w-full outline-none px-2 text-gray-700 dark:text-gray-300"
          />
          <span className="text-gray-400 dark:text-gray-500 text-sm px-2">
            ⌘K
          </span>
        </div>
      </div>

      {/* Right Side - Icons & Profile */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <Moon size={24} />
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Bell size={24} />
          </button>
          {/* Notification Dot */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40" // Replace with actual user image
            alt="User"
            className="w-10 h-10 rounded-full border"
          />
          <span className="text-gray-700 dark:text-gray-300 hidden md:block">
            Musharof
          </span>
          <span className="text-gray-500 dark:text-gray-400 hidden md:block">
            ▼
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
