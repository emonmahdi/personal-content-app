import { menuData } from "../../data/menuData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ onSelect, active }) => {
  return (
    <div className="w-72 h-full bg-gray-900 text-gray-200 p-6 border-r border-gray-800 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-8 text-blue-400">
        Emon's Knowledge  
      </h1>

      {menuData.map((category) => (
        <SidebarItem
          key={category.id}
          category={category}
          onSelect={onSelect}
          active={active}
        />
      ))}
    </div>
  );
};

export default Sidebar;