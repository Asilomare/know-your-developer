import React from 'react';
import { ShieldCheck } from 'lucide-react'; // Example icon

const PatentPendingSection = () => {
  return (
    <section id="patent-pending" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <ShieldCheck className="h-12 w-12 text-indigo-600" aria-hidden="true" />
        </div>
        <h2 className="text-lg font-semibold text-indigo-600 uppercase tracking-wide">
          Advanced Verification Technology
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Patent Pending Algorithms
        </p>
        <p className="mt-5 text-xl text-gray-500">
          Our automated platform and patent pending algorithms perform comprehensive checks covering identity, skills, code quality, compliance, and more, so you can focus on building, not policing. Protect your projects and business from fraud, compliance risks, and poor code quality with KYD™.
        </p>
      </div>
    </section>
  );
};

export default PatentPendingSection; 