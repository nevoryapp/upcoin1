'use client';

import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Benefits from '../components/Benefits';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import SpecialOffer from '../components/SpecialOffer';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ProfitCalculator from '../components/ProfitCalculator';
import CryptoQuiz from '../components/CryptoQuiz';
import TrustElements from '../components/TrustElements';
import EasyLearning from '../components/EasyLearning';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection isMobile={isMobile} />
      <EasyLearning />
      <Benefits isMobile={isMobile} />
      <ProductShowcase isMobile={isMobile} />
      <CryptoQuiz />
      <ProfitCalculator />
      <Testimonials isMobile={isMobile} />
      <SpecialOffer isMobile={isMobile} />
      <TrustElements />
      <FAQ isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </main>
  );
}