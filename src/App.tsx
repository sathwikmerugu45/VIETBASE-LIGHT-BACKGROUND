// import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ResourceSection from './components/ResourceSection';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
// import ClientStoriesSection from './components/ClientStoriesSection';
// import RegionalExpansionSection from './components/RegionalExpansionSection';
import AboutSection from './components/AboutSection';
// import ResourcesSection from './components/ResourcesSection';
import Footer from './components/footer';
import Team from './components/Team';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <ResourceSection />
      <ExpertiseSection />
      {/* <ResourceSection /> */}
      <NewsSection />
      <ServicesSection />
      {/* <ClientStoriesSection /> */}
      {/* <RegionalExpansionSection /> */}
      <AboutSection />
      <Team />
      {/* <ResourcesSection /> */}
      <Footer />
    </div>
  );
}

export default App;