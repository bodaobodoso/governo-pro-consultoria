
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  cnpj: string;
  sector: string;
  customSector: string;
  sicaf: string;
  documentation: string;
  governmentPayment: string;
  obstacles: string;
  needs: string;
  position: string;
  revenue: string;
  phone: string;
  investment: string;
}

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cnpj: '',
    sector: '',
    customSector: '',
    sicaf: '',
    documentation: '',
    governmentPayment: '',
    obstacles: '',
    needs: '',
    position: '',
    revenue: '',
    phone: '',
    investment: ''
  });

  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Em breve entraremos em contato por e-mail ou telefone.",
    });
  };

  // Check if lead should be redirected based on revenue
  const shouldRedirectToFavo = formData.revenue === 'less-100k' || formData.revenue === 'no-revenue';

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Obrigado pelo seu interesse!
              </h2>
              <p className="text-gray-600">
                Para formalizar sua análise, preencha as informações a seguir.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input
                  id="cnpj"
                  value={formData.cnpj}
                  onChange={(e) => updateFormData('cnpj', e.target.value)}
                  placeholder="00.000.000/0000-00"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                O Governo acabou de liberar R$ 5,8 trilhões para pagamentos públicos, 
                setores como saúde, educação, infraestrutura e segurança estão impulsionando 
                a economia e gerando oportunidades únicas para empresas que querem receber 
                pagamento do governo.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qual é o principal setor de atuação da sua empresa?
            </h2>
            
            <RadioGroup
              value={formData.sector}
              onValueChange={(value) => updateFormData('sector', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="products" id="products" />
                <Label htmlFor="products" className="cursor-pointer">
                  Produtos (ex.: equipamentos, materiais, tecnologia etc.)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="services" id="services" />
                <Label htmlFor="services" className="cursor-pointer">
                  Serviços (ex.: segurança, obras, TI, saúde etc.)
                </Label>
              </div>
            </RadioGroup>
            
            <div>
              <Label htmlFor="customSector">Especifique seu setor:</Label>
              <Input
                id="customSector"
                value={formData.customSector}
                onChange={(e) => updateFormData('customSector', e.target.value)}
                placeholder="Descreva brevemente seu setor de atuação"
                className="mt-1"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sua empresa já está cadastrada no SICAF (Sistema de Cadastramento Unificado de Fornecedores)?
            </h2>
            
            <RadioGroup
              value={formData.sicaf}
              onValueChange={(value) => updateFormData('sicaf', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active" className="cursor-pointer">
                  Sim, já estamos cadastrados e ativos.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unsure" id="unsure" />
                <Label htmlFor="unsure" className="cursor-pointer">
                  Sim, mas não sei se está atualizado.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-registration" id="no-registration" />
                <Label htmlFor="no-registration" className="cursor-pointer">
                  Não, ainda não temos cadastro.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dont-know" id="dont-know" />
                <Label htmlFor="dont-know" className="cursor-pointer">
                  Não sei o que é o SICAF.
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sua empresa possui documentação que ateste sua capacidade para entregar produtos ou serviços em licitações públicas?
            </h2>
            
            <RadioGroup
              value={formData.documentation}
              onValueChange={(value) => updateFormData('documentation', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all-docs" id="all-docs" />
                <Label htmlFor="all-docs" className="cursor-pointer">
                  Sim, temos todos os documentos necessários que comprovam nossa capacidade técnica.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="some-docs" id="some-docs" />
                <Label htmlFor="some-docs" className="cursor-pointer">
                  Temos alguns documentos, mas precisamos de mais para participar de licitações.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="want-learn" id="want-learn" />
                <Label htmlFor="want-learn" className="cursor-pointer">
                  Não sabemos exatamente o que é necessário, mas gostaríamos de aprender como obter essa documentação.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-knowledge" id="no-knowledge" />
                <Label htmlFor="no-knowledge" className="cursor-pointer">
                  Não, não sabemos o que é necessário para comprovar nossa capacidade técnica.
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O governo já te pagou alguma vez?
            </h2>
            
            <RadioGroup
              value={formData.governmentPayment}
              onValueChange={(value) => updateFormData('governmentPayment', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="want-understand" id="want-understand" />
                <Label htmlFor="want-understand" className="cursor-pointer">
                  Não, mas quero entender como faturar com ele.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="participated" id="participated" />
                <Label htmlFor="participated" className="cursor-pointer">
                  Já participei de licitações, mas ainda não fechei contratos.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="won-low" id="won-low" />
                <Label htmlFor="won-low" className="cursor-pointer">
                  Já ganhei licitações, mas meu faturamento ainda é baixo.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="profitable" id="profitable" />
                <Label htmlFor="profitable" className="cursor-pointer">
                  Sim, já tenho contratos lucrativos e quero aumentar meu faturamento.
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que mais te impede de faturar alto com o governo hoje?
            </h2>
            
            <RadioGroup
              value={formData.obstacles}
              onValueChange={(value) => updateFormData('obstacles', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dont-know-start" id="dont-know-start" />
                <Label htmlFor="dont-know-start" className="cursor-pointer">
                  Não sei como começar.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bureaucracy" id="bureaucracy" />
                <Label htmlFor="bureaucracy" className="cursor-pointer">
                  A burocracia me trava.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pricing" id="pricing" />
                <Label htmlFor="pricing" className="cursor-pointer">
                  Precificar corretamente é um desafio.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-time" id="no-time" />
                <Label htmlFor="no-time" className="cursor-pointer">
                  Não tenho tempo para acompanhar oportunidades.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="competition" id="competition" />
                <Label htmlFor="competition" className="cursor-pointer">
                  A concorrência sempre leva os contratos.
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qual dessas opções melhor descreve sua necessidade hoje?
            </h2>
            
            <RadioGroup
              value={formData.needs}
              onValueChange={(value) => updateFormData('needs', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="learn-more" id="learn-more" />
                <Label htmlFor="learn-more" className="cursor-pointer">
                  Quero aprender mais sobre vendas públicas e licitações.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="automate" id="automate" />
                <Label htmlFor="automate" className="cursor-pointer">
                  Preciso automatizar e otimizar meu processo de participação em licitações.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="specialist" id="specialist" />
                <Label htmlFor="specialist" className="cursor-pointer">
                  Necessito de um especialista para ajudar minha empresa a escalar no mercado de compras públicas.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high-value" id="high-value" />
                <Label htmlFor="high-value" className="cursor-pointer">
                  Busco fechar contratos de alto valor com grandes órgãos públicos.
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qual o seu cargo na empresa?
            </h2>
            
            <RadioGroup
              value={formData.position}
              onValueChange={(value) => updateFormData('position', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner" className="cursor-pointer">Sócio ou Fundador</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ceo" id="ceo" />
                <Label htmlFor="ceo" className="cursor-pointer">Presidente ou CEO</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vp" id="vp" />
                <Label htmlFor="vp" className="cursor-pointer">Vice-presidente ou C-Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="director" id="director" />
                <Label htmlFor="director" className="cursor-pointer">Diretor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="manager" id="manager" />
                <Label htmlFor="manager" className="cursor-pointer">Gerente</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="coordinator" id="coordinator" />
                <Label htmlFor="coordinator" className="cursor-pointer">Coordenador</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="supervisor" id="supervisor" />
                <Label htmlFor="supervisor" className="cursor-pointer">Supervisor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="analyst" id="analyst" />
                <Label htmlFor="analyst" className="cursor-pointer">Analista</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              E qual o faturamento anual da sua empresa?
            </h2>
            
            <RadioGroup
              value={formData.revenue}
              onValueChange={(value) => updateFormData('revenue', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="above-1b" id="above-1b" />
                <Label htmlFor="above-1b" className="cursor-pointer">Acima de 1 Bilhão</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="500m-1b" id="500m-1b" />
                <Label htmlFor="500m-1b" className="cursor-pointer">De R$500 milhões a 1 Bilhão</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="50m-500m" id="50m-500m" />
                <Label htmlFor="50m-500m" className="cursor-pointer">De R$50 milhões a R$500 milhões ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10m-50m" id="10m-50m" />
                <Label htmlFor="10m-50m" className="cursor-pointer">De R$10 milhões a R$50 milhões ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5m-10m" id="5m-10m" />
                <Label htmlFor="5m-10m" className="cursor-pointer">De R$5 milhões a R$10 milhões ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1m-5m" id="1m-5m" />
                <Label htmlFor="1m-5m" className="cursor-pointer">De R$1 milhão a R$5 milhões ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="500k-1m" id="500k-1m" />
                <Label htmlFor="500k-1m" className="cursor-pointer">De R$500 mil a R$1 milhão ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="up-500k" id="up-500k" />
                <Label htmlFor="up-500k" className="cursor-pointer">Até R$500 mil ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="less-100k" id="less-100k" />
                <Label htmlFor="less-100k" className="cursor-pointer">Menos de R$ 100 mil ao ano</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-revenue" id="no-revenue" />
                <Label htmlFor="no-revenue" className="cursor-pointer">Ainda não faturamos</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 10:
        if (shouldRedirectToFavo) {
          return (
            <div className="text-center space-y-6">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900">
                Obrigado por seu interesse!
              </h2>
              <p className="text-gray-600">
                Com base no seu perfil, identificamos que você seria um ótimo candidato para 
                nosso programa FAVO. Em breve você será redirecionado para mais informações.
              </p>
              <Button 
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700"
              >
                Finalizar
              </Button>
            </div>
          );
        }

        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                🎉 Parabéns por dar o primeiro passo para expandir sua empresa no mercado de licitações!
              </h2>
              <p className="text-gray-600">
                Sua empresa já tem uma base sólida, e agora é o momento ideal para estruturar 
                uma estratégia vencedora e acessar grandes contratos financiados pela LOA 2025.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Para isso, oferecemos uma consultoria personalizada, onde nossos especialistas 
                irão te guiar na criação de um planejamento licitatório sob medida para o seu negócio.
              </p>
            </div>
            
            <div>
              <Label htmlFor="phone">Para enviar conteúdo personalizado, informe seu WhatsApp</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="(DD) 99999-9999"
                className="mt-1"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                O investimento para participar do nosso programa de aceleração é entre R$ 10.000,00 e R$ 50.000,00. 
                Você gostaria de seguir com o processo seletivo?
              </h3>
              
              <RadioGroup
                value={formData.investment}
                onValueChange={(value) => updateFormData('investment', value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="installments" id="installments" />
                  <Label htmlFor="installments" className="cursor-pointer">
                    Quero avaliar opções de parcelamento
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="more-info" id="more-info" />
                  <Label htmlFor="more-info" className="cursor-pointer">
                    Ainda não estou decidido, quero mais informações.
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="cursor-pointer">
                    Pagamento à vista.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.cnpj;
      case 2:
        return formData.sector;
      case 3:
        return formData.sicaf;
      case 4:
        return formData.documentation;
      case 5:
        return formData.governmentPayment;
      case 6:
        return formData.obstacles;
      case 7:
        return formData.needs;
      case 8:
        return formData.position;
      case 9:
        return formData.revenue;
      case 10:
        return shouldRedirectToFavo || (formData.phone && formData.investment);
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center">
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-2">
                Etapa {currentStep} de {totalSteps}
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Button>
              )}
              
              {currentStep < 10 ? (
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 ml-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 ml-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  <CheckCircle className="w-4 h-4" />
                  Finalizar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadForm;
