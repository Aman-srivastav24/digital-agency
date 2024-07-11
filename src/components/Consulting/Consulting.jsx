import React from 'react'
import { Link } from 'react-router-dom'
import implementation from '../../assets/website/Salesforce-Implementation-services.png'
import integration from '../../assets/website/Salesforce-Integrations.png'
import admistration from '../../assets/website/admistration.png'
export function Consulting() {
    const consultings = [
        {
          name: ' Salesforce Implementation',
          description:
            'Comprehensive end-to-end implementation services to ensure a seamless transition to Salesforce.Customized setup and configuration tailored to your business processes and requirements.Integration with existing systems and applications for streamlined operations.',
          img: implementation,
        },
        {
          name: 'Salesforce integration',
          description:
            ' Seamless integration of Salesforce with other business-critical systems and applications. Use of APIs and middleware to enable real-time data exchange and synchronization. Ensuring smooth interoperability between Salesforce and third-party tools for a unified business environment',
          img: integration,
        },
        
        {
          name: 'Salesforce Admistration',
          description:
            '  Salesforce Administration consulting services designed to help you manage and optimize your Salesforce environment. Our certified Salesforce administrators are equipped with the knowledge and experience to ensure your Salesforce platform runs smoothly, efficiently, and securely.',
          img: admistration,
        },
      ]
  return (
    <div className="px-2 py-2 md:px-6 md:py-10">
      <h1 className="text-4xl font-bold capitalize text-black dark:text-gray-400 text-center lg:text-3xl" data-aos="fade-in">
        Salesforce Consulting
      </h1>
      <p className="my-2 text-gray-500 text-center">
      Salesforce Implementation
Drive business transformation with seamless Salesforce integration tailored to your
organizational goals.
      </p>
      <hr clas/>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16 py-4">
        {consultings.map((consult, i) => (
          <div key={i} className="space-y-3 p-2" data-aos="fade-up">
            <span className="inline-block rounded-lg  bg-gray-100 ">
              <img src={consult.img} className='w-full h-48 rounded-lg' alt="" srcset="" />
            </span>
            <h1 className="text-xl font-semibold capitalize dark:text-white text-black">{consult.name}</h1>
            <p className="text-sm text-gray-500">
          {consult.description}
            </p>
            <Link
              to="/contact"
              className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
            >
              
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn m-4"
              >
                Enquire Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
