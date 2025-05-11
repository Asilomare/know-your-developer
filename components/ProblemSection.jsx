import React from 'react';
import { CircleAlert, UserX, Bot, ScanFace, Bug } from 'lucide-react'; // Import relevant icons

const ProblemSection = () => {
  // Simplified fraud cases with corresponding icons
  const fraudCases = [
    { id: 1, title: "Quality Concerns & Hidden Fees", source: "Fiverr", description: "Freelancer demanded extra payment, delivered low-quality (likely AI-generated) work.", icon: CircleAlert },
    { id: 2, title: "Underage Developers", source: "Marketplaces", description: "Teenagers misrepresented themselves, delivering subpar code.", icon: UserX },
    { id: 3, title: "Bots Delivering Code", source: "Marketplaces", description: "AI tools used instead of human developers, resulting in unvetted work.", icon: Bot },
    { id: 4, title: "Impersonation & Scams", source: "Marketplaces", description: "Fake profiles using stolen identities led to incomplete projects or lost deposits.", icon: ScanFace },
    { id: 5, title: "Malware Attacks", source: "Freelance Systems", description: "Hackers used fake job offers or shared files to distribute malware.", icon: Bug },
  ];

  return (
    <section id="problem" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">The Risks</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Hiring Freelance Talent Can Be Risky
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            While freelance marketplaces offer speed and affordability, they expose businesses to unqualified, dishonest, or even dangerous technical talent, putting critical projects at risk.
          </p>
        </div>

        {/* Real-World Fraud Cases */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Real-World Freelance Fraud Cases</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fraudCases.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full"> {/* Added h-full for consistent height */}
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h4 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{item.title}</h4>
                      <p className="mt-2 text-base text-gray-500">
                        {item.description} <span className="text-sm text-gray-400">({item.source})</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
           <p className="mt-8 text-center text-lg text-gray-600">These stories demonstrate why vetting technical talent matters.</p>
        </div>

        {/* Hidden Costs */}
        <div className="mt-16 text-center">
           <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Hidden Costs of Getting It Wrong</h3>
           <p className="max-w-3xl mx-auto text-lg text-gray-500">
            Unverified identities, child labor violations, AI-generated or plagiarized code, and engaging with sanctioned individuals can lead to legal liabilities, financial losses, reputational damage, and security breaches. Each unchecked risk is a liability KYD helps prevent.
           </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;

