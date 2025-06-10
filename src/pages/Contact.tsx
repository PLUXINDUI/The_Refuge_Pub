import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время!",
        duration: 5000
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <div className="page-transition pt-24 bg-pub-light">
      {/* Contact Hero */}
      <section className="bg-hero bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Свяжитесь <span className="text-pub-green">С Нами</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Есть вопросы или хотите сделать бронь? Мы будем рады вам помочь.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
                  <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Контактная информация</span>
                </div>
                <h2 className="heading-lg mb-6">Свяжитесь с нами</h2>
                <p className="text-muted-foreground">
                  Мы всегда рады услышать от наших клиентов. Не стесняйтесь обращаться к нам с любыми вопросами, отзывами или для бронирования столика.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-pub-green/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-pub-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Наш адрес</h3>
                    <p className="text-muted-foreground">г. Жуковский, ул. Молодежная, 21А</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-green/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-pub-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Позвоните нам</h3>
                    <p className="text-muted-foreground">+7 926 533-29-93</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-green/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-pub-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Напишите нам</h3>
                    <p className="text-muted-foreground">info@pububezhishe.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-green/10 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-pub-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telegram</h3>
                    <p className="text-muted-foreground">
                      <a href="https://t.me/refuge_pub" target="_blank" rel="noopener noreferrer" className="hover:text-pub-green transition-colors">
                        @refuge_pub
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-green/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-pub-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Часы работы</h3>
                    <p className="text-muted-foreground mb-1">Понедельник - Четверг: 11:00 - 23:00</p>
                    <p className="text-muted-foreground mb-1">Пятница - Суббота: 11:00 - 01:00</p>
                    <p className="text-muted-foreground">Воскресенье: 12:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="bg-white dark:bg-pub-dark rounded-xl shadow-lg p-8 border border-border">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Отправьте нам сообщение</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Ваше имя
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="Иван Иванов" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Ваш Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="ivan@example.com" required />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Тема
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="input-field" placeholder="Чем мы можем помочь?" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Сообщение
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="input-field resize-none" placeholder="Ваше сообщение..." required></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center">
                    {isSubmitting ? <span className="animate-pulse">Отправка...</span> : <>
                        Отправить сообщение <Send className="ml-2 h-4 w-4" />
                      </>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-pub-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-green mr-4"></div>
              <span className="text-pub-green uppercase text-sm font-medium tracking-wider">Как нас найти</span>
              <div className="h-0.5 w-12 bg-pub-green ml-4"></div>
            </div>
            <h2 className="heading-lg mb-6">Наше расположение</h2>
            <p className="text-muted-foreground">
              Паб "Убежище" расположен в городе Жуковский, рядом с центром города. До нас легко добраться, и поблизости есть парковка.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.904688937217!2d38.12163287638918!3d55.59311997297246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414a989ebc6470d7%3A0x91c6d8fa5436b833!2z0J_QsNCxINCS0LDRgNCw0L0!5e0!3m2!1sru!2sru!4v1710702323012!5m2!1sru!2sru" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;
