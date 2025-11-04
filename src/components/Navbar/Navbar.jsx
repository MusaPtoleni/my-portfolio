import './Navbar.css'
import { IoMenu } from "react-icons/io5";
import Logo from '../../assets/images/logo.png'
import Menu from '../Menu/Menu';
import { useState } from 'react';
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
// import { FaWordpress } from "react-icons/fa6";
import { Link } from 'react-router';

function Navbar() {
  const [display, setDisplay] = useState("");

  // Handles the menu hide and show toggle
  const handleClick = () => {
    if (display == "flex") setDisplay("none");
    else setDisplay("flex");
  };

  return (
    <header className="navbar">
      <Link to='/'><img src={Logo} alt="logo" /></Link>
{/* Links */}
      <nav className="links">
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><a href='https://github.com/MusaPtoleni?tab=repositories'>Git Repo</a></li>
<<<<<<< HEAD
          <li><Link to='/contact'>Contact</Link></li>
=======
          {/* <li><Link to='/contact'>Contact</Link></li> */}
>>>>>>> 187b0526878f769779babe39399e79e8d7f6fb3e
        </ul>
      </nav>
{/* icons */}
      <div className="menu-bar">
        <IoMenu className="icons" onClick={handleClick} />
      </div>
      <div className='nav-socials'>
        <a href="https://github.com/MusaPtoleni"><SlSocialGithub id='git' /></a>
        <a href="https://www.linkedin.com/in/musa-toleni-01b920226/"><SlSocialLinkedin id='linkedin'/></a>
        {/* <a href='wordpress.com'><FaWordpress/></a> */}
      </div>
{/* Side Menu */}
      <Menu display={display} />
    </header>
  );
}

export default Navbar;