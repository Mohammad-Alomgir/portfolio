import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling within the same page
import { Link as RouterLink, useLocation } from "react-router-dom"; // For navigating between routes

const Nav = ({ setHambleBur }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <ul className="menu-lists" onClick={() => setHambleBur(false)}>
      <li>
        {isHomePage ? (
          // For scrolling within the home page
          <ScrollLink to="home" smooth={true} duration={100}>
            Home
          </ScrollLink>
        ) : (
          // For navigating back to the home page from other pages
          <RouterLink to="/#home">Home</RouterLink>
        )}
      </li>

      <li>
        {isHomePage ? (
          <ScrollLink to="about" smooth={true} duration={100}>
            About
          </ScrollLink>
        ) : (
          <RouterLink to="/#about" smooth={true} duration={500}>About</RouterLink>
        )}
      </li>

      <li>
        {isHomePage ? (
          <ScrollLink to="skills" smooth={true} duration={100}>
            Services
          </ScrollLink>
        ) : (
          <RouterLink to="/#skills" smooth={true} duration={500}>Services</RouterLink> 
        )}
      </li>

      <li>
        {isHomePage ? (
          <ScrollLink to="work" smooth={true} duration={100}>
            Work
          </ScrollLink>
        ) : (
          <RouterLink to="/#work" smooth={true} duration={500} >Work</RouterLink>
        )}
      </li>
      <li>
        {isHomePage ? (
          <ScrollLink to="Blog" smooth={true} duration={100}>
            Blog
          </ScrollLink>
        ) : (
          <RouterLink to="/#Blog" smooth={true} duration={500} >Blog</RouterLink>
        )}
      </li>

      <li>
        {isHomePage ? (
          <ScrollLink to="contact" smooth={true} duration={100}>
            Contact
          </ScrollLink>
        ) : (
          <RouterLink to="/#contact" smooth={true} duration={500}>Contact</RouterLink>
        )}
      </li>
    </ul>
  );
};

export default Nav;
