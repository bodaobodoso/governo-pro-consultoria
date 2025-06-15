
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  type: 'multiple' | 'text' | 'number';
}

interface SectorQuizProps {
  sector: {
    title: string;
    icon: any;
    color: string;
    subsectors: string[];
  };
  onClose: () => void;
}

const SectorQuiz: React.FC<SectorQuizProps> = ({ sector, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const getQuizQuestions = (sectorTitle: string): QuizQuestion[] => {
    const commonQuestions = [
      {
        id: 1,
        question: "Qual é o porte da sua empresa?",
        options: ["Microempresa (até R$ 360 mil/ano)", "Pequena empresa (R$ 360 mil - R$ 4,8 mi/ano)", "Média empresa (R$ 4,8 mi - R$ 300 mi/ano)", "Grande empresa (acima de R$ 300 mi/ano)"],
        type: 'multiple' as const
      },
      {
        id: 2,
        question: "Sua empresa já participou de licitações?",
        options: ["Nunca participou", "Já participou algumas vezes", "Participa regularmente", "É especialista em licitações"],
        type: 'multiple' as const
      }
    ];

    const sectorSpecificQuestions: Record<string, QuizQuestion[]> = {
      "Saúde": [
        {
          id: 3,
          question: "Qual área da saúde sua empresa atua?",
          options: ["Equipamentos médicos", "Medicamentos", "Serviços médicos", "Tecnologia em saúde", "Construção hospitalar"],
          type: 'multiple' as const
        },
        {
          id: 4,
          question: "Possui certificações da ANVISA?",
          options: ["Sim, todas necessárias", "Algumas certificações", "Em processo de obtenção", "Não possui"],
          type: 'multiple' as const
        }
      ],
      "Educação": [
        {
          id: 3,
          question: "Qual segmento educacional sua empresa foca?",
          options: ["Material didático", "Equipamentos de informática", "Merenda escolar", "Transporte escolar", "Construção escolar"],
          type: 'multiple' as const
        },
        {
          id: 4,
          question: "Tem experiência com programas do MEC?",
          options: ["Sim, já forneceu", "Conhece os programas", "Está estudando", "Não conhece"],
          type: 'multiple' as const
        }
      ],
      "Infraestrutura e Obras Públicas": [
        {
          id: 3,
          question: "Qual tipo de obra sua empresa executa?",
          options: ["Construção civil", "Pavimentação", "Saneamento", "Projetos sustentáveis", "Urbanização"],
          type: 'multiple' as const
        },
        {
          id: 4,
          question: "Possui registro no CREA/CAU?",
          options: ["Sim, atualizado", "Em renovação", "Em processo", "Não possui"],
          type: 'multiple' as const
        }
      ]
    };

    return [...commonQuestions, ...(sectorSpecificQuestions[sectorTitle] || [])];
  };

  const questions = getQuizQuestions(sector.title);
  const isLastQuestion = currentStep === questions.length;
  const isLeadForm = currentStep > questions.length;

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    setCurrentStep(currentStep + 1);
  };

  const handleLeadSubmit = () => {
    console.log('Lead data:', { ...leadData, sector: sector.title, answers });
    onClose();
  };

  const Icon = sector.icon;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Quiz - {sector.title}
          </CardTitle>
          <Badge className="bg-green-600 text-white">
            Passo {Math.min(currentStep + 1, questions.length + 1)} de {questions.length + 1}
          </Badge>
        </CardHeader>
        
        <CardContent>
          {!isLastQuestion && !isLeadForm ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {questions[currentStep].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start p-4 h-auto hover:bg-green-50 hover:border-green-300"
                    onClick={() => handleAnswer(option)}
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    {option}
                  </Button>
                ))}
              </div>
              
              {currentStep > 0 && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="w-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              )}
            </div>
          ) : isLeadForm ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Receba suas oportunidades personalizadas!
              </h3>
              
              <Input
                placeholder="Nome completo"
                value={leadData.name}
                onChange={(e) => setLeadData({...leadData, name: e.target.value})}
              />
              
              <Input
                type="email"
                placeholder="E-mail"
                value={leadData.email}
                onChange={(e) => setLeadData({...leadData, email: e.target.value})}
              />
              
              <Input
                type="tel"
                placeholder="Telefone"
                value={leadData.phone}
                onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
              />
              
              <Input
                placeholder="Empresa"
                value={leadData.company}
                onChange={(e) => setLeadData({...leadData, company: e.target.value})}
              />
              
              <Button
                onClick={handleLeadSubmit}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3"
              >
                Receber Oportunidades
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800">
                Ótimo! Agora vamos personalizar suas oportunidades
              </h3>
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
              >
                Continuar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
          
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full mt-6"
          >
            Fechar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectorQuiz;
