const Navbar = ({ isSidebarOpen, setIsSiebarOpen }) => {
  return (
    <>
      <nav className="bg-black p-3 flex justify-between">
        <button
          className="bg-black text-white p-2"
          onClick={() => setIsSiebarOpen(!isSidebarOpen)}
        >
          Toggle
        </button>
        <button className="bg-black text-white p-2">Logout</button>
      </nav>
    </>
  );
};

export default Navbar;
