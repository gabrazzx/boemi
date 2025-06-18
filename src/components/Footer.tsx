import React from 'react';
import { Heart, Instagram, Phone, Mail, MessageCircle, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Elegant Farewell Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-r" style={{ borderColor: 'var(--burgundy)' }}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="handwritten text-4xl mb-6 transform -rotate-1 fade-in" style={{ color: 'var(--burgundy)' }}>
            até logo, linda
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif mb-6 fade-in stagger-1" style={{ color: 'var(--charcoal)' }}>
            Obrigada por Fazer Parte da <span className="text-gradient">Nossa História</span>
          </h2>
          <p className="text-lg font-elegant leading-relaxed max-w-2xl mx-auto fade-in stagger-2" style={{ color: 'var(--charcoal)' }}>
            Cada visita é especial para nós. Continue acompanhando nossa jornada de elegância e autenticidade.
          </p>
          
          <div className="flex justify-center items-center mt-8 space-x-4 fade-in stagger-3">
            <Sparkles className="w-5 h-5" style={{ color: 'var(--dusty-rose)' }} />
            <div className="handwritten text-lg" style={{ color: 'var(--burgundy)' }}>
              ♡ volte sempre que quiser ♡
            </div>
            <Sparkles className="w-5 h-5" style={{ color: 'var(--dusty-rose)' }} />
          </div>
        </div>
      </section>

      {/* Enhanced Main Footer */}
      <footer className="relative overflow-hidden film-grain" style={{ backgroundColor: 'var(--charcoal)' }}>
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-burgundy to-transparent opacity-60"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-white/10"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              
              {/* Enhanced Brand Section */}
              <div className="lg:col-span-5 text-center lg:text-left fade-in">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                  <Heart 
                    className="w-8 h-8 fill-current animate-pulse" 
                    style={{ color: 'var(--burgundy)' }} 
                  />
                  <span className="text-4xl font-handwriting text-white vintage-shadow">
                    Boemi
                  </span>
                  <Heart 
                    className="w-8 h-8 fill-current animate-pulse" 
                    style={{ color: 'var(--burgundy)', animationDelay: '0.5s' }} 
                  />
                </div>
                
                <p className="font-elegant text-lg leading-relaxed text-white/90 mb-6 max-w-md mx-auto lg:mx-0">
                  Autenticidade, elegância e liberdade feminina em cada peça. 
                  Criamos mais que roupas, criamos histórias de estilo.
                </p>
                
                <div className="decorative-border p-4 bg-white/5 backdrop-blur-sm max-w-sm mx-auto lg:mx-0">
                  <div className="handwritten text-xl text-center" style={{ color: 'var(--burgundy)' }}>
                    ♡ com amor desde 2023 ♡
                  </div>
                </div>

                {/* Quality badges */}
                <div className="flex items-center justify-center lg:justify-start space-x-4 mt-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" style={{ color: 'var(--dusty-rose)' }} />
                    ))}
                  </div>
                  <span className="text-sm font-vintage text-white/70">500+ clientes satisfeitas</span>
                </div>
              </div>

              {/* Enhanced Contact Info */}
              <div className="lg:col-span-4 text-center fade-in stagger-1">
                <h3 className="text-2xl font-serif mb-8 text-white flex items-center justify-center space-x-2">
                  <Mail className="w-6 h-6" style={{ color: 'var(--burgundy)' }} />
                  <span>Contato</span>
                </h3>
                
                <div className="space-y-6">
                  <a
                    href="mailto:use@boemi.store"
                    className="group flex items-center justify-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105"
                  >
                    <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--burgundy)' }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-vintage text-white/90 group-hover:text-white transition-colors">
                        use@boemi.store
                      </div>
                      <div className="handwritten text-sm" style={{ color: 'var(--burgundy)' }}>
                        ♡ resposta rápida
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+5511956746885"
                    className="group flex items-center justify-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105"
                  >
                    <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--dusty-rose)' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-vintage text-white/90 group-hover:text-white transition-colors">
                        +55 11 95674‑6885
                      </div>
                      <div className="handwritten text-sm" style={{ color: 'var(--burgundy)' }}>
                        ♡ sempre disponível
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/message/2JONHSWQ5NF4N1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105"
                  >
                    <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--burgundy)' }}>
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-vintage text-white/90 group-hover:text-white transition-colors">
                        WhatsApp
                      </div>
                      <div className="handwritten text-sm" style={{ color: 'var(--burgundy)' }}>
                        ♡ nosso favorito
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Enhanced Social Media */}
              <div className="lg:col-span-3 text-center lg:text-right fade-in stagger-2">
                <h3 className="text-2xl font-serif mb-8 text-white flex items-center justify-center lg:justify-end space-x-2">
                  <span>Redes Sociais</span>
                  <Instagram className="w-6 h-6" style={{ color: 'var(--burgundy)' }} />
                </h3>
                
                <div className="flex justify-center lg:justify-end mb-6">
                  <a
                    href="https://www.instagram.com/lojaboemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-12"
                    style={{ backgroundColor: 'var(--burgundy)' }}
                  >
                    <Instagram className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ boxShadow: '0 0 20px var(--burgundy)' }}></div>
                  </a>
                </div>
                
                <div className="space-y-3">
                  <div className="handwritten text-lg" style={{ color: 'var(--burgundy)' }}>
                    ♡ siga nosso diário visual
                  </div>
                  <div className="font-vintage text-white/70 text-sm">
                    @lojaboemi • 2.5k seguidores
                  </div>
                  <div className="font-vintage text-white/70 text-sm">
                    Posts diários com inspirações
                  </div>
                </div>

                {/* Instagram preview mockup */}
                <div className="mt-6 grid grid-cols-3 gap-2 max-w-32 mx-auto lg:ml-auto lg:mr-0">
                  {[
                    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
                    'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
                    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg'
                  ].map((src, i) => (
                    <div key={i} className="aspect-square rounded-sm overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                      <img src={src} alt="" className="w-full h-full object-cover" style={{ filter: 'sepia(20%)' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div className="border-t border-white/10 mt-16 pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <p className="text-white/60 text-sm font-vintage">
                    © 2025 Boemi. Todos os direitos reservados.
                  </p>
                </div>

                {/* Center message */}
                <div className="text-center">
                  <div className="decorative-border p-4 bg-white/5 backdrop-blur-sm inline-block">
                    <div className="handwritten text-xl leading-relaxed" style={{ color: 'var(--burgundy)' }}>
                      feito com ♡ para mulheres autênticas
                    </div>
                  </div>
                </div>

                {/* Additional info */}
                <div className="text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-end space-x-4">
                    <div className="text-white/60 text-sm font-vintage">
                      São Paulo, Brasil
                    </div>
                    <div className="w-px h-4 bg-white/20"></div>
                    <div className="text-white/60 text-sm font-vintage">
                      Desde 2023
                    </div>
                  </div>
                </div>
              </div>

              {/* Final decorative element */}
              <div className="text-center mt-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-burgundy opacity-50"></div>
                  <Heart className="w-4 h-4 fill-current animate-pulse" style={{ color: 'var(--burgundy)' }} />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-burgundy opacity-50"></div>
                </div>
                <div className="handwritten text-sm mt-3 text-white/50">
                  elegância que transcende o tempo
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;