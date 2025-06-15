
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Building, Zap } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <LeadForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            🚀 OPORTUNIDADE EXCLUSIVA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            O Governo Acaba de Liberar{" "}
            <span className="text-green-600 bg-green-100 px-3 py-1 rounded-lg">
              R$ 5,8 Trilhões
            </span>{" "}
            Para Pagamentos Públicos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            E Você Pode Aproveitar Isso Agora! Faça uma análise rápida e descubra se sua empresa 
            está pronta para receber pagamentos lucrativos com o governo e aproveitar as 
            oportunidades da <strong>LOA 2025</strong>
          </p>
          
          <Button 
            onClick={() => setShowForm(true)}
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Iniciar Consulta Gratuita
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">R$ 5,8 Trilhões</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Orçamento liberado para 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Saúde & Segurança</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Setores prioritários em expansão</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Building className="w-12 h-12 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Infraestrutura</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Grandes obras e projetos</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Zap className="w-12 h-12 text-orange-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Educação & TI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Tecnologia e inovação</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Não Perca Esta Oportunidade Única!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Setores como saúde, educação, infraestrutura e segurança estão impulsionando 
              a economia e gerando oportunidades únicas para empresas que querem receber 
              pagamento do governo.
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Começar Análise Gratuita Agora
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
