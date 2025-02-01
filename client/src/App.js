import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import PackagesPage from "./pages/Packages";
import ContactPage from "./pages/Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "packages",
        element: <PackagesPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
