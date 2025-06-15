
import React from 'react';
import { CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-600" />,
      title: "Aumento de até 300% nas vendas",
      description: "Empresas que utilizam nossa plataforma aumentam significativamente seu faturamento"
    },
    {
      icon: <Users className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />,
      title: "Mais de 5.000 empresas cadastradas",
      description: "Faça parte do maior ecossistema de fornecedores do governo"
    },
    {
      icon: <Target className="w-5 md:w-6 h-5 md:h-6 text-green-600" />,
      title: "95% de taxa de aprovação",
      description: "Nossa consultoria garante alta taxa de sucesso nos processos"
    },
    {
      icon: <TrendingUp className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />,
      title: "ROI de 800% em média",
      description: "Retorno do investimento comprovado pelos nossos clientes"
    }
  ];

  return (
    <section className="relative py-10 md:py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Por que escolher o <span className="text-green-600">Mercado Nacional</span>?
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Somos a maior plataforma de conexão entre empresas e órgãos públicos do Brasil, 
            com resultados comprovados e expertise consolidada no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-3">
                {benefit.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
