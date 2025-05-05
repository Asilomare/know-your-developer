import React from 'react';
import { Fingerprint, LockKeyhole, Scale, UsersRound, Globe } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Security & Compliance Alignment</h2>
          <p className="mt-4 text-lg text-gray-500">
            KYD reinforces freelance marketplaces, helping businesses in regulated industries or those handling sensitive data meet growing standards for software supply chains and remote labor sourcing.
          </p>
        </div>
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
      </div>
    </section>
  );
};

export default ComplianceSection;

