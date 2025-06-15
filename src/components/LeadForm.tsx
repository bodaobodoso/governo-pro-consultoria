
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Shield, CheckCircle, TrendingUp, Target, AlertTriangle } from 'lucide-react';

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    cnpj: '',
    faturamento: '',
    setor: '',
    experienciaGoverno: '',
    principalDesafio: '',
    necessidadeAtual: '',
    whatsapp: '',
    ddd: ''
  });

  const totalSteps = 8;
  const progressPercentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Quiz completed:', formData);
    // Redirecionar para página de diagnóstico
  };

  const steps = [
    // Step 0: Dados Iniciais
    {
      title: "O Governo Compra Bilhões Todos os Anos. Descubra Como Você Pode Vender Para Ele!",
      subtitle: "Saiba agora seu nível de preparação para fechar contratos lucrativos com o governo e aproveitar a LOA 2025!",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Informe Seus Dados (Simples e Rápido!)
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="nome" className="text-gray-800 font-semibold">Nome Completo</Label>
              <Input
                id="nome"
                value={formData.nomeCompleto}
                onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                className="mt-2 border-2 border-gray-300 focus:border-green-600"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-800 font-semibold">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-2 border-2 border-gray-300 focus:border-green-600"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <Label htmlFor="cnpj" className="text-gray-800 font-semibold">CNPJ</Label>
              <Input
                id="cnpj"
                value={formData.cnpj}
                onChange={(e) => handleInputChange('cnpj', e.target.value)}
                className="mt-2 border-2 border-gray-300 focus:border-green-600"
                placeholder="00.000.000/0000-00"
              />
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="text-green-800 font-semibold text-center">
              🚀 O Governo Acaba de Liberar R$ 5,566 Trilhões Para Compras Públicas – E Você Pode Aproveitar Isso Agora!
            </p>
            <p className="text-sm text-green-700 mt-2 text-center">
              Recursos que impulsionam áreas como saúde, educação, infraestrutura e segurança estão gerando oportunidades únicas para empresas que desejam vender para o governo.
            </p>
          </div>
        </div>
      )
    },
    // Step 1: Faturamento
    {
      title: "1️⃣ Qual é o faturamento anual da sua empresa?",
      content: (
        <div className="space-y-4">
          {[
            'Menos de R$ 500 mil',
            'Entre R$ 500 mil e R$ 2 milhões',
            'Entre R$ 2 milhões e R$ 5 milhões',
            'Acima de R$ 5 milhões'
          ].map((option) => (
            <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
              <input
                type="radio"
                name="faturamento"
                value={option}
                checked={formData.faturamento === option}
                onChange={(e) => handleInputChange('faturamento', e.target.value)}
                className="w-5 h-5 text-green-600"
              />
              <span className="text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
      )
    },
    // Step 2: Setor
    {
      title: "2️⃣ Qual é o principal setor de atuação da sua empresa?",
      content: (
        <div className="space-y-4">
          {[
            'Produtos – (ex.: equipamentos, materiais, tecnologia e etc)',
            'Serviços – (ex.: segurança, obras, TI, saúde e etc)'
          ].map((option) => (
            <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
              <input
                type="radio"
                name="setor"
                value={option}
                checked={formData.setor === option}
                onChange={(e) => handleInputChange('setor', e.target.value)}
                className="w-5 h-5 text-green-600"
              />
              <span className="text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
      )
    },
    // Step 3: Experiência com Governo
    {
      title: "3️⃣ O governo já te pagou alguma vez?",
      content: (
        <div className="space-y-4">
          {[
            'Não, mas quero entender como faturar com ele.',
            'Já participei de licitações, mas ainda não fechei contratos.',
            'Já ganhei licitações, mas meu faturamento ainda é baixo.',
            'Sim, já tenho contratos lucrativos e quero aumentar meu faturamento.'
          ].map((option) => (
            <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
              <input
                type="radio"
                name="experienciaGoverno"
                value={option}
                checked={formData.experienciaGoverno === option}
                onChange={(e) => handleInputChange('experienciaGoverno', e.target.value)}
                className="w-5 h-5 text-green-600"
              />
              <span className="text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
      )
    },
    // Step 4: Principal Desafio
    {
      title: "4️⃣ O que mais te impede de faturar alto com o governo hoje?",
      content: (
        <div className="space-y-4">
          {[
            'Não sei como começar.',
            'A burocracia me trava.',
            'Precificar corretamente é um desafio.',
            'Não tenho tempo para acompanhar oportunidades.',
            'A concorrência sempre leva os contratos.'
          ].map((option) => (
            <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
              <input
                type="radio"
                name="principalDesafio"
                value={option}
                checked={formData.principalDesafio === option}
                onChange={(e) => handleInputChange('principalDesafio', e.target.value)}
                className="w-5 h-5 text-green-600"
              />
              <span className="text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
      )
    },
    // Step 5: Necessidade Atual
    {
      title: "5️⃣ Qual dessas opções melhor descreve sua necessidade hoje?",
      content: (
        <div className="space-y-4">
          {[
            'Quero aprender mais sobre vendas públicas e licitações.',
            'Preciso automatizar e otimizar meu processo de participação em licitações.',
            'Necessito de um especialista para ajudar minha empresa a escalar no mercado de compras públicas.',
            'Busco fechar contratos de alto valor com grandes órgãos públicos.'
          ].map((option) => (
            <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
              <input
                type="radio"
                name="necessidadeAtual"
                value={option}
                checked={formData.necessidadeAtual === option}
                onChange={(e) => handleInputChange('necessidadeAtual', e.target.value)}
                className="w-5 h-5 text-green-600"
              />
              <span className="text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
      )
    },
    // Step 6: WhatsApp
    {
      title: "Para enviar seu diagnóstico personalizado, informe o seu número WhatsApp",
      content: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-24">
              <Label htmlFor="ddd" className="text-gray-800 font-semibold">(DDD)</Label>
              <Input
                id="ddd"
                value={formData.ddd}
                onChange={(e) => handleInputChange('ddd', e.target.value)}
                className="mt-2 border-2 border-gray-300 focus:border-green-600"
                placeholder="11"
                maxLength={2}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="whatsapp" className="text-gray-800 font-semibold">WhatsApp</Label>
              <Input
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="mt-2 border-2 border-gray-300 focus:border-green-600"
                placeholder="99999-9999"
              />
            </div>
          </div>
        </div>
      )
    },
    // Step 7: Diagnóstico Personalizado
    {
      title: "🟢 RESULTADO: SUA EMPRESA ESTÁ PERDENDO DINHEIRO NAS MAIORES OPORTUNIDADES DO PAÍS!",
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 font-bold text-center mb-4">
              📢 O governo já liberou R$ 5,566 trilhões para compras públicas em 2025. Você está pronto para aproveitar essa chance?
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">⚠️ Com base nas suas respostas, aqui está o seu diagnóstico:</h4>
            <div className="space-y-2 text-sm">
              <p><strong>📊 Faturamento:</strong> {formData.faturamento}</p>
              <p><strong>🏢 Setor:</strong> {formData.setor}</p>
              <p><strong>💰 Nível de Experiência com Licitações:</strong> {formData.experienciaGoverno}</p>
              <p><strong>🚧 Principal Desafio:</strong> {formData.principalDesafio}</p>
              <p><strong>🎯 Objetivo Atual:</strong> {formData.necessidadeAtual}</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <p className="text-red-800 font-bold text-center">
              ⚠️ Conclusão: Empresas no seu perfil estão perdendo contratos de 5 a 7 dígitos simplesmente porque não estão preparadas para vender para o governo.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 text-center">💡 Os 3 Maiores Erros Que Estão Travando Seu Faturamento</h4>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-red-800">🔴 Erro #1 – Falta de um plano estruturado</h5>
              <p className="text-red-700 text-sm">📌 Empresários sem estratégia perdem contratos para concorrentes mais preparados.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-red-800">🔴 Erro #2 – Achar que a burocracia é um monstro</h5>
              <p className="text-red-700 text-sm">📌 Empresas deixam de ganhar licitações por simples erros documentais.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-red-800">🔴 Erro #3 – Precificação errada</h5>
              <p className="text-red-700 text-sm">📌 Precificar errado significa perder contratos ou vender sem lucro.</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 text-center mb-4">🚀 A Solução Para Você Fechar Contratos Lucrativos Com o Governo</h4>
            <p className="text-green-700 text-sm text-center mb-4">
              Agora que você sabe onde está errando, precisa agir antes que seu concorrente leve esses contratos no seu lugar.
            </p>
            
            <div className="text-center">
              <h5 className="font-bold text-green-800 mb-2">🔎 Apresentamos o Vendagov Bootcamp</h5>
              <p className="text-green-700 text-sm mb-4">
                O único treinamento AO VIVO para você começar a vender para o governo de forma rápida e lucrativa.
              </p>
              
              <div className="text-left space-y-1 mb-4">
                <p className="text-green-700 text-sm">✅ Descobrir as melhores oportunidades.</p>
                <p className="text-green-700 text-sm">✅ Superar a burocracia com um método simples.</p>
                <p className="text-green-700 text-sm">✅ Precificar corretamente e maximizar o lucro.</p>
                <p className="text-green-700 text-sm">✅ Criar propostas vencedoras e fechar contratos.</p>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 mb-4">
                <p className="text-yellow-800 font-bold">💰 Valor Especial: Apenas R$ 19,90 para acesso imediato.</p>
                <p className="text-yellow-700 text-sm">⚠️ Vagas limitadas! Empresas já estão fechando contratos. Não perca tempo!</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.nomeCompleto && formData.email && formData.cnpj;
      case 1:
        return formData.faturamento;
      case 2:
        return formData.setor;
      case 3:
        return formData.experienciaGoverno;
      case 4:
        return formData.principalDesafio;
      case 5:
        return formData.necessidadeAtual;
      case 6:
        return formData.whatsapp && formData.ddd;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-green-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
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
                <h1 className="text-lg font-bold text-gray-800">VendaGov Quiz</h1>
                <p className="text-xs text-gray-600">Diagnóstico Personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          {currentStep < totalSteps - 1 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso</span>
                <span className="text-sm font-medium text-green-600">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Card */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-xl sm:text-2xl font-bold text-center leading-tight">
                {steps[currentStep].title}
              </CardTitle>
              {currentStep === 0 && (
                <p className="text-center text-green-100 mt-2">
                  {steps[currentStep].subtitle}
                </p>
              )}
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              {steps[currentStep].content}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center space-x-2 border-2 border-gray-300 hover:border-green-600 disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Button>

            {currentStep < totalSteps - 1 ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center space-x-2 px-8 py-3 disabled:opacity-50"
              >
                <span>{currentStep === 0 ? 'Iniciar Consulta Gratuita' : 'Continuar'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white flex items-center space-x-2 px-8 py-3 font-bold"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Sim, Quero Faturar Com o Governo!</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
