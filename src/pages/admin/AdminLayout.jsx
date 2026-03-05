import { Outlet } from "react-router"; 
import AdminSidebar from "../../components/layout/AdminSidebar";
import Header from "../../components/layout/Header";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen bg-gray-950 text-gray-200">
        <AdminSidebar />
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;