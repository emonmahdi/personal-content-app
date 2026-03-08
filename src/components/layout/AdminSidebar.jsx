// import { Link, useLocation } from "react-router";

// const AdminSidebar = () => {
//   const location = useLocation();

//   const menu = [
//     { name: "Dashboard", path: "/admin" },
//     { name: "Create Post", path: "/admin/create" },
//     { name: "Manage Posts", path: "/admin/posts" },
//   ];

//   return (
//     <div className="w-64 bg-gray-900 p-6 border-r border-gray-800">
//       <h2 className="text-2xl font-bold text-blue-400 mb-8">
//         Admin Panel
//       </h2>

//       {menu.map((item) => (
//         <Link key={item.path} to={item.path}>
//           <div
//             className={`mb-3 px-4 py-2 rounded-lg transition
//               ${
//                 location.pathname === item.path
//                   ? "bg-blue-600 text-white"
//                   : "hover:bg-gray-800"
//               }`}
//           >
//             {item.name}
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default AdminSidebar;

import { Link, useLocation } from "react-router";

const AdminSidebar = ({ open, setOpen }) => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Create Post", path: "/admin/create" },
    { name: "Manage Posts", path: "/admin/posts" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-gray-900 p-6 border-r border-gray-800
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-8">Admin Panel</h2>

        {menu.map((item) => (
          <Link key={item.path} to={item.path}>
            <div
              className={`mb-3 px-4 py-2 rounded-lg transition
              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AdminSidebar;
