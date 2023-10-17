import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import Chefs from "../Pages/Home/Chefs/Chefs";
import ChefsDetails from "../Pages/ChefsDetails/ChefsDetails";
import ChefRecipeLayout from "../Layout/ChefRecipeLayout";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },

  {
    path: "chefs",
    element: <ChefRecipeLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <ChefsDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
