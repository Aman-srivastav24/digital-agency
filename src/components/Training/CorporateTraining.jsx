import React from "react";

import { Link } from "react-router-dom";

const CorporateTraining = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14 bg-hero-pattern mt-8 rounded-lg bg-cover bg-no-repeat bg-center">
        <section data-aos="fade-up" className="container ">
          
          <div className="grid  gap-6">
          <span className="text-[20px] font-semi text-white">We also offer tailored <span className="text-[50px] text-white font-semibold"> corporate training solutions </span> to enhance your team's skills and performance, ensuring your organization stays competitive in the market.</span>
            <Link to="/contact"><button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn w-[200px] h-[60px]"
            >
              Join Us
            </button>
            </Link>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default CorporateTraining;
