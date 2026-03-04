import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import SingleContent from "../pages/SingleContent";

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
        path: "content/:id",
        element: <SingleContent />,
      },
    ],
  },
]);

export default routes;