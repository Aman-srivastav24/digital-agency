import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "./DarkMode";
import cloversalLogo from "../../assets/brands/CloversalLogo.jpeg"
import { Link } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "Training",
    link: "/training",
  },
  {
    id: 2,
    name:  "IT Services",
    link: "/itservice",
  },
  {
    id: 3,
    name: "Achievements",
    link: "/testimonial",
  },

  {
    id: 4,
    name: "Career",
    link: "/career",
  },
  {
    id: 5,
    name: "About Us",
    link: "/about",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleMenuClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed w-full top-0 left-0 z-10 dark:bg-black dark:text-white bg-white duration-300"
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img src={cloversalLogo} alt="" className="w-[40px] h-[40px] rounded-lg " />
            <span className="text-2xl sm:text-3xl font-semibold">
              Cloversal
            </span>
          </Link>
          {/* Desktop view Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <Link to="/contact">
                <button className="primary-btn">Get in Touch</button>
              </Link>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 lg:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu 
        showMenu={showMenu} 
        handleMenuClose={handleMenuClose} 
        ref={menuRef} 
      />
    </div>
  );
};

export default Navbar;
