
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showForm) {
    return <LeadForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 overflow-hidden">
      {/* Enhanced 3D Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Brazilian flag inspired floating elements */}
        <div 
          className="absolute top-10 left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-20 shadow-2xl"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px) rotateZ(${scrollY * 0.02}deg)`,
            filter: 'blur(1px)'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-25 shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotateZ(${scrollY * -0.03}deg)`,
            filter: 'blur(0.5px)'
          }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-20 shadow-2xl"
          style={{ 
            transform: `translateY(${scrollY * -0.1}px) rotateZ(${scrollY * 0.01}deg)`,
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-30 shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px) rotateZ(${scrollY * 0.015}deg)`,
            filter: 'blur(1.5px)'
          }}
        />
      </div>

      {/* Hero Section with Enhanced 3D Parallax */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-blue-100/30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div 
            className="transform transition-all duration-1000"
            style={{ 
              transform: `translateY(${scrollY * -0.3}px) rotateX(${scrollY * 0.01}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold shadow-lg">
              🏛️ OPORTUNIDADE EXCLUSIVA - GOVERNO FEDERAL
            </Badge>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
              <span className="text-green-600 drop-shadow-lg">O Governo Compra</span>
              <br />
              <span className="text-blue-700 drop-shadow-lg">Bilhões Todos os Anos.</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                Descubra Como Vender Para Ele!
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-4xl mx-auto font-medium px-4">
              O Governo Acaba de Liberar <strong className="text-green-600">R$ 5,8 Trilhões</strong> Para Pagamentos Públicos – E Você Pode Aproveitar Isso Agora!
              <br />
              Faça uma análise rápida e descubra se sua empresa está pronta para receber pagamentos lucrativos com o governo e aproveitar as oportunidades da <strong className="text-blue-600">LOA 2025</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Iniciar Consultoria Gratuita
              </Button>
              
              <div className="flex items-center text-gray-600 text-sm">
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
