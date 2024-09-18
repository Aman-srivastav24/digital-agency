import React from "react";
import about from "../../assets/update/aboutusLogo.png";
import careersupport from "../../assets/about/careersupport.jpeg";
import certificate from "../../assets/update/iso.jpg";
import trainer from "../../assets/update/Industryleading.jpg";
import project from "../../assets/update/realworld.png";
import mission from "../../assets/trainings/leadership.png"

function About() {
  return (
    <div>
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center" data-aos="fade-up">
            <img src={about} className=" rounded-lg"/>
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text" data-aos="fade-up">
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-indigo-600"> The Cloversal</span>
            </h2>
            <p class="text-gray-500">
              Your comprehensive solution for IT training and a suite of
            IT services designed to propel your career and business
              forward.
            </p>
             <div className=" mt-12">
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              <span class="text-indigo-600"> Our Mission </span>
              <img src={mission} alt="cloversal logo" className="w-24 h-24" />
            </h2>
            <p class="text-gray-500 text-[18px]"> 
            At Cloversal, our mission is to provide top-tier training and
                services that empower individuals and organizations to thrive in
                today’s competitive landscape. We are dedicated to offering
                unparalleled Salesforce training and a range of additional
                services to meet your diverse needs.
            </p>
            </div>
            {/* <section class="flex flex-col flex-wrap  mb-6">
        <div class="flex flex-row flex-wrap justify-center">
          <div class="flex justify-center text-center m-2 h-24 w-64">
       
            <div class="flex flex-col text-left bg-gray-900 text-white text-xs self-center pl-16 pr-4 py-2 -ml-12" data-aos="fade-up">
              <h3 class="text-lg">Our Mission</h3>
              <p class="w-64 text-xs overflow-y-hidden overflow-x-auto">
                At Cloversal, our mission is to provide top-tier training and
                services that empower individuals and organizations to thrive in
                today’s competitive landscape. We are dedicated to offering
                unparalleled Salesforce training and a range of additional
                services to meet your diverse needs
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
          </div>
        </div>
      </div>
      {/* mission */}
    
      {/* section2 */}
      <div class="text-center p-8">
        <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why to choose US?
        </h2>

        <div class="flex flex-wrap items-center mt-20 text-left text-center">
          <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={trainer}
              alt="gem"
              class="inline-block rounded shadow-lg border border-merino-400 h-[350px]"
            />
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12" data-aos="fade-up">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Industry-Leading Trainers
            </h3>
            <p class="sm:text-lg mt-6">
              Interactive sessions led by industry experts for collaborative
              learning experiences. Convenient, self-paced modules accessible
              from anywhere, anytime. Combine online learning with in-person
              workshops for a balanced and immersive learning experience.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center mt-20 text-left text-center">
          <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={project}
              alt="project members"
              class="inline-block rounded shadow-lg border border-merino-400 h-[350px]"
            />
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12" data-aos="fade-up">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Real-World Projects
            </h3>
            <p class="sm:text-lg mt-6">
              Gain practical knowledge through hands-on projects and
              scenarios. Engage in practical projects that mirror industry
              scenarios to develop critical problem-solving skills. Gain
              insights from experienced instructors with deep industry knowledge
              to apply theoretical concepts in practical settings.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center mt-20 text-left  text-center">
          <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={certificate}
              alt="editor"
              class="inline-block rounded shadow-lg border border-merino-400 h-[350px]"
            />
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12" data-aos="fade-up">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              100% Certification Pass Guarantee
            </h3>
            <p class="sm:text-lg mt-6">
              We ensure you pass your certification exams with our thorough
              preparation and support. Personalized study plans tailored to your
              learning pace and career objectives. Access to comprehensive study
              materials, including practice exams and quizzes. Expert guidance
              and mentoring from certified trainers with proven track records.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center mt-20 text-left text-center">
          <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={careersupport}
              alt="bulk editing"
              class="inline-block rounded shadow-lg border border-merino-400 h-[350px]"
            />
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12" data-aos="fade-up">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Comprehensive Career Support
            </h3>
            <p class="sm:text-lg mt-6">
              Tailored resume writing and optimization to showcase your skills
              and accomplishments effectively. Practice and refine your
              interview skills with realistic simulations and expert feedback.
              Join a supportive community of past graduates for ongoing
              mentorship and networking opportunities., we support your career
              growth at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
