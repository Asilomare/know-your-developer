import React from 'react';
import Link from 'next/link';
import { Fingerprint, LockKeyhole, Scale, UsersRound, Globe, ArrowRight } from 'lucide-react';

const ComplianceSection = () => {
  const standards = [
    {
      id: 1,
      name: 'NIST Digital Identity Guidelines (SP 800-63)',
      description: 'KYD brings NIST principles for verifying digital identities to freelance hiring, enhancing security.',
      icon: Fingerprint
    },
    {
      id: 2,
      name: 'SOC 2 & ISO/IEC 27001 Alignment',
      description: 'Helps businesses meet vendor screening and risk management expectations tied to these key cybersecurity standards.',
      icon: LockKeyhole
    },
    {
      id: 3,
      name: 'KYC/AML Parallels',
      description: 'Draws on Know Your Customer logic to vet technical talent, protecting against fraud and geopolitical exposure.',
      icon: Scale
    },
    {
      id: 4,
      name: 'Labor Law Compliance (FLSA, Child Labor)',
      description: 'Aids in preventing the inappropriate hiring of minors, especially for mission-critical roles.',
      icon: UsersRound
    },
     {
      id: 5,
      name: 'OFAC Sanctions Awareness',
      description: 'Identifies developers in sanctioned regions, reducing reputational, legal, and operational risks.',
      icon: Globe
    },
  ];

  return (
    <section id="compliance" className="py-16 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/compliance" className="group block text-center mb-12 hover:cursor-pointer">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl group-hover:text-indigo-600 transition-colors">
            Security & Compliance Alignment
          </h2>
          <p className="mt-4 text-lg text-gray-500 group-hover:text-indigo-500 transition-colors">
            KYD reinforces freelance marketplaces, helping businesses in regulated industries or those handling sensitive data meet growing standards for software supply chains and remote labor sourcing. <span className="text-indigo-600 font-medium">Learn more &rarr;</span>
          </p>
        </Link>
        
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {standards.map((standard) => {
            const IconComponent = standard.icon; // Assign component to a variable starting with uppercase
            return (
              <div key={standard.id} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{standard.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {standard.description}
                </dd>
              </div>
            );
          })}
        </dl>
         <p className="mt-12 text-center text-lg text-gray-600">
            From startups to agencies supporting federal clients, KYD provides peace of mind and proactive protection.
          </p>
          <div className="mt-10 text-center">
            <Link 
              href="/compliance"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform hover:scale-105"
            >
              Explore KYD Compliance by Industry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

