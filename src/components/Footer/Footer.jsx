import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin ,FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear();

const FooterLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Career",
    link: "/career",
  },
];

const contact = [
  {
    title: "info@cloversal.com.",
    link: "/#blogs",
  },

  {
    title: "+91 - 8434880379",
    link: "/#blogs",
  },
  {
    title: "+971 - 505852966",
    link: "/#blogs",
  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-white mt-4">
      <section className="container py-10 ">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Cloversal
            </h1>
            <p className="text-sm">
              At Cloversal, our mission is to provide top-tier IT training and
              services that empower individuals and organizations to thrive in
              today’s competitive landscape. We are dedicated to offering
              unparalleled Salesforce training and a range of additional
              services to meet your diverse needs.{" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/cloversaltechnology/">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563361641741&mibextid=rS40aB7S9Ucbxw6v">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/nowrin-fathma-6bb837318/">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href=" https://x.com/CloversalIT">
                <FaTwitter className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <Link to={link.link}>
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact
                </h1>
                <ul className="flex flex-col gap-3">
                  {contact.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">Copyright@ Cloversal {currentYear} |
        All Right Reserved</p>
      </section>
      
    </div>
  );
};

export default Footer;
