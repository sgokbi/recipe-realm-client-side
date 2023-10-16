import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Home/Banner/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
    ],
  },
]);

export default router;
