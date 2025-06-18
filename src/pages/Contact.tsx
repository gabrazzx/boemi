import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Instagram, MapPin, Send, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511956746885?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Sua mensagem foi enviada via WhatsApp!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16 paper-texture">
      {/* Header - Vintage Letter Style */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="handwritten text-3xl mb-4 transform -rotate-1" style={{ color: '#8B4B5C' }}>
            vamos conversar?
          </div>
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 fill-current mr-3" style={{ color: '#8B4B5C' }} />
            <h1 className="text-4xl font-serif" style={{ color: '#2C2C2C' }}>Fale Conosco</h1>
            <Heart className="w-8 h-8 fill-current ml-3" style={{ color: '#8B4B5C' }} />
          </div>
          <p className="text-xl font-vintage max-w-3xl mx-auto" style={{ color: '#2C2C2C' }}>
            Estamos aqui para ajudar você a encontrar a peça perfeita ou esclarecer qualquer dúvida
          </p>
          
          <div className="decorative-border p-4 bg-white/50 max-w-md mx-auto mt-8">
            <p className="handwritten text-lg" style={{ color: '#8B4B5C' }}>
              "Cada conversa é especial para nós"
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Vintage Cards */}
          <div>
            <div className="handwritten text-2xl mb-8 transform rotate-1" style={{ color: '#8B4B5C' }}>
              como nos encontrar
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="tape">
                <div className="polaroid flex items-start p-4">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#8B4B5C' }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: '#2C2C2C' }}>Email</h3>
                    <a
                      href="mailto:use@boemi.store"
                      className="font-vintage transition-colors hover:opacity-70"
                      style={{ color: '#8B4B5C' }}
                    >
                      use@boemi.store
                    </a>
                    <div className="handwritten text-sm mt-1" style={{ color: '#8B4B5C' }}>
                      ♡ resposta rápida
                    </div>
                  </div>
                </div>
              </div>

              <div className="tape">
                <div className="polaroid flex items-start p-4">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#8B4B5C' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: '#2C2C2C' }}>Telefone</h3>
                    <a
                      href="tel:+5511956746885"
                      className="font-vintage transition-colors hover:opacity-70"
                      style={{ color: '#8B4B5C' }}
                    >
                      +55 11 95674‑6885
                    </a>
                    <div className="handwritten text-sm mt-1" style={{ color: '#8B4B5C' }}>
                      ♡ sempre disponível
                    </div>
                  </div>
                </div>
              </div>

              <div className="tape">
                <div className="polaroid flex items-start p-4">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#D4A574' }}>
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: '#2C2C2C' }}>WhatsApp</h3>
                    <a
                      href="https://wa.me/message/2JONHSWQ5NF4N1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-vintage transition-colors hover:opacity-70"
                      style={{ color: '#8B4B5C' }}
                    >
                      Clique aqui para conversar
                    </a>
                    <div className="handwritten text-sm mt-1" style={{ color: '#8B4B5C' }}>
                      ♡ nosso favorito
                    </div>
                  </div>
                </div>
              </div>

              <div className="tape">
                <div className="polaroid flex items-start p-4">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#8B4B5C' }}>
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: '#2C2C2C' }}>Instagram</h3>
                    <a
                      href="https://www.instagram.com/lojaboemi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-vintage transition-colors hover:opacity-70"
                      style={{ color: '#8B4B5C' }}
                    >
                      @lojaboemi
                    </a>
                    <div className="handwritten text-sm mt-1" style={{ color: '#8B4B5C' }}>
                      ♡ nosso diário visual
                    </div>
                  </div>
                </div>
              </div>

              <div className="tape">
                <div className="polaroid flex items-start p-4">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#D4A574' }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: '#2C2C2C' }}>Localização</h3>
                    <p className="font-vintage" style={{ color: '#2C2C2C' }}>São Paulo, Brasil</p>
                    <div className="handwritten text-sm mt-1" style={{ color: '#8B4B5C' }}>
                      ♡ coração do Brasil
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions - Vintage Buttons */}
            <div className="space-y-4">
              <div className="handwritten text-xl mb-4 transform -rotate-1" style={{ color: '#8B4B5C' }}>
                acesso rápido
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/message/2JONHSWQ5NF4N1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 rounded-none transition-all hover:opacity-80 font-vintage"
                  style={{ backgroundColor: '#D4A574', color: '#2C2C2C' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/lojaboemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 rounded-none transition-all hover:opacity-80 font-vintage"
                  style={{ backgroundColor: '#8B4B5C', color: 'white' }}
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Vintage Letter Style */}
          <div className="tape">
            <div className="polaroid p-8" style={{ backgroundColor: '#FAF8F5' }}>
              <div className="handwritten text-2xl mb-6 text-center transform -rotate-1" style={{ color: '#8B4B5C' }}>
                escreva para nós
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-vintage mb-2" style={{ color: '#2C2C2C' }}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 rounded-none focus:outline-none transition-all font-vintage"
                    style={{ 
                      borderColor: '#D4A574',
                      backgroundColor: 'white',
                      color: '#2C2C2C'
                    }}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-vintage mb-2" style={{ color: '#2C2C2C' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 rounded-none focus:outline-none transition-all font-vintage"
                    style={{ 
                      borderColor: '#D4A574',
                      backgroundColor: 'white',
                      color: '#2C2C2C'
                    }}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-vintage mb-2" style={{ color: '#2C2C2C' }}>
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 rounded-none focus:outline-none transition-all resize-none font-vintage"
                    style={{ 
                      borderColor: '#D4A574',
                      backgroundColor: 'white',
                      color: '#2C2C2C'
                    }}
                    placeholder="Como podemos ajudar você?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-none font-vintage transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#8B4B5C', color: 'white' }}
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>

              <p className="text-sm font-vintage mt-4 text-center" style={{ color: '#8B4B5C' }}>
                * Sua mensagem será enviada via WhatsApp para um atendimento mais rápido
              </p>
              
              <div className="handwritten text-center mt-4" style={{ color: '#8B4B5C' }}>
                ♡ aguardamos seu contato
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Vintage Cards */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="handwritten text-2xl mb-2 transform rotate-1" style={{ color: '#8B4B5C' }}>
              dúvidas frequentes
            </div>
            <h2 className="text-3xl font-serif" style={{ color: '#2C2C2C' }}>
              Perguntas & Respostas
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "Como faço para comprar?",
                answer: "Você pode comprar diretamente através do nosso Instagram Shop ou TikTok Shop. Basta clicar nos links dos produtos que te interessam e seguir o processo de compra."
              },
              {
                question: "Qual o prazo de entrega?",
                answer: "O prazo varia conforme sua localização. Entre em contato via WhatsApp para obter informações específicas sobre entrega para sua região."
              },
              {
                question: "Como sei se o tamanho vai servir?",
                answer: "Temos uma tabela de medidas detalhada. Além disso, nossa equipe está sempre disponível no WhatsApp para tirar dúvidas sobre modelagem e tamanhos."
              },
              {
                question: "Vocês fazem trocas?",
                answer: "Sim! Trabalhamos com política de trocas. Entre em contato conosco via WhatsApp para conhecer os detalhes da nossa política de trocas e devoluções."
              }
            ].map((faq, index) => (
              <div key={index} className="tape">
                <div className="polaroid p-6">
                  <h3 className="text-lg font-serif mb-3" style={{ color: '#2C2C2C' }}>
                    {faq.question}
                  </h3>
                  <p className="font-vintage" style={{ color: '#2C2C2C' }}>
                    {faq.answer}
                  </p>
                  <div className="handwritten text-sm mt-3 text-right" style={{ color: '#8B4B5C' }}>
                    ♡
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;