
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Category from './pages/Category/Category';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from 'react-router-dom';
import Navbar2 from './Components/Navbar2/Navbar2';
import { useEffect, useState } from 'react';
import NotFound from './pages/NotFound';

const Layout = () =>{
  const location = useLocation()
  const [showNavbar2, setShowNavbar2] = useState(false);
  useEffect(() => {
    setShowNavbar2(location.pathname === "/about");
  }, [location]);
  return(
    <div className="app">
       {/* Conditional Navbar Rendering */}
        <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/category/:categoryName", // Add Dynamic Category Route
        element: <Category/> ,
      },
      {
        path: "*", // Add Dynamic Category Route
        element: <NotFound/> ,
      },
      
    ]
  },
 
]);

function App() {
 
  return (
    <>
      <div>
     <RouterProvider router={router} />

     </div>
    </>
  )
}

export default App
