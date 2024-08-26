import React from "react";
import yellowCar from "../../assets/website/Salesforce.png";
import Services from '../Services/Services';
import { SalesForceTraining } from '../Training/SalesForceTraining';
import Testimonial from '../Testimonial/Testimonial';
import { ContactPageTwo } from '../Contact/Contact';
import { Link } from "react-router-dom";
import Career from "../Career/Career";
import SalesforceImplementation from "../Services/SalesforceImplementation";
import Training from "../Training/Training";
import ItServices from "../Services/ItServices";
import WebDev from "../Services/WebDev";

// Import your video file
import backgroundVideo from '../../assets/brands/6218-189900449_medium.mp4';

const Hero = () => {
  return (
    <div className="relative min-h-[620px] dark:bg-gray-950 dark:text-white duration-300" id="">
     

      {/* Content Section */}
      <div className="container relative min-h-[620px] flex mt-10 sm:mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
           {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden w-full rounded-lg ">
        <video
          autoPlay
          loop
          muted
          className="h-[620px] w-full object-cover "
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          {/* Image section */}
          {/* <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt="Salesforce"
              className="w-full sm:max-w-[280px] md:max-w-[530px] rounded-lg"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐We Provide</p>
              <h1 className="font-bold">Salesforce Training</h1>
            </div>
          </div> */}

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl text-white font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Welcome To{" "}
              <span className="text-primary font-bold">Cloversal</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-white">
              Your comprehensive solution for Salesforce training and a suite of
              professional services designed to propel your career and business
              forward.
            </p>
            <p data-aos="fade-up" data-aos-delay="300" className="text-white">
              Ready to take the next step in your career? Enroll now and start
              with a free demo class! Discover why Cloversal is the preferred
              choice for Salesforce training and a range of professional
              services.
            </p>
            <Link to="/contact">
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn m-4"
              >
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Additional Sections */}
      <Services />
      <Training />
      <ItServices />
      <Testimonial />
      <ContactPageTwo />
    </div>
  );
};

export default Hero;
