import React from 'react';
import city from '../../assets/website/admistration.png';

import FromComp from './FromComp';

const locations = [
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '7/2, Federal Colony, Phulwari, Patna',
  },
];

export function ContactPageTwo() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4" id='contact'>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact form */}
           <FromComp/>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src={city}
            />
          </div>
        </div>
      </div>
      {/* Address */}
      <div className="rounded-lg bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">Our Offices</p>
                <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold text-gray-900">{location.title}</p>
                    <p className="w-full text-base text-gray-600">{location.timings}</p>
                    <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                  </div>
                ))}
                <p className="w-full text-[15px] font-semibold text-gray-900">Phone - India +91 - 8240689427</p>
                <p className="w-full text-[15px] font-semibold text-gray-900">Phone - UAE +971 - 505852966</p>
                <p className="w-full text-[18px] font-bold text-gray-900">For general inquiries, reach out to us at info@cloversal.com.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
