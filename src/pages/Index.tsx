import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Building, Zap, MapPin, Users, FileText, Clock, Heart, GraduationCap, Wrench, Monitor, Leaf, Truck, Briefcase, Megaphone, Lightbulb, Recycle, User, Menu, X } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import LoginArea from '@/components/LoginArea';
import SectorQuiz from '@/components/SectorQuiz';
import EmergingSectorQuiz from '@/components/EmergingSectorQuiz';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedSector, setSelectedSector] = useState<any>(null);
  const [selectedEmergingSector, setSelectedEmergingSector] = useState<any>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showForm) {
    return <LeadForm />;
  }

  const sectors = [
    {
      title: "Saúde",
      icon: Heart,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-600",
      subsectors: [
        "Equipamentos médicos e hospitalares",
        "Medicamentos e insumos farmacêuticos", 
        "Serviços médicos especializados",
        "Construção e reforma de hospitais",
        "Sistemas de gestão hospitalar e tecnologia em saúde"
      ]
    },
    {
      title: "Educação",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      subsectors: [
        "Construção e reforma de escolas",
        "Material escolar e didático",
        "Equipamentos de informática",
        "Merenda escolar",
        "Transporte escolar",
        "Serviços educacionais especializados"
      ]
    },
    {
      title: "Infraestrutura e Obras Públicas",
      icon: Building,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      subsectors: [
        "Construção civil (estradas, pontes, viadutos)",
        "Pavimentação e sinalização",
        "Saneamento básico (água e esgoto)",
        "Infraestrutura sustentável e projetos verdes",
        "Urbanização e paisagismo"
      ]
    },
    {
      title: "Segurança Pública",
      icon: Shield,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      subsectors: [
        "Equipamentos de segurança",
        "Veículos policiais", 
        "Sistemas de monitoramento",
        "Armamentos e munições",
        "Serviços de vigilância"
      ]
    },
    {
      title: "Tecnologia da Informação",
      icon: Monitor,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      subsectors: [
        "Software e licenças",
        "Hardware e equipamentos de TI",
        "Serviços de desenvolvimento de sistemas",
        "Infraestrutura de redes",
        "Segurança digital"
      ]
    },
    {
      title: "Meio Ambiente",
      icon: Leaf,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      subsectors: [
        "Projetos de sustentabilidade",
        "Coleta e tratamento de resíduos",
        "Monitoramento ambiental",
        "Energia renovável",
        "Preservação e recuperação ambiental"
      ]
    },
    {
      title: "Transporte e Mobilidade",
      icon: Truck,
      color: "from-yellow-600 to-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      subsectors: [
        "Transporte público",
        "Manutenção de frotas",
        "Combustíveis",
        "Peças e acessórios",
        "Serviços logísticos"
      ]
    },
    {
      title: "Serviços Gerais",
      icon: Wrench,
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      iconColor: "text-gray-600",
      subsectors: [
        "Limpeza e conservação",
        "Segurança patrimonial",
        "Alimentação (restaurantes industriais)",
        "Manutenção predial",
        "Jardinagem"
      ]
    },
    {
      title: "Comunicação e Marketing",
      icon: Megaphone,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      subsectors: [
        "Publicidade institucional",
        "Comunicação visual",
        "Eventos e cerimoniais",
        "Material gráfico",
        "Assessoria de imprensa"
      ]
    },
    {
      title: "Consultoria e Serviços Especializados",
      icon: Briefcase,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600",
      subsectors: [
        "Consultoria técnica e estudos especializados",
        "Auditoria",
        "Treinamento e capacitação",
        "Engenharia e arquitetura",
        "Serviços jurídicos"
      ]
    }
  ];

  const emergingSectors = [
    {
      title: "Transformação Digital",
      description: "Implementação de governo digital",
      icon: Monitor,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Sustentabilidade",
      description: "Projetos ESG governamentais",
      icon: Leaf,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Inovação",
      description: "Startups e soluções inovadoras para o setor público",
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Energia",
      description: "Projetos de energia limpa e eficiência energética",
      icon: Zap,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 overflow-hidden">
      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-40 border-b-2 border-green-600">
        <div className="flex items-center justify-between p-4">
          <img 
            src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
            alt="Mercado Nacional" 
            className="h-6 w-auto"
          />
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setShowLogin(true)}
              size="sm"
              variant="outline"
              className="text-green-600 border-green-600"
            >
              <User className="w-4 h-4 mr-1" />
              Login
            </Button>
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              size="sm"
              variant="ghost"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 p-4">
            <Button
              onClick={() => setShowForm(true)}
              className="w-full mb-2 bg-gradient-to-r from-green-600 to-blue-600 text-white"
            >
              Qualificação Gratuita
            </Button>
          </div>
        )}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b-2 border-green-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
                alt="Mercado Nacional" 
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-800">Portal de Licitações</h1>
                <p className="text-xs text-gray-600">Governo Federal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-600 text-white">
                LOA 2025 - Ativo
              </Badge>
              <Button
                onClick={() => setShowLogin(true)}
                variant="outline"
                className="text-green-600 border-green-600"
              >
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
      </div>

      {/* Hero Section with Enhanced 3D Parallax */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-0">
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
              <span className="text-green-600 drop-shadow-lg">R$ 5,8 Trilhões</span>
              <br />
              <span className="text-blue-700 drop-shadow-lg">Liberados pelo</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                Governo Federal
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-4xl mx-auto font-medium px-4">
              Aproveite as oportunidades da <strong className="text-green-600">LOA 2025</strong> e 
              transforme sua empresa em um fornecedor oficial do governo brasileiro
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Iniciar Qualificação Gratuita
              </Button>
              
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Processo leva apenas 5 minutos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Setores Section - 3D Parallax Grid */}
      <section className="py-10 sm:py-20 bg-white relative">
        <div 
          className="container mx-auto px-4"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Principais Setores de Licitações
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Clique em um setor para descobrir suas oportunidades personalizadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={sector.title}
                  className={`${sector.borderColor} border-l-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${sector.bgColor} group cursor-pointer`}
                  style={{
                    transform: `translateY(${scrollY * (0.02 + index * 0.005)}px) rotateY(${scrollY * 0.02}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => setSelectedSector(sector)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {sector.subsectors.slice(0, 3).map((subsector, subIndex) => (
                        <li key={subIndex} className="text-xs sm:text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {subsector}
                        </li>
                      ))}
                      {sector.subsectors.length > 3 && (
                        <li className="text-xs sm:text-sm text-green-600 font-semibold">
                          +{sector.subsectors.length - 3} outras oportunidades
                        </li>
                      )}
                    </ul>
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs sm:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSector(sector);
                      }}
                    >
                      Descobrir Oportunidades
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setores Emergentes 2025 - Special Highlight Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-br from-yellow-50 to-green-50 relative">
        <div 
          className="container mx-auto px-4"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        >
          <div className="text-center mb-8 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-green-600 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
              🚀 SETORES EMERGENTES 2025
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Oportunidades do Futuro
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Seja pioneiro nos setores com maior crescimento e investimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {emergingSectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={sector.title}
                  className="border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 bg-white group overflow-hidden cursor-pointer"
                  style={{
                    transform: `translateY(${scrollY * (0.03 + index * 0.01)}px) rotateX(${scrollY * 0.01}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => setSelectedEmergingSector(sector)}
                >
                  <div className={`h-2 bg-gradient-to-r ${sector.color}`}></div>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold text-gray-900">{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 text-center mb-4">
                      {sector.description}
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-yellow-600 to-green-600 text-white text-xs sm:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEmergingSector(sector);
                      }}
                    >
                      Ser Pioneiro
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Gov.br Official Style with 3D Effects */}
      <section className="py-10 sm:py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full"
            style={{ 
              transform: `translateY(${scrollY * -0.15}px) rotateZ(${scrollY * 0.05}deg)`,
              filter: 'blur(3px)'
            }}
          />
        </div>
        
        <div 
          className="container mx-auto px-4 text-center relative z-10"
          style={{ 
            transform: `translateY(${scrollY * -0.1}px) rotateX(${scrollY * 0.01}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Não Perca as Oportunidades da LOA 2025
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 drop-shadow-md">
              Milhares de empresas já estão se preparando. Seja uma das primeiras a 
              aproveitar os R$ 5,8 trilhões liberados pelo governo federal.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-8 mb-6 sm:mb-8 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white">
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold drop-shadow-lg">+500</div>
                  <div className="text-xs sm:text-sm opacity-90">Empresas Qualificadas</div>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold drop-shadow-lg">R$ 2.3B</div>
                  <div className="text-xs sm:text-sm opacity-90">Em Contratos Fechados</div>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold drop-shadow-lg">98%</div>
                  <div className="text-xs sm:text-sm opacity-90">Taxa de Aprovação</div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowForm(true)}
              size="lg" 
              className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Começar Qualificação Agora
            </Button>
            
            <p className="text-white/80 text-xs sm:text-sm mt-4">
              ✓ Processo 100% gratuito • ✓ Sem compromisso • ✓ Resultados em 24h
            </p>
          </div>
        </div>
      </section>

      {/* Footer Gov.br Style */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
                  alt="Mercado Nacional" 
                  className="h-4 sm:h-6 w-auto"
                />
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded flex items-center justify-center">
                  <Shield className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Portal de Licitações</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Governo Federal</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Conectando empresas brasileiras às oportunidades do governo federal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Setores Principais</h4>
              <ul className="text-gray-400 text-xs sm:text-sm space-y-2">
                <li>• Saúde e Medicamentos</li>
                <li>• Educação e Tecnologia</li>
                <li>• Infraestrutura</li>
                <li>• Segurança Pública</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Setores Emergentes</h4>
              <ul className="text-gray-400 text-xs sm:text-sm space-y-2">
                <li>• Transformação Digital</li>
                <li>• Sustentabilidade</li>
                <li>• Inovação</li>
                <li>• Energia Limpa</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Portal de Licitações. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLogin && <LoginArea onClose={() => setShowLogin(false)} />}
      {selectedSector && (
        <SectorQuiz 
          sector={selectedSector} 
          onClose={() => setSelectedSector(null)} 
        />
      )}
      {selectedEmergingSector && (
        <EmergingSectorQuiz 
          sector={selectedEmergingSector} 
          onClose={() => setSelectedEmergingSector(null)} 
        />
      )}
    </div>
  );
};

export default Index;
