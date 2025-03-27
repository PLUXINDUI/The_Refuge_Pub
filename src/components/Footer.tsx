import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-pub-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              Паб <span className="text-pub-green">«Убежище»</span>
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Место, где традиции встречаются с качеством. Наслаждайтесь нашими тщательно подобранными напитками и вкусной едой в теплой, гостеприимной атмосфере.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Свяжитесь с нами</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pub-green mr-3 mt-0.5" />
                <span>г. Жуковский, ул. Молодежная, 21А</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pub-green mr-3" />
                <span>+7 926 533-29-93</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pub-green mr-3" />
                <span>info@pububezhishe.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Часы работы</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pub-green mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Понедельник - Четверг</p>
                  <p>11:00 - 23:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pub-green mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Пятница - Суббота</p>
                  <p>11:00 - 01:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pub-green mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Воскресенье</p>
                  <p>12:00 - 22:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Быстрые ссылки</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                  Бронирование
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pub-green transition-colors duration-300">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Паб «Убежище». Все права защищены.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;