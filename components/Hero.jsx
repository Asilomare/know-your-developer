import React from 'react';
import { ShieldCheck } from 'lucide-react'; // Import ShieldCheck icon

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Know Your Developer™</span>
                <span className="block text-indigo-600">Hire Freelance Talent with Confidence</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Stop risking your projects on unverified technical talent. KYD™ provides automated identity, skill, and security verification for freelance developers, protecting your business from fraud, compliance risks, and poor code quality.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="#signup" // Link to waitlist section
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {/* Replaced placeholder visual with a large icon */}
            <div className="relative mx-auto w-full rounded-lg flex items-center justify-center h-64 lg:h-auto">
              <ShieldCheck className="h-48 w-48 text-indigo-300 opacity-75 sm:h-64 sm:w-64 lg:h-80 lg:w-80" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

