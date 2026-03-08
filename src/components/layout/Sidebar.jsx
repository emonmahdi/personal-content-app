// import { Link } from "react-router";
// import { FaHome } from "react-icons/fa";
// import { menuData } from "../../data/menuData";
// import SidebarItem from "./SidebarItem";

// const Sidebar = ({ onSelect, active }) => {
//   return (
//     <div
//       className="w-72 h-full bg-gray-900 text-gray-200 p-6 border-r border-gray-800
//                  overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800"
//     >
//       {/* Dashboard Link */}
//       <p className="px-4 py-1 flex items-center gap-2 text-blue-400 hover:text-blue-500 rounded-md transition-colors">
//         <FaHome className="inline-block" />
//         <Link to="/" className="font-medium">
//           Dashboard
//         </Link>
//       </p>

//       {/* Sidebar Categories */}
//       <div className="mt-4 space-y-2">
//         {menuData.map((category) => (
//           <SidebarItem
//             key={category.id}
//             category={category}
//             onSelect={onSelect}
//             active={active}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { menuData } from "../../data/menuData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed md:static z-40 top-0 left-0 h-full w-72 bg-gray-900 
        text-gray-200 p-6 border-r border-gray-800 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 overflow-y-auto`}
      >
        <div className="space-y-2">
          {/* Dashboard Link */}
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-blue-400 hover:bg-gray-800 transition"
          >
            <FaHome className="text-blue-400" />
            <span className="font-medium">Dashboard</span>
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-800 my-3"></div>

          {/* Menu Items */}
          <div className="space-y-1">
            {menuData.map((category) => (
              <SidebarItem key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
