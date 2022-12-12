import App from "../App";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import Register from "../pages/Register/Components/Register"
import EditSummary from "../pages/EditSummary/EditSummary";
import PrivateRoute from "../pages/PrivateRoutes/PrivateRoute";
import SummaryList from "../pages/SummaryList/Components/SummaryList"
import GetReadSelected from "../pages/ReadSummary/GetReadSelected";
import Login from '../pages/Login/Components/Login'

//App solo muestra a Login, no tiene más hijos.
export const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/dashboard",
            element: <App />,
          },
          
          {
            path: "/summary-list",
            element: <SummaryList />,
          },
          {
            path: "/read-summary/:id",
            element: <GetReadSelected />,
          },
          {
            path: "/edit/:id",
            element: <EditSummary />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        path: "/",
        element: <Register />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);
