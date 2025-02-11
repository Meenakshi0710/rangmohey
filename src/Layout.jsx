import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar2/Navbar2';
import Footer from './Components/Footer/Footer';

const Layout = ({ activeSlide }) => {
    const location = useLocation();

    // Show Navbar2 only on Home Page and when activeSlide is 1
    const showNavbar2 = location.pathname === "/" && activeSlide === 1;
    
  return (
    <div className="app">
     <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
