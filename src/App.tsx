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
import BookCallButton from './components/BookCallButton';

function App() {
  return (
    // Removed bg-white to allow the body's gradient to show
    <div>
      <Header />
      <HeroSection />
      <ResourceSection />
      <ExpertiseSection />
      <NewsSection />
      <ServicesSection />
      <AboutSection />
      <Team />
      <Footer />
      <BookCallButton />
    </div>
  );
}

export default App;