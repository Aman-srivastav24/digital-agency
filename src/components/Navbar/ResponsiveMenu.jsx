import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <Link to={data.link} className="mb-5 inline-block">
                  {data.name}
                </Link>
              </li>
            ))}
            <Link to='/contact'>
             <button className="primary-btn">Get in Touch</button>
             </Link>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Cloversal 
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
