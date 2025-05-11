import Link from 'next/link';
import { complianceData } from '../compliance-data'; // Adjusted path
import { ChevronRight } from 'lucide-react'; // For breadcrumbs

// Function to generate metadata for each industry page
export async function generateMetadata({ params }) {
  const industry = complianceData.industries.find(ind => ind.slug === params.industry);
  if (!industry) {
    return {
      title: 'Industry Compliance Information Not Found',
      description: 'Detailed compliance information for the specified industry could not be found.',
    };
  }
  return {
    title: `${industry.name} - KYD Compliance`, // e.g., Banking & Finance - KYD Compliance
    description: `Learn how KYD addresses compliance requirements for the ${industry.name} industry, including specific regulations and features. ${industry.overviewParagraph.substring(0, 120)}...`,
    // canonical: `/compliance/${industry.slug}`,
  };
}

// Function to generate static paths for each industry
export async function generateStaticParams() {
  return complianceData.industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export default function IndustryCompliancePage({ params }) {
  const industry = complianceData.industries.find(ind => ind.slug === params.industry);

  if (!industry) {
    // Optionally, you can use Next.js notFound() function here if you have a custom 404 page for this segment
    // import { notFound } from 'next/navigation'; notFound();
    return (
      <div className="py-12 px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Industry Not Found</h1>
        <p className="mt-4 text-gray-600">The compliance information for the industry &apos;{params.industry}&apos; could not be located.</p>
        <Link href="/compliance" className="mt-6 inline-block text-indigo-600 hover:text-indigo-700">
          &larr; Back to Compliance Overview
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <ChevronRight className="mx-2 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <Link href="/compliance" className="hover:text-indigo-600">Compliance</Link>
          <ChevronRight className="mx-2 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <span className="text-gray-700 font-semibold">{industry.name}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {industry.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            {industry.overviewParagraph}
          </p>
        </header>

        <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Compliance Details:</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-indigo-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    KYD Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Applicable Regulations/Standards
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    How KYD Helps
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {industry.complianceTable.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">{item.feature}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">{item.regulations}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Optional Callout Boxes Placeholder - Add logic if content is provided */}
        {/* <section className="mt-10">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-700">Glossary Term/Acronym</h3>
            <p className="mt-2 text-sm text-indigo-600">Explanation here...</p>
          </div>
        </section> */}

        <footer className="mt-12 pt-8 border-t border-indigo-100 text-center">
            <Link href="/compliance" className="text-indigo-600 hover:text-indigo-700">
                &larr; Back to Compliance Overview
            </Link>
        </footer>

      </div>
    </div>
  );
} 