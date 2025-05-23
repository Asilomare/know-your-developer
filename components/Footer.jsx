'use client';
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <span className="font-bold text-xl text-white">Know Your Developer™</span>
            <p className="text-gray-400 text-base">
              Verifying freelance technical talent for secure and reliable project delivery.
            </p>
            {/* Optional: Add social media links here */}
            {/* <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
              </a>
            </div> */}
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#problem" className="text-base text-gray-300 hover:text-white">The Problem</a></li>
                  <li><a href="#solution" className="text-base text-gray-300 hover:text-white">Our Solution</a></li>
                  <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">More</h3>
                 <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#compliance" className="text-base text-gray-300 hover:text-white">Compliance</a></li>
                  <li><a href="#credibility" className="text-base text-gray-300 hover:text-white">Credibility</a></li>
                  <li><a href="#waitlist" className="text-base text-gray-300 hover:text-white">Waitlist</a></li>
                  <li><a href="/about" className="text-base text-gray-300 hover:text-white">About</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/tos" className="text-base text-gray-300 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/tos" className="text-base text-gray-300 hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul role="list" className="mt-4 space-y-4 text-base text-gray-300">
                  <li>
                    {/* <p>Harrison Oliver, CEO</p> */}
                    <p>Know Your Developer™</p>
                  </li>
                  <li>Email: <a href="mailto:contact@knowyourdeveloper.ai" className="hover:text-white">contact@knowyourdeveloper.ai</a></li>
                  <li>Phone: <a href="tel:+13024023028" className="hover:text-white">+1 302 402 3028</a></li>
                  {/* Fax removed as requested in subsequent message, kept here commented for history 
                  <li>Fax: +1 302 800 2569</li> 
                  */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {currentYear} Know Your Developer™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

