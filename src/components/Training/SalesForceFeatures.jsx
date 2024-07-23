import React, { useState } from 'react';
import { MdOutlineAdminPanelSettings, MdDeveloperMode, MdBusiness, MdAnalytics, MdCloudSync, MdOutlineContacts } from "react-icons/md";

const features = [
  {
    name: 'Salesforce Administration',
    description: 'Master the essentials of Salesforce setup, configuration, and maintenance to optimize business processes. Our comprehensive training covers user management, security settings, and automation tools to enhance your organization’s efficiency. Develop the skills to customize Salesforce to meet your business needs and improve data integrity. Gain hands-on experience with real-world scenarios, ensuring you can effectively manage and troubleshoot your Salesforce environment, ultimately driving productivity and business success.',
    icon: MdOutlineAdminPanelSettings,
  },
  {
    name: 'Salesforce Development',
    description: 'Dive into advanced Apex programming, Visualforce, Lightning components, and Salesforce DX for robust application development. Learn to build custom applications tailored to your business needs, automate complex business processes, and enhance user interfaces with Salesforce development tools. Our training provides in-depth knowledge of Salesforce’s development environment, equipping you with the skills to create scalable and maintainable solutions, thereby transforming your organization’s capabilities and performance.',
    icon: MdDeveloperMode,
  },
  {
    name: 'Salesforce Business Analysis',
    description: 'Acquire skills in requirement gathering, process mapping, and stakeholder management to deliver effective Salesforce solutions. Learn how to analyze business processes, identify areas for improvement, and implement Salesforce solutions that drive business success. Our training emphasizes practical applications and real-world scenarios, preparing you to bridge the gap between business needs and technical solutions, ensuring that your Salesforce implementations are both efficient and effective.',
    icon: MdBusiness,
  },
  {
    name: 'Salesforce Data Analysis',
    description: 'Harness the power of Salesforce data with advanced reporting, dashboard creation, and data migration techniques. Learn how to transform raw data into actionable insights, create custom reports, and develop interactive dashboards that drive informed decision-making. Our training covers data cleaning, integration, and visualization, providing you with the tools to optimize data usage and enhance business intelligence within your organization, leading to more strategic and data-driven decisions.',
    icon: MdAnalytics,
  },
  {
    name: 'Salesforce QA',
    description: 'Learn to leverage Salesforce CRM tools for effective sales management and customer service delivery. Our training covers testing methodologies, automation tools, and best practices to ensure your Salesforce implementation meets business requirements and maintains high quality. Gain expertise in identifying and resolving issues, ensuring that your Salesforce applications are robust, reliable, and provide a seamless user experience, ultimately contributing to greater customer satisfaction and operational efficiency.',
    icon: MdCloudSync,
  },
  {
    name: 'Salesforce Project Manager',
    description: 'Gain expertise in solution architecture, implementation strategies, and client advisory to drive business success. Learn how to manage Salesforce projects from inception to completion, including planning, execution, monitoring, and closing, ensuring project goals are met. Our training provides insights into managing teams, budgets, and timelines, preparing you to lead Salesforce projects effectively and deliver results that align with organizational objectives and stakeholder expectations.',
    icon: MdOutlineContacts,
  },
  {
    name: 'Salesforce Architect',
    description: 'Acquire skills in requirement gathering, process mapping, and stakeholder management to deliver effective Salesforce solutions. Learn how to design and implement scalable and secure Salesforce solutions that meet complex business requirements. Our training covers best practices in architecture design, integration, and optimization, equipping you with the knowledge to create robust systems that enhance performance, security, and scalability, ultimately supporting your organization’s strategic goals.',
    icon: MdBusiness,
  },
];

export default function SalesForceFeatures() {
  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-200 rounded-lg sm:py-20 mt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-in">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight dark:text-gray-300 sm:text-4xl" data-aos="fade-in">
            Why Choose Cloversal for Salesforce Training?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Cloversal offers a wide range of specialized Salesforce training courses designed to cater to diverse career goals and skill levels:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 dark:text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-500" data-aos="fade-up">
                  {showDescription[index] ? (
                    <>
                      {feature.description}
                      <div className="mt-4 flex space-x-4">
                      <button
                          className="bg-indigo-600 text-white py-2 px-4 rounded"
                        >
                          Join Now
                        </button>
                        <button
                          className="text-indigo-600"
                          onClick={() => toggleDescription(index)}
                        >
                          Read Less
                        </button>
                        
                      </div>
                    </>
                  ) : (
                    <>
                      {`${feature.description.substring(0, 80)}...`}
                      <button
                        className="text-indigo-600 ml-2"
                        onClick={() => toggleDescription(index)}
                      >
                        Read More
                      </button>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
