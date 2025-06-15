
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Rocket, Clock, MousePointer, Shield } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
      title: "+ Performance",
      description: "Encontre as melhores oportunidades para o seu negócio"
    },
    {
      icon: <Clock className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
      title: "+ Praticidade",
      description: "Cadastre as suas propostas com facilidade e agilidade"
    },
    {
      icon: <MousePointer className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
      title: "+ Otimização",
      description: "Dispute vários pregões ao mesmo tempo, de maneira segura e inteligente"
    },
    {
      icon: <Shield className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
      title: "+ Segurança",
      description: "Monitore o chat do pregão e não perca nenhuma convocação"
    }
  ];

  return (
    <div className="mb-8 md:mb-10">
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
                <div className="p-4 text-center bg-white rounded-lg shadow-md mx-2">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
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
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center bg-white rounded-lg shadow-md p-4 lg:p-6">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
