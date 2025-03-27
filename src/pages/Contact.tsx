
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 5000,
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

  return (
    <div className="page-transition pt-24">
      {/* Contact Hero */}
      <section className="bg-hero bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Get in <span className="text-pub-gold">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Have questions or want to make a reservation? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
                  <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Contact Details</span>
                </div>
                <h2 className="heading-lg mb-6">Reach Out to Us</h2>
                <p className="text-muted-foreground">
                  We're always happy to hear from our customers. Feel free to contact us with any questions, feedback, or to make a reservation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-pub-gold/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-pub-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                    <p className="text-muted-foreground">143 East Avenue, Denver, CO 80203, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-gold/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-pub-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">+1 (303) 555-6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-gold/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-pub-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">info@therefugepub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pub-gold/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-pub-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
                    <p className="text-muted-foreground mb-1">Monday - Thursday: 11:00 AM - 11:00 PM</p>
                    <p className="text-muted-foreground mb-1">Friday - Saturday: 11:00 AM - 1:00 AM</p>
                    <p className="text-muted-foreground">Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-pub-gold mr-4"></div>
              <span className="text-pub-gold uppercase text-sm font-medium tracking-wider">Find Us</span>
              <div className="h-0.5 w-12 bg-pub-gold ml-4"></div>
            </div>
            <h2 className="heading-lg mb-6">Our Location</h2>
            <p className="text-muted-foreground">
              Located in the heart of downtown Denver, we're easily accessible with plenty of parking nearby.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49089.85174481982!2d-104.99358734179686!3d39.73778135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710702323012!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
