import React from 'react';
import { ClipboardList, ScanSearch, Code, FileCheck, Bot, History, ShieldAlert, Gavel, FileText, ShieldCheck } from 'lucide-react'; // Import relevant icons

const FeaturesSection = () => {
  const manualSteps = [
    { text: 'Manually verify developer identity and age.', icon: ClipboardList },
    { text: 'Cross-check against OFAC sanctions and watchlists.', icon: ScanSearch },
    { text: 'Assess coding skills via third-party tools.', icon: Code },
    { text: 'Vet code originality (plagiarism, AI, open-source misuse).', icon: FileCheck },
    { text: 'Confirm no automation/ghostwriting.', icon: Bot },
    { text: 'Research work history across platforms.', icon: History },
    { text: 'Perform cybersecurity risk analysis.', icon: ShieldAlert },
    { text: 'Ensure compliance with employment laws.', icon: Gavel },
    { text: 'Document everything for compliance.', icon: FileText },
  ];

  return (
    <section id="features" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">How KYD™ Works</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Automated Verification, Seamless Integration
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            KYD™ adds critical layers of trust and verification to popular freelance marketplaces like Upwork, Fiverr, and Freelancer, automating the complex vetting process.
          </p>
        </div>

        {/* Comparison: KYD™ vs Manual Effort */}
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                What You&apos;d Have to Do Without KYD™
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Replicating the trust, safety, and verification KYD™ provides automatically requires significant manual effort and expertise:
              </p>
              <dl className="mt-10 space-y-4">
                {manualSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative">
                      <dt className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-md bg-red-100 text-red-500">
                          <IconComponent className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-700">{step.text}</p>
                      </dt>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              {/* Placeholder for a visual comparison graphic - Using ShieldCheck icon */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl p-8 h-full flex flex-col justify-center items-center text-center">
                 <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl mb-4">
                    KYD™ Handles It All in Seconds
                 </h3>
                 <p className="text-lg text-indigo-100 mb-6">
                    Our automated platform performs comprehensive checks covering identity, skills, code quality, compliance, and more, so you can focus on building, not policing.
                 </p>
                 <ShieldCheck className="h-24 w-24 text-white opacity-75" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;

