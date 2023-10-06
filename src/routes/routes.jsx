import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import ViewCart from "../pages/ViewCart";
import Checkout from "../pages/Checkout";
import Wishlist from "../pages/Wishlist";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/viewCart",
        element: <ViewCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
