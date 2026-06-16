import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
