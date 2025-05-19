import React from 'react';
import { UserCheck, Award, ShieldCheck, ThumbsUp, Brain, Users, Zap, Network } from 'lucide-react';

const AboutPage = () => {
  const whatWeOffer = [
    {
      name: 'Identity Verification',
      description: `Confirm who you're working with.`,
      icon: UserCheck,
    },
    {
      name: 'Skill Validation',
      description: `Evaluate the developer's actual capabilities.`,
      icon: Award,
    },
    {
      name: 'Security & Compliance Screening',
      description: `Surface sanctions risks, data handling red flags, and system integrity issues.`,
      icon: ShieldCheck,
    },
    {
      name: 'Trust Signals',
      description: `A holistic view of developer reliability and risk posture.`,
      icon: ThumbsUp,
    },
  ];

  const advisors = [
    {
      title: 'AWS Alum & National Security Expert',
      description: `An AWS alum with deep experience leading cloud strategy and secure product development for U.S. national security and defense customers. She has guided enterprise modernization efforts, aligned cross-functional engineering teams, and built scalable, mission-critical platforms in some of the most complex environments in the world.`,
      icon: Brain, 
    },
    {
      title: 'Global AI Leader',
      description: `A global AI leader at the world's largest marketing and advertising agency, where he leads efforts to apply AI and emerging technologies across a portfolio of iconic brands. His work spans personalization, creative automation, and customer engagement at scale—helping KYD stay aligned with how large enterprises adopt technical talent and next-gen platforms.`,
      icon: Zap,
    },
    {
      title: 'Next-Generation Developer Advisor',
      description: `A next-generation developer advisor, active in freelance engineering networks and startup ecosystems. At 20, he brings firsthand knowledge of the motivations, platforms, and decision-making patterns shaping the newest generation of technical talent. His insights help ensure KYD's product and positioning resonate authentically with the modern developer economy.`,
      icon: Users,
    },
    {
      title: 'IoT & Embedded Systems Innovator',
      description: `A seasoned executive and innovator with a robust portfolio of patents in IoT and embedded systems. His work has been instrumental in developing innovative solutions for wireless lighting control and smart infrastructure. His deep understanding of hardware-software integration and real-world deployment challenges provides KYD with invaluable insights into the complexities of modern connected systems.`,
      icon: Network,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero-like section for the main title */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-indigo-600">Know Your Developer™</span> (KYD)
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
            Know Your Developer™ (KYD) is a U.S.-based technology company committed to helping organizations reduce risk when hiring freelance and contract developers. Our founding team brings experience from national security, enterprise consulting, and secure product development. We&apos;ve led classified initiatives, modernized billion-dollar platforms, and designed systems where identity, integrity, and accountability are paramount.
          </p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why We Exist
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              The rise of freelance marketplaces has created speed and flexibility—but also exposed companies to avoidable risks: identity fraud, unvetted code, and compliance violations. KYD was founded to raise the standard. We believe developer trust should be observable, verifiable, and built into the hiring process from day one.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our platform helps companies make safer, more informed hiring decisions by offering:
            </p>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {whatWeOffer.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              We&apos;re on a mission to make developer trust a first-class signal in technical hiring—empowering companies to protect their products, reputations, and users in a global, distributed workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Advisors Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Advisors
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
              KYD is guided by a multidisciplinary advisory board with deep expertise in secure systems, emerging technologies, and scalable infrastructure. Our advisory team spans California, New York, and Northern Virginia, reflecting influence across the nation&apos;s technology, financial, and national security hubs:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
            {advisors.map((advisor) => {
              const Icon = advisor.icon;
              return (
                <div key={advisor.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 text-indigo-600">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{advisor.title}</h3>
                      <p className="mt-1 text-base text-gray-500">{advisor.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
           <p className="mt-12 text-center text-lg text-gray-600">
            Our advisors ensure KYD remains technically rigorous, market-aware, and aligned with the highest standards of security and trust.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
