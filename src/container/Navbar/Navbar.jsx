import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.artvista1} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#menu">Explore</a></li>
        <li className="p__opensans"><a href="#about us">About us</a></li>
      </ul>
      < div className="app__navbar-login">
        <FiGithub color="#fff" fontSize={27}> <a href="https://github.com/SubhashSolleti"></a> </FiGithub>
        <FiLinkedin color="#fff" fontSize={27}> <a href="https://www.linkedin.com/in/solletikrishnachaitanyasubhash//"></a> </FiLinkedin>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#orders" onClick={() => setToggleMenu(false)}>Orders</a></li>
              <li><a href="#about us" onClick={() => setToggleMenu(false)}>About us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

