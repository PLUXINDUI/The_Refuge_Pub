
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Ошибка: Пользователь попытался получить доступ к несуществующему маршруту:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pub-dark p-6">
      <div className="text-center animate-fade-up">
        <h1 className="text-6xl font-playfair font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Упс! Страница не найдена</p>
        <p className="text-gray-400 mb-8 max-w-md">
          Страница, которую вы ищете, возможно, была удалена, изменила свое название или временно недоступна.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
