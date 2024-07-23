import React from 'react'
import FromComp from '../Contact/FromComp';

const services = [
    "Design basics: principles, color theory, typography for effective visuals.",
    "Software: Photoshop, Illustrator, Figma for professional graphic design creation.",
    "Process: research, ideation, sketching, feedback for design development.",
    "Inspiration: blogs, trends to stay updated with design innovations.",
    "Practice: projects, challenges to refine and enhance design skills.",
    "Portfolio: showcase, case studies to demonstrate your design capabilities.",
    "Feedback: critique, communities for improving and evolving design work.",
    "Networking: workshops, courses to connect and learn from professionals.",
    "Specializations: web design, UI/UX, branding for focused design expertise."
  ];
  
function GraphicDesignTraining() {
  return (
    <div>
    <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Graphic Designing Training</p>
              <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300">Innovate and Excel: Advanced Digital Marketing Training for Modern Business Success.
        </p>
              <dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none bg-careerPage bg-cover text-center rounded">
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

export default GraphicDesignTraining;