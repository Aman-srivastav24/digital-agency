import React from "react";
import { Link } from "react-router-dom";

const jobPositions = [
  {
    title: "Salesforce Trainer",
    description:
      "Are you an experienced Salesforce professional with a passion for teaching? Join our team of expert trainers and help shape the next generation of Salesforce professionals.",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    color: "indigo-500",
  },
  {
    title: "Business Analyst",
    description:
      "We are looking for analytical thinkers who can bridge the gap between technology and business needs. Help our clients implement effective Salesforce solutions.",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
    color: "purple-500",
  },
  {
    title: "Web Developer",
    description:
      "Join our development team and work on creating stunning, user-friendly websites. Bring your creativity and technical skills to life at Cloversal.",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg",
    color: "cyan-500",
  },
  {
    title: "Digital Marketing Specialist",
    description:
      "If you have a knack for digital strategies and a passion for driving online growth, we want you on our marketing team. Help us reach a wider audience and grow our brand.",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    color: "indigo-500",
  },
  {
    title: "Customer Support Specialist",
    description:
      "Provide exceptional support to our clients and help them navigate their Salesforce journey. Your expertise and dedication will ensure our clients' success.",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
    color: "purple-500",
  },
];

  

function Career() {
  return (
    <div className="">
      {/* career landing section */}
      <div class="flex items-center justify-center h-screen dark:bg-gray-900 bg-gray-200 ">
        <div class="container">
          <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2 bg-careerPage">
            <div class="text-center">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-300 sm:text-5xl sm:leading-none md:text-6xl">
                Join <span class="text-indigo-600">Our Team</span>
              </h2>
              <h3 class="text-xl md:text-3xl text-white mt-10">
                and Shape the Future of Technolgy
              </h3>
              <p class="text-md md:text-xl text-white mt-10">
                At Cloversal, we are passionate about empowering individuals and
                organizations through exceptional Salesforce training and
                innovative solutions. We believe in nurturing talent and
                providing a collaborative environment where you can grow and
                make a meaningful impact. If you're driven, innovative, and
                ready to take your career to the next level, Cloversal is the
                place for you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* job openings */}
      <div>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
            Job Openings
          </h1>
          {jobPositions.map((job, index) => (
            <li
              key={index}
              className="relative flex flex-col sm:flex-row xl:flex-col items-start"
            >
              <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                  <span
                    className={`mb-1 block text-lg leading-6 text-blue-700`}
                  >
                    {job.title}
                  </span>
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>{job.description}</p>
                </div>

                <Link
                  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                  to="/contact"
                >
                  Apply Now
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* why join us */}
      
      <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
            Why Join Us
          </h1>

    <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Dynamic Work Environment</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Experience a vibrant workplace that fosters creativity, innovation, and collaboration. At Cloversal, every day brings new opportunities to learn and grow.",
                        color: "indigo-500</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Career Growth Opportunities</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">We are committed to your professional development. With access to ongoing training, certifications, and mentorship programs, you’ll have the tools and support you need to advance your career.",
                        color: "purple-500</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Innovative Projects</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Join a diverse and inclusive team where every voice is heard and valued. We believe that a diverse workforce drives innovation and excellence.",
                        color: "yellow-400</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Employee Benefits</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Enjoy a comprehensive benefits package that includes health insurance, paid time off, retirement plans, and more. We take care of our team so they can focus on what they do best.",
                        color: "green-500</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
{/* 
how to apply */}
<div class="max-w-3xl mx-auto text-center mt-16">
    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">How to apply</span>
        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
    </h1>
    <p class="text-lg dark:text-gray-300 mb-8">If you’re ready to join a team that values innovation, collaboration, and professional growth,
we’d love to hear from you. Send your resume and cover letter to <a href="mailto:info@cloversal.com" className="text-blue-600">info@cloversal.com </a> or apply
directly through our website.
At Cloversal, we are committed to creating an environment where everyone can thrive. Join us
and be a part of something extraordinary.</p>
</div>
    </div>
  );
}

export default Career;
