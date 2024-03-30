import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutCompany from "./pages/AboutCompany/AboutCompany";
import Dashboard from "./pages/Dashboard/Dashboard";
import PanelUsers from "./pages/PanelUsers/PanelUsers";
import Layout from "./Components/layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <PanelUsers />,
      },
      {
        path: "/company",
        element: <AboutCompany />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export const AppRoute = () => {
  return <RouterProvider router={routes} />;
};
