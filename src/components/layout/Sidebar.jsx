import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { menuData } from "../../data/menuData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ onSelect, active }) => {
  return (
    <div
      className="w-72 h-full bg-gray-900 text-gray-200 p-6 border-r border-gray-800
                 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800"
    >
      {/* Dashboard Link */}
      <p className="px-4 py-1 flex items-center gap-2 text-blue-400 hover:text-blue-500 rounded-md transition-colors">
        <FaHome className="inline-block" />
        <Link to="/" className="font-medium">
          Dashboard
        </Link>
      </p>

      {/* Sidebar Categories */}
      <div className="mt-4 space-y-2">
        {menuData.map((category) => (
          <SidebarItem
            key={category.id}
            category={category}
            onSelect={onSelect}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
