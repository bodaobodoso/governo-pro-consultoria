
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star, CheckCircle, Shield, Users, ArrowLeft, Rocket, Clock, MousePointer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";

const Register = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log('Redirecionando para checkout...');
    // Aqui você implementaria a integração com o sistema de pagamento
    alert('Redirecionando para o pagamento seguro...');
  };

  const handleBack = () => {
    navigate('/');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      {/* Header com logo e botão voltar */}
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
            onClick={handleBack}
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </header>

      <Card className="w-full max-w-4xl bg-white border-0 shadow-2xl">
        <CardHeader className="text-center pb-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Acesso Premium
          </CardTitle>
          <div className="flex justify-center w-full">
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 text-center">
              Portal Oficial de Licitações
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="px-8 pb-8">
          <div className="space-y-6">
            {/* Informação sobre pagamento obrigatório */}
            <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                💡 Acesso Mediante Pagamento
              </h3>
              <p className="text-sm text-gray-600">
                Para acessar nossa plataforma completa de licitações, é necessário adquirir o acesso premium.
              </p>
            </div>

            {/* Processo leva apenas 5 minutos */}
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-800 mb-8">
                Processo leva apenas 5 minutos
              </p>
              
              {/* Features Section - Mobile: Carousel, Desktop: Grid */}
              <div className="block md:hidden">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {features.map((feature, index) => (
                      <CarouselItem key={index}>
                        <div className="p-4 text-center">
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
              <div className="hidden md:grid grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
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

            {/* Oferta especial */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                🚀 OFERTA ESPECIAL - ACESSO COMPLETO
              </h3>
              
              <div className="text-center mb-4">
                <div className="text-5xl font-black text-green-600 mb-2 tracking-tight">
                  12x de R$ 199,80
                </div>
                <div className="text-sm text-gray-600 line-through mb-1">
                  De R$ 4.997,00
                </div>
                <Badge className="bg-red-500 text-white px-3 py-1">
                  60% OFF - Apenas hoje!
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Acesso completo ao software de licitações</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Contrato de parceria oficial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Suporte especializado 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700">Treinamento completo incluído</span>
                </div>
              </div>
            </div>

            {/* Botão de checkout */}
            <Button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 h-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              🔒 ADQUIRIR ACESSO AGORA
            </Button>

            {/* Garantia */}
            <div className="bg-gray-50 rounded-lg p-4 border">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Garantia de 30 dias ou seu dinheiro de volta</span>
              </div>
            </div>

            {/* Texto explicativo */}
            <div className="text-center text-sm text-gray-600">
              <p>
                Após a confirmação do pagamento, você receberá acesso imediato à plataforma 
                e instruções para começar a participar de licitações governamentais.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
