import React from 'react';
import { CheckCircle, ShieldCheck, ThumbsUp, Network } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    { id: 1, name: 'Verify Talent Quality', description: 'Effortlessly verify the quality and integrity of technical talent.', icon: CheckCircle },
    { id: 2, name: 'Reduce Fraud Risk', description: 'Protect your business from fraudulent or unqualified freelancers.', icon: ShieldCheck },
    { id: 3, name: 'Hire Flexibly, Securely', description: 'Take advantage of flexible hiring without compromising security.', icon: ThumbsUp },
    { id: 4, name: 'Marketplace Integration', description: 'Works alongside popular freelance marketplaces, adding critical layers of trust.', icon: Network },
  ];

  return (
    <section id="solution" className="py-16 bg-gradient-to-b from-gray-50 to-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">The Solution</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Introducing Know Your Developer (KYD)
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            KYD is an intuitive, automated solution that verifies the identity, reputation, and technical skills of freelance developers. Our platform protects your business by identifying and eliminating over 60 common scams and risks.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {benefit.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
         <p className="mt-10 text-center text-lg text-gray-600">
            Ensure your code is secure, reliable, and professional-grade with KYD.
          </p>
      </div>
    </section>
  );
};

export default SolutionSection;

