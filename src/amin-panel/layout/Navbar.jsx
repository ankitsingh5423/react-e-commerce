import { Bell, Moon, Menu } from "lucide-react";

const Navbar = ({ isSidebarOpen, setIsSiebarOpen }) => {
  return (
    <>
      <nav className="bg-teal-300 p-3">
        <button
          className="bg-black text-white p-2 cursor-pointer"
          onClick={() => setIsSiebarOpen(!isSidebarOpen)}
        >
          Toggler
        </button>
      </nav>
    </>
  );
};

export default Navbar;
