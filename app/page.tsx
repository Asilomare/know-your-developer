import React from 'react';

// These components will be created in the next steps
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import PatentPendingSection from '@/components/PatentPendingSection';
import ComplianceSection from '@/components/ComplianceSection';
import CredibilitySection from '@/components/CredibilitySection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="App">
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <PatentPendingSection />
        <ComplianceSection />
        <CredibilitySection />
      </main>
      <SignupSection />
      <Footer />
    </div>
  );
}