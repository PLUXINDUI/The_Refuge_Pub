
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24">
      {/* Gallery Hero */}
      <section className="bg-menu bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Наш <span className="text-pub-green">Интерьер</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Познакомьтесь с уютной атмосферой паба "Убежище"
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/92fca82d-8276-42dd-aadf-006c766e3f8f.png" 
                alt="Интерьер паба" 
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/fe3648ce-2d48-4cc7-8d83-bd6acb6a24ce.png" 
                alt="Интерьер паба" 
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/2ccaa5f9-6f9d-4c7a-b19a-3410600c64bb.png" 
                alt="Интерьер паба" 
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/6b5ed8ec-5bec-4861-8cdf-988efc7874eb.png" 
                alt="Интерьер паба" 
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="heading-lg mb-6">Почувствуйте атмосферу <span className="text-pub-green">уюта</span></h2>
            <p className="text-muted-foreground mb-8">
              Паб "Убежище" – это место, где каждая деталь продумана для вашего комфорта. От стильной барной стойки до уютных кабинок и мягкого освещения – всё создано для того, чтобы вы могли расслабиться и насладиться отличной кухней и напитками в приятной обстановке.
            </p>
            <p className="text-muted-foreground">
              Наш интерьер сочетает в себе традиционный британский паб и современные детали, создавая неповторимую атмосферу, в которой хочется проводить время снова и снова.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
