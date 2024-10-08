import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WishList from "./pages/WishList";
import Details from "./pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);
