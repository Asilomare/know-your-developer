import React from 'react';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Be Among the First to Safeguard Your Projects.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Join our waitlist now to ensure peace of mind for your business. Get early access and updates on KYD.
        </p>
        
        {/* Placeholder Waitlist Form */}
        <form className="mt-8 sm:flex justify-center">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="block w-full px-5 py-3 border border-transparent rounded-md text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
              // Note: This is a placeholder, no actual submission logic
              readOnly 
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              disabled // Placeholder button
              className="block w-full py-3 px-5 border border-transparent rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:px-10 disabled:opacity-50 cursor-not-allowed"
            >
              Join Waitlist
            </button>
          </div>
        </form>
        <p className="mt-3 text-sm text-indigo-200">We respect your privacy. No spam.</p>

      </div>
    </section>
  );
};

export default WaitlistSection;

