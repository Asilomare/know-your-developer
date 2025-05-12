'use client';
import React, { useState } from 'react';
import InfoModal from './InfoModal'; // Import the InfoModal component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // State for modals
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

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
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <button 
                      type="button" 
                      onClick={() => setIsPrivacyModalOpen(true)} 
                      className="text-base text-gray-300 hover:text-white focus:outline-none"
                    >
                      Privacy
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      onClick={() => setIsTermsModalOpen(true)} 
                      className="text-base text-gray-300 hover:text-white focus:outline-none"
                    >
                      Terms
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul role="list" className="mt-4 space-y-4 text-base text-gray-300">
                  <li>
                    <p>Harrison Oliver, CEO</p>
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

      {/* Privacy Modal */}
      <InfoModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
        title="Privacy Policy"
      >
        {/* Reusing the same content from SignupSection for demonstration */}
        <p>KYD collects the information you submit through the waitlist form for the purpose of qualifying interest in our services. In addition to the information you provide, we automatically collect session-level metadata like IP address, approximate geolocation, browser/device details, language, referral URL, and submission time.</p>
        <p>This information is used to protect against spam, understand our audience, improve marketing, and respond effectively. Data is stored securely, accessed only by authorized personnel, and not sold or shared without consent.</p>
        <p>Submitting the waitlist form implies consent to this data collection. We utilize standard web technologies like cookies for site functionality and analytics.</p>
        {/* TODO: Add full privacy policy text here */}
        <p className="mt-4 font-semibold">Please replace this with the full, official Privacy Policy content.</p>
      </InfoModal>

      {/* Terms Modal */}
      <InfoModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
        title="Terms of Service"
      >
        <p>These are the terms and conditions governing the use of the Know Your Developer™ (KYD) website and future services.</p>
        {/* TODO: Add full terms of service text here */}
        {/* <p className="mt-4 font-semibold">Please replace this with the full, official Terms of Service content.</p> */}
      </InfoModal>
    </footer>
  );
};

export default Footer;

