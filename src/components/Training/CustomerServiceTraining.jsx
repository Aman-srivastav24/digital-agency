import React from 'react'
import FromComp from '../Contact/FromComp';

const services = [
    "Understanding customer needs: Tailoring solutions to individual requirements.",
    "Active listening: Focus on customer needs effectively.",
    "Clear communication: Conveying information transparently and understandably.",
    "Empathy and patience: Handling issues with care.",
    "Problem-solving skills: Resolving challenges efficiently and effectively.",
    "Product knowledge: In-depth understanding of offerings and features.",
    "Positive attitude: Maintaining a cheerful and approachable demeanor.",
    "Handling complaints and feedback: Addressing concerns with professionalism.",
    "Time management: Prioritizing tasks to optimize efficiency.",
    "Personalization: Customizing interactions for a unique experience.",
    "Conflict resolution: Mediating disputes to achieve satisfaction.",
    "Follow-up practices: Ensuring issues are fully resolved.",
    "Use of customer service tools: Utilizing technology for better service.",
    "Continuous improvement and training: Enhancing skills through ongoing learning.",
    "Adapting to customer feedback: Adjusting services based on input."
  ];
  
  
function CustomerServiceTraining() {
  return (
    <div>
    <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Customer Service Training</p>
              <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300">Creating Outstanding Customer Experiences Through Proven Techniques.
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

export default CustomerServiceTraining;