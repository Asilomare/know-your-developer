import React from 'react';
import { Users } from 'lucide-react'; // Import Users icon

const CredibilitySection = () => {
  // Data for KYD vs KYC comparison table
  const comparisonData = [
    { feature: 'Primary Use Case', kyc: 'Financial services compliance', kyd: 'Technical talent verification' },
    { feature: 'Focus', kyc: 'Identity & financial risk', kyd: 'Identity, code quality, developer reputation' },
    { feature: 'ID Verification', kyc: 'Yes – legal identity', kyd: 'Yes – legal identity & global sanction screening' },
    { feature: 'Skill Assessment', kyc: 'No', kyd: 'Yes – technical evaluations & code analysis' },
    { feature: 'AI/Bot Detection', kyc: 'No', kyd: 'Yes – detects AI-generated or automated code' },
    { feature: 'Sanctions Compliance', kyc: 'Yes – e.g., OFAC screening', kyd: 'Yes – location, sanction, & IP threat detection' },
    { feature: 'Ongoing Monitoring', kyc: 'Typically periodic', kyd: 'Continuous — alerts on behavioral anomalies' },
    { feature: 'Code Security / Licensing Checks', kyc: 'No', kyd: 'Yes – scans for plagiarism, licensing violations' },
    { feature: 'Designed for Developers', kyc: 'No', kyd: 'Yes — tailor-made for freelance tech hiring' },
  ];

  return (
    <section id="credibility" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Trust & Credibility</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Built by Experts, Proven in Practice
          </p>
        </div>

        {/* Founder Info */}
        <div className="mb-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Founded by Industry Leaders
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              KYD was founded by an ex-AWS Principal Product Owner for U.S. National Security and is led by global AI product experts. We understand the complexities of secure development and the risks of the modern freelance market.
            </p>
             <p className="mt-3 text-lg text-gray-500">
              Our expertise ensures KYD provides robust, reliable verification aligned with the highest standards.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 relative">
             {/* Placeholder using Lucide Users icon */}
             <div className="bg-gray-100 rounded-lg shadow-md p-8 h-64 flex items-center justify-center">
                <Users className="h-16 w-16 text-indigo-300" aria-hidden="true" />
             </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="mb-16 bg-indigo-50 rounded-lg p-8 shadow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">A Manager&apos;s Close Call: Saved by KYD</h3>
          <blockquote className="mt-6 text-gray-700">
            <p className="text-lg leading-relaxed">
            &quot;When Raj, a project manager, needed a freelance developer, he turned to a popular marketplace. The candidate looked perfect—great reviews, low rate. But Raj used KYD first. Within minutes, KYD flagged the developer&apos;s IP from a sanctioned country and identified their portfolio as largely AI-generated with vulnerable code.&quot;
            </p>
            <p className="mt-4 text-lg leading-relaxed">
            &quot;Instead of granting access, Raj blocked the hire. His team later learned the freelancer was linked to malware. Thanks to KYD, Raj saved his company from a potential data breach.&quot;
            </p>
             <footer className="mt-4">
                <p className="text-base font-medium text-indigo-700">— Real-world scenario illustrating KYD&apos;s impact</p>
            </footer>
          </blockquote>
        </div>

        {/* KYD vs KYC Comparison */}
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">KYD vs. Traditional KYC: What&apos;s the Difference?</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 shadow-sm rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional KYC</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KYD (Know Your Developer)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.kyc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.kyd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <p className="mt-8 text-center text-lg text-gray-600">
            While KYC protects financial transactions, KYD protects your software, systems, and future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CredibilitySection;

