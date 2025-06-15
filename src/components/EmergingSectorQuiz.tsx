
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, Lightbulb, Leaf, Monitor, Zap } from 'lucide-react';

interface EmergingSectorQuizProps {
  sector: {
    title: string;
    description: string;
    icon: any;
    color: string;
  };
  onClose: () => void;
}

const EmergingSectorQuiz: React.FC<EmergingSectorQuizProps> = ({ sector, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const getEmergingQuestions = (sectorTitle: string) => {
    const baseQuestions = [
      {
        id: 1,
        question: "Qual é o nível de maturidade da sua empresa em inovação?",
        options: ["Startup/Empresa inovadora", "Empresa tradicional buscando inovação", "Empresa com alguns projetos inovadores", "Empresa consolidada em inovação"],
        type: 'multiple' as const
      }
    ];

    const specificQuestions: Record<string, any[]> = {
      "Transformação Digital": [
        {
          id: 2,
          question: "Sua empresa desenvolve soluções de governo digital?",
          options: ["Sim, é nossa especialidade", "Temos algumas soluções", "Estamos desenvolvendo", "Queremos entrar nesse mercado"]
        },
        {
          id: 3,
          question: "Qual tecnologia sua empresa domina?",
          options: ["Inteligência Artificial", "Blockchain", "IoT (Internet das Coisas)", "Cloud Computing", "Big Data"]
        }
      ],
      "Sustentabilidade": [
        {
          id: 2,
          question: "Sua empresa possui certificações ESG?",
          options: ["Sim, múltiplas certificações", "Algumas certificações", "Em processo de certificação", "Planejando obter"]
        },
        {
          id: 3,
          question: "Qual área sustentável sua empresa atua?",
          options: ["Energia renovável", "Gestão de resíduos", "Eficiência energética", "Projetos ambientais", "Economia circular"]
        }
      ],
      "Inovação": [
        {
          id: 2,
          question: "Sua empresa possui parcerias com universidades/institutos?",
          options: ["Sim, múltiplas parcerias", "Algumas parcerias", "Buscando parcerias", "Não possui"]
        },
        {
          id: 3,
          question: "Qual tipo de inovação sua empresa oferece?",
          options: ["Produtos inovadores", "Serviços disruptivos", "Processos otimizados", "Modelos de negócio novos"]
        }
      ],
      "Energia": [
        {
          id: 2,
          question: "Sua empresa atua em que área energética?",
          options: ["Energia solar", "Energia eólica", "Eficiência energética", "Smart grids", "Armazenamento de energia"]
        },
        {
          id: 3,
          question: "Possui projetos já implementados no setor público?",
          options: ["Sim, múltiplos projetos", "Alguns projetos", "Projeto piloto", "Ainda não implementou"]
        }
      ]
    };

    return [...baseQuestions, ...(specificQuestions[sectorTitle] || [])];
  };

  const questions = getEmergingQuestions(sector.title);
  const isLastQuestion = currentStep === questions.length;
  const isLeadForm = currentStep > questions.length;

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    setCurrentStep(currentStep + 1);
  };

  const handleLeadSubmit = () => {
    console.log('Emerging sector lead:', { ...leadData, sector: sector.title, answers });
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
            Setor Emergente: {sector.title}
          </CardTitle>
          <Badge className="bg-gradient-to-r from-yellow-600 to-green-600 text-white">
            🚀 FUTURO DO GOVERNO
          </Badge>
        </CardHeader>
        
        <CardContent>
          {!isLastQuestion && !isLeadForm ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-gray-700">{sector.description}</p>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800">
                {questions[currentStep].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start p-4 h-auto hover:bg-yellow-50 hover:border-yellow-300"
                    onClick={() => handleAnswer(option)}
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-600" />
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : isLeadForm ? (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Seja pioneiro nas licitações do futuro!
                </h3>
                <p className="text-sm text-gray-600">
                  Receba oportunidades exclusivas em setores emergentes
                </p>
              </div>
              
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
                className="w-full bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white font-semibold py-3"
              >
                Quero Ser Pioneiro
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-lg">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Perfeito! Você está pronto para o futuro
                </h3>
                <p className="text-sm text-gray-600">
                  Vamos conectar você com as oportunidades mais inovadoras do governo
                </p>
              </div>
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white"
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

export default EmergingSectorQuiz;
