
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
      <section className="bg-cover bg-center h-screen flex items-center relative" style={{
      backgroundImage: "url('/lovable-uploads/b985778c-353a-4a06-80d5-03ce3544bb2d.png')"
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="mb-6 flex items-center">
              <img src="/lovable-uploads/71cd3d36-61f2-4833-8278-3d019aa667fa.png" alt="Логотип The Refuge Pub" className="h-32 w-32 mr-4" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white">
                Добро пожаловать в<br />
                <span className="text-pub-green">The Refuge Pub</span>
              </h1>
            </div>
            <p className="text-white text-xl mb-8 max-w-xl">
              Традиционный паб с современным подходом, предлагающий крафтовое пиво, классические коктейли и вкусную еду.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                Наше меню
              </Link>
              <Link to="/reservations" className="btn-outline">
                Забронировать стол
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-slate-100 dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">О нас</span>
              </div>
              <h2 className="heading-lg mb-6">
                Традиционный паб с <span className="text-pub-green">современным подходом</span>
              </h2>
              <p className="text-muted-foreground mb-6">The Refuge Pub обслуживает посетителей в городе Жуковский уже более 3 лет. То, что начиналось как небольшой семейный бизнес, выросло в любимое заведение, сохраняя при этом тепло и характер, которые так полюбились нашим гостям.</p>
              <p className="text-muted-foreground mb-8">
                Мы гордимся нашим широким выбором крафтового пива, премиальных спиртных напитков и вкусной, сытной пабной еды, приготовленной из местных ингредиентов.
              </p>
              
            </div>
            <div className="order-1 md:order-2 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="relative">
                <img src="/lovable-uploads/92fca82d-8276-42dd-aadf-006c766e3f8f.png" alt="Интерьер The Refuge Pub" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-pub-green text-white p-4 rounded shadow-lg hidden md:block">
                  <p className="font-playfair text-2xl font-bold">3+</p>
                  <p className="text-sm">Лет отличного сервиса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-pub-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
              <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Почему мы</span>
              <div className="h-0.5 w-12 bg-pub-green ml-4"></div>
            </div>
            <h2 className="heading-lg mb-6">
              Что делает нас <span className="text-pub-green">особенными</span>
            </h2>
            <p className="text-muted-foreground">
              The Refuge Pub предлагает уникальный опыт, который сочетает в себе качество, атмосферу и традиции.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-md transform transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{
            animationDelay: '0.3s'
          }}>
              <Star className="text-pub-green h-10 w-10 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Качественная кухня</h3>
              <p className="text-muted-foreground">
                Мы готовим из свежих, местных ингредиентов, чтобы создавать блюда, которые порадуют ваши вкусовые рецепторы.
              </p>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-md transform transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <Users className="text-pub-green h-10 w-10 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Дружелюбная атмосфера</h3>
              <p className="text-muted-foreground">
                Наш персонал стремится создать теплую, гостеприимную атмосферу, где каждый гость чувствует себя как дома.
              </p>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-md transform transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{
            animationDelay: '0.5s'
          }}>
              <Award className="text-pub-green h-10 w-10 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Богатый выбор напитков</h3>
              <p className="text-muted-foreground">
                От крафтового пива до премиальных виски – наша барная карта удовлетворит даже самых требовательных ценителей.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex items-center animate-fade-up" style={{
            animationDelay: '0.6s'
          }}>
              <img src="/lovable-uploads/fe3648ce-2d48-4cc7-8d83-bd6acb6a24ce.png" alt="Интерьер The Refuge Pub" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="flex items-center animate-fade-up" style={{
            animationDelay: '0.7s'
          }}>
              <img src="/lovable-uploads/2ccaa5f9-6f9d-4c7a-b19a-3410600c64bb.png" alt="Интерьер The Refuge Pub" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section-padding bg-menu bg-fixed bg-cover bg-center">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
              <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Наше меню</span>
              <div className="h-0.5 w-12 bg-pub-green ml-4"></div>
            </div>
            <h2 className="heading-lg text-white mb-6">
              Откройте для себя наше <span className="text-pub-green">Меню</span>
            </h2>
            <p className="text-gray-300">В The Refuge Pub найдется что-то для каждого - от традиционных любимых блюд паба до инновационных кулинарных творений.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 animate-fade-up" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="text-2xl font-playfair text-white mb-6">Основные блюда</h3>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Фиш энд чипс</h4>
                  <p className="menu-item-desc text-gray-300">Треска в пивном кляре, картофель фри, домашний соус тартар</p>
                </div>
                <span className="menu-item-price">750₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Пастуший пирог</h4>
                  <p className="menu-item-desc text-gray-300">Фарш из баранины, овощи, картофельная корочка</p>
                </div>
                <span className="menu-item-price">820₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Фирменный бургер</h4>
                  <p className="menu-item-desc text-gray-300">Говядина ангус, чеддер, бекон, фирменный соус, булочка бриошь</p>
                </div>
                <span className="menu-item-price">790₽</span>
              </div>
            </div>
            
            <div className="glass-card p-8 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="text-2xl font-playfair text-white mb-6">Напитки</h3>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Крафтовое пиво</h4>
                  <p className="menu-item-desc text-gray-300">Ротационный выбор местных и импортных сортов</p>
                </div>
                <span className="menu-item-price">от 300₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Классические коктейли с виски</h4>
                  <p className="menu-item-desc text-gray-300">Олд Фэшн, Манхэттен, Виски Сауэр</p>
                </div>
                <span className="menu-item-price">550₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h4 className="menu-item-title text-white">Премиальные вина</h4>
                  <p className="menu-item-desc text-gray-300">Тщательно подобранная коллекция красных, белых и розовых вин</p>
                </div>
                <span className="menu-item-price">от 350₽</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-up" style={{
          animationDelay: '0.5s'
        }}>
            <Link to="/menu" className="btn-primary">Полное меню</Link>
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
                Готовы к незабываемому <span className="text-pub-green">опыту в пабе</span>?
              </h2>
              <p className="text-gray-300 mb-8">Закажите столик прямо сейчас и насладитесь теплой атмосферой, исключительной кухней и богатым выбором напитков.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/reservations" className="btn-primary">Забронировать столик</Link>
                <Link to="/contact" className="btn-outline">Связаться с нами</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
