// import { useState, useRef, useEffect } from "react";
// import { FaUserCircle, FaChevronDown } from "react-icons/fa";
// import { Link } from "react-router";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef();

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
//       {/* Left Logo */}
//       <div className="text-xl font-bold text-blue-400">Emon's Knowledge</div>

//       {/* Right Profile Section */}
//       <div className="relative" ref={dropdownRef}>
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex items-center gap-2 text-gray-300 hover:text-white transition"
//         >
//           <FaUserCircle className="text-2xl" />
//           <FaChevronDown
//             className={`transition-transform duration-300 ${
//               open ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {/* Dropdown */}
//         {open && (
//           <div className="absolute right-0 mt-3 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
//             <Link to="/admin">
//               <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition cursor-pointer">
//                 Admin Panel
//               </button>
//             </Link>
//             <Link to="/">
//               <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition cursor-pointer">
//                 Dashboard
//               </button>
//             </Link>
//             <button className="w-full text-left px-4 py-2 text-white hover:bg-red-600 hover:text-white transition cursor-pointer">
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaChevronDown, FaBars } from "react-icons/fa";
import { Link } from "react-router";

const Header = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

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
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4 md:px-6">
      {/* Mobile Menu */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-300 text-xl"
      >
        <FaBars />
      </button>

      {/* Logo */}
      <div className="text-lg md:text-xl font-bold text-blue-400">
        Emon's Knowledge
      </div>

      {/* Profile */}
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

        {open && (
          <div className="absolute right-0 mt-3 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden z-50">
            <Link to="/admin">
              <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                Admin Panel
              </button>
            </Link>

            <Link to="/">
              <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                Dashboard
              </button>
            </Link>

            <button className="w-full text-left px-4 py-2 hover:bg-red-600 text-white cursor-pointer">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
