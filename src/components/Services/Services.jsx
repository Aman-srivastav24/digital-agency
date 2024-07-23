import React from "react";
import trainingCard from "../../assets/blog/trainingcard.png"
import serviceCard from "../../assets/blog/servicecard.jpg"
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      
      <div className="bg-gray-100 dark:bg-black dark:text-white py-4 sm:grid sm:place-items-center" id="services">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We provide training and Development
            </p>
          </div>

          {/* services cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 " >
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm h-[500px] mx-auto mb-4 hover:scale-105 cursor-pointer  " data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0">
    <img src={trainingCard} alt="Training Card" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Training</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">"We offer comprehensive training in Salesforce, Website Development, Digital Marketing, Customer Service, Graphics Designing, and Basics of Computer. Enhance your skills and stay ahead in the competitive IT landscape with our expert-led courses."</div>
    <Link to="/training">
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn "
              >
                Explore
              </button>
            </Link>
</article>

<article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm h-[500px] mx-auto mb-4 hover:scale-105 cursor-pointer" data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0">
    <img src={serviceCard} alt="Service Card" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">IT Services</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">"We offer expert IT services including Salesforce Implementation, Website Development, Digital Marketing, Graphics Designing, and Resourcing. Partner with us to leverage cutting-edge solutions and drive your business forward."</div>
    <Link to="/itservice">
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn "
              >
                Explore
              </button>
            </Link>
</article>
</div>
        </div>
      </div>
    </>
  );
};

export default Services;
