
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useAddUser } from "@/hooks/useDatabase";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const addUser = useAddUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Форма отправлена:', formData);
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Ошибка",
        description: "Пароль должен содержать не менее 6 символов",
        variant: "destructive",
      });
      return;
    }
    
    // Создаем пользователя в Supabase
    addUser.mutate({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }, {
      onSuccess: (user) => {
        console.log('Пользователь создан:', user);
        toast({
          title: "Регистрация успешна",
          description: "Добро пожаловать в Паб «Убежище»! Можете войти в систему.",
          duration: 5000,
        });
        navigate('/login');
      },
      onError: (error: any) => {
        console.error("Ошибка при регистрации:", error);
        let errorMessage = "При создании вашего аккаунта произошла ошибка. Пожалуйста, попробуйте еще раз.";
        
        if (error.message?.includes('already registered')) {
          errorMessage = "Пользователь с таким email уже зарегистрирован";
        } else if (error.message?.includes('invalid email')) {
          errorMessage = "Неверный формат email адреса";
        } else if (error.message?.includes('password')) {
          errorMessage = "Пароль слишком слабый";
        }
        
        toast({
          title: "Ошибка регистрации",
          description: errorMessage,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pub-dark p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-pub-green/20 animate-fade-up">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-playfair font-bold mb-2">Создать аккаунт</h1>
            <p className="text-muted-foreground">Присоединяйтесь к сообществу Паба «Убежище»</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Полное имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Иван Иванов"
                required
              />
            </div>
            
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
                  minLength={6}
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
              <p className="text-xs text-muted-foreground mt-2">
                Пароль должен содержать не менее 6 символов
              </p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
                Подтвердите пароль
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={addUser.isPending}
              className="btn-primary w-full flex items-center justify-center"
            >
              {addUser.isPending ? (
                <span className="animate-pulse">Создание аккаунта...</span>
              ) : (
                <>
                  Создать аккаунт <UserPlus className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Уже есть аккаунт?{' '}
              <Link to="/login" className="text-pub-green hover:underline">
                Войти
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

export default Register;
