import { useState, memo } from "react";
import { FaChevronDown } from "react-icons/fa";

const SidebarItem = ({ category, onSelect, active }) => {
  const [open, setOpen] = useState(false);
  const Icon = category.icon;

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-blue-400" />
          <span>{category.title}</span>
        </div>
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-8 mt-2 space-y-1">
          {category.subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => onSelect(sub.id)}
              className={`block w-full text-left px-3 py-1.5 rounded-md text-sm transition
              ${
                active === sub.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(SidebarItem);