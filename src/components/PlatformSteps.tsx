
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Search, FileText, BarChart3, MessageSquare } from 'lucide-react';

const PlatformSteps: React.FC = () => {
  const platformFeatures = [
    {
      icon: <Search className="w-10 md:w-12 h-10 md:h-12 text-blue-600" />,
      title: "Encontre as melhores oportunidades para o seu negócio",
      description: "Na etapa Encontrar você começa o dia analisando novas oportunidades de negócio captadas pelos filtros inteligentes e relacionadas à sua área de atuação. De forma rápida e ágil, selecione quais editais você quer participar.",
      stats: [
        { label: "Oportunidades", value: "14.837" },
        { label: "Novas Licitações", value: "2.948" }
      ]
    },
    {
      icon: <FileText className="w-10 md:w-12 h-10 md:h-12 text-green-600" />,
      title: "Cadastre a sua proposta no portal com facilidade e agilidade",
      description: "Reduzindo em até 80% o tempo gasto neste processo, a etapa Cadastrar automatiza o preenchimento e envia automaticamente as suas propostas aos principais portais de compras.",
      stats: [
        { label: "Propostas Cadastradas", value: "89" },
        { label: "Tempo Economizado", value: "80%" }
      ]
    },
    {
      icon: <BarChart3 className="w-10 md:w-12 h-10 md:h-12 text-purple-600" />,
      title: "Dispute vários pregões ao mesmo tempo, de maneira segura",
      description: "Automatize o envio de lances, aumente a sua competitividade e diminua muito a chance de erros. Na etapa Disputar você participa de diversos pregões ao mesmo tempo, com facilidade e segurança, utilizando uma estratégia para garantir a melhor lucratividade possível.",
      stats: [
        { label: "Taxa de Sucesso", value: "82%" },
        { label: "Aproveitamento por Item", value: "3.5" }
      ]
    },
    {
      icon: <MessageSquare className="w-10 md:w-12 h-10 md:h-12 text-orange-600" />,
      title: "Monitore o chat do pregoeiro e não perca nenhuma convocação",
      description: "Na etapa Monitorar você acompanha as mensagens das licitações em tempo real, enquanto realiza outras tarefas na sua empresa. A Minha Effecti te alerta sempre que a sua empresa é convocada, possibilitando que você responda ao pregoeiro sem precisar acessar o portal.",
      stats: [
        { label: "Alertas em Tempo Real", value: "100%" },
        { label: "Convocações Perdidas", value: "0%" }
      ]
    }
  ];

  return (
    <section className="relative py-10 md:py-16 px-4 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Como funciona nossa <span className="text-blue-600">plataforma</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa tecnologia revoluciona o processo de participação em licitações públicas
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {platformFeatures.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 lg:max-w-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-5">
                  <div className="mb-3 sm:mb-0 sm:mr-3">
                    {feature.icon}
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 px-2 py-1 text-xs">
                    Etapa {index + 1}
                  </Badge>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center sm:text-left">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed text-center sm:text-left">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
                      <div className="text-lg md:text-xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 lg:max-w-lg w-full">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      {feature.icon}
                      <p className="text-xs text-gray-600 mt-2">Interface da Plataforma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSteps;
