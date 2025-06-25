import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar2/Navbar2';
import Footer from './Components/Footer/Footer';


const Layout = ({ activeSlide }) => {
    
  return (
    <div className="app">
     <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
