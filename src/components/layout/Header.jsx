import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      {/* Left Logo */}
      <div className="text-xl font-bold text-blue-400">Emon's Knowledge</div>

      {/* Right Profile Section */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
        >
          <FaUserCircle className="text-2xl" />
          <FaChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 transition">
              Admin Panel
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 transition">
              Settings
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
