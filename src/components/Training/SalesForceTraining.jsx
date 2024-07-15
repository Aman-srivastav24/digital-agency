import React from "react";

import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import SalesForceFeatures from "./SalesForceFeatures";
import CorporateTraining from "./CorporateTraining";
import { Link } from "react-router-dom";

export function SalesForceTraining() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 mb-6">
      <div className="mx-auto max-w-xl text-center" data-aos="fade-up">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            Elevate your career with Cloversal
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight dark:text-white sm:text-4xl lg:text-5xl">
          Salesforce <span className="text-primary"> Training</span>
        </h2>
        <Link to="/contact">
        <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
             
              className="primary-btn mt-4"
            >
              Join Us
            </button>
            </Link>
        <p className="mt-4 text-base leading-relaxed dark:text-gray-400">
          Your premier destination for cutting-edge your gateway to mastering
          Salesforce with industry-leading training programs designed to elevate
          your skills and propel your career.
        </p>
      </div>
      <SalesForceFeatures/>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4" data-aos="fade-up">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaProjectDiagram className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold dark:text-white">
            Real-World Projects
          </h3>
          <ul className="list-disc pl-5 space-y-2 dark:text-gray-400">
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Engage in practical projects </span>
              that mirror industry scenarios to develop critical problem-solving
              skills. simulations
            </li>
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Gain insights </span> from
              experienced instructors with deep industry knowledge to apply
              theoretical concepts in practical settings
            </li>
          </ul>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaBookReader className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold dark:text-white">
            Guaranteed Certification
          </h3>
          <ul className="list-disc pl-5 space-y-2 dark:text-gray-400">
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Expert guidance </span>that and
              mentoring from certified trainers with proven track records.
              simulations
            </li>
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Structured review sessions </span>to
              assess readiness and ensure exam success. simulations
            </li>
            <li className="mt-4 text-sm ">
              <span className="font-bold">Personalized study plans </span>s
              tailored to your learning pace and career objectives simulations
            </li>
          </ul>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <PiCertificateFill className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold dark:text-white">
            Flexible Learning Options
          </h3>
          <ul className="list-disc pl-5 space-y-2 dark:text-gray-400">
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Blended Learning </span>: Combine
              online learning with in-person workshops for a balanced and
              immersive learning experience.
            </li>
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Instructor-Led Classes </span>:
              Interactive sessions led by industry experts for collaborative
              learning experiences.
            </li>
            <li className="mt-4 text-sm">
              {" "}
              <span className="font-bold">Online Courses </span>: Convenient,
              self-paced modules accessible from anywhere, anytime
            </li>
          </ul>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <MdOutlineSupportAgent className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold dark:text-white">
            Career Support
          </h3>
          <ul className="list-disc pl-5 space-y-2 dark:text-gray-400">
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Professional Resume </span>: resume
              writing and optimization to showcase your skills and
              accomplishments effectively.
            </li>
            <li className="mt-4 text-sm ">
              <span className="font-bold"> Mock Interview </span>: : Practice
              and refine your interview skills with realistic simulations
            </li>
            <li className="mt-4 text-sm">
              <span className="font-bold"> Alumni Network </span> : supportive
              community of past graduates for ongoing mentorship and networking
              opportunities.
            </li>
          </ul>
        </div>
      </div>
      <CorporateTraining/>
    </div>
  );
}
