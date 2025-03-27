
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24">
      {/* Menu Hero */}
      <section className="bg-menu bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Our <span className="text-pub-gold">Menu</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Discover our wide selection of hearty dishes and refreshing drinks, crafted with love and tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <section className="py-8 bg-pub-dark sticky top-16 z-30 border-b border-pub-gold/20">
        <div className="container-custom">
          <div className="flex justify-center space-x-6 overflow-x-auto pb-2 no-scrollbar">
            <a href="#starters" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-gold/10 hover:bg-pub-gold/20 transition-colors duration-300">Starters</a>
            <a href="#mains" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-gold/10 hover:bg-pub-gold/20 transition-colors duration-300">Main Courses</a>
            <a href="#desserts" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-gold/10 hover:bg-pub-gold/20 transition-colors duration-300">Desserts</a>
            <a href="#beers" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-gold/10 hover:bg-pub-gold/20 transition-colors duration-300">Beers</a>
            <a href="#cocktails" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-gold/10 hover:bg-pub-gold/20 transition-colors duration-300">Cocktails</a>
            <a href="#wines" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-gold/10 hover:bg-pub-gold/20 transition-colors duration-300">Wines</a>
          </div>
        </div>
      </section>

      {/* Starters Section */}
      <section id="starters" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Appetizers</span>
              </div>
              <h2 className="heading-lg mb-6">Starters</h2>
              <p className="text-muted-foreground">Begin your culinary journey with our selection of delicious appetizers.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Spicy Buffalo Wings</h3>
                  <p className="menu-item-desc">Crispy chicken wings tossed in our signature buffalo sauce, served with blue cheese dip and celery sticks</p>
                </div>
                <span className="menu-item-price">$14</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Loaded Potato Skins</h3>
                  <p className="menu-item-desc">Crispy potato skins filled with melted cheddar, bacon bits, and green onions, served with sour cream</p>
                </div>
                <span className="menu-item-price">$12</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Charcuterie Board</h3>
                  <p className="menu-item-desc">Selection of premium cured meats, artisanal cheeses, pickles, and crostini</p>
                </div>
                <span className="menu-item-price">$18</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Spinach & Artichoke Dip</h3>
                  <p className="menu-item-desc">Creamy blend of spinach, artichokes, and three cheeses, served with tortilla chips</p>
                </div>
                <span className="menu-item-price">$13</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Crispy Calamari</h3>
                  <p className="menu-item-desc">Lightly battered calamari rings fried to perfection, served with lemon aioli</p>
                </div>
                <span className="menu-item-price">$15</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section id="mains" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Hearty Dishes</span>
              </div>
              <h2 className="heading-lg mb-6">Main Courses</h2>
              <p className="text-muted-foreground">Satisfying main dishes prepared with care and the finest ingredients.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Classic Fish & Chips</h3>
                  <p className="menu-item-desc">Beer-battered cod, hand-cut fries, minted peas, and homemade tartar sauce</p>
                </div>
                <span className="menu-item-price">$18</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Shepherd's Pie</h3>
                  <p className="menu-item-desc">Slow-cooked ground lamb and vegetables in rich gravy, topped with creamy mashed potatoes</p>
                </div>
                <span className="menu-item-price">$19</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Refuge Signature Burger</h3>
                  <p className="menu-item-desc">8oz Angus beef patty, Irish cheddar, bacon jam, lettuce, tomato, and special sauce on a brioche bun, served with fries</p>
                </div>
                <span className="menu-item-price">$17</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Steak & Guinness Pie</h3>
                  <p className="menu-item-desc">Tender beef chunks slow-cooked in Guinness gravy with vegetables, topped with puff pastry</p>
                </div>
                <span className="menu-item-price">$20</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Bangers & Mash</h3>
                  <p className="menu-item-desc">Grilled Cumberland sausages, creamy mashed potatoes, caramelized onion gravy</p>
                </div>
                <span className="menu-item-price">$16</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Grilled Salmon</h3>
                  <p className="menu-item-desc">Pan-seared Atlantic salmon, herb-roasted potatoes, seasonal vegetables, lemon butter sauce</p>
                </div>
                <span className="menu-item-price">$22</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Vegetable Wellington (V)</h3>
                  <p className="menu-item-desc">Roasted vegetables and mushroom duxelles wrapped in puff pastry, served with roasted potatoes and vegetable gravy</p>
                </div>
                <span className="menu-item-price">$16</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section id="desserts" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Sweet Treats</span>
              </div>
              <h2 className="heading-lg mb-6">Desserts</h2>
              <p className="text-muted-foreground">Indulge in our delicious homemade desserts to complete your meal.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Sticky Toffee Pudding</h3>
                  <p className="menu-item-desc">Warm date sponge cake, toffee sauce, vanilla ice cream</p>
                </div>
                <span className="menu-item-price">$9</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Chocolate Brownie</h3>
                  <p className="menu-item-desc">Warm chocolate brownie, chocolate sauce, whipped cream</p>
                </div>
                <span className="menu-item-price">$8</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Apple Crumble</h3>
                  <p className="menu-item-desc">Baked apples with cinnamon, oat crumble topping, custard</p>
                </div>
                <span className="menu-item-price">$9</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Bread & Butter Pudding</h3>
                  <p className="menu-item-desc">Classic bread pudding with raisins, vanilla custard</p>
                </div>
                <span className="menu-item-price">$8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beers Section */}
      <section id="beers" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Craft Selection</span>
              </div>
              <h2 className="heading-lg mb-6">Beers</h2>
              <p className="text-muted-foreground">Explore our extensive selection of draft beers, craft bottles, and cans.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Guinness</h3>
                  <p className="menu-item-desc">Ireland, Stout, 4.2% ABV</p>
                </div>
                <span className="menu-item-price">$7</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Sierra Nevada Pale Ale</h3>
                  <p className="menu-item-desc">USA, Pale Ale, 5.6% ABV</p>
                </div>
                <span className="menu-item-price">$6</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Stella Artois</h3>
                  <p className="menu-item-desc">Belgium, Lager, 5.0% ABV</p>
                </div>
                <span className="menu-item-price">$6</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Blue Moon</h3>
                  <p className="menu-item-desc">USA, Belgian-style Wheat, 5.4% ABV</p>
                </div>
                <span className="menu-item-price">$6</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Goose Island IPA</h3>
                  <p className="menu-item-desc">USA, IPA, 5.9% ABV</p>
                </div>
                <span className="menu-item-price">$7</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Newcastle Brown Ale</h3>
                  <p className="menu-item-desc">UK, Brown Ale, 4.7% ABV</p>
                </div>
                <span className="menu-item-price">$6</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Rotating Craft Selection</h3>
                  <p className="menu-item-desc">Ask your server about our seasonal craft beers</p>
                </div>
                <span className="menu-item-price">$7-9</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Local Brewery Feature</h3>
                  <p className="menu-item-desc">Supporting Denver's local craft scene</p>
                </div>
                <span className="menu-item-price">$7-9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cocktails Section */}
      <section id="cocktails" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Expertly Crafted</span>
              </div>
              <h2 className="heading-lg mb-6">Cocktails</h2>
              <p className="text-muted-foreground">Expertly mixed classic and signature cocktails to suit every palate.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Old Fashioned</h3>
                  <p className="menu-item-desc">Bourbon, sugar, Angostura bitters, orange peel</p>
                </div>
                <span className="menu-item-price">$12</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Irish Mule</h3>
                  <p className="menu-item-desc">Irish whiskey, ginger beer, lime juice</p>
                </div>
                <span className="menu-item-price">$11</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Refuge Manhattan</h3>
                  <p className="menu-item-desc">Rye whiskey, sweet vermouth, bitters, luxardo cherry</p>
                </div>
                <span className="menu-item-price">$13</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Espresso Martini</h3>
                  <p className="menu-item-desc">Vodka, coffee liqueur, fresh espresso, simple syrup</p>
                </div>
                <span className="menu-item-price">$13</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Classic Mojito</h3>
                  <p className="menu-item-desc">White rum, mint leaves, lime juice, soda water</p>
                </div>
                <span className="menu-item-price">$12</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Whiskey Sour</h3>
                  <p className="menu-item-desc">Bourbon, lemon juice, simple syrup, egg white</p>
                </div>
                <span className="menu-item-price">$12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wines Section */}
      <section id="wines" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Curated Selection</span>
              </div>
              <h2 className="heading-lg mb-6">Wines</h2>
              <p className="text-muted-foreground">Carefully selected wines to complement your meal perfectly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-pub-gold mb-6">Red Wines</h3>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Cabernet Sauvignon</h4>
                    <p className="menu-item-desc">California, bold, oak, black currant</p>
                  </div>
                  <span className="menu-item-price">$10/38</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Malbec</h4>
                    <p className="menu-item-desc">Argentina, smooth, plum, cherry</p>
                  </div>
                  <span className="menu-item-price">$9/34</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Pinot Noir</h4>
                    <p className="menu-item-desc">Oregon, light, raspberry, earthy</p>
                  </div>
                  <span className="menu-item-price">$11/42</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-pub-gold mb-6">White Wines</h3>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Chardonnay</h4>
                    <p className="menu-item-desc">California, rich, buttery, oak</p>
                  </div>
                  <span className="menu-item-price">$9/34</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Sauvignon Blanc</h4>
                    <p className="menu-item-desc">New Zealand, crisp, citrus, tropical</p>
                  </div>
                  <span className="menu-item-price">$10/38</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Pinot Grigio</h4>
                    <p className="menu-item-desc">Italy, light, apple, citrus</p>
                  </div>
                  <span className="menu-item-price">$8/30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-pub-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <h2 className="heading-lg mb-6">
              Join Us For a <span className="text-pub-gold">Perfect Meal</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Reserve your table now and experience our delicious food and drinks in our warm, welcoming atmosphere.
            </p>
            <Link to="/reservations" className="btn-primary">
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
