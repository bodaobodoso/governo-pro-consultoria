
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Clock, Building, User, Rocket, MousePointer, Shield, CheckCircle, Users, Target, TrendingUp, BarChart3, MessageSquare, FileText, Search, AlertTriangle, ChevronRight } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import LoginArea from '@/components/LoginArea';
import Autoplay from "embla-carousel-autoplay";

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

  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "+ Performance",
      description: "Encontre as melhores oportunidades para o seu negócio"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "+ Praticidade",
      description: "Cadastre as suas propostas com facilidade e agilidade"
    },
    {
      icon: <MousePointer className="w-12 h-12 text-blue-500" />,
      title: "+ Otimização",
      description: "Dispute vários pregões ao mesmo tempo, de maneira segura e inteligente"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "+ Segurança",
      description: "Monitore o chat do pregão e não perca nenhuma convocação"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Aumento de até 300% nas vendas",
      description: "Empresas que utilizam nossa plataforma aumentam significativamente seu faturamento"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Mais de 5.000 empresas cadastradas",
      description: "Faça parte do maior ecossistema de fornecedores do governo"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "95% de taxa de aprovação",
      description: "Nossa consultoria garante alta taxa de sucesso nos processos"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "ROI de 800% em média",
      description: "Retorno do investimento comprovado pelos nossos clientes"
    }
  ];

  const platformFeatures = [
    {
      icon: <Search className="w-16 h-16 text-blue-600" />,
      title: "Encontre as melhores oportunidades para o seu negócio",
      description: "Na etapa Encontrar você começa o dia analisando novas oportunidades de negócio captadas pelos filtros inteligentes e relacionadas à sua área de atuação. De forma rápida e ágil, selecione quais editais você quer participar.",
      stats: [
        { label: "Oportunidades", value: "14.837" },
        { label: "Novas Licitações", value: "2.948" }
      ]
    },
    {
      icon: <FileText className="w-16 h-16 text-green-600" />,
      title: "Cadastre a sua proposta no portal com facilidade e agilidade",
      description: "Reduzindo em até 80% o tempo gasto neste processo, a etapa Cadastrar automatiza o preenchimento e envia automaticamente as suas propostas aos principais portais de compras.",
      stats: [
        { label: "Propostas Cadastradas", value: "89" },
        { label: "Tempo Economizado", value: "80%" }
      ]
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-purple-600" />,
      title: "Dispute vários pregões ao mesmo tempo, de maneira segura",
      description: "Automatize o envio de lances, aumente a sua competitividade e diminua muito a chance de erros. Na etapa Disputar você participa de diversos pregões ao mesmo tempo, com facilidade e segurança, utilizando uma estratégia para garantir a melhor lucratividade possível.",
      stats: [
        { label: "Taxa de Sucesso", value: "82%" },
        { label: "Aproveitamento por Item", value: "3.5" }
      ]
    },
    {
      icon: <MessageSquare className="w-16 h-16 text-orange-600" />,
      title: "Monitore o chat do pregoeiro e não perca nenhuma convocação",
      description: "Na etapa Monitorar você acompanha as mensagens das licitações em tempo real, enquanto realiza outras tarefas na sua empresa. A Minha Effecti te alerta sempre que a sua empresa é convocada, possibilitando que você responda ao pregoeiro sem precisar acessar o portal.",
      stats: [
        { label: "Alertas em Tempo Real", value: "100%" },
        { label: "Convocações Perdidas", value: "0%" }
      ]
    }
  ];

  const partnerCompanies = [
    {
      name: "Petrobras",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/image-5.png",
      alt: "Petrobras"
    },
    {
      name: "Ambev",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/Ambev_logo.svg.png",
      alt: "Ambev"
    },
    {
      name: "Energisa",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/Energisa.png",
      alt: "Energisa"
    },
    {
      name: "JBS",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/jbs.png",
      alt: "JBS"
    },
    {
      name: "Klabin",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/Klabin.png",
      alt: "Klabin"
    },
    {
      name: "Qualitest",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/logoQuali.png",
      alt: "Qualitest"
    },
    {
      name: "Marcopolo",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/marcopolo-logo-png_seeklogo-252638.png",
      alt: "Marcopolo"
    },
    {
      name: "Porto Seguro",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/porto-seguro-logo.png",
      alt: "Porto Seguro"
    },
    {
      name: "Votorantim",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/Votorantim.png",
      alt: "Votorantim"
    },
    {
      name: "WEG",
      logo: "https://omercadonacional.com.br/wp-content/uploads/2025/04/Weg_logo_blue_vector.svg.png",
      alt: "WEG"
    }
  ];

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
              className="h-8 w-auto"
            />
          </div>
          
          <Button 
            onClick={() => setShowLogin(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Entrar</span>
          </Button>
        </div>
      </header>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="transform transition-all duration-700">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                <Building className="w-4 h-4 mr-2" />
                OPORTUNIDADE EXCLUSIVA - GOVERNO FEDERAL
              </Badge>
            </div>
            
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="text-green-600">R$ 5,8 Trilhões</span>
                <br />
                <span className="text-blue-600">Liberados pelo</span>
                <br />
                <span className="text-green-600">Governo</span> <span className="text-blue-600">Federal</span>
              </h1>
            </div>
            
            <div className="mb-10 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                Aproveite as oportunidades da <span className="text-green-600 font-bold">LOA 2025</span> e transforme sua empresa em um fornecedor oficial do governo brasileiro
              </p>
            </div>
            
            <div className="mb-10">
              {/* Mobile Carousel */}
              <div className="block md:hidden">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                  className="w-full max-w-sm mx-auto"
                >
                  <CarouselContent>
                    {features.map((feature, index) => (
                      <CarouselItem key={index}>
                        <div className="p-4 text-center bg-white rounded-lg shadow-md">
                          <div className="flex justify-center mb-4">
                            {feature.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="text-center bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
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

      {/* Platform Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Como funciona nossa <span className="text-blue-600">plataforma</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra como nossa tecnologia revoluciona o processo de participação em licitações públicas
            </p>
          </div>

          <div className="space-y-20">
            {platformFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 lg:max-w-lg">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <Badge className="ml-4 bg-gray-100 text-gray-700 px-3 py-1">
                      Etapa {index + 1}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 lg:max-w-lg">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        {feature.icon}
                        <p className="text-sm text-gray-600 mt-2">Interface da Plataforma</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher o <span className="text-green-600">Mercado Nacional</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos a maior plataforma de conexão entre empresas e órgãos públicos do Brasil, 
              com resultados comprovados e expertise consolidada no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Empresas</span> que <span className="text-blue-600">confiam</span> em nós
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Grandes corporações já utilizam nossa plataforma para acessar oportunidades no mercado público
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnerCompanies.map((company, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 h-24 flex items-center justify-center border border-gray-100">
                      <img
                        src={company.logo}
                        alt={company.alt}
                        className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              E muitas outras empresas de diversos setores da economia brasileira
            </p>
          </div>
        </div>
      </section>

      {/* Validation Alert Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-yellow-300" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Validação Automática de Informações
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Nossa plataforma verifica automaticamente todas as informações da sua empresa, 
              garantindo que seus dados estejam sempre corretos e atualizados para participar das licitações.
            </p>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Verificação Automática</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0</div>
                  <div className="text-sm opacity-80">Erros de Cadastro</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Monitoramento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pronto para <span className="text-blue-600">transformar</span> seu negócio?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Não perca a oportunidade de fazer parte do maior mercado do país. 
              Nossa consultoria especializada vai te guiar em cada passo do processo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Começar Agora - É Gratuito
                <ChevronRight className="w-5 h-5" />
              </Button>
              
              <div className="flex flex-col items-center text-sm text-gray-500">
                <div className="flex items-center mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  Consultoria 100% gratuita
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Sem compromisso inicial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Login */}
      {showLogin && <LoginArea onClose={handleCloseLogin} />}
    </div>
  );
};

export default Index;
