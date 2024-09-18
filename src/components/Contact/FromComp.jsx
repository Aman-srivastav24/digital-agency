import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FromComp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    subInterest: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    const { firstName, lastName, email, phone, interest, subInterest, message } = formData;
    if (
      firstName &&
      lastName &&
      email &&
      validateEmail(email) &&
      phone &&
      interest &&
      subInterest &&
      message
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  return (
    <div className="flex items-center justify-center" data-aos="zoom-in">
      <div className="px-2 md:px-12">
        <p className="text-2xl font-bold text-gray-400 md:text-4xl">Request a Call</p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          At Cloversal, your journey to success is our top priority. Whether you have inquiries about our Salesforce training programs, professional services, or want to explore potential collaborations, our dedicated team is here to assist you.
        </p>
        <p>Connect with Cloversal</p>
        
        <form action="https://api.web3forms.com/submit" method="POST" className="mt-8 space-y-4">
          <input type="hidden" name="access_key" value="e39ace46-5a99-45a6-8876-b163546db068" />
          <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="phone">
              Phone number
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="interest">
              Interested In
            </label>
            <select
              className="flex h-10 w-full rounded-md border border-gray-300 dark:bg-black px-3 py-2 text-sm placeholder:dark:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="" disabled>Select</option>
              <option value="Service">IT Service</option>
              <option value="Training">IT Training</option>
            </select>
          </div>

          {/* Conditionally render the sub-dropdown */}
          {formData.interest === 'Service' && (
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none text-gray-700" htmlFor="subInterest">
                Service Options
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-gray-300 dark:bg-black px-3 py-2 text-sm placeholder:dark:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                id="subInterest"
                name="subInterest"
                value={formData.subInterest}
                onChange={handleChange}
              >
                <option value="" disabled>Select a Service</option>
                <option value="Salesforce Implementation">Salesforce Implementation</option>
                <option value="Website Development)">Website Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Digital marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Staff Resourcing">Staff Resourcing</option>
              </select>
            </div>
          )}

          {formData.interest === 'Training' && (
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none text-gray-700" htmlFor="subInterest">
                Training Options
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-gray-300 dark:bg-black px-3 py-2 text-sm placeholder:dark:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                id="subInterest"
                name="subInterest"
                value={formData.subInterest}
                onChange={handleChange}
              >
                <option value="" disabled>Select a Training</option>
                <option value="Salesforce ">Salesforce Training</option>
                <option value="Website Development">Website Development</option>
                <option value="Digital marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Basic of Computers ">Basics of Computers</option>
              </select>
            </div>
          )}

          <div className="grid w-full items-center gap-1.5">
            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              id="message"
              name="message"
              placeholder="Leave us a message"
              cols={3}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="grid items-center gap-1.5">
            <button
              disabled={!isFormValid}
              type="submit"
              className={`w-full rounded-md py-2 px-3 text-center text-white ${
                isFormValid
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'cursor-not-allowed bg-gray-500'
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FromComp;
