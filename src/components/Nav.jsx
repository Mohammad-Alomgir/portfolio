import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling within the same page
import { Link as RouterLink, useLocation } from "react-router-dom"; // For navigating between routes
import { useEffect } from "react";

const Nav = ({ setHambleBur }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Smooth scroll handling for when navigating between pages
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
          <RouterLink to="/#about">About</RouterLink>
        )}
      </li>

      <li>
        {isHomePage ? (
          <ScrollLink to="skills" smooth={true} duration={100}>
            Services
          </ScrollLink>
        ) : (
          <RouterLink to="/#skills">Services</RouterLink>
        )}
      </li>

      <li>
        {isHomePage ? (
          <ScrollLink to="work" smooth={true} duration={100}>
            Work
          </ScrollLink>
        ) : (
          <RouterLink to="/#work">Work</RouterLink>
        )}
      </li>
      
    

      <li>
        {isHomePage ? (
          <ScrollLink to="contact" smooth={true} duration={100}>
            Contact
          </ScrollLink>
        ) : (
          <RouterLink to="/#contact">Contact</RouterLink>
        )}
      </li>
    </ul>
  );
};

export default Nav;
