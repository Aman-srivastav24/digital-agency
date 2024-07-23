import React from 'react';
import FromComp from '../Contact/FromComp';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import webd from "../../assets/about/webdev.jpg"

const services = [
   " Search Engine Optimization (SEO): Boost your website's visibility and rankings on search engines.",
    "Pay-Per-Click (PPC) Advertising: Drive targeted traffic to your site with cost-effective PPC ads.",
   " Social Media Marketing (SMM): Engage with your audience and grow your brand on social media.",
    "Content Marketing: Create valuable content to attract and retain your target audience.",
    "Email Marketing: Reach and nurture leads through personalized and effective email campaigns.",
   " Conversion Rate Optimization (CRO): Increase your website's conversion rates for more leads and sales.",
    "Online Reputation Management (ORM): Manage and improve your online reputation to build customer trust.",
   " Influencer Marketing: Collaborate with influencers to boost your brand's reach and credibility."
  ];
  

function DigitalMarketing() {
  return (
    <div>
      <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Digital Marketing</p>
                <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"> Boost your online presence with our digital marketing strategies.
          </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {services.map((service, index) => (
                    <div key={index} className="relative pl-9">
                      <dd className="inline text-blue-600 font-semibold">
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
  );
}

export default DigitalMarketing;
