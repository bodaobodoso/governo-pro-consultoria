
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ValidationAlert: React.FC = () => {
  return (
    <section className="relative py-8 md:py-12 px-4 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="flex justify-center mb-3 md:mb-4">
            <AlertTriangle className="w-10 md:w-12 h-10 md:h-12 text-yellow-300" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Validação Automática de Informações
          </h2>
          
          <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90 leading-relaxed">
            Nossa plataforma verifica automaticamente todas as informações da sua empresa, 
            garantindo que seus dados estejam sempre corretos e atualizados para participar das licitações.
          </p>

          <div className="bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
              <div>
                <div className="text-lg md:text-2xl font-bold mb-1">100%</div>
                <div className="text-xs opacity-80">Verificação Automática</div>
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold mb-1">0</div>
                <div className="text-xs opacity-80">Erros de Cadastro</div>
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold mb-1">24/7</div>
                <div className="text-xs opacity-80">Monitoramento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationAlert;
