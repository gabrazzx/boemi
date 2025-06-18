import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, Heart, Search, Grid, List } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  available: boolean;
  category: 'tops' | 'bottoms';
  instagramLink?: string;
  tiktokLink?: string;
}

const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tops' | 'bottoms'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced sample products
  const products: Product[] = [
    {
      id: '1',
      name: 'Blusa Vintage Rose',
      price: 89.90,
      image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
      sizes: ['P', 'M', 'G'],
      available: true,
      category: 'tops',
      instagramLink: 'https://www.instagram.com/lojaboemi',
      tiktokLink: '#'
    },
    {
      id: '2',
      name: 'Saia Midi Boho',
      price: 124.90,
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      sizes: ['P', 'M', 'G', 'GG'],
      available: true,
      category: 'bottoms',
      instagramLink: 'https://www.instagram.com/lojaboemi'
    },
    {
      id: '3',
      name: 'Top Cropped Romantic',
      price: 67.90,
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      sizes: ['P', 'M'],
      available: false,
      category: 'tops',
      instagramLink: 'https://www.instagram.com/lojaboemi'
    },
    {
      id: '4',
      name: 'Calça Wide Leg',
      price: 149.90,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
      sizes: ['M', 'G', 'GG'],
      available: true,
      category: 'bottoms',
      instagramLink: 'https://www.instagram.com/lojaboemi',
      tiktokLink: '#'
    },
    {
      id: '5',
      name: 'Blusa Decote V',
      price: 79.90,
      image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
      sizes: ['P', 'M', 'G'],
      available: true,
      category: 'tops',
      instagramLink: 'https://www.instagram.com/lojaboemi'
    },
    {
      id: '6',
      name: 'Short Alfaiataria',
      price: 94.90,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      sizes: ['P', 'M', 'G'],
      available: true,
      category: 'bottoms',
      instagramLink: 'https://www.instagram.com/lojaboemi'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Todas', count: products.length, icon: '✨' },
    { id: 'tops', label: 'Tops', count: products.filter(p => p.category === 'tops').length, icon: '👚' },
    { id: 'bottoms', label: 'Bottoms', count: products.filter(p => p.category === 'bottoms').length, icon: '👖' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 paper-texture flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mb-6"></div>
          <div className="handwritten text-2xl mb-2" style={{ color: 'var(--burgundy)' }}>
            preparando as peças...
          </div>
          <p className="font-vintage" style={{ color: 'var(--charcoal)' }}>
            Carregando nossa coleção especial para você
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 paper-texture">
      {/* Enhanced Header */}
      <div className="border-b" style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--shadow)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center fade-in">
            <div className="handwritten text-3xl mb-4 transform -rotate-1" style={{ color: 'var(--burgundy)' }}>
              coleção atual
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Bella<span className="text-gradient">Donna</span>
            </h1>
            <p className="text-xl font-elegant max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Peças únicas que celebram a feminilidade moderna com elegância e autenticidade. 
              Cada item é uma declaração de estilo pessoal.
            </p>
            
            {/* Enhanced decorative elements */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <Heart className="w-5 h-5 fill-current animate-pulse" style={{ color: 'var(--burgundy)' }} />
              <div className="handwritten text-lg" style={{ color: 'var(--burgundy)' }}>
                cada peça conta uma história única
              </div>
              <Heart className="w-5 h-5 fill-current animate-pulse" style={{ color: 'var(--burgundy)', animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Filters & Search */}
        <div className="mb-12 fade-in">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" style={{ color: 'var(--charcoal)' }} />
              <input
                type="text"
                placeholder="Buscar peças..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:border-burgundy font-vintage"
                style={{ 
                  backgroundColor: 'var(--paper)',
                  borderColor: 'var(--dusty-rose)',
                  color: 'var(--charcoal)'
                }}
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'text-white' : 'hover:bg-white/50'}`}
                style={{ 
                  backgroundColor: viewMode === 'grid' ? 'var(--burgundy)' : 'transparent',
                  color: viewMode === 'grid' ? 'white' : 'var(--charcoal)'
                }}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'text-white' : 'hover:bg-white/50'}`}
                style={{ 
                  backgroundColor: viewMode === 'list' ? 'var(--burgundy)' : 'transparent',
                  color: viewMode === 'list' ? 'white' : 'var(--charcoal)'
                }}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Enhanced Category Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 transition-colors hover:opacity-70 sm:hidden font-vintage"
                style={{ color: 'var(--charcoal)' }}
              >
                <Filter className="w-5 h-5" />
                <span>Filtros</span>
              </button>
              
              <div className={`flex flex-wrap gap-3 ${showFilters ? 'block' : 'hidden sm:flex'}`}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as any)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-vintage transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'text-white shadow-lg'
                        : 'text-white hover:opacity-80'
                    }`}
                    style={{ 
                      backgroundColor: selectedCategory === category.id ? 'var(--burgundy)' : 'var(--dusty-rose)'
                    }}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-sm font-vintage" style={{ color: 'var(--charcoal)' }}>
                <span className="font-medium">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`${
            viewMode === 'grid' 
              ? 'masonry-grid' 
              : 'space-y-8'
          } fade-in`}>
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`${viewMode === 'grid' ? 'masonry-item' : ''} fade-in stagger-${(index % 4) + 1}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 fade-in">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: 'var(--burgundy)' }} />
              <div className="handwritten text-3xl mb-4" style={{ color: 'var(--burgundy)' }}>
                ops... nada por aqui
              </div>
              <p className="font-vintage text-lg mb-6" style={{ color: 'var(--charcoal)' }}>
                {searchTerm 
                  ? `Nenhum produto encontrado para "${searchTerm}"`
                  : 'Nenhum produto encontrado nesta categoria.'
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="vintage-btn px-6 py-3 rounded-lg font-vintage"
              >
                Ver todos os produtos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Call to Action */}
      <div className="py-20 mt-16 film-grain relative overflow-hidden" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-r border-white/20"></div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="handwritten text-4xl mb-6 text-white transform rotate-1 fade-in">
            não encontrou o que procurava?
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-white fade-in stagger-1">
            Temos Outras <span className="text-gradient">Peças Especiais</span>
          </h2>
          <p className="text-xl font-elegant text-white/90 mb-10 leading-relaxed fade-in stagger-2">
            Entre em contato conosco! Nosso acervo é sempre renovado com peças únicas 
            e exclusivas que podem ser perfeitas para você.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 scale-in stagger-3">
            <a
              href="https://wa.me/message/2JONHSWQ5NF4N1"
              target="_blank"
              rel="noopener noreferrer"
              className="vintage-btn px-8 py-4 rounded-lg font-vintage text-lg"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/lojaboemi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-vintage text-lg"
              style={{ backgroundColor: 'var(--dusty-rose)', color: 'var(--charcoal)' }}
            >
              <span>Ver no Instagram</span>
            </a>
          </div>
          
          <div className="handwritten text-xl text-white/70 transform -rotate-1 fade-in stagger-4">
            ♡ vamos conversar e encontrar sua peça perfeita ♡
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;