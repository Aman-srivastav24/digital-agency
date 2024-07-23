import React from 'react'
import FromComp from '../Contact/FromComp';
const services = [
    "Flexible staffing solutions: Adapt to your business needs with flexible staffing options.",
    "Temporary and contract placements: Fill short-term roles quickly with temporary and contract staff.",
    "Permanent placements: Secure top talent for long-term success with permanent hires.",
    "Specialized skill sourcing: Find experts with the specific skills your projects require.",
    "Dedicated team augmentation: Enhance your team with dedicated, skilled professionals.",
    "Scalable workforce solutions: Easily scale your workforce to meet changing business demands."
  ]
  
function Resourcing() {
  return (
    <div>
    <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Resourcing</p>
              <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300"> Our resourcing services ensure you have skilled professionals to meet your business demands and achieve your goals.
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
  )
}

export default Resourcing