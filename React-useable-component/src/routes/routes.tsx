import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../pages/About";
import Home from "../pages/Home";
import AdminDashboard from "../component/layouts/AdminDashboard";
import AdminContent from "../pages/AdminContent";
import AdminHomepage from "../pages/AdminHomepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: <AdminHomepage />,
      },
      {
        path: "add-admin",
        element: <AdminContent />,
      },
    ],
  },
]);

export default router;
