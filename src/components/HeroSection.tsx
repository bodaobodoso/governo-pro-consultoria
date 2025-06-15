
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Building, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onShowForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShowForm }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="transform transition-all duration-700">
          <div className="mb-6 md:mb-8">
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 md:px-6 py-2 text-xs md:text-sm font-bold rounded-full shadow-lg">
              <Building className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              OPORTUNIDADE EXCLUSIVA - GOVERNO FEDERAL
            </Badge>
          </div>
          
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-tight">
              <span className="text-green-600">R$ 5,8 Trilhões</span>
              <br />
              <span className="text-blue-600">Liberados pelo</span>
              <br />
              <span className="text-green-600">Governo</span> <span className="text-blue-600">Federal</span>
            </h1>
          </div>
          
          <div className="mb-8 md:mb-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed">
              Aproveite as oportunidades da <span className="text-green-600 font-bold">LOA 2025</span> e transforme sua empresa em um fornecedor oficial do governo brasileiro
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onShowForm}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Iniciar Consultoria Gratuita
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            
            <div className="flex items-center text-slate-600 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Processo leva apenas 5 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
