import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout"; // Adjust path as needed
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // Apply Layout with TopBar and Header
    children: [
      {
        path: "/", // Home route
        element: <HomePage />,
      },
      {
        path: "about", // About Us page
        element: <AboutPage />,
      },
      {
        path: "services", // Services page
        element: <ServicesPage />,
      },
      {
        path: "portfolio", // Services page
        element: <PortfolioPage />,
      },
      {
        path: "contact", // Services page
        element: <ContactPage />,
      },
      // Add more child routes as needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
