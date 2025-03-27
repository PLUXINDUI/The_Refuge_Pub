
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pub-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              The <span className="text-pub-gold">Refuge</span> Pub
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              A place where tradition meets quality. Enjoy our carefully selected drinks and delicious food in a warm, welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pub-gold mr-3 mt-0.5" />
                <span>143 East Avenue, Denver, CO 80203, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pub-gold mr-3" />
                <span>+1 (303) 555-6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pub-gold mr-3" />
                <span>info@therefugepub.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pub-gold mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Monday - Thursday</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pub-gold mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Friday - Saturday</p>
                  <p>11:00 AM - 1:00 AM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pub-gold mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p>12:00 PM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/reservations" 
                  className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-pub-gold transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Refuge Pub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
