import React from 'react'
import FromComp from '../Contact/FromComp';

const services = [
    "Logo Design: Create unique logos that represent your brand's identity.",
    "Branding & Identity: Build a strong, cohesive brand identity and presence.",
    "Print Design (Brochures, Flyers, etc.): Design impactful print materials to promote your business.",
    "Packaging Design: Create attractive, functional packaging that enhances product appeal.",
    "UI/UX Design: Design intuitive and engaging user interfaces and experiences.",
    "Web Graphics & Banners: Design eye-catching web graphics and banners for your site.",
    "Infographics: Present complex data visually with compelling, easy-to-understand infographics."
  ]
  
function GraphicDesign() {
  return (
    <div>
    <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Graphic Designing</p>
              <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300">"Bringing your brand to life with creative and impactful designs. 
        </p>
              <dl className="mt-10 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none bg-careerPage bg-cover text-center rounded">
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

export default GraphicDesign