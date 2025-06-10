import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="page-transition pt-24 bg-pub-light">
      {/* Menu Hero */}
      <section className="bg-menu bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Наше <span className="text-pub-green">Меню</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Откройте для себя наш широкий выбор сытных блюд и освежающих напитков, приготовленных с любовью и традициями.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <section className="py-8 bg-pub-dark sticky top-16 z-30 border-b border-pub-green/20">
        <div className="container-custom">
          <div className="flex justify-center space-x-6 overflow-x-auto pb-2 no-scrollbar">
            <a href="#starters" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-green/10 hover:bg-pub-green/20 transition-colors duration-300">Закуски</a>
            <a href="#mains" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-green/10 hover:bg-pub-green/20 transition-colors duration-300">Основные блюда</a>
            <a href="#desserts" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-green/10 hover:bg-pub-green/20 transition-colors duration-300">Десерты</a>
            <a href="#beers" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-green/10 hover:bg-pub-green/20 transition-colors duration-300">Пиво</a>
            <a href="#cocktails" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-green/10 hover:bg-pub-green/20 transition-colors duration-300">Коктейли</a>
            <a href="#wines" className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-pub-green/10 hover:bg-pub-green/20 transition-colors duration-300">Вина</a>
          </div>
        </div>
      </section>

      {/* Starters Section */}
      <section id="starters" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Аппетайзеры</span>
              </div>
              <h2 className="heading-lg mb-6">Закуски</h2>
              <p className="text-muted-foreground">Начните свое кулинарное путешествие с нашей подборки вкусных закусок.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Острые куриные крылышки Буффало</h3>
                  <p className="menu-item-desc">Хрустящие куриные крылышки в нашем фирменном соусе буффало, подаются с соусом блю чиз и стеблями сельдерея</p>
                </div>
                <span className="menu-item-price">590₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Нагруженные картофельные шкурки</h3>
                  <p className="menu-item-desc">Хрустящие картофельные шкурки, наполненные расплавленным чеддером, беконом и зеленым луком, подаются со сметаной</p>
                </div>
                <span className="menu-item-price">490₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Мясная доска</h3>
                  <p className="menu-item-desc">Выбор премиальных вяленых мясных деликатесов, ремесленных сыров, соленьев и гренок</p>
                </div>
                <span className="menu-item-price">750₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Шпинатный артишоковый дип</h3>
                  <p className="menu-item-desc">Кремовая смесь шпината, артишоков и трех сыров, подается с чипсами из тортильи</p>
                </div>
                <span className="menu-item-price">520₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Хрустящие кальмары</h3>
                  <p className="menu-item-desc">Кольца кальмара в легком кляре, обжаренные до совершенства, подаются с лимонным айоли</p>
                </div>
                <span className="menu-item-price">630₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section id="mains" className="section-padding bg-pub-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Сытные блюда</span>
              </div>
              <h2 className="heading-lg mb-6">Основные блюда</h2>
              <p className="text-muted-foreground">Удовлетворяющие основные блюда, приготовленные с заботой и из лучших ингредиентов.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Классический Фиш энд Чипс</h3>
                  <p className="menu-item-desc">Треска в пивном кляре, картофель фри, мятный горошек и домашний соус тартар</p>
                </div>
                <span className="menu-item-price">750₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Пастуший пирог</h3>
                  <p className="menu-item-desc">Медленно тушеный фарш из баранины с овощами в богатом соусе, покрытый кремовым картофельным пюре</p>
                </div>
                <span className="menu-item-price">790₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Фирменный бургер The Refuge</h3>
                  <p className="menu-item-desc">Котлета из говядины Ангус, ирландский чеддер, бекон джем, салат, помидор и фирменный соус на булочке бриошь, подается с картофелем фри</p>
                </div>
                <span className="menu-item-price">690₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Пирог со стейком и Гиннессом</h3>
                  <p className="menu-item-desc">Нежные кусочки говядины, медленно тушенные в соусе на основе Гиннесса с овощами, покрытые слоеным тестом</p>
                </div>
                <span className="menu-item-price">820₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Колбаски с пюре</h3>
                  <p className="menu-item-desc">Фирменные колбаски, кремовое картофельное пюре, карамелизированный луковый соус</p>
                </div>
                <span className="menu-item-price">650₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Стейк из лосося на гриле</h3>
                  <p className="menu-item-desc">Филе атлантического лосося, запеченный картофель с травами, сезонные овощи, лимонный масляный соус</p>
                </div>
                <span className="menu-item-price">890₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Овощной Веллингтон (Вегетарианское)</h3>
                  <p className="menu-item-desc">Запеченные овощи и грибы дюксель в слоеном тесте, подается с запеченным картофелем и овощным соусом</p>
                </div>
                <span className="menu-item-price">640₽</span>
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
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Сладкие угощения</span>
              </div>
              <h2 className="heading-lg mb-6">Десерты</h2>
              <p className="text-muted-foreground">Побалуйте себя нашими вкусными домашними десертами, чтобы завершить трапезу.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Липкий пудинг с ирисом</h3>
                  <p className="menu-item-desc">Теплый пирог с финиками, ирисный соус, ванильное мороженое</p>
                </div>
                <span className="menu-item-price">350₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Шоколадный брауни</h3>
                  <p className="menu-item-desc">Теплый шоколадный брауни, шоколадный соус, взбитые сливки</p>
                </div>
                <span className="menu-item-price">320₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Яблочный крамбл</h3>
                  <p className="menu-item-desc">Запеченные яблоки с корицей, овсяная крошка, заварной крем</p>
                </div>
                <span className="menu-item-price">350₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Хлебный пудинг</h3>
                  <p className="menu-item-desc">Классический хлебный пудинг с изюмом, ванильный заварной крем</p>
                </div>
                <span className="menu-item-price">320₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beers Section */}
      <section id="beers" className="section-padding bg-pub-light">
        <div className="container-custom bg-pub-light">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Крафтовый выбор</span>
              </div>
              <h2 className="heading-lg mb-6">Пиво</h2>
              <p className="text-muted-foreground">Исследуйте наш обширный выбор разливного пива, крафтовых бутылок и банок.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Гиннесс</h3>
                  <p className="menu-item-desc">Ирландия, Стаут, 4.2% ABV</p>
                </div>
                <span className="menu-item-price">350₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Сьерра Невада Пейл Эль</h3>
                  <p className="menu-item-desc">США, Пейл Эль, 5.6% ABV</p>
                </div>
                <span className="menu-item-price">300₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Стелла Артуа</h3>
                  <p className="menu-item-desc">Бельгия, Лагер, 5.0% ABV</p>
                </div>
                <span className="menu-item-price">300₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Блю Мун</h3>
                  <p className="menu-item-desc">США, Бельгийский пшеничный, 5.4% ABV</p>
                </div>
                <span className="menu-item-price">300₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Гус Айленд IPA</h3>
                  <p className="menu-item-desc">США, IPA, 5.9% ABV</p>
                </div>
                <span className="menu-item-price">350₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Ньюкасл Браун Эль</h3>
                  <p className="menu-item-desc">Великобритания, Коричневый Эль, 4.7% ABV</p>
                </div>
                <span className="menu-item-price">300₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Ротационный крафтовый выбор</h3>
                  <p className="menu-item-desc">Спросите нашего официанта о сезонных крафтовых сортах</p>
                </div>
                <span className="menu-item-price">350-450₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Локальные пивоварни</h3>
                  <p className="menu-item-desc">Поддерживаем местную крафтовую сцену</p>
                </div>
                <span className="menu-item-price">350-450₽</span>
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
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Мастерски приготовленные</span>
              </div>
              <h2 className="heading-lg mb-6">Коктейли</h2>
              <p className="text-muted-foreground">Мастерски смешанные классические и фирменные коктейли на любой вкус.</p>
            </div>

            <div className="space-y-8 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Олд Фэшн</h3>
                  <p className="menu-item-desc">Бурбон, сахар, биттер Ангостура, апельсиновая цедра</p>
                </div>
                <span className="menu-item-price">580₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Ирландский Мул</h3>
                  <p className="menu-item-desc">Ирландский виски, имбирное пиво, сок лайма</p>
                </div>
                <span className="menu-item-price">550₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">The Refuge Манхэттен</h3>
                  <p className="menu-item-desc">Ржаной виски, сладкий вермут, биттеры, вишня люксардо</p>
                </div>
                <span className="menu-item-price">620₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Эспрессо Мартини</h3>
                  <p className="menu-item-desc">Водка, кофейный ликер, свежий эспрессо, простой сироп</p>
                </div>
                <span className="menu-item-price">620₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Классический Мохито</h3>
                  <p className="menu-item-desc">Белый ром, листья мяты, сок лайма, газированная вода</p>
                </div>
                <span className="menu-item-price">580₽</span>
              </div>
              
              <div className="menu-item">
                <div>
                  <h3 className="menu-item-title">Виски Сауэр</h3>
                  <p className="menu-item-desc">Бурбон, сок лимона, сахарный сироп, яичный белок</p>
                </div>
                <span className="menu-item-price">580₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wines Section */}
      <section id="wines" className="section-padding bg-pub-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Тщательно подобранные</span>
              </div>
              <h2 className="heading-lg mb-6">Вина</h2>
              <p className="text-muted-foreground">Тщательно подобранные вина, идеально дополняющие вашу трапезу.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-pub-green mb-6">Красные вина</h3>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Каберне Совиньон</h4>
                    <p className="menu-item-desc">Калифорния, насыщенное, дуб, черная смородина</p>
                  </div>
                  <span className="menu-item-price">500₽/1900₽</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Мальбек</h4>
                    <p className="menu-item-desc">Аргентина, мягкое, слива, вишня</p>
                  </div>
                  <span className="menu-item-price">450₽/1700₽</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Пино Нуар</h4>
                    <p className="menu-item-desc">Орегон, легкое, малина, землистое</p>
                  </div>
                  <span className="menu-item-price">550₽/2100₽</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-pub-green mb-6">Белые вина</h3>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Шардоне</h4>
                    <p className="menu-item-desc">Калифорния, насыщенное, маслянистое, дуб</p>
                  </div>
                  <span className="menu-item-price">450₽/1700₽</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Совиньон Блан</h4>
                    <p className="menu-item-desc">Новая Зеландия, свежее, цитрусовое, тропическое</p>
                  </div>
                  <span className="menu-item-price">500₽/1900₽</span>
                </div>
                
                <div className="menu-item">
                  <div>
                    <h4 className="menu-item-title">Пино Гриджио</h4>
                    <p className="menu-item-desc">Италия, легкое, яблоко, цитрусовые</p>
                  </div>
                  <span className="menu-item-price">400₽/1500₽</span>
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
              Присоединяйтесь к нам для <span className="text-pub-green">идеальной трапезы</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Забронируйте столик прямо сейчас и насладитесь нашей вкусной едой и напитками в теплой, гостеприимной атмосфере.
            </p>
            <Link to="/reservations" className="btn-primary">
              Забронировать столик
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Menu;
