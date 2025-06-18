import React from 'react';
import { Heart, Instagram, Phone, Mail, MessageCircle, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Elegant Farewell Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 sm:grid-cols-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-r" style={{ borderColor: 'var(--burgundy)' }}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <div className="handwritten text-2xl sm:text-4xl mb-4 sm:mb-6 transform -rotate-1 fade-in" style={{ color: 'var(--burgundy)' }}>
            até logo, linda
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6 fade-in stagger-1" style={{ color: 'var(--charcoal)' }}>
            Obrigada por Fazer Parte da <span className="text-gradient">Nossa História</span>
          </h2>
          <p className="text-base sm:text-lg font-elegant leading-relaxed max-w-2xl mx-auto fade-in stagger-2" style={{ color: 'var(--charcoal)' }}>
            Cada visita é especial para nós. Continue acompanhando nossa jornada de elegância e autenticidade.
          </p>
          
          <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4 fade-in stagger-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--dusty-rose)' }} />
            <div className="handwritten text-base sm:text-lg" style={{ color: 'var(--burgundy)' }}>
              ♡ volte sempre que quiser ♡
            </div>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--dusty-rose)' }} />
          </div>
        </div>
      </section>

      {/* Enhanced Main Footer - Mobile First Design */}
      <footer className="relative overflow-hidden film-grain" style={{ backgroundColor: 'var(--charcoal)' }}>
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-burgundy to-transparent opacity-60"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-3 sm:grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-white/10"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Mobile-First Layout */}
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
              
              {/* Enhanced Brand Section - Mobile Optimized */}
              <div className="text-center lg:text-left lg:col-span-5 fade-in">
                <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <Heart 
                    className="w-6 h-6 sm:w-8 sm:h-8 fill-current animate-pulse" 
                    style={{ color: 'var(--burgundy)' }} 
                  />
                  <span className="text-3xl sm:text-4xl font-handwriting text-white vintage-shadow">
                    Boemi
                  </span>
                  <Heart 
                    className="w-6 h-6 sm:w-8 sm:h-8 fill-current animate-pulse" 
                    style={{ color: 'var(--burgundy)', animationDelay: '0.5s' }} 
                  />
                </div>
                
                <p className="font-elegant text-base sm:text-lg leading-relaxed text-white/90 mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
                  Autenticidade, elegância e liberdade feminina em cada peça. 
                  Criamos mais que roupas, criamos histórias de estilo.
                </p>
                
                <div className="decorative-border p-3 sm:p-4 bg-white/5 backdrop-blur-sm max-w-sm mx-auto lg:mx-0 mb-4 sm:mb-6">
                  <div className="handwritten text-lg sm:text-xl text-center" style={{ color: 'var(--burgundy)' }}>
                    ♡ com amor desde 2023 ♡
                  </div>
                </div>

                {/* Quality badges - Mobile Optimized */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" style={{ color: 'var(--dusty-rose)' }} />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-vintage text-white/70">500+ clientes satisfeitas</span>
                </div>
              </div>

              {/* Enhanced Contact Info - Mobile Optimized */}
              <div className="text-center lg:col-span-4 fade-in stagger-1">
                <h3 className="text-xl sm:text-2xl font-serif mb-6 sm:mb-8 text-white flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--burgundy)' }} />
                  <span>Contato</span>
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <a
                    href="mailto:use@boemi.store"
                    className="group flex items-center justify-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 touch-btn"
                  >
                    <div className="p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--burgundy)' }}>
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-vintage text-sm sm:text-base text-white/90 group-hover:text-white transition-colors">
                        use@boemi.store
                      </div>
                      <div className="handwritten text-xs sm:text-sm" style={{ color: 'var(--burgundy)' }}>
                        ♡ resposta rápida
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+5511956746885"
                    className="group flex items-center justify-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 touch-btn"
                  >
                    <div className="p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--dusty-rose)' }}>
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-vintage text-sm sm:text-base text-white/90 group-hover:text-white transition-colors">
                        +55 11 95674‑6885
                      </div>
                      <div className="handwritten text-xs sm:text-sm" style={{ color: 'var(--burgundy)' }}>
                        ♡ sempre disponível
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/message/2JONHSWQ5NF4N1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 touch-btn"
                  >
                    <div className="p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--burgundy)' }}>
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-vintage text-sm sm:text-base text-white/90 group-hover:text-white transition-colors">
                        WhatsApp
                      </div>
                      <div className="handwritten text-xs sm:text-sm" style={{ color: 'var(--burgundy)' }}>
                        ♡ nosso favorito
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Enhanced Social Media - Mobile Optimized */}
              <div className="text-center lg:text-right lg:col-span-3 fade-in stagger-2">
                <h3 className="text-xl sm:text-2xl font-serif mb-6 sm:mb-8 text-white flex items-center justify-center lg:justify-end space-x-2">
                  <span>Redes Sociais</span>
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--burgundy)' }} />
                </h3>
                
                <div className="flex justify-center lg:justify-end mb-4 sm:mb-6">
                  <a
                    href="https://www.instagram.com/lojaboemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 sm:p-4 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-12 touch-btn"
                    style={{ backgroundColor: 'var(--burgundy)' }}
                  >
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ boxShadow: '0 0 20px var(--burgundy)' }}></div>
                  </a>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="handwritten text-base sm:text-lg" style={{ color: 'var(--burgundy)' }}>
                    ♡ siga nosso diário visual
                  </div>
                  <div className="font-vintage text-white/70 text-sm">
                    @lojaboemi • 2.5k seguidores
                  </div>
                  <div className="font-vintage text-white/70 text-sm">
                    Posts diários com inspirações
                  </div>
                  
                  {/* Mobile CTA Button */}
                  <div className="pt-3 sm:hidden">
                    <a
                      href="https://www.instagram.com/lojaboemi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 touch-btn"
                      style={{ backgroundColor: 'var(--burgundy)', color: 'white' }}
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="font-vintage text-sm">Seguir Perfil</span>
                    </a>
                  </div>
                </div>

                {/* Instagram preview mockup - Hidden on mobile */}
                <div className="hidden sm:block mt-6 grid grid-cols-3 gap-2 max-w-32 mx-auto lg:ml-auto lg:mr-0">
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

            {/* Enhanced Bottom Section - Mobile Optimized */}
            <div className="border-t border-white/10 mt-12 sm:mt-16 pt-8 sm:pt-12">
              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                
                {/* Copyright - Mobile Centered */}
                <div className="text-center lg:text-left">
                  <p className="text-white/60 text-sm font-vintage">
                    © 2025 Boemi. Todos os direitos reservados.
                  </p>
                </div>

                {/* Center message - Mobile Optimized */}
                <div className="text-center">
                  <div className="decorative-border p-3 sm:p-4 bg-white/5 backdrop-blur-sm inline-block">
                    <div className="handwritten text-lg sm:text-xl leading-relaxed" style={{ color: 'var(--burgundy)' }}>
                      feito com ♡ para mulheres autênticas
                    </div>
                  </div>
                </div>

                {/* Additional info - Mobile Centered */}
                <div className="text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-end space-x-3 sm:space-x-4">
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
              <div className="text-center mt-6 sm:mt-8">
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-burgundy opacity-50"></div>
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-pulse" style={{ color: 'var(--burgundy)' }} />
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-burgundy opacity-50"></div>
                </div>
                <div className="handwritten text-xs sm:text-sm mt-2 sm:mt-3 text-white/50">
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