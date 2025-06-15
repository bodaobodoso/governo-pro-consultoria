
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ValidationAlert: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4 md:mb-6">
            <AlertTriangle className="w-12 md:w-16 h-12 md:h-16 text-yellow-300" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Validação Automática de Informações
          </h2>
          
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">
            Nossa plataforma verifica automaticamente todas as informações da sua empresa, 
            garantindo que seus dados estejam sempre corretos e atualizados para participar das licitações.
          </p>

          <div className="bg-white/10 rounded-lg p-4 md:p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">100%</div>
                <div className="text-xs md:text-sm opacity-80">Verificação Automática</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">0</div>
                <div className="text-xs md:text-sm opacity-80">Erros de Cadastro</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">24/7</div>
                <div className="text-xs md:text-sm opacity-80">Monitoramento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationAlert;
