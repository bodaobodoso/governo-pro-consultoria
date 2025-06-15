
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import LoginArea from '@/components/LoginArea';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import PlatformSteps from '@/components/PlatformSteps';
import BenefitsSection from '@/components/BenefitsSection';
import PartnersCarousel from '@/components/PartnersCarousel';
import ValidationAlert from '@/components/ValidationAlert';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToIndex = () => {
    setShowForm(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  if (showForm) {
    return <LeadForm onBack={handleBackToIndex} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-3 md:p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
              alt="Mercado Nacional" 
              className="h-5 md:h-7 w-auto"
            />
          </div>
          
          <Button 
            onClick={() => setShowLogin(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-3 md:px-5 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl text-xs md:text-sm"
          >
            <User className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Entrar</span>
          </Button>
        </div>
      </header>

      {/* Background Elements - Simplified and optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-16 left-2 md:left-6 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-green-600/8 to-blue-600/8 rounded-lg transform rotate-12 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * 0.01}px) rotate(12deg)`
          }}
        />
        <div 
          className="absolute top-32 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-700/10 to-green-700/10 rounded-full transform -rotate-6 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * -0.015}px) rotate(-6deg)`
          }}
        />
        <div 
          className="absolute bottom-24 left-4 md:left-12 w-20 md:w-28 h-10 md:h-14 bg-gradient-to-r from-slate-400/6 to-blue-500/6 rounded-xl transform rotate-3 shadow-sm"
          style={{ 
            transform: `translateY(${scrollY * 0.008}px) rotate(3deg)`
          }}
        />
        <div 
          className="absolute bottom-16 right-2 md:right-6 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-tl from-green-800/8 to-blue-800/8 rounded-lg transform -rotate-12 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * -0.01}px) rotate(-12deg)`
          }}
        />
      </div>

      {/* Hero Section */}
      <HeroSection onShowForm={() => setShowForm(true)} />
      
      {/* Features Grid Section - Reduced spacing */}
      <section className="relative py-4 md:py-8 px-4">
        <div className="container mx-auto">
          <FeaturesGrid />
        </div>
      </section>

      {/* Platform Features Section */}
      <PlatformSteps />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Partners Section */}
      <PartnersCarousel />

      {/* Validation Alert Section */}
      <ValidationAlert />

      {/* Call to Action Section */}
      <CallToAction onShowForm={() => setShowForm(true)} />

      {/* Modal de Login */}
      {showLogin && <LoginArea onClose={handleCloseLogin} />}
    </div>
  );
};

export default Index;
