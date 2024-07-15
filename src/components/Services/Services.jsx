import React from "react";
import { MdModelTraining } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdInterpreterMode } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { RiPresentationLine } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa6";
import { Link } from "react-router-dom";

const skillsData = [
  {
    name: "Salesforce Implemention",
    icon: <FaCode className="text-4xl text-primary" />,
    link: "/implementation",
    description:
      "Expert guidance for seamless Salesforce integration and implementation tailored to your business needs. Customized configuration and data migration services",
    aosDelay: "500",
  },
  {
    name: "Training",
    icon: <FaSalesforce className="text-4xl text-primary" />,
    link: "#",
    description:
      " Our extensive programs cover Salesforce Administration, Development, Business Analysis, Data Analysis, Sales, and Consulting. Delivered by industry-renowned trainers.",

    aosDelay: "0",
  },
  {
    name: "Web Development",
    icon: <CgWebsite className="text-4xl text-primary" />,
    link: "#",
    description:
      "Professional website development services to enhance your digital presence. Custom design reflecting your brand identity and user-friendly interface. ",
    aosDelay: "300",
  },

  {
    name: "Staff Augmentation",
    icon: <MdModelTraining className="text-4xl text-primary" />,
    link: "#",
    description:
      "We provide staffing solutions to help you find the right talent for your organization. Strategic workforce consulting to streamline HR processes and optimize team performance.",
    aosDelay: "700",
  },
  {
    name: "Digital Marketing",
    icon: <RiPresentationLine className="text-4xl text-primary" />,
    link: "#",
    description:
      "Comprehensive digital marketing services to grow your business online.",
    aosDelay: "700",
  },
  {
    name: "Certification Support",
    icon: <GrCertificate className="text-4xl text-primary" />,
    link: "#",
    description:
      " Standalone certification support services to help you achieve your Salesforce certification.",
    aosDelay: "700",
  },
  {
    name: "Placement Service",
    icon: <MdConnectWithoutContact className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our professional and trained staff ensures placing the right candidate to the right job. Adept at finding quick and suitable placements for our candidates.",
    aosDelay: "700",
  },
  {
    name: "Graphic Designing",
    icon: <MdInterpreterMode className="text-4xl text-primary" />,
    link: "#",
    description:
      "We provide seamless Graphic design to our client by understanding their requirment.",
    aosDelay: "700",
  },
  
];
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4 border-[1px] border-gray-600 rounded-lg shadow-lg "
              >
                <div>{skill.icon}</div>
              <Link to={skill.link}> <h1 className="text-[20px] font-semibold cursor-pointer hover:scale-110">{skill.name}</h1></Link> 
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </>
  );
};

export default Services;
