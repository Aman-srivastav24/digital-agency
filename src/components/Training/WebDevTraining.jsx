import React from 'react'
import FromComp from '../Contact/FromComp';

const services = [
    
        "HTML and CSS: Master HTML and CSS to create and style web pages effectively.",
        "JavaScript Fundamentals: Learn JavaScript basics to add interactivity and functionality to websites.",
        "Responsive Design: Understand responsive design principles to make websites mobile-friendly and adaptable.",
        "Version Control (Git): Use Git for version control to manage and track code changes.",
        "Frontend Frameworks (React, Angular, Vue.js): Explore React, Angular, and Vue.js to build dynamic user interfaces.",
        "Backend Frameworks (Node.js, Django, Ruby on Rails): Learn backend frameworks like Node.js, Django, and Ruby on Rails.",
        "Development Tools (VS Code, Webpack, Babel): Utilize VS Code, Webpack, and Babel for efficient development workflows.",
        "Browser Developer Tools: Use browser developer tools for debugging and optimizing web applications.",
        "APIs and AJAX: Implement APIs and AJAX for dynamic data interactions in web apps.",
        "Database Management (MySQL, PostgreSQL, MongoDB): Manage databases like MySQL, PostgreSQL, and MongoDB for data storage.",
        "User Authentication: Implement user authentication to secure web applications and manage users.",
        "Web Security Best Practices: Learn web security best practices to protect applications from vulnerabilities.",
        "Deployment and Hosting (AWS, Heroku): Deploy and host web applications using AWS, Heroku, and other services.",
        "SEO Basics: Understand SEO basics to improve website visibility and search engine ranking.",
        "Continuous Learning (Blogs, Forums, Coding Challenges): Engage in continuous learning through blogs, forums, and coding challenges."
      
      
  ]
  
function WebDevTraining() {
  return (
    <div>
    <section className="overflow-hidden bg-white dark:bg-gray-900 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Web Development Training</p>
              <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300">Empower Your Career: Top-Tier Web Development Training for Aspiring Developers.
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

export default WebDevTraining;