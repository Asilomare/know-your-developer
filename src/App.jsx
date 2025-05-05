import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import ComplianceSection from './components/ComplianceSection';
import CredibilitySection from './components/CredibilitySection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';

function App() {
  // Basic scroll restoration or smooth scroll could be added here if needed

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ComplianceSection />
        <CredibilitySection />
        {/* Optional: Add other sections derived from the text if needed */}
        {/* Example: A section specifically detailing the 'KYD Acronym' or 'Do You Have the Right Safeguards?' */}
      </main>
      <WaitlistSection />
      <Footer />
    </div>
  );
}

export default App;

