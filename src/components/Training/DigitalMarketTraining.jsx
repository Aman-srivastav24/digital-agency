import React from 'react'
import FromComp from '../Contact/FromComp';

const services = [
    "Introduction to Digital Marketing: Basics of online marketing strategies.",
    "Website Fundamentals: Core concepts for building and managing websites.",
    "Search Engine Optimization (SEO): Techniques to improve website search rankings.",
    "Search Engine Marketing (SEM): Paid strategies to drive search engine traffic.",
    "Social Media Marketing (SMM): Utilizing platforms to promote and engage audiences.",
    "Content Marketing: Creating valuable content to attract and retain customers.",
    "Email Marketing: Strategies for reaching customers through targeted email campaigns.",
    "Analytics: Tools and methods to measure and analyze marketing performance.",
    "Digital Marketing Strategy: Developing comprehensive plans for effective online marketing.",
    "Mobile Marketing: Techniques for reaching audiences via mobile devices.",
    "Emerging Trends: Latest developments and innovations in digital marketing.",
    "Legal and Ethical Considerations: Guidelines for responsible and compliant marketing practices."
  ];
  
function DigitalMarketTraining() {
  return (
    <div>
    <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Digital Marketing Training</p>
              <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300">"Master the Digital Landscape: Transform Your Marketing Skills Today!
        </p>
              <dl className="mt-10 max-w-xl space-y-1 text-base leading-7 text-gray-600 lg:max-w-none bg-careerPage bg-cover text-center rounded">
                {services.map((service, index) => (
                  <div key={index} className="relative p-2">
                    <dd className="inline text-white font-semibold">
                      &#11088; {service}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            
          </div>
          <FromComp />
        </div>
      </div>
    </section>
  </div>
  )
}

export default DigitalMarketTraining;