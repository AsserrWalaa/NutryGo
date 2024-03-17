import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Features from "./pages/features"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> }, 
  { path: "/blog", element: <Blog /> }, 
  { path: "/features", element: <Features /> }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
