import React, { useState } from 'react';
import { ExternalLink, Instagram, Heart, Eye, ShoppingBag } from 'lucide-react';

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="group relative tape masonry-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="polaroid hover:scale-105 transition-all duration-500 hover-lift">
        {/* Enhanced Product Image - Mobile Optimized */}
        <div className="relative overflow-hidden rounded-sm">
          <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ filter: 'sepia(15%) contrast(1.1) brightness(1.05)' }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 opacity-30" style={{ color: 'var(--burgundy)' }} />
            </div>
          )}
          
          {/* Enhanced Availability Badge - Mobile Optimized */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
            <span className={`px-2 py-1 sm:px-3 sm:py-1.5 text-xs font-vintage rounded-full backdrop-blur-sm border transition-all duration-300 ${
              product.available 
                ? 'text-white border-white/30 shadow-lg'
                : 'text-white border-white/30 shadow-lg'
            }`}
            style={{ 
              backgroundColor: product.available ? 'var(--burgundy)' : 'var(--charcoal)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              {product.available ? '✨ Disponível' : '⏳ Esgotado'}
            </span>
          </div>

          {/* Enhanced Heart decoration */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" style={{ color: 'var(--burgundy)' }} />
          </div>

          {/* Hover overlay with quick actions - Desktop Only */}
          <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 items-center justify-center hidden sm:flex ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex space-x-3">
              <button className="p-3 bg-white/90 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 touch-btn">
                <Eye className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
              </button>
              {product.available && (
                <button className="p-3 bg-white/90 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 touch-btn">
                  <ShoppingBag className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Product Info - Mobile Optimized */}
        <div className="pt-3 sm:pt-4">
          <div className="handwritten text-center text-lg sm:text-xl mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-gradient" style={{ color: 'var(--burgundy)' }}>
            {product.name}
          </div>
          
          <div className="text-center mb-2 sm:mb-3">
            <span className="text-xl sm:text-2xl font-serif font-medium" style={{ color: 'var(--charcoal)' }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          {/* Enhanced Sizes - Mobile Optimized */}
          <div className="text-center mb-3 sm:mb-4">
            <p className="text-xs font-vintage mb-1 sm:mb-2 opacity-70" style={{ color: 'var(--charcoal)' }}>Tamanhos disponíveis:</p>
            <div className="flex justify-center flex-wrap gap-1 sm:gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs rounded-full font-vintage transition-all duration-300 hover:scale-105 border"
                  style={{ 
                    backgroundColor: 'var(--cream-dark)', 
                    color: 'var(--charcoal)',
                    borderColor: 'var(--dusty-rose)'
                  }}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons - Mobile Optimized */}
          <div className="space-y-2 sm:space-y-3">
            {product.available ? (
              <>
                {product.instagramLink && (
                  <a
                    href={product.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 sm:space-x-3 py-3 sm:py-3 rounded-lg text-sm font-vintage transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn touch-btn"
                    style={{ backgroundColor: 'var(--burgundy)', color: 'white' }}
                  >
                    <Instagram className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Comprar no Instagram</span>
                  </a>
                )}
                {product.tiktokLink && (
                  <a
                    href={product.tiktokLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 sm:space-x-3 py-3 sm:py-3 rounded-lg text-sm font-vintage transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn touch-btn"
                    style={{ backgroundColor: 'var(--charcoal)', color: 'white' }}
                  >
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Comprar no TikTok</span>
                  </a>
                )}
              </>
            ) : (
              <button
                disabled
                className="w-full py-3 rounded-lg text-sm font-vintage cursor-not-allowed opacity-60 transition-all duration-300 touch-btn"
                style={{ backgroundColor: 'var(--dusty-rose)', color: 'var(--charcoal)' }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Indisponível no momento</span>
                </div>
              </button>
            )}
          </div>

          {/* Product category tag */}
          <div className="mt-2 sm:mt-3 text-center">
            <span className="text-xs font-vintage opacity-50" style={{ color: 'var(--charcoal)' }}>
              {product.category === 'tops' ? '👚 Tops' : '👖 Bottoms'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;