import React, { useEffect, useState } from 'react';
import { Heart, Instagram, MessageCircle, ArrowRight, Sparkles, Camera, Star } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden film-grain">
        {/* Enhanced Background Collage */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full opacity-15">
            <img
              src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
              style={{ filter: 'sepia(50%) contrast(1.3) brightness(0.7)' }}
            />
            <img
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-[25s] hover:scale-110"
              style={{ filter: 'sepia(50%) contrast(1.3) brightness(0.7)' }}
            />
            <img
              src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-[30s] hover:scale-110"
              style={{ filter: 'sepia(50%) contrast(1.3) brightness(0.7)' }}
            />
          </div>
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(250, 248, 245, 0.9) 0%, rgba(250, 248, 245, 0.8) 100%)'
            }}
          />
        </div>

        {/* Enhanced Hero Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6 scale-in">
              <Heart 
                className="w-10 h-10 fill-current mr-4 animate-pulse" 
                style={{ color: 'var(--burgundy)' }} 
              />
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-handwriting vintage-shadow hover:text-gradient transition-all duration-500" 
                style={{ color: 'var(--charcoal)' }}
              >
                Boemi
              </h1>
              <Heart 
                className="w-10 h-10 fill-current ml-4 animate-pulse" 
                style={{ color: 'var(--burgundy)', animationDelay: '0.5s' }} 
              />
            </div>
            
            {/* Enhanced handwritten subtitle */}
            <div className="handwritten text-2xl md:text-4xl mb-8 transform -rotate-1 fade-in-left stagger-1">
              <span className="inline-block">"onde a elegância</span>
              <br />
              <span className="inline-block">encontra a alma"</span>
            </div>
            
            <p className="text-lg md:text-xl font-elegant leading-relaxed max-w-3xl mx-auto mb-12 fade-in-right stagger-2" style={{ color: 'var(--charcoal)' }}>
              Cada peça conta uma história de liberdade, feminilidade e autenticidade. 
              Descubra um universo onde o boho encontra o sofisticado, onde cada detalhe 
              sussurra elegância.
            </p>
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-8 scale-in stagger-3">
            <div className="polaroid inline-block">
              <div className="text-center p-4">
                <div className="flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 mr-2" style={{ color: 'var(--burgundy)' }} />
                  <Sparkles className="w-6 h-6" style={{ color: 'var(--dusty-rose)' }} />
                </div>
                <button
                  onClick={() => onPageChange('collections')}
                  className="vintage-btn px-10 py-4 rounded-lg font-vintage text-lg transition-all transform hover:scale-105"
                >
                  Descobrir Coleções
                </button>
              </div>
              <div className="handwritten text-base mt-3 text-center" style={{ color: 'var(--burgundy)' }}>
                coleção BellaDonna ♡
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex items-center justify-center space-x-8 mt-8 fade-in stagger-4">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold" style={{ color: 'var(--burgundy)' }}>500+</div>
                <div className="text-sm font-vintage opacity-70" style={{ color: 'var(--charcoal)' }}>clientes felizes</div>
              </div>
              <div className="w-px h-8 opacity-30" style={{ backgroundColor: 'var(--burgundy)' }}></div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold" style={{ color: 'var(--burgundy)' }}>2+</div>
                <div className="text-sm font-vintage opacity-70" style={{ color: 'var(--charcoal)' }}>anos de história</div>
              </div>
              <div className="w-px h-8 opacity-30" style={{ backgroundColor: 'var(--burgundy)' }}></div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" style={{ color: 'var(--dusty-rose)' }} />
                  ))}
                </div>
                <div className="text-sm font-vintage opacity-70" style={{ color: 'var(--charcoal)' }}>avaliações</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative elements */}
        <div className="absolute top-24 left-10 handwritten text-xl transform rotate-12 opacity-50 animate-pulse" style={{ color: 'var(--burgundy)' }}>
          ♡ autêntica
        </div>
        <div className="absolute bottom-32 right-16 handwritten text-xl transform -rotate-12 opacity-50 animate-pulse" style={{ color: 'var(--burgundy)', animationDelay: '1s' }}>
          feminina ♡
        </div>
        <div className="absolute top-1/2 left-8 handwritten text-lg transform rotate-45 opacity-30" style={{ color: 'var(--dusty-rose)' }}>
          elegante
        </div>
        <div className="absolute top-1/3 right-12 handwritten text-lg transform -rotate-45 opacity-30" style={{ color: 'var(--dusty-rose)' }}>
          única
        </div>
      </section>

      {/* Enhanced Brand Story Section */}
      <section className="py-24 paper-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in-left">
              {/* Enhanced main photo */}
              <div className="vintage-photo tape">
                <img
                  src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg"
                  alt="Boemi Style"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Enhanced scattered elements */}
              <div className="absolute -bottom-6 -right-6 polaroid w-28 h-36 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg"
                  alt=""
                  className="w-full h-20 object-cover"
                />
                <div className="handwritten text-xs text-center mt-2" style={{ color: 'var(--burgundy)' }}>
                  boho chic ♡
                </div>
              </div>
              
              <div className="absolute -top-8 -left-8 handwritten text-3xl transform rotate-12 animate-bounce" style={{ color: 'var(--burgundy)', animationDuration: '3s' }}>
                ♡
              </div>

              <div className="absolute top-1/2 -right-4 handwritten text-lg transform rotate-12 opacity-60" style={{ color: 'var(--dusty-rose)' }}>
                elegância natural
              </div>
            </div>
            
            <div className="space-y-8 fade-in-right">
              <div className="handwritten text-4xl mb-6 transform -rotate-1" style={{ color: 'var(--burgundy)' }}>
                Nossa História
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-serif leading-tight" style={{ color: 'var(--charcoal)' }}>
                Um Diário de <span className="text-gradient">Estilo</span>
              </h2>
              
              <p className="text-lg font-elegant leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                Boemi nasceu como um sonho sussurrado entre amigas, uma paixão por peças que 
                capturam a essência da feminilidade moderna. Cada item é uma página do nosso 
                diário visual, cuidadosamente selecionado para mulheres que valorizam 
                autenticidade e elegância.
              </p>
              
              <div className="decorative-border p-6 bg-white/70 backdrop-blur-sm">
                <p className="handwritten text-xl text-center leading-relaxed" style={{ color: 'var(--burgundy)' }}>
                  "Moda é arte que se veste, 
                  <br />
                  é poesia que se move,
                  <br />
                  é alma que se expressa"
                </p>
              </div>
              
              <button
                onClick={() => onPageChange('about')}
                className="font-vintage flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 group"
                style={{ color: 'var(--burgundy)' }}
              >
                <span className="text-lg">Conhecer mais sobre nós</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Collection */}
      <section className="py-24" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="handwritten text-3xl mb-4 transform rotate-1" style={{ color: 'var(--burgundy)' }}>
              coleção atual
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Bella<span className="text-gradient">Donna</span>
            </h2>
            <p className="text-xl font-elegant max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Uma ode à força e delicadeza feminina, onde cada peça é um verso de liberdade, 
              um sussurro de elegância que ecoa através do tempo
            </p>
          </div>

          {/* Enhanced collection preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
                title: 'Tops românticos',
                description: 'Delicadeza em cada detalhe'
              },
              {
                image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
                title: 'Bottoms elegantes',
                description: 'Sofisticação natural'
              },
              {
                image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
                title: 'Detalhes únicos',
                description: 'Autenticidade em cada peça'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`relative group cursor-pointer tape fade-in stagger-${index + 1}`}
                onClick={() => onPageChange('collections')}
              >
                <div className="polaroid hover:scale-105 transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="pt-4">
                    <div className="handwritten text-center text-lg mb-2" style={{ color: 'var(--burgundy)' }}>
                      {item.title} ♡
                    </div>
                    <p className="text-center text-sm font-vintage opacity-70" style={{ color: 'var(--charcoal)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-vintage">Ver coleção</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scale-in">
            <button
              onClick={() => onPageChange('collections')}
              className="vintage-btn px-10 py-4 rounded-lg font-vintage text-lg"
            >
              Ver Todas as Peças
            </button>
            <div className="handwritten text-lg mt-4" style={{ color: 'var(--burgundy)' }}>
              ♡ descubra sua próxima peça favorita
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Media Section */}
      <section className="py-24 film-grain relative overflow-hidden" style={{ backgroundColor: 'var(--charcoal)' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-white/20"></div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="handwritten text-4xl mb-6 text-white transform -rotate-1 fade-in">
            conecte-se conosco
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-white vintage-shadow fade-in stagger-1">
            Faça Parte do <span className="text-gradient">Universo Boemi</span>
          </h2>
          
          <p className="text-xl font-elegant mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed fade-in stagger-2">
            Acompanhe nosso diário visual e seja parte da nossa comunidade de mulheres autênticas. 
            Cada post é uma inspiração, cada story uma descoberta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12 scale-in stagger-3">
            <a
              href="https://www.instagram.com/lojaboemi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-vintage text-lg group"
              style={{ backgroundColor: 'var(--burgundy)', color: 'white' }}
            >
              <Instagram className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              <span>@lojaboemi</span>
              <div className="text-sm opacity-70">• 2.5k seguidores</div>
            </a>
            <a
              href="https://wa.me/message/2JONHSWQ5NF4N1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-vintage text-lg group"
              style={{ backgroundColor: 'var(--dusty-rose)', color: 'var(--charcoal)' }}
            >
              <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span>WhatsApp</span>
              <div className="text-sm opacity-70">• Atendimento personalizado</div>
            </a>
          </div>
          
          <div className="handwritten text-xl text-white/70 transform rotate-1 fade-in stagger-4">
            ♡ seja bem-vinda ao nosso mundo de elegância ♡
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;