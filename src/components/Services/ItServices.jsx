import React from 'react';
import { Link } from 'react-router-dom';
import implementation from "../../assets/about/Salesforceeimplementation.jpg";
import dm from "../../assets/about/dm.jpg";
import webdev from "../../assets/about/webdev.jpg";
import resourcing from "../../assets/about/resourcing.jpg";
import gd from "../../assets/about/gd.jpg";
import it from "../../assets/about/consultingbg.jpg";
import appdev from "../../assets/about/mobiledev.jpg"

const services = [
  {
    image: implementation,
    title: "Salesforce Implementation",
    description: "Optimizing your business processes with customized Salesforce solutions. Our experts streamline your CRM, enhance customer interactions, and drive growth through efficient Salesforce implementation.",
    link: "/implementation"
  },
  {
    image: webdev,
    title: "Web Development",
    description: "Creating innovative, responsive, and user-friendly websites tailored to your business needs. Our web development solutions ensure a seamless online presence and exceptional user experience.",
    link: "/webdevService"
  },
  {
    image: dm,
    title: "Digital Marketing",
    description: "Boost your online presence with our digital marketing strategies. From SEO to social media, we help you connect with your audience and grow your brand.",
    link: "/digitalmarketingService"
  },
  {
    image: resourcing,
    title: "Resourcing/Staff augmentation",
    description: "Providing top-tier talent for your IT projects. Our resourcing services ensure you have skilled professionals to meet your business demands and achieve your goals.",
    link: "/resourcingService"
  },
  {
    image: gd,
    title: "Graphic Designing",
    description: "Bringing your brand to life with creative and impactful designs. Our graphic designing services deliver visually stunning solutions that communicate your message effectively.",
    link: "/graphicdesignService"
  },
  {
    image: appdev,
    title: "Mobile App Development",
    description: "With a passion for delivering exceptional user experiences, we develop apps that are intuitive, engaging, and scalable. Let us help you turn your mobile app vision into a reality.",
    link: "/appdevService"
  }
];

function ItServices() {
  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-800 py-20 mb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl pl-2 my-2 border-l-4 my-6 font-sans font-bold border-teal-400 dark:text-gray-200" data-aos="fade-up">
            IT Services
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="dark:text-white font-bold text-5xl leading-tight mb-6">Innovative IT Solutions, Exceptional Results</h1>
              <p className="dark:text-gray-300 text-gray-900 text-xl mb-8">Crafting responsive, user-friendly websites tailored to your business needs. Our web development services ensure a seamless online presence, exceptional user experience, and robust performance to drive your success.</p>
            </div>
            <div className="md:w-1/2">
              <img src={it} alt="IT Services" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <h1 className="text-2xl md:text-4xl pl-2 my-2 border-l-4 mb-4 my-6 font-sans font-bold border-teal-400 dark:text-gray-200" data-aos="fade-up">
          IT Services
        </h1>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full  max-w-full mb-8 sm:w-1/2 px-2 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
              <img src={service.image} alt={`${service.title} img`} className="object-cover border  object-center w-full h-48" />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-gradient-to-r from-black to-blue-400 dark:bg-black border-gray-400 text">
                  <div>
                    <Link to={service.link} className="block mb-4 text-2xl text-gray-300 font-bold leading-tight hover:underline hover:text-blue-600">
                      {service.title}
                    </Link>
                    <p className="mb-2 text-gray-100">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <Link to={service.link} className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ItServices;
