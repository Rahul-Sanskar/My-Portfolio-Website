import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { scrollTo } from "../utils/lenisSetup";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    
    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const targetSelector = elem.getAttribute("data-href");
        const section = targetSelector ? document.querySelector(targetSelector) : null;
        
        if (section) {
          // Use Lenis scrollTo for smooth navigation
          scrollTo(section as HTMLElement, {
            offset: 0,
            duration: 1.5,
          });
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/images/logo.webp" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:rahulsanskar1607@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          rahulsanskar1607@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
