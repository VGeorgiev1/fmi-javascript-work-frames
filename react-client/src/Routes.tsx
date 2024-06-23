import { Navigate, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home"
import { useState } from "react";

const Routes = () => {
  const [variable, setVar] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;