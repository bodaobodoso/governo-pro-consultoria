
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnersCarousel: React.FC = () => {
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

  return (
    <section className="relative py-12 md:py-16 px-4 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-green-600">Empresas</span> que <span className="text-blue-600">confiam</span> em nós
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6 h-20 md:h-24 flex items-center justify-center border border-gray-100">
                    <img
                      src={company.logo}
                      alt={company.alt}
                      className="max-h-12 md:max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-6 md:mt-8">
          <p className="text-xs md:text-sm text-gray-500">
            E muitas outras empresas de diversos setores da economia brasileira
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
