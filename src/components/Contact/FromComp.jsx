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
    const { firstName, lastName, email, phone, interest, message } = formData;
    if (
      firstName &&
      lastName &&
      email &&
      validateEmail(email) &&
      phone &&
      interest &&
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
        <p className="mt-4 text-lg text-gray-600">
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
              <option value="Salesforce training">Salesforce Training</option>
              <option value="Salesforce Implementation(Service)">Salesforce Implementation(Service)</option>
              <option value="Website Development(Training)">Website Development(Training)</option>
              <option value="Website Development(Service)">Website Development(Service)</option>
              <option value="Digital marketing(Service)">Digital marketing(Service)</option>
              <option value="Digital marketing(Training)">Digital marketing(Training)</option>
              <option value="Graphic Designing(Service)">Graphic Designing(Service)</option>
              <option value="Graphic Designing(Training)">Graphic Designing(Training)</option>
              <option value="Customer Service(Training)">Customer Service(Training)</option>
              <option value="Staff Resourcing(Service)">Staff Resourcing(Service)</option>
              <option value="Basic of Computers Training">Basic of Computers Training</option>
              <option value="Job Enquiry">Job Enquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
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
            />
          </div>
          <button
            type="submit"
            className={`w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!isFormValid}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default FromComp;
