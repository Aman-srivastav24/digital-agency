import React from "react";
import salesCloud from "../../assets/website/salescloud.jpeg";
import servicecloud from "../../assets/website/servicecloud.png";
import marketcloud from "../../assets/website/marketcloud.png";
import experiencecloud from "../../assets/website/experiencecloud.png";
import cpq from "../../assets/website/cpq.jpg"
import fsl from "../../assets/website/fsl.jpg"
import einstein from "../../assets/website/Einstein.png"
import mulesoft from "../../assets/website/mulesoft.png"
import { Link } from "react-router-dom";
function SalesforceImplementation() {
  const cloud = [
    {
      title: "Sales Cloud",
      desc: "Sales Cloud is a CRM platform that streamlines sales processes, helping businesses manage leads, close deals faster, and boost productivity with automation and analytics. Cloversal Technology optimizes Sales Cloud to enhance sales strategies and maximize revenue.",
      img: salesCloud,
    },
    {
      title: "Service Cloud",
      desc: "Service Cloud enables businesses to deliver superior customer support across channels like email and social media. It offers case management, automation, and knowledge sharing. Cloversal Technology integrates Service Cloud to improve customer experiences and resolve issues quickly.",
      img: servicecloud,
    },
    {
      title: "Marketing Cloud",
      desc: "Marketing Cloud provides tools to automate and personalize marketing, supporting multi-channel campaigns, email marketing, and customer journeys. Cloversal Technology customizes Marketing Cloud to meet business goals, enhancing customer engagement and driving loyalty.",
      img: marketcloud,
    },
    {
      title: "Experience Cloud",
      desc: "Experience Cloud enables businesses to create engaging digital experiences for customers, partners, and employees through portals, websites, or apps. Cloversal Technology implements Experience Cloud to foster stronger relationships via tailored digital platforms.",
      img: experiencecloud,
    },
  ];
  const product= [
    {
      title: "CPQ (Configure, Price, Quote)",
      desc: "CPQ automates product configuration, accurate pricing, and quote generation. It simplifies complex sales processes, ensuring quick and error-free quotes. Cloversal Technology implements CPQ to streamline sales cycles, reduce manual tasks, and boost operational efficiency.",
      img: cpq,
    },
    {
      title: "Field Service Lightning (FSL)",
      desc: "FSL optimizes mobile workforce management by scheduling, tracking inventory, and offering real-time updates. Ideal for service industries requiring technician dispatch. Cloversal Technology integrates FSL to enhance field operations and improve overall customer satisfaction.",
      img: fsl,
    },
    {
      title: "Einstein",
      desc: "Einstein provides AI-powered insights, recommendations, and automation across Salesforce platforms. It enables smarter decisions, task automation, and improved customer interactions. Cloversal Technology integrates Einstein to deliver personalized, data-driven customer engagement with AI-enhanced capabilities.",
      img: einstein,
    },
    {
      title: "Mulesoft",
      desc: "MuleSoft connects data, applications, and devices across your enterprise for seamless communication. Cloversal Technology uses MuleSoft to integrate Salesforce with external systems, ensuring smooth data flow and improved operational efficiency across all platforms.",
      img: mulesoft,
    },
  ];
  return (
    <div className="flex flex-col m-2 mb-6 justify-center gap-8">
      <section class="relative w-full  overflow-hidden bg-indigo-600 py-40 px-8 mt-10 bg-center bg-cover bg-implement">
        <div class="container">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <div class="text-center lg:text-left ">
                <div class="mb-10 lg:mb-0 ">
                  <h1
                    data-aos="fade-up"
                    class="mt-0 mb-3 text-4xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[50px] md:leading-tight text-gray-950 "
                  >
                    Salesforce Implementaion
                  </h1>
                  <p class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white"></p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2">
              <div class="text-center lg:text-right" data-aos="fade-up">
                <Link
                  class="font-semibold rounded-lg mx-auto inline-flex items-center justify-center dark:bg-gray-900 bg-black text-white py-4 px-9 hover:bg-opacity-90"
                  to="/contact"
                >
                  Try Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span class="absolute top-0 right-0 -z-10">
          <svg
            width="388"
            height="250"
            viewBox="0 0 388 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6910)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6910"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute top-0 right-0 -z-10">
          <svg
            width="324"
            height="250"
            viewBox="0 0 324 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6911)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6911"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
    
      </section>
      {/* feature of sales forcecloud */}
      <div>
        <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  my-6 font-sans font-bold border-teal-400  dark:text-gray-200" data-aos="fade-up">
          Salesforce Core Cloud
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4" data-aos="fade-up">
          {cloud.map((cloud) => (
            <div class="card space-y-3 bg-gradient-to-r from-black to-blue-400  sm:space-y-4 p-4 border-[1px] border-gray-600 rounded-lg shadow-lg">
              <div class="relative pt-10 px-10 flex items-center justify-center  transition-transform">
                <img
                  class="relative w-48 h-48 mb-4 rounded-lg"
                  src={cloud.img}
                  alt=""
                />
              </div>
              <div class="relative  px-2 pb-6 mt-6">
                <span class="block text-white font-semibold text-xl">{cloud.title}</span>

                <span class="block text-gray-300 opacity-85 -mb-1">{cloud.desc}</span>
              <Link to="/contact">  <button className="primary-btn mt-4">Enquiry Now</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* salesforce product */}
      <div>
        <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  my-6 font-sans font-bold border-teal-400  dark:text-gray-200" data-aos="fade-up">
          Salesforce Product
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4" data-aos="fade-up">
          {product.map((product) => (
            <div class="card space-y-3 bg-gradient-to-r from-black to-blue-400 sm:space-y-4 p-4 border-[1px] border-gray-600 rounded-lg shadow-lg">
              <div class="relative pt-10 px-10 flex items-center justify-center  transition-transform">
                <img
                  class="relative w-48 h-48 mb-4 rounded-lg"
                  src={product.img}
                  alt=""
                />
              </div>
              <div class="relative  px-2 pb-6 mt-6">
                <span class="block text-white font-semibold text-xl">{product.title}</span>

                <span class="block text-gray-300 opacity-85 -mb-1">{product.desc}</span>
               <Link to="/contact"><button className="primary-btn mt-4">Enquiry Now</button></Link> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesforceImplementation;
