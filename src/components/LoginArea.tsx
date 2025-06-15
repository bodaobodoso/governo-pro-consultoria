
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lock, Mail, Phone, Building, X, Star, CheckCircle, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginAreaProps {
  onClose: () => void;
}

const LoginArea: React.FC<LoginAreaProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'purchase'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    if (currentView === 'register') {
      // Após cadastro, mostrar tela de compra
      setCurrentView('purchase');
    } else {
      // Login normal
      onClose();
    }
  };

  const handlePurchase = () => {
    console.log('Redirecionando para pagamento...');
    // Redirecionar para o link de checkout fornecido
    window.open('https://pay.kirvano.com/56b4da6c-34c1-49b0-b3d8-c7bda7e4ac6a', '_blank');
    onClose();
  };

  const handleRegisterRedirect = () => {
    onClose();
    navigate('/register');
  };

  const renderLogin = () => (
    <>
      <CardHeader className="text-center pb-4 pt-8">
        <div className="flex justify-center mb-4">
          <img 
            src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
            alt="Mercado Nacional" 
            className="h-8 w-auto"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
          Entrar na Plataforma
        </CardTitle>
        <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1">
          Portal Oficial de Licitações
        </Badge>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="password"
              placeholder="Senha"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Entrar
          </Button>
          
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={handleRegisterRedirect}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
            >
              Não tem conta? Cadastre-se
            </button>
          </div>
        </form>
      </CardContent>
    </>
  );

  const renderRegister = () => (
    <>
      <CardHeader className="text-center pb-4 pt-8">
        <div className="flex justify-center mb-4">
          <img 
            src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
            alt="Mercado Nacional" 
            className="h-8 w-auto"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
          Criar Conta
        </CardTitle>
        <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1">
          Portal Oficial de Licitações
        </Badge>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Nome completo"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="tel"
              placeholder="Telefone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="password"
              placeholder="Senha"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Criar Conta
          </Button>
          
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setCurrentView('login')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
            >
              Já tem conta? Faça login
            </button>
          </div>
        </form>
      </CardContent>
    </>
  );

  const renderPurchase = () => (
    <>
      <CardHeader className="text-center pb-4 pt-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
          Parabéns, {formData.name}!
        </CardTitle>
        <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1">
          Sua conta foi criada com sucesso
        </Badge>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <div className="space-y-6">
          {/* Oferta especial */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
              🚀 OFERTA ESPECIAL - ACESSO COMPLETO
            </h3>
            
            <div className="text-center mb-4">
              <div className="text-4xl font-black text-green-600 mb-2">
                R$ 1.998,00
              </div>
              <div className="text-sm text-gray-600 line-through mb-1">
                De R$ 4.997,00
              </div>
              <Badge className="bg-red-500 text-white px-3 py-1">
                60% OFF - Apenas hoje!
              </Badge>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Acesso completo ao software de licitações</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Contrato de parceria oficial</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">Suporte especializado 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700">Treinamento completo incluído</span>
              </div>
            </div>

            <Button
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 h-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              🔒 GARANTIR ACESSO AGORA
            </Button>
          </div>

          {/* Garantia */}
          <div className="bg-gray-50 rounded-lg p-4 border">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          {/* Botão continuar sem comprar */}
          <div className="text-center">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-sm underline"
            >
              Continuar com acesso limitado
            </button>
          </div>
        </div>
      </CardContent>
    </>
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className="w-full max-w-md bg-white border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header com botão fechar */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {currentView === 'login' && renderLogin()}
        {currentView === 'register' && renderRegister()}
        {currentView === 'purchase' && renderPurchase()}
      </Card>
    </div>
  );
};

export default LoginArea;
