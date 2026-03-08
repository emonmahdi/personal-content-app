// import { Outlet } from "react-router";
// import AdminSidebar from "../../components/layout/AdminSidebar";
// import Header from "../../components/layout/Header";

// const AdminLayout = () => {
//   return (
//     <>
//       <Header />
//       <div className="flex h-screen bg-gray-950 text-gray-200">
//         <AdminSidebar />
//         <div className="flex-1 p-8 overflow-y-auto">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminLayout;

import { useState } from "react";
import { Outlet } from "react-router";
import AdminSidebar from "../../components/layout/AdminSidebar";
import Header from "../../components/layout/Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-200">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
