
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Building, TrendingUp } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Professional Corporate Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Bandeira do Brasil sutil - cores em elementos corporativos */}
        <div 
          className="absolute top-16 left-4 sm:left-16 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600/20 to-green-500/20 rounded-lg opacity-40 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * 0.05}px) rotateZ(${scrollY * 0.01}deg)`,
            filter: 'blur(0.5px)'
          }}
        />
        <div 
          className="absolute top-32 right-8 sm:right-24 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500/25 to-yellow-400/25 rounded-full opacity-50 shadow-md"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px) rotateZ(${scrollY * -0.02}deg)`,
            filter: 'blur(0.3px)'
          }}
        />
        <div 
          className="absolute bottom-40 left-8 sm:left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600/20 to-blue-500/20 rounded-lg opacity-35 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * -0.06}px) rotateZ(${scrollY * 0.008}deg)`,
            filter: 'blur(1px)'
          }}
        />
        <div 
          className="absolute bottom-24 right-4 sm:right-16 w-10 h-10 sm:w-18 sm:h-18 bg-gradient-to-br from-green-700/25 to-green-600/25 rounded-full opacity-45 shadow-md"
          style={{ 
            transform: `translateY(${scrollY * 0.04}px) rotateZ(${scrollY * 0.012}deg)`,
            filter: 'blur(0.8px)'
          }}
        />
        
        {/* Elementos corporativos adicionais */}
        <div 
          className="absolute top-1/3 left-2 sm:left-8 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-400/30 to-slate-300/30 rounded-sm opacity-30 shadow-sm"
          style={{ 
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/3 right-2 sm:right-12 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-700/15 to-blue-600/15 rounded-lg opacity-25 shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * -0.04}px) rotateZ(${scrollY * 0.005}deg)`,
            filter: 'blur(1.2px)'
          }}
        />
      </div>

      {/* Hero Section Corporativo */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-blue-100/20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div 
            className="transform transition-all duration-700"
            style={{ 
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            {/* Badge Governamental */}
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-green-700 to-blue-800 text-white px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold shadow-xl border border-green-600/30">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              PROGRAMA OFICIAL - GOVERNO FEDERAL
            </Badge>
            
            {/* Título Principal */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              <span className="text-green-700 drop-shadow-md">R$ 5,8 Trilhões</span>
              <br />
              <span className="text-blue-800 drop-shadow-md">Liberados pelo</span>
              <br />
              <span className="bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent drop-shadow-md">
                Governo Federal
              </span>
            </h1>
            
            {/* Subtítulo Profissional */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-8 mb-6 sm:mb-10 shadow-2xl border border-slate-200/50 max-w-5xl mx-auto">
              <p className="text-sm sm:text-lg md:text-xl text-slate-800 font-semibold leading-relaxed">
                O Governo Acaba de Liberar <strong className="text-green-700">R$ 5,8 Trilhões</strong> Para Pagamentos Públicos – E Você Pode Aproveitar Isso Agora!
              </p>
              <p className="text-xs sm:text-base md:text-lg text-slate-700 mt-3 sm:mt-4 leading-relaxed">
                Faça uma análise rápida e descubra se sua empresa está pronta para receber pagamentos lucrativos com o governo e aproveitar as oportunidades da <strong className="text-blue-700">LOA 2025</strong>.
              </p>
            </div>
            
            {/* Indicadores de Confiabilidade */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center bg-white/60 px-3 sm:px-4 py-2 rounded-full shadow-md">
                <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-700" />
                <span className="font-semibold">Empresas +20 Anos</span>
              </div>
              <div className="flex items-center bg-white/60 px-3 sm:px-4 py-2 rounded-full shadow-md">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-700" />
                <span className="font-semibold">Licitações Federais</span>
              </div>
              <div className="flex items-center bg-white/60 px-3 sm:px-4 py-2 rounded-full shadow-md">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-700" />
                <span className="font-semibold">100% Legal</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-green-700 to-blue-800 hover:from-green-800 hover:to-blue-900 text-white px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-green-600/30"
              >
                Iniciar Consultoria Gratuita
              </Button>
              
              <div className="flex items-center text-slate-600 text-xs sm:text-sm bg-white/50 px-4 py-2 rounded-full shadow-md">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Análise completa em 5 minutos
              </div>
            </div>

            {/* Nota de Credibilidade */}
            <p className="text-xs sm:text-sm text-slate-600 mt-4 sm:mt-6 font-medium">
              ✓ Consultoria baseada na Lei Orçamentária Anual (LOA) 2025
              <br className="hidden sm:block" />
              <span className="hidden sm:inline"> • </span>
              ✓ Especializada em empresas com histórico comprovado
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
