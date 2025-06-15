import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Building } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToIndex = () => {
    setShowForm(false);
  };

  if (showForm) {
    return <LeadForm onBack={handleBackToIndex} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Manter os elementos 3D sutis de fundo */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Elementos 3D corporativos sutis */}
        <div 
          className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-lg transform rotate-12 shadow-2xl"
          style={{ 
            transform: `translateY(${scrollY * 0.02}px) rotateX(15deg) rotateY(${scrollY * 0.01}deg)`,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        />
        <div 
          className="absolute top-40 right-12 w-24 h-24 bg-gradient-to-br from-blue-700/12 to-green-700/12 rounded-full transform -rotate-6 shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * -0.03}px) rotateX(-10deg) rotateZ(${scrollY * -0.008}deg)`,
            boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
          }}
        />
        <div 
          className="absolute bottom-32 left-16 w-40 h-20 bg-gradient-to-r from-slate-400/8 to-blue-500/8 rounded-2xl transform rotate-3 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * 0.01}px) rotateX(8deg) rotateY(${scrollY * 0.005}deg)`,
            boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)'
          }}
        />
        <div 
          className="absolute bottom-20 right-8 w-28 h-28 bg-gradient-to-tl from-green-800/10 to-blue-800/10 rounded-lg transform -rotate-12 shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * -0.02}px) rotateX(12deg) rotateZ(${scrollY * 0.01}deg)`,
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
          }}
        />
      </div>

      {/* Hero Section seguindo exatamente o layout da imagem */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="transform transition-all duration-700">
            {/* Badge exato da imagem */}
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                <Building className="w-4 h-4 mr-2" />
                OPORTUNIDADE EXCLUSIVA - GOVERNO FEDERAL
              </Badge>
            </div>
            
            {/* Título principal exato da imagem */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="text-green-600">R$ 5,8 Trilhões</span>
                <br />
                <span className="text-blue-600">Liberados pelo</span>
                <br />
                <span className="text-green-600">Governo</span> <span className="text-blue-600">Federal</span>
              </h1>
            </div>
            
            {/* Subtítulo exato da imagem */}
            <div className="mb-10 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                Aproveite as oportunidades da <span className="text-green-600 font-bold">LOA 2025</span> e transforme sua empresa em um fornecedor oficial do governo brasileiro
              </p>
            </div>
            
            {/* Botão e informação de tempo exatos da imagem */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Iniciar Consultoria Gratuita
              </Button>
              
              <div className="flex items-center text-slate-600 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Processo leva apenas 5 minutos
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
