import React from "react";
import yellowCar from "../../assets/website/Salesforce.png";
import Services from '../Services/Services'
import { SalesForceTraining } from '../Training/SalesForceTraining'
import Testimonial from '../Testimonial/Testimonial'
import { ContactPageTwo } from '../Contact/Contact'
import { Link } from "react-router-dom";
import Career from "../Career/Career";
import SalesforceImplementation from "../Services/SalesforceImplementation";
import Training from "../Training/Training";


const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 " id="">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[530px] rounded-lg"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8  px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐We Provide</p>
              <h1 className="font-bold">Salesforce Training</h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Welcome To{" "}
              <span className="text-primary font-bold">Cloversal</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Your comprehensive solution for Salesforce training and a suite of
              professional services designed to propel your career and business
              forward.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
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
     
      <Services />
      <Training/>
      <SalesforceImplementation/>
      <Testimonial />
      <ContactPageTwo />
    </div>
  );
};

export default Hero;
