import React, { useState } from 'react';
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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    
    axios.post('http://127.0.0.1:5000/submit-form', formData)
      .then(response => {
        setLoading(false);
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          interest: '',
          message: ''
        }); // Clear form data
      })
      .catch(error => {
        setLoading(false);
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className="flex items-center justify-center" data-aos="zoom-in">
      <div className="px-2 md:px-12">
        <p className="text-2xl font-bold text-gray-400 md:text-4xl">Request a Call</p>
        <p className="mt-4 text-lg text-gray-600">
          At Cloversal, your journey to success is our top priority. Whether you have inquiries about our Salesforce training programs, professional services, or want to explore potential collaborations, our dedicated team is here to assist you.
        </p>
        <p>Connect with Cloversal</p>
        {!success ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
              <div className="grid w-full items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="tel"
                id="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="interest"
              >
                Interested In
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                id="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="" disabled>select</option>
                <option value="training">Salesforce Training</option>
                <option value="training">Salesforce Implementation(Service)</option>
                <option value="development">Website Development(Training)</option>
                <option value="development">Website Development(Service)</option>
                <option value="consultation">Digital marketing(Service)</option>
                <option value="consultation">Digital marketing(Training)</option>
                <option value="consultation">Graphic Designing(Service)</option>
                <option value="consultation">Graphic Designing(Training)</option>
                <option value="consultation">Customer Service(Training)</option>
                <option value="consultation">Staff Resourcing(Service)</option>
                <option value="consultation">Basic of Computers Training</option>
                <option value="consultation">Job Enquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                id="message"
                placeholder="Leave us a message"
                cols={3}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
            <div className="container flex flex-col items-center">
              <div className="flex flex-col gap-6 max-w-md text-center">
                <p className="text-2xl md:text-3xl dark:text-gray-300">
                  Request Submitted Successfully. Our Team Will Contact You Soon.
                </p>
                <Link to="/" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default FromComp;
