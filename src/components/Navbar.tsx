import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : '';
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-pub-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/71cd3d36-61f2-4833-8278-3d019aa667fa.png" alt="Логотип The Refuge Pub" className="h-10 w-10" />
          <span className="text-2xl font-playfair font-bold text-white">
            Паб <span className="text-pub-green">"Убежище"</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className={`nav-link text-white ${isActive('/')}`}>
            Главная
          </Link>
          
          <Link to="/menu" className={`nav-link text-white ${isActive('/menu')}`}>
            Меню
          </Link>
          
          <Link to="/reservations" className={`nav-link text-white ${isActive('/reservations')}`}>
            Бронирование
          </Link>
          <Link to="/contact" className={`nav-link text-white ${isActive('/contact')}`}>
            Контакты
          </Link>
          <Link to="/login" className={`nav-link text-white ${isActive('/login')}`}>
            Вход
          </Link>
          <a href="https://t.me/refuge_pub" target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-pub-green px-3 py-2 rounded-md ml-2 hover:bg-opacity-80 transition-colors">
            <MessageCircle className="h-4 w-4 mr-2" />
            Telegram
          </a>
        </nav>
        
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Переключить меню">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && <div className="md:hidden bg-pub-dark/95 backdrop-blur-md animate-slide-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className={`text-white hover:text-pub-green ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/about" className={`text-white hover:text-pub-green ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
              О нас
            </Link>
            <Link to="/menu" className={`text-white hover:text-pub-green ${isActive('/menu')}`} onClick={() => setIsMenuOpen(false)}>
              Меню
            </Link>
            <Link to="/gallery" className={`text-white hover:text-pub-green ${isActive('/gallery')}`} onClick={() => setIsMenuOpen(false)}>
              Интерьер
            </Link>
            <Link to="/reservations" className={`text-white hover:text-pub-green ${isActive('/reservations')}`} onClick={() => setIsMenuOpen(false)}>
              Бронирование
            </Link>
            <Link to="/contact" className={`text-white hover:text-pub-green ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
              Контакты
            </Link>
            <Link to="/login" className={`text-white hover:text-pub-green ${isActive('/login')}`} onClick={() => setIsMenuOpen(false)}>
              Вход
            </Link>
            <a href="https://t.me/refuge_pub" target="_blank" rel="noopener noreferrer" className="flex items-center text-pub-green" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Telegram
            </a>
          </div>
        </div>}
    </header>;
};
export default Navbar;