import Link from 'next/link';
import { complianceData } from './compliance-data';

export const metadata = {
  title: complianceData.mainPage.title,
  description: 'Learn how KYD helps various industries meet their compliance and security requirements through robust developer identity validation and risk detection.',
  // Add canonical URL if this page will be the definitive source for this content
  // canonical: "/compliance", 
};

export default function CompliancePage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {complianceData.mainPage.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {complianceData.mainPage.introParagraph}
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">Explore Compliance by Industry:</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceData.industries.map((industry) => (
              <li key={industry.slug} className="col-span-1 bg-gray-50 rounded-lg shadow transition hover:shadow-md hover:bg-indigo-50">
                <Link href={`/compliance/${industry.slug}`} className="block p-6">
                  <h3 className="text-lg font-medium text-indigo-600 hover:text-indigo-700">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {industry.overviewParagraph} {/* Show a snippet of the overview */}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        
        <footer className="mt-16 pt-8 border-t border-indigo-100 text-center">
            <p className="text-sm text-gray-500">
                For specific questions about how KYD can support your organization&apos;s compliance needs, please contact us.
            </p>
        </footer>

      </div>
    </div>
  );
} 