import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar" data-scroll>
      <div className="navbarLogo">
        <img src={images.gericht} alt="AppLogo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home" data-scroll-to>
            Home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#about" data-scroll-to>
            About
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu" data-scroll-to>
            Menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#awards" data-scroll-to>
            Awards
          </a>
        </li>
        <li className="p__opensans">
          <a href="#contact" data-scroll-to>
            Contact
          </a>
        </li>
      </ul>
      <div className="app-navbarLogin">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="cursor-pointer"
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
