
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, ChevronRight } from 'lucide-react';

interface CallToActionProps {
  onShowForm: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onShowForm }) => {
  return (
    <section className="relative py-12 md:py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Pronto para <span className="text-blue-600">transformar</span> seu negócio?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Não perca a oportunidade de fazer parte do maior mercado do país. 
            Nossa consultoria especializada vai te guiar em cada passo do processo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button 
              onClick={onShowForm}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Começar Agora - É Gratuito
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            <div className="flex flex-col items-center text-xs md:text-sm text-gray-500">
              <div className="flex items-center mb-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Consultoria 100% gratuita
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 text-green-500" />
                Sem compromisso inicial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
