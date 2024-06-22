
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "./Screenshot_22-6-2024_125046_turbologo.com-removebg-preview.png";
import menuicon from "./menu.png";
import { useState, useEffect } from 'react';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (<>
    <div className={"navbar-container " } >
   
        <img src={logo} className='logo'/>

        <div className='menu-icon'>
          <img src={menuicon} className='menuicon'/>

          </div>
       
        
        <div className={'nav-item-container '}>
         <Link to="/" className='nav-item'>Home</Link>
         <Link to="/product"  className='nav-item'>Products</Link>
         <Link to="/about"className='nav-item'>About</Link>
         <Link to="/contact" className='nav-item'>Contact</Link>
         <Link to="/login" className='nav-item'>Log-in</Link>
       </div>
       <div>
         <Link to='/signup' className='sign-up '>Sign-up</Link>
       </div>
    </div> 
    </>
  )
}

export default Navbar