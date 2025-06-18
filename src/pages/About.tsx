import React from 'react';
import { Heart, Sparkles, Star, Flower } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 paper-texture">
      {/* Hero Section - Vintage Scrapbook Style */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="handwritten text-3xl mb-4 transform -rotate-1" style={{ color: '#8B4B5C' }}>
              nossa história
            </div>
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 fill-current mr-3" style={{ color: '#8B4B5C' }} />
              <h1 className="text-5xl font-serif" style={{ color: '#2C2C2C' }}>Sobre a Boemi</h1>
              <Heart className="w-8 h-8 fill-current ml-3" style={{ color: '#8B4B5C' }} />
            </div>
            <p className="text-xl font-vintage max-w-3xl mx-auto leading-relaxed" style={{ color: '#2C2C2C' }}>
              Uma marca nascida da paixão por celebrar a autenticidade e a beleza única de cada mulher
            </p>
            
            {/* Decorative quote */}
            <div className="decorative-border p-4 bg-white/50 max-w-md mx-auto mt-8">
              <p className="handwritten text-lg" style={{ color: '#8B4B5C' }}>
                "Cada mulher é uma obra de arte única"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Vintage Photo Album Style */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="vintage-photo tape">
                <img
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
                  alt="Nossa História"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Scattered polaroids */}
              <div className="absolute -top-4 -left-4 polaroid w-20 h-24 opacity-80">
                <img
                  src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg"
                  alt=""
                  className="w-full h-12 object-cover"
                />
                <div className="handwritten text-xs text-center mt-1" style={{ color: '#8B4B5C' }}>
                  ♡
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 handwritten text-2xl transform rotate-12" style={{ color: '#8B4B5C' }}>
                elegância ♡
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="handwritten text-3xl mb-4 transform rotate-1" style={{ color: '#8B4B5C' }}>
                Como tudo começou...
              </div>
              
              <h2 className="text-3xl font-serif" style={{ color: '#2C2C2C' }}>
                Um Sonho Sussurrado
              </h2>
              
              <p className="text-lg font-vintage leading-relaxed" style={{ color: '#2C2C2C' }}>
                Boemi nasceu de um sonho: criar um espaço onde a moda transcende tendências 
                passageiras e se torna uma forma de expressão pessoal. Acreditamos que cada 
                mulher possui uma beleza única, e nossa missão é oferecer peças que realcem 
                essa individualidade.
              </p>
              
              <p className="text-lg font-vintage leading-relaxed" style={{ color: '#2C2C2C' }}>
                Nosso nome vem da palavra "boêmia", que representa liberdade, criatividade 
                e autenticidade - valores que permeiam cada escolha que fazemos, desde a 
                seleção de tecidos até o design final de cada peça.
              </p>
              
              <div className="decorative-border p-4 bg-white/50">
                <p className="handwritten text-base" style={{ color: '#8B4B5C' }}>
                  "Do romântico ao sofisticado, 
                  <br />
                  do vintage ao contemporâneo..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Vintage Cards Style */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="handwritten text-2xl mb-2 transform -rotate-1" style={{ color: '#8B4B5C' }}>
              nossos valores
            </div>
            <h2 className="text-3xl font-serif mb-4" style={{ color: '#2C2C2C' }}>
              O Que Nos Move
            </h2>
            <p className="text-lg font-vintage" style={{ color: '#2C2C2C' }}>
              Princípios que guiam cada decisão e criação da Boemi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group tape">
              <div className="polaroid">
                <div className="flex items-center justify-center h-20 mb-4">
                  <Heart className="w-12 h-12" style={{ color: '#8B4B5C' }} />
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: '#2C2C2C' }}>Autenticidade</h3>
                <p className="font-vintage text-sm leading-relaxed" style={{ color: '#2C2C2C' }}>
                  Cada peça reflete genuinidade e verdade, sem seguir modas vazias
                </p>
                <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                  seja você ♡
                </div>
              </div>
            </div>

            <div className="text-center group tape">
              <div className="polaroid">
                <div className="flex items-center justify-center h-20 mb-4">
                  <Sparkles className="w-12 h-12" style={{ color: '#8B4B5C' }} />
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: '#2C2C2C' }}>Elegância</h3>
                <p className="font-vintage text-sm leading-relaxed" style={{ color: '#2C2C2C' }}>
                  Sofisticação natural que vem de dentro, não de ostentação
                </p>
                <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                  natural ♡
                </div>
              </div>
            </div>

            <div className="text-center group tape">
              <div className="polaroid">
                <div className="flex items-center justify-center h-20 mb-4">
                  <Star className="w-12 h-12" style={{ color: '#8B4B5C' }} />
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: '#2C2C2C' }}>Liberdade</h3>
                <p className="font-vintage text-sm leading-relaxed" style={{ color: '#2C2C2C' }}>
                  Empoderamento através da moda, permitindo que cada mulher seja ela mesma
                </p>
                <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                  livre ♡
                </div>
              </div>
            </div>

            <div className="text-center group tape">
              <div className="polaroid">
                <div className="flex items-center justify-center h-20 mb-4">
                  <Flower className="w-12 h-12" style={{ color: '#8B4B5C' }} />
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: '#2C2C2C' }}>Feminilidade</h3>
                <p className="font-vintage text-sm leading-relaxed" style={{ color: '#2C2C2C' }}>
                  Celebração da força e delicadeza que coexistem na essência feminina
                </p>
                <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                  poderosa ♡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy - Vintage Letter Style */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="handwritten text-3xl mb-4 transform -rotate-1" style={{ color: '#8B4B5C' }}>
                nossa filosofia
              </div>
              
              <h2 className="text-3xl font-serif" style={{ color: '#2C2C2C' }}>
                Moda Como Linguagem
              </h2>
              
              <p className="text-lg font-vintage leading-relaxed" style={{ color: '#2C2C2C' }}>
                Acreditamos que a moda é uma linguagem silenciosa, mas poderosa. 
                Cada peça que escolhemos conta uma história, expressa um sentimento, 
                revela um aspecto da personalidade de quem a veste.
              </p>
              
              <div className="decorative-border p-6 bg-white/50">
                <p className="handwritten text-lg text-center" style={{ color: '#8B4B5C' }}>
                  "A verdadeira elegância vem da confiança 
                  <br />
                  de ser autêntica"
                </p>
              </div>
              
              <p className="text-lg font-vintage leading-relaxed" style={{ color: '#2C2C2C' }}>
                Para nós, a verdadeira elegância vem da confiança de ser autêntica, 
                da coragem de expressar sua individualidade, da liberdade de ser 
                feminina do seu próprio jeito.
              </p>
            </div>
            
            <div className="relative">
              <div className="vintage-photo tape">
                <img
                  src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg"
                  alt="Nossa Filosofia"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 polaroid w-24 h-32">
                <img
                  src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
                  alt=""
                  className="w-full h-16 object-cover"
                />
                <div className="handwritten text-xs text-center mt-1" style={{ color: '#8B4B5C' }}>
                  estilo ♡
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 handwritten text-xl transform rotate-12" style={{ color: '#8B4B5C' }}>
                ♡ única
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery - Vintage Collage */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="handwritten text-2xl mb-2 transform rotate-1" style={{ color: '#8B4B5C' }}>
              nosso universo
            </div>
            <h2 className="text-3xl font-serif mb-4" style={{ color: '#2C2C2C' }}>
              Inspirações Visuais
            </h2>
            <p className="text-lg font-vintage" style={{ color: '#2C2C2C' }}>
              Elementos que definem a estética Boemi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
              'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
              'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
              'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
              'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
              'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
              'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
              'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'
            ].map((src, index) => (
              <div key={index} className="tape">
                <div className="polaroid">
                  <img
                    src={src}
                    alt={`Inspiração ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="handwritten text-xs text-center mt-1" style={{ color: '#8B4B5C' }}>
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

export default About;