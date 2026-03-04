import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import SingleContent from "../pages/SingleContent";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreatePost from "../pages/admin/CreatePost";
import ManagePosts from "../pages/admin/ManagePosts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "category/:category", // now category is in URL
        element: <Dashboard />,
      },
      {
        path: "content/:id",
        element: <SingleContent />,
      },
    ],
  },
  // 🔐 Admin Panel
  {
    path: "/admin",
    element: <AdminLayout />, // Admin layout with sidebar
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: "posts",
        element: <ManagePosts />,
      },
    ],
  },
]);

export default routes;