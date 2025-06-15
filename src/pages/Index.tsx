
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
              alt="Mercado Nacional" 
              className="h-6 md:h-8 w-auto"
            />
          </div>
          
          <Button 
            onClick={() => setShowLogin(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 md:px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl text-sm md:text-base"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Entrar</span>
          </Button>
        </div>
      </header>

      {/* Background Elements - Optimized for mobile */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-4 md:left-8 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-lg transform rotate-12 shadow-2xl"
          style={{ 
            transform: `translateY(${scrollY * 0.02}px) rotateX(15deg) rotateY(${scrollY * 0.01}deg)`,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        />
        <div 
          className="absolute top-40 right-6 md:right-12 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-blue-700/12 to-green-700/12 rounded-full transform -rotate-6 shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * -0.03}px) rotateX(-10deg) rotateZ(${scrollY * -0.008}deg)`,
            boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
          }}
        />
        <div 
          className="absolute bottom-32 left-8 md:left-16 w-32 md:w-40 h-16 md:h-20 bg-gradient-to-r from-slate-400/8 to-blue-500/8 rounded-2xl transform rotate-3 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * 0.01}px) rotateX(8deg) rotateY(${scrollY * 0.005}deg)`,
            boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)'
          }}
        />
        <div 
          className="absolute bottom-20 right-4 md:right-8 w-24 md:w-28 h-24 md:h-28 bg-gradient-to-tl from-green-800/10 to-blue-800/10 rounded-lg transform -rotate-12 shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * -0.02}px) rotateX(12deg) rotateZ(${scrollY * 0.01}deg)`,
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
          }}
        />
      </div>

      {/* Hero Section with Features Grid */}
      <HeroSection onShowForm={() => setShowForm(true)} />
      
      {/* Features Grid Section */}
      <section className="relative py-8 md:py-16 px-4">
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
