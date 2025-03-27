import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Users, Award, Clock } from 'lucide-react';
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-hero bg-cover bg-center h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              Welcome to<br />
              <span className="text-pub-gold">The Refuge Pub</span>
            </h1>
            <p className="text-white text-xl mb-8 max-w-xl">
              A traditional pub with a modern twist, serving craft beers, classic cocktails, and delicious pub food.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                View Our Menu
              </Link>
              <Link to="/reservations" className="btn-outline">
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-zinc-600">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">About Us</span>
              </div>
              <h2 className="heading-lg mb-6">
                Traditional Pub With a <span className="text-pub-gold">Modern Twist</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                The Refuge Pub has been serving the Denver community for over 25 years. What started as a small family business has grown into a beloved institution, while maintaining the warmth and character that our patrons have come to love.
              </p>
              <p className="text-muted-foreground mb-8">
                We pride ourselves on our extensive selection of craft beers, premium spirits, and delicious, hearty pub food made from locally-sourced ingredients whenever possible.
              </p>
              <Link to="/about" className="group inline-flex items-center text-pub-gold font-medium hover:underline">
                Learn More <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="order-1 md:order-2 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="relative">
                <img src="/images/pub-interior.jpg" alt="The Refuge Pub Interior" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-pub-gold text-white p-4 rounded shadow-lg hidden md:block">
                  <p className="font-playfair text-2xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      

      {/* Menu Preview */}
      <section className="section-padding bg-menu bg-fixed bg-cover bg-center">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
              <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Taste Excellence</span>
              <div className="h-0.5 w-12 bg-pub-gold ml-4"></div>
            </div>
            <h2 className="heading-lg text-white mb-6">
              Discover Our <span className="text-pub-gold">Menu</span>
            </h2>
            <p className="text-gray-300">
              From traditional pub favorites to innovative culinary creations, there's something for everyone at The Refuge Pub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 animate-fade-up" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="text-2xl font-playfair text-white mb-6">Food Menu Highlights</h3>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Classic Fish & Chips</h4>
                  <p className="menu-item-desc text-gray-300">Beer-battered cod, hand-cut fries, homemade tartar sauce</p>
                </div>
                <span className="menu-item-price">$16</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Shepherd's Pie</h4>
                  <p className="menu-item-desc text-gray-300">Ground lamb, vegetables, mashed potato crust</p>
                </div>
                <span className="menu-item-price">$18</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Pub Burger</h4>
                  <p className="menu-item-desc text-gray-300">Angus beef, cheddar, bacon, special sauce, brioche bun</p>
                </div>
                <span className="menu-item-price">$17</span>
              </div>
            </div>
            
            <div className="glass-card p-8 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="text-2xl font-playfair text-white mb-6">Drinks Menu Highlights</h3>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Craft Beer Selection</h4>
                  <p className="menu-item-desc text-gray-300">Rotating selection of local and imported beers</p>
                </div>
                <span className="menu-item-price">$6-9</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Classic Whiskey Cocktails</h4>
                  <p className="menu-item-desc text-gray-300">Old Fashioned, Manhattan, Whiskey Sour</p>
                </div>
                <span className="menu-item-price">$12</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Premium Wine Selection</h4>
                  <p className="menu-item-desc text-gray-300">Curated selection of reds, whites, and rosés</p>
                </div>
                <span className="menu-item-price">$9-12</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-up" style={{
          animationDelay: '0.5s'
        }}>
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-pub-dark">
        <div className="container-custom">
          <div className="bg-pub-wood text-white p-8 md:p-16 rounded-xl relative overflow-hidden animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="heading-lg mb-6">
                Ready for an Unforgettable <span className="text-pub-gold">Pub Experience</span>?
              </h2>
              <p className="text-gray-300 mb-8">
                Reserve your table now and enjoy our warm atmosphere, exceptional food, and extensive drink selection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/reservations" className="btn-primary">
                  Book a Table
                </Link>
                <Link to="/contact" className="btn-outline">Связаться с нами</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;