
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Building, Zap, MapPin, Users, FileText, Clock } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-20"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-300 rounded-full opacity-15"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Header Gov.br Style */}
      <header className="relative z-10 bg-white shadow-sm border-b-4 border-green-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
                alt="Mercado Nacional" 
                className="h-8 w-auto"
              />
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">Portal de Licitações</h1>
                <p className="text-xs text-gray-600">Governo Federal</p>
              </div>
            </div>
            <Badge className="bg-blue-600 text-white">
              LOA 2025 - Ativo
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D Parallax */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-blue-100/30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div 
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 text-sm font-semibold">
              🏛️ OPORTUNIDADE EXCLUSIVA - GOVERNO FEDERAL
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="text-green-600">R$ 5,8 Trilhões</span>
              <br />
              <span className="text-blue-700">Liberados pelo</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Governo Federal
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto font-medium">
              Aproveite as oportunidades da <strong className="text-green-600">LOA 2025</strong> e 
              transforme sua empresa em um fornecedor oficial do governo brasileiro
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setShowForm(true)}
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

      {/* Stats Section - Gov.br Style */}
      <section className="py-20 bg-white relative">
        <div 
          className="container mx-auto px-4"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos Disponíveis em 2025
            </h2>
            <p className="text-lg text-gray-600">
              Orçamento aprovado pelo Congresso Nacional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-l-4 border-l-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">R$ 5,8 Tri</CardTitle>
                <CardDescription className="text-green-600 font-semibold">Orçamento Total</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium text-center">
                  Maior orçamento da história do Brasil
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Saúde</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Setor Prioritário</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium text-center">
                  Equipamentos, medicamentos e serviços
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Building className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Infraestrutura</CardTitle>
                <CardDescription className="text-yellow-600 font-semibold">Obras Públicas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium text-center">
                  Construção civil e engenharia
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Educação</CardTitle>
                <CardDescription className="text-purple-600 font-semibold">Tecnologia & TI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium text-center">
                  Softwares, equipamentos e serviços
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative">
        <div 
          className="container mx-auto px-4"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-lg text-gray-600">
              Processo simplificado para sua empresa começar a vender para o governo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Qualificação</h3>
              <p className="text-gray-600">
                Responda nosso questionário e identifique as melhores oportunidades para sua empresa
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Consultoria</h3>
              <p className="text-gray-600">
                Nossos especialistas criam uma estratégia personalizada para seu negócio
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Execução</h3>
              <p className="text-gray-600">
                Implementamos o plano e acompanhamos até você conquistar seus primeiros contratos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gov.br Official Style */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative">
        <div 
          className="container mx-auto px-4 text-center"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Não Perca as Oportunidades da LOA 2025
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Milhares de empresas já estão se preparando. Seja uma das primeiras a 
              aproveitar os R$ 5,8 trilhões liberados pelo governo federal.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-3xl font-bold">+500</div>
                  <div className="text-sm opacity-90">Empresas Qualificadas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">R$ 2.3B</div>
                  <div className="text-sm opacity-90">Em Contratos Fechados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Taxa de Aprovação</div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowForm(true)}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Começar Qualificação Agora
            </Button>
            
            <p className="text-white/80 text-sm mt-4">
              ✓ Processo 100% gratuito • ✓ Sem compromisso • ✓ Resultados em 24h
            </p>
          </div>
        </div>
      </section>

      {/* Footer Gov.br Style */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
                  alt="Mercado Nacional" 
                  className="h-6 w-auto"
                />
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Portal de Licitações</h3>
                  <p className="text-sm text-gray-400">Governo Federal</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Conectando empresas brasileiras às oportunidades do governo federal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Setores Atendidos</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Saúde e Medicamentos</li>
                <li>• Educação e Tecnologia</li>
                <li>• Infraestrutura</li>
                <li>• Segurança Pública</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Processo Gratuito</li>
                <li>• Consultoria Especializada</li>
                <li>• Suporte Completo</li>
                <li>• Resultados Garantidos</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Portal de Licitações. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
