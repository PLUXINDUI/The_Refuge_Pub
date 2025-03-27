
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pub-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-playfair font-bold text-white">
            The <span className="text-pub-gold">Refuge</span> Pub
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-1">
          <Link to="/" className={`nav-link text-white ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link text-white ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/menu" className={`nav-link text-white ${isActive('/menu')}`}>
            Menu
          </Link>
          <Link to="/reservations" className={`nav-link text-white ${isActive('/reservations')}`}>
            Reservations
          </Link>
          <Link to="/contact" className={`nav-link text-white ${isActive('/contact')}`}>
            Contact
          </Link>
          <Link to="/login" className={`nav-link text-white ${isActive('/login')}`}>
            Login
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pub-dark/95 backdrop-blur-md animate-slide-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-white hover:text-pub-gold ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-pub-gold ${isActive('/about')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className={`text-white hover:text-pub-gold ${isActive('/menu')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/reservations" 
              className={`text-white hover:text-pub-gold ${isActive('/reservations')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Reservations
            </Link>
            <Link 
              to="/contact" 
              className={`text-white hover:text-pub-gold ${isActive('/contact')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className={`text-white hover:text-pub-gold ${isActive('/login')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
