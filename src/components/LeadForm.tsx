
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    cnpj: '',
    setor: '',
    setorOutro: '',
    sicaf: '',
    documentacao: '',
    historicoPagamento: '',
    obstaculos: '',
    necessidades: '',
    cargo: '',
    faturamento: '',
    whatsapp: '',
    investimento: ''
  });

  const totalSteps = 12;
  const progressPercentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    // Logic branching for revenue qualification
    if (currentStep === 8) { // After revenue question
      const lowRevenue = ['Menos de R$ 100 mil ao ano', 'Ainda não faturamos'];
      if (lowRevenue.includes(formData.faturamento)) {
        // Redirect to FAVO LP (simulated with alert for now)
        alert('Redirecionando para LP do FAVO...');
        return;
      }
    }
    
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    // Step 0: Contact Information
    {
      title: "Informações de Contato",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-gray-700 text-lg">
              Obrigado pelo seu interesse. Para formalizar sua análise, preencha as informações a seguir.
            </p>
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
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              O Governo acabou de liberar R$ 5,8 trilhões para pagamentos públicos, setores como saúde, educação, infraestrutura e segurança estão impulsionando a economia e gerando oportunidades únicas para empresas que querem receber pagamento do governo.
            </p>
          </div>
        </div>
      )
    },
    // Step 1: Business Sector
    {
      title: "Setor de Atuação",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            Qual é o principal setor de atuação da sua empresa?
          </h3>
          <div className="space-y-3">
            {[
              'Produtos (ex.: equipamentos, materiais, tecnologia etc.)',
              'Serviços (ex.: segurança, obras, TI, saúde etc.)'
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
            <div className="space-y-2">
              <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="setor"
                  value="outro"
                  checked={formData.setor === 'outro'}
                  onChange={(e) => handleInputChange('setor', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">Outro</span>
              </label>
              {formData.setor === 'outro' && (
                <Input
                  placeholder="Especifique seu setor"
                  value={formData.setorOutro}
                  onChange={(e) => handleInputChange('setorOutro', e.target.value)}
                  className="ml-8 border-2 border-gray-300 focus:border-green-600"
                />
              )}
            </div>
          </div>
        </div>
      )
    },
    // Step 2: SICAF Registration
    {
      title: "Cadastro SICAF",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            Sua empresa já está cadastrada no SICAF (Sistema de Cadastramento Unificado de Fornecedores)?
          </h3>
          <div className="space-y-3">
            {[
              'Sim, já estamos cadastrados e ativos.',
              'Sim, mas não sei se está atualizado.',
              'Não, ainda não temos cadastro.',
              'Não sei o que é o SICAF.'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="sicaf"
                  value={option}
                  checked={formData.sicaf === option}
                  onChange={(e) => handleInputChange('sicaf', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 3: Technical Documentation
    {
      title: "Documentação Técnica",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            Sua empresa possui algum tipo de documentação ou comprovação que ateste sua capacidade para entregar produtos ou serviços exigidos em licitações públicas?
          </h3>
          <div className="space-y-3">
            {[
              'Sim, temos todos os documentos necessários que comprovam nossa capacidade técnica.',
              'Temos alguns documentos, mas precisamos de mais para participar de licitações.',
              'Não sabemos exatamente o que é necessário, mas gostaríamos de aprender como obter essa documentação.',
              'Não, não sabemos o que é necessário para comprovar nossa capacidade técnica.'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="documentacao"
                  value={option}
                  checked={formData.documentacao === option}
                  onChange={(e) => handleInputChange('documentacao', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 4: Government Payment History
    {
      title: "Histórico de Pagamentos",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            O governo já te pagou alguma vez?
          </h3>
          <div className="space-y-3">
            {[
              'Não, mas quero entender como faturar com ele.',
              'Já participei de licitações, mas ainda não fechei contratos.',
              'Já ganhei licitações, mas meu faturamento ainda é baixo.',
              'Sim, já tenho contratos lucrativos e quero aumentar meu faturamento.'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="historicoPagamento"
                  value={option}
                  checked={formData.historicoPagamento === option}
                  onChange={(e) => handleInputChange('historicoPagamento', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 5: Main Obstacles
    {
      title: "Principais Obstáculos",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            O que mais te impede de faturar alto com o governo hoje?
          </h3>
          <div className="space-y-3">
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
                  name="obstaculos"
                  value={option}
                  checked={formData.obstaculos === option}
                  onChange={(e) => handleInputChange('obstaculos', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 6: Current Needs
    {
      title: "Necessidades Atuais",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            Qual dessas opções melhor descreve sua necessidade hoje?
          </h3>
          <div className="space-y-3">
            {[
              'Quero aprender mais sobre vendas públicas e licitações.',
              'Preciso automatizar e otimizar meu processo de participação em licitações.',
              'Necessito de um especialista para ajudar minha empresa a escalar no mercado de compras públicas.',
              'Busco fechar contratos de alto valor com grandes órgãos públicos.'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="necessidades"
                  value={option}
                  checked={formData.necessidades === option}
                  onChange={(e) => handleInputChange('necessidades', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 7: Position/Role
    {
      title: "Cargo na Empresa",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            Qual o seu cargo na empresa?
          </h3>
          <div className="space-y-3">
            {[
              'Sócio ou Fundador',
              'Presidente ou CEO',
              'Vice-presidente ou C-Level',
              'Diretor',
              'Gerente',
              'Coordenador',
              'Supervisor',
              'Analista'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="cargo"
                  value={option}
                  checked={formData.cargo === option}
                  onChange={(e) => handleInputChange('cargo', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 8: Annual Revenue (Qualification Step)
    {
      title: "Faturamento Anual",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            E qual o faturamento anual da sua empresa?
          </h3>
          <div className="space-y-3">
            {[
              'Acima de 1 Bilhão',
              'De R$500 milhões a 1 Bilhão',
              'De R$50 milhões a R$500 milhões ao ano',
              'De R$10 milhões a R$50 milhões ao ano',
              'De R$5 milhões a R$10 milhões ao ano',
              'De R$1 milhão a R$5 milhões ao ano',
              'De R$500 mil a R$1 milhão ao ano',
              'Até R$500 mil ao ano',
              'Menos de R$ 100 mil ao ano',
              'Ainda não faturamos'
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
        </div>
      )
    },
    // Step 9: Success Message (Qualified Leads Only)
    {
      title: "Parabéns!",
      content: (
        <div className="space-y-6 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Parabéns por dar o primeiro passo para expandir sua empresa no mercado de licitações!
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Sua empresa já tem uma base sólida, e agora é o momento ideal para estruturar uma estratégia vencedora e acessar grandes contratos financiados pela LOA 2025.
            </p>
            <p className="text-gray-700">
              Para isso, oferecemos uma consultoria personalizada, onde nossos especialistas irão te guiar na criação de um planejamento licitatório sob medida para o seu negócio.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <Label htmlFor="whatsapp" className="text-gray-800 font-semibold text-lg">
              Para enviar personalizado, informe seu WhatsApp
            </Label>
            <div className="mt-3 flex gap-2">
              <Input
                id="ddd"
                placeholder="(DDD)"
                className="w-24 border-2 border-gray-300 focus:border-green-600"
              />
              <Input
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="flex-1 border-2 border-gray-300 focus:border-green-600"
                placeholder="Digite seu número do WhatsApp"
              />
            </div>
          </div>
        </div>
      )
    },
    // Step 10: Investment Qualification
    {
      title: "Qualificação de Investimento",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            O investimento para participar do nosso programa de aceleração é entre R$ 10.000,00 e R$ 50.000,00. Você gostaria de seguir com o processo seletivo?
          </h3>
          <div className="space-y-3">
            {[
              'Quero avaliar opções de parcelamento',
              'Ainda não estou decidido, quero mais informações.',
              'Pagamento à vista.'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="investimento"
                  value={option}
                  checked={formData.investimento === option}
                  onChange={(e) => handleInputChange('investimento', e.target.value)}
                  className="w-5 h-5 text-green-600"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    // Step 11: Thank You
    {
      title: "Obrigado!",
      content: (
        <div className="text-center space-y-6">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto" />
          <h3 className="text-3xl font-bold text-gray-800">Obrigado!</h3>
          <p className="text-xl text-gray-700">
            Em breve entraremos em contato por e-mail ou telefone.
          </p>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="text-green-800 font-semibold">
              Sua análise foi finalizada com sucesso. Nossa equipe especializada irá revisar suas informações e entrar em contato em até 24 horas.
            </p>
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
        return formData.setor && (formData.setor !== 'outro' || formData.setorOutro);
      case 2:
        return formData.sicaf;
      case 3:
        return formData.documentacao;
      case 4:
        return formData.historicoPagamento;
      case 5:
        return formData.obstaculos;
      case 6:
        return formData.necessidades;
      case 7:
        return formData.cargo;
      case 8:
        return formData.faturamento;
      case 9:
        return formData.whatsapp;
      case 10:
        return formData.investimento;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Header Gov.br Style */}
      <header className="bg-white shadow-sm border-b-4 border-green-600">
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
                <p className="text-xs text-gray-600">Análise de Qualificação</p>
              </div>
            </div>
            <Badge className="bg-blue-600 text-white">
              LOA 2025 - Ativo
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
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

          {/* Form Card */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">
                {steps[currentStep].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
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
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
