
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация аутентификации
    setTimeout(() => {
      toast({
        title: "Вход выполнен успешно",
        description: "Добро пожаловать в Паб «Убежище»!",
        duration: 3000,
      });
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pub-dark p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl p-8 border border-pub-gold/20 animate-fade-up">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-playfair font-bold mb-2">Добро пожаловать</h1>
            <p className="text-muted-foreground">Войдите в свой аккаунт</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Электронная почта
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="ivan@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-pub-gold hover:underline"
                >
                  Забыли пароль?
                </Link>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center"
            >
              {isLoading ? (
                <span className="animate-pulse">Вход в систему...</span>
              ) : (
                <>
                  Войти <LogIn className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Нет аккаунта?{' '}
              <Link to="/register" className="text-pub-gold hover:underline">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors duration-300">
            &larr; Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
