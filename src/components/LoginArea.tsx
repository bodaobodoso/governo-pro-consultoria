
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lock, Mail, Phone, Building } from 'lucide-react';

interface LoginAreaProps {
  onClose: () => void;
}

const LoginArea: React.FC<LoginAreaProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
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
    // Aqui você pode implementar a lógica de login/cadastro
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src="https://omercadonacional.com.br/wp-content/uploads/2025/04/mercado-nacional-new-v1.png" 
              alt="Mercado Nacional" 
              className="h-8 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Entrar na Plataforma' : 'Criar Conta'}
          </CardTitle>
          <Badge className="bg-green-600 text-white">
            Portal Oficial de Licitações
          </Badge>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="pl-10"
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
                    className="pl-10"
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
                    className="pl-10"
                    required
                  />
                </div>
              </>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="pl-10"
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
                className="pl-10"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </Button>
            
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:underline text-sm"
              >
                {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
              </button>
            </div>
          </form>
          
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full mt-4"
          >
            Fechar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginArea;
