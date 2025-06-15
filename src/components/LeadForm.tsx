
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Target, AlertTriangle, Trophy, Users, Calendar, Phone } from 'lucide-react';

interface LeadFormProps {
  onBack?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    whatsapp: '',
    cnpj: '',
    cargo: '',
    faturamentoAnual: '',
    setorEmpresa: '',
    experienciaLicitacoes: '',
    investimento: ''
  });

  // Add keyboard event listener for Enter key
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !currentStepData.isResult) {
        event.preventDefault();
        nextStep();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentStep]);

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep = () => {
    const currentFields = steps[currentStep].fields;
    if (!currentFields) return true;

    for (const field of currentFields) {
      const value = formData[field.key as keyof typeof formData];
      
      if (field.required && !value) {
        return false;
      }
      
      if (field.key === 'email' && value && !validateEmail(value)) {
        return false;
      }
    }
    
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) {
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const steps = [
    {
      title: "Informações Pessoais",
      fields: [
        { key: 'nomeCompleto', label: 'Nome Completo', type: 'text', required: true },
        { key: 'email', label: 'E-mail', type: 'email', required: true },
        { key: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true }
      ]
    },
    {
      title: "Informações da Empresa",
      fields: [
        { key: 'cnpj', label: 'CNPJ', type: 'text', required: true },
        { 
          key: 'cargo', 
          label: 'Qual o seu cargo na empresa?', 
          type: 'select', 
          required: true,
          options: [
            'Sócio ou Fundador',
            'Presidente ou CEO',
            'Vice-presidente ou C-Level',
            'Diretor',
            'Gerente',
            'Coordenador',
            'Supervisor',
            'Analista'
          ]
        },
        { 
          key: 'faturamentoAnual', 
          label: 'Qual o faturamento anual da sua empresa?', 
          type: 'select', 
          required: true,
          options: [
            'Acima de R$ 500 milhões',
            'De R$ 100 milhões a R$ 500 milhões',
            'De R$ 50 milhões a R$ 100 milhões',
            'De R$ 10 milhões a R$ 50 milhões',
            'De R$ 5 milhões a R$ 10 milhões',
            'De R$ 1 milhão a R$ 5 milhões',
            'De R$ 500 mil a R$ 1 milhão',
            'Até R$ 500 mil',
            'Menos de R$ 100 mil',
            'Ainda não faturamos'
          ]
        }
      ]
    },
    {
      title: "Perfil de Negócio",
      fields: [
        { 
          key: 'setorEmpresa', 
          label: 'Setor da Empresa', 
          type: 'select', 
          required: true,
          options: [
            'Tecnologia da Informação',
            'Construção Civil',
            'Consultoria',
            'Saúde',
            'Educação',
            'Serviços Gerais',
            'Outro'
          ]
        },
        { 
          key: 'experienciaLicitacoes', 
          label: 'Experiência com Licitações', 
          type: 'select', 
          required: true,
          options: [
            'Nenhuma experiência',
            'Iniciante (até 5 licitações)',
            'Intermediário (6-20 licitações)',
            'Avançado (mais de 20 licitações)'
          ]
        }
      ]
    },
    {
      title: "Objetivos e Expectativas",
      fields: [
        { 
          key: 'investimento', 
          label: 'Investimento Pretendido', 
          type: 'select', 
          required: true,
          options: [
            'R$ 100 mil - R$ 500 mil',
            'R$ 500 mil - R$ 1 milhão',
            'R$ 1 milhão - R$ 5 milhões',
            'R$ 5 milhões - R$ 10 milhões',
            'R$ 10 milhões - R$ 25 milhões',
            'R$ 25 milhões - R$ 50 milhões',
            'R$ 50 milhões - R$ 100 milhões',
            'R$ 100 milhões - R$ 250 milhões',
            'R$ 250 milhões - R$ 500 milhões'
          ]
        }
      ]
    },
    {
      title: "Análise Finalizada",
      isResult: true
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderField = (field: any) => {
    if (field.type === 'radio') {
      return (
        <div key={field.key} className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </Label>
          <RadioGroup 
            value={formData[field.key as keyof typeof formData]} 
            onValueChange={(value) => updateFormData(field.key, value)}
            className="flex flex-row space-x-4"
          >
            {field.options.map((option: string) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.key}-${option}`} />
                <Label htmlFor={`${field.key}-${option}`} className="text-sm cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    }

    if (field.type === 'select') {
      return (
        <div key={field.key} className="space-y-2">
          <Label htmlFor={field.key} className="text-sm font-medium text-gray-700">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </Label>
          <Select value={formData[field.key as keyof typeof formData]} onValueChange={(value) => updateFormData(field.key, value)}>
            <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-green-500">
              <SelectValue placeholder={`Selecione ${field.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    return (
      <div key={field.key} className="space-y-2">
        <Label htmlFor={field.key} className="text-sm font-medium text-gray-700">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </Label>
        <Input
          id={field.key}
          type={field.type}
          value={formData[field.key as keyof typeof formData]}
          onChange={(e) => updateFormData(field.key, e.target.value)}
          className={`h-10 border-2 border-gray-200 focus:border-green-500 ${
            field.key === 'email' && formData.email && !validateEmail(formData.email) 
              ? 'border-red-500 focus:border-red-500' 
              : ''
          }`}
          placeholder={
            field.key === 'whatsapp' 
              ? 'Digite seu WhatsApp'
              : `Digite ${field.label.toLowerCase()}`
          }
        />
        {field.key === 'email' && formData.email && !validateEmail(formData.email) && (
          <p className="text-red-500 text-xs">Por favor, insira um e-mail válido</p>
        )}
      </div>
    );
  };

  const renderResultPage = () => {
    return (
      <div className="text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        {/* Thank You Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Obrigado, {formData.nomeCompleto}!
          </h2>
          <p className="text-lg text-gray-600">
            Seus dados foram recebidos e nossa análise está em andamento
          </p>
        </div>

        {/* Analysis Summary */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-center">
            <Target className="w-5 h-5 text-blue-600 mr-2" />
            Resumo das Informações Enviadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-medium text-gray-700 mb-1">Setor</div>
              <div className="text-blue-600">{formData.setorEmpresa || 'Não informado'}</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-medium text-gray-700 mb-1">Experiência</div>
              <div className="text-blue-600">{formData.experienciaLicitacoes || 'Não informado'}</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-medium text-gray-700 mb-1">Investimento</div>
              <div className="text-blue-600">{formData.investimento || 'Não informado'}</div>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <div className="font-medium text-gray-700 mb-1">Cargo</div>
              <div className="text-blue-600">{formData.cargo || 'Não informado'}</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
            Próximos Passos
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Análise em Processamento</div>
                <div className="text-sm text-gray-600">Nossa equipe especializada está analisando seu perfil empresarial</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Contato Executivo</div>
                <div className="text-sm text-gray-600">Um consultor especializado entrará em contato em até 24 horas</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Proposta Personalizada</div>
                <div className="text-sm text-gray-600">Receberá uma estratégia customizada para seu negócio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-center mb-3">
            <Phone className="w-6 h-6 mr-2" />
            <h3 className="font-semibold text-lg">Informações de Contato Confirmadas</h3>
          </div>
          <p className="text-blue-100 mb-2">
            Nossa equipe especializada entrará em contato através dos canais informados:
          </p>
          <div className="text-blue-100 text-sm space-y-1">
            <p>📧 {formData.email}</p>
            {formData.whatsapp && (
              <p>📱 WhatsApp: {formData.whatsapp}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Logo do Mercado Nacional centralizado */}
      <div className="w-full py-1 px-4">
        <div className="flex justify-center">
          <img
            src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png"
            alt="Mercado Nacional"
            className="h-6 sm:h-8 md:h-10 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-1 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4">
          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-600">
                Etapa {currentStep + 1} de {steps.length}
              </span>
              <span className="text-xs font-medium text-green-600">
                {Math.round(progress)}% concluído
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-3">
            {currentStepData.isResult ? (
              renderResultPage()
            ) : (
              <>
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {currentStepData.title}
                </h2>
                <p className="text-gray-600 mb-2 text-xs">
                  Preencha as informações abaixo para continuarmos sua análise personalizada.
                </p>

                <div className="space-y-2">
                  {currentStepData.fields?.map(renderField)}
                </div>
              </>
            )}
          </div>

          {/* Benefits Section - Only show on non-result pages */}
          {!currentStepData.isResult && (
            <div className="mb-3 p-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-800 mb-1 flex items-center text-xs">
                <CheckCircle className="w-3 h-3 text-green-600 mr-1" />
                Por que essas informações são importantes?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-xs">
                <div className="flex items-start">
                  <Target className="w-3 h-3 text-blue-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Análise personalizada do seu perfil</span>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Estratégias específicas do seu setor</span>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-3 h-3 text-orange-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Identificação de oportunidades</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-3">
            {!currentStepData.isResult ? (
              <>
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="flex items-center space-x-1 border-2 border-gray-300 hover:border-green-600 h-8 px-3 text-sm"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Voltar</span>
                </Button>

                <Button
                  onClick={nextStep}
                  disabled={!validateStep()}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center space-x-1 h-8 px-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{currentStep === steps.length - 2 ? 'Finalizar Análise' : 'Próximo'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </>
            ) : (
              <div className="w-full flex justify-center">
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center space-x-2 h-10 px-6"
                >
                  <Users className="w-4 h-4" />
                  <span>Nova Análise</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
