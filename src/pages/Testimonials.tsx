import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marina Silva',
      location: 'São Paulo, SP',
      text: 'Apaixonada pela Boemi! Cada peça é única e me faz sentir especial. A qualidade é excepcional e o atendimento é sempre carinhoso.',
      image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
      rating: 5
    },
    {
      id: 2,
      name: 'Ana Carolina',
      location: 'Rio de Janeiro, RJ',
      text: 'Encontrei na Boemi exatamente o que eu procurava: peças que combinam comigo e refletem minha personalidade. Recomendo muito!',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      rating: 5
    },
    {
      id: 3,
      name: 'Júlia Santos',
      location: 'Belo Horizonte, MG',
      text: 'A estética da Boemi é tudo que eu amo! Romântica, elegante e autêntica. Cada compra é uma experiência especial.',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      rating: 5
    },
    {
      id: 4,
      name: 'Camila Oliveira',
      location: 'Porto Alegre, RS',
      text: 'Boemi transformou meu guarda-roupa! As peças são versáteis, lindas e sempre recebo elogios quando uso.',
      image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
      rating: 5
    }
  ];

  const clientPhotos = [
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
    'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
    'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
    'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'
  ];

  return (
    <div className="min-h-screen pt-16 paper-texture">
      {/* Header - Vintage Scrapbook Style */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="handwritten text-3xl mb-4 transform -rotate-1" style={{ color: '#8B4B5C' }}>
            nossas clientes
          </div>
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 fill-current mr-3" style={{ color: '#8B4B5C' }} />
            <h1 className="text-4xl font-serif" style={{ color: '#2C2C2C' }}>Clientes Boemi</h1>
            <Heart className="w-8 h-8 fill-current ml-3" style={{ color: '#8B4B5C' }} />
          </div>
          <p className="text-xl font-vintage max-w-3xl mx-auto" style={{ color: '#2C2C2C' }}>
            Histórias reais de mulheres que encontraram na Boemi sua expressão autêntica
          </p>
          
          <div className="decorative-border p-4 bg-white/50 max-w-md mx-auto mt-8">
            <p className="handwritten text-lg" style={{ color: '#8B4B5C' }}>
              "Cada cliente é uma inspiração"
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Vintage Letters Style */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative tape"
              >
                <div className="polaroid p-6">
                  <Quote className="absolute top-4 right-4 w-6 h-6 opacity-30" style={{ color: '#8B4B5C' }} />
                  
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      style={{ filter: 'sepia(20%) contrast(1.1)' }}
                    />
                    <div>
                      <h3 className="font-serif text-lg" style={{ color: '#2C2C2C' }}>{testimonial.name}</h3>
                      <p className="text-sm font-vintage" style={{ color: '#8B4B5C' }}>{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#D4A574' }} />
                    ))}
                  </div>

                  <p className="font-vintage leading-relaxed italic" style={{ color: '#2C2C2C' }}>
                    "{testimonial.text}"
                  </p>
                  
                  <div className="handwritten text-sm mt-4 text-right" style={{ color: '#8B4B5C' }}>
                    com amor ♡
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Gallery - Vintage Photo Album */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="handwritten text-2xl mb-2 transform rotate-1" style={{ color: '#8B4B5C' }}>
              galeria de clientes
            </div>
            <h2 className="text-3xl font-serif mb-4" style={{ color: '#2C2C2C' }}>
              Nossas Musas
            </h2>
            <p className="text-lg font-vintage" style={{ color: '#2C2C2C' }}>
              Clientes arrasando com as peças Boemi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative group cursor-pointer tape"
              >
                <div className="polaroid">
                  <img
                    src={photo}
                    alt={`Cliente ${index + 1}`}
                    className="w-full h-48 object-cover"
                    style={{ filter: 'sepia(20%) contrast(1.1) brightness(1.05)' }}
                  />
                  
                  <div className="handwritten text-sm text-center mt-2" style={{ color: '#8B4B5C' }}>
                    Cliente Boemi ♡
                  </div>
                </div>

                {/* Heart overlay on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5 fill-current" style={{ color: '#8B4B5C' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Vintage Poster Style */}
      <section className="py-16 film-grain" style={{ backgroundColor: '#8B4B5C' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="handwritten text-2xl mb-2 text-white transform -rotate-1">
              nossos números
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="polaroid bg-white">
              <div className="text-4xl font-serif mb-2" style={{ color: '#2C2C2C' }}>500+</div>
              <p className="font-vintage" style={{ color: '#8B4B5C' }}>Clientes Satisfeitas</p>
              <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                ♡ obrigada
              </div>
            </div>
            <div className="polaroid bg-white">
              <div className="text-4xl font-serif mb-2" style={{ color: '#2C2C2C' }}>98%</div>
              <p className="font-vintage" style={{ color: '#8B4B5C' }}>Satisfação</p>
              <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                ♡ felizes
              </div>
            </div>
            <div className="polaroid bg-white">
              <div className="text-4xl font-serif mb-2" style={{ color: '#2C2C2C' }}>2+</div>
              <p className="font-vintage" style={{ color: '#8B4B5C' }}>Anos de História</p>
              <div className="handwritten text-sm mt-2" style={{ color: '#8B4B5C' }}>
                ♡ crescendo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story - Vintage Invitation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="handwritten text-3xl mb-4 transform -rotate-1" style={{ color: '#8B4B5C' }}>
            conte sua história
          </div>
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#2C2C2C' }}>
            Você Também é Boemi?
          </h2>
          <p className="text-lg font-vintage mb-8" style={{ color: '#2C2C2C' }}>
            Adoraríamos ver como você arrasa com nossas peças!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.instagram.com/lojaboemi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-none transition-all transform hover:scale-105 font-vintage"
              style={{ backgroundColor: '#8B4B5C', color: 'white' }}
            >
              Marque @lojaboemi no Instagram
            </a>
            <a
              href="https://wa.me/message/2JONHSWQ5NF4N1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-none transition-all transform hover:scale-105 font-vintage"
              style={{ backgroundColor: '#D4A574', color: '#2C2C2C' }}
            >
              Envie no WhatsApp
            </a>
          </div>
          
          <div className="handwritten text-lg mt-8 transform rotate-1" style={{ color: '#8B4B5C' }}>
            ♡ queremos ver você brilhando ♡
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;