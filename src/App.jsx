import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'; // Move Layout to a separate file
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Category from './pages/Category/Category';
import NotFound from './pages/NotFound';

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Pass state
      children: [
        {
          path: "/",
          element: <Home />, // Pass state to Home
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/category/:categoryName",
          element: <Category />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
