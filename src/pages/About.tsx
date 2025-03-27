
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Clock, ChevronsRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24">
      {/* About Hero */}
      <section className="bg-about bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              About <span className="text-pub-gold">The Refuge Pub</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Discover our story, values, and what makes us a Denver institution.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Our Story</span>
              </div>
              <h2 className="heading-lg mb-6">
                A Tradition of <span className="text-pub-gold">Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                The Refuge Pub was founded in 1998 by James and Eleanor Collins, a husband and wife team with a passion for hospitality and quality food and drink. What began as a small neighborhood bar has grown into one of Denver's most beloved establishments, while still maintaining the warmth and character that our patrons have come to love.
              </p>
              <p className="text-muted-foreground mb-6">
                Drawing inspiration from traditional British and Irish pubs, The Refuge was designed to be exactly what its name suggests: a welcoming haven where people could escape the hustle and bustle of daily life, enjoy exceptional food and drinks, and connect with friends both old and new.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've expanded our menu, refined our craft beer and cocktail offerings, and renovated our space, but our commitment to quality, community, and creating a warm, inviting atmosphere has never wavered.
              </p>
            </div>
            <div className="order-first md:order-last animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/images/pub-vintage.jpg" 
                alt="The Refuge Pub History" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
              <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Our Values</span>
              <div className="h-0.5 w-12 bg-pub-gold ml-4"></div>
            </div>
            <h2 className="heading-lg mb-6">
              What We <span className="text-pub-gold">Stand For</span>
            </h2>
            <p className="text-muted-foreground">
              At The Refuge Pub, our values guide everything we do, from how we prepare our food and drinks to how we treat our guests and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-border transform transition-all duration-500 hover:border-pub-gold hover:shadow-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Star className="text-pub-gold h-10 w-10 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. From the ingredients we source to the drinks we pour, excellence is our standard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-border transform transition-all duration-500 hover:border-pub-gold hover:shadow-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Award className="text-pub-gold h-10 w-10 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Authenticity</h3>
              <p className="text-muted-foreground">
                We stay true to traditional pub culture while adding our own modern twist, creating an experience that feels both familiar and fresh.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-border transform transition-all duration-500 hover:border-pub-gold hover:shadow-lg animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Clock className="text-pub-gold h-10 w-10 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Community</h3>
              <p className="text-muted-foreground">
                We're more than just a pub—we're a gathering place for the community, where everyone is welcome and can feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
              <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Meet The Team</span>
              <div className="h-0.5 w-12 bg-pub-gold ml-4"></div>
            </div>
            <h2 className="heading-lg mb-6">
              The People <span className="text-pub-gold">Behind Our Success</span>
            </h2>
            <p className="text-muted-foreground">
              Our dedicated team works tirelessly to ensure every visit to The Refuge Pub is exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src="/images/team-1.jpg" 
                  alt="Michael Davis" 
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Michael Davis</h3>
              <p className="text-pub-gold mb-3">Owner & General Manager</p>
              <p className="text-muted-foreground text-sm">
                Michael has been with The Refuge since its founding, bringing decades of hospitality experience.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src="/images/team-2.jpg" 
                  alt="Sarah Jenkins" 
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Sarah Jenkins</h3>
              <p className="text-pub-gold mb-3">Head Chef</p>
              <p className="text-muted-foreground text-sm">
                With a passion for traditional pub food with a gourmet twist, Sarah leads our culinary team.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src="/images/team-3.jpg" 
                  alt="Robert Wilson" 
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Robert Wilson</h3>
              <p className="text-pub-gold mb-3">Head Bartender</p>
              <p className="text-muted-foreground text-sm">
                A certified mixologist, Robert crafts our signature cocktails and curates our extensive beer selection.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src="/images/team-4.jpg" 
                  alt="Emma Thompson" 
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Emma Thompson</h3>
              <p className="text-pub-gold mb-3">Events Coordinator</p>
              <p className="text-muted-foreground text-sm">
                Emma ensures every private event at The Refuge is perfectly planned and executed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-pub-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
              <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Our Journey</span>
              <div className="h-0.5 w-12 bg-pub-gold ml-4"></div>
            </div>
            <h2 className="heading-lg mb-6">
              Key <span className="text-pub-gold">Milestones</span>
            </h2>
            <p className="text-gray-300">
              A look back at some of the defining moments in our history.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="relative pl-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-pub-gold/20 border-2 border-pub-gold flex items-center justify-center">
                <span className="text-pub-gold font-playfair font-bold">1998</span>
              </div>
              <div className="absolute left-6 top-12 h-full w-0.5 bg-pub-gold/30"></div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pub-gold">Grand Opening</h3>
              <p className="text-gray-300">
                The Refuge Pub opens its doors in downtown Denver, starting with just 10 tables and a small bar.
              </p>
            </div>

            <div className="relative pl-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-pub-gold/20 border-2 border-pub-gold flex items-center justify-center">
                <span className="text-pub-gold font-playfair font-bold">2005</span>
              </div>
              <div className="absolute left-6 top-12 h-full w-0.5 bg-pub-gold/30"></div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pub-gold">First Expansion</h3>
              <p className="text-gray-300">
                Due to growing popularity, we expanded our space to accommodate more guests and added our signature beer garden.
              </p>
            </div>

            <div className="relative pl-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-pub-gold/20 border-2 border-pub-gold flex items-center justify-center">
                <span className="text-pub-gold font-playfair font-bold">2010</span>
              </div>
              <div className="absolute left-6 top-12 h-full w-0.5 bg-pub-gold/30"></div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pub-gold">Menu Renovation</h3>
              <p className="text-gray-300">
                We brought on Head Chef Sarah Jenkins who revitalized our menu while staying true to our traditional pub roots.
              </p>
            </div>

            <div className="relative pl-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-pub-gold/20 border-2 border-pub-gold flex items-center justify-center">
                <span className="text-pub-gold font-playfair font-bold">2015</span>
              </div>
              <div className="absolute left-6 top-12 h-full w-0.5 bg-pub-gold/30"></div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pub-gold">Award Recognition</h3>
              <p className="text-gray-300">
                The Refuge Pub wins "Best Pub in Denver" award, cementing our reputation for excellence.
              </p>
            </div>

            <div className="relative pl-16 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-pub-gold/20 border-2 border-pub-gold flex items-center justify-center">
                <span className="text-pub-gold font-playfair font-bold">2023</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pub-gold">25th Anniversary</h3>
              <p className="text-gray-300">
                We celebrated 25 years of serving the Denver community with a month-long celebration featuring special events and menu items from throughout our history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-secondary p-8 md:p-16 rounded-xl relative overflow-hidden animate-fade-up">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">
                Experience The Refuge <span className="text-pub-gold">For Yourself</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're joining us for a casual drink, a hearty meal, or a special celebration, we look forward to welcoming you to The Refuge Pub.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/menu" className="btn-primary flex items-center">
                  View Our Menu <ChevronsRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/reservations" className="btn-outline flex items-center">
                  Book a Table <ChevronsRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
