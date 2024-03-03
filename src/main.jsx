import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";
import Home from "./pages/Home";
import ListProduct from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";
import ProductDetails from "./pages/productDetails";
import "./index.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ListProduct /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Service /> },
      { path: "/productDetails", element: <ProductDetails /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
// Pages
