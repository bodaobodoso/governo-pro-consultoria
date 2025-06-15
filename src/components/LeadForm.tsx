import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Target, AlertTriangle } from 'lucide-react';

interface LeadFormProps {
  onBack?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    faturamentoAnual: '',
    setorEmpresa: '',
    experienciaLicitacoes: '',
    principalObjetivo: '',
    tempoImplementacao: '',
    investimento: ''
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
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
        { key: 'telefone', label: 'Telefone', type: 'tel', required: true }
      ]
    },
    {
      title: "Informações da Empresa",
      fields: [
        { key: 'empresa', label: 'Nome da Empresa', type: 'text', required: true },
        { key: 'cargo', label: 'Cargo/Função', type: 'text', required: true },
        { 
          key: 'faturamentoAnual', 
          label: 'Faturamento Anual', 
          type: 'select', 
          required: true,
          options: [
            'Até R$ 360 mil',
            'R$ 360 mil a R$ 4,8 milhões',
            'R$ 4,8 milhões a R$ 300 milhões',
            'Acima de R$ 300 milhões'
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
          key: 'principalObjetivo', 
          label: 'Principal Objetivo', 
          type: 'select', 
          required: true,
          options: [
            'Começar a participar de licitações',
            'Aumentar o número de contratos',
            'Melhorar a taxa de sucesso',
            'Expandir para novos órgãos'
          ]
        },
        { 
          key: 'tempoImplementacao', 
          label: 'Tempo para Implementação', 
          type: 'select', 
          required: true,
          options: [
            'Imediato (este mês)',
            '1-3 meses',
            '3-6 meses',
            'Acima de 6 meses'
          ]
        },
        { 
          key: 'investimento', 
          label: 'Investimento Pretendido', 
          type: 'select', 
          required: true,
          options: [
            'Até R$ 5.000',
            'R$ 5.000 - R$ 15.000',
            'R$ 15.000 - R$ 30.000',
            'Acima de R$ 30.000'
          ]
        }
      ]
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderField = (field: any) => {
    if (field.type === 'select') {
      return (
        <div key={field.key} className="space-y-2">
          <Label htmlFor={field.key} className="text-sm font-medium text-gray-700">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </Label>
          <Select value={formData[field.key as keyof typeof formData]} onValueChange={(value) => updateFormData(field.key, value)}>
            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-500">
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
          className="h-12 border-2 border-gray-200 focus:border-green-500"
          placeholder={`Digite seu ${field.label.toLowerCase()}`}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Logo do Mercado Nacional centralizado */}
      <div className="w-full py-6 px-4">
        <div className="flex justify-center">
          <img
            src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png"
            alt="Mercado Nacional"
            className="h-12 sm:h-16 md:h-20 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Etapa {currentStep + 1} de {steps.length}
              </span>
              <span className="text-sm font-medium text-green-600">
                {Math.round(progress)}% concluído
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {currentStepData.title}
            </h2>
            <p className="text-gray-600 mb-6">
              Preencha as informações abaixo para continuarmos sua análise personalizada.
            </p>

            <div className="space-y-6">
              {currentStepData.fields.map(renderField)}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Por que essas informações são importantes?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start">
                <Target className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Análise personalizada do seu perfil</span>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Estratégias específicas do seu setor</span>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Identificação de oportunidades</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              variant="outline"
              className="flex items-center space-x-2 border-2 border-gray-300 hover:border-green-600"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Button>

            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center space-x-2"
            >
              <span>{currentStep === steps.length - 1 ? 'Finalizar Análise' : 'Próximo'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <Badge variant="outline" className="text-xs text-gray-500 border-gray-300">
              <CheckCircle className="w-3 h-3 mr-1" />
              Dados protegidos e criptografados
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
