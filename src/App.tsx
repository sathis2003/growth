import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhatYouGet from './components/WhatYouGet';
import ImageCarousel from './components/ImageCarousel';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Formpage from './components/Formpage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <FinalCTA />
      <Hero />
      {/* <SocialProof /> */}
      <WhatYouGet />
      <Formpage />
      {/* <ImageCarousel /> */}
      <Benefits />
      {/* <Testimonials /> */}
      <Pricing />
      <ImageCarousel />
      <FAQ />
      {/* <FinalCTA /> */}
      <Footer />
    </div>
  );
}

export default App;