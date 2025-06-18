import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Instagram, Music, Music as MusicOff } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isMusicPlaying: boolean;
  onMusicToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, isMusicPlaying, onMusicToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Coleções' },
    { id: 'about', label: 'Sobre' },
    { id: 'testimonials', label: 'Clientes' },
    { id: 'contact', label: 'Contato' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm border-b'
      }`} 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(250, 248, 245, 0.98)' : 'rgba(250, 248, 245, 0.95)',
        borderColor: 'var(--shadow)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Enhanced Logo - Mobile Optimized */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group touch-btn"
            onClick={() => onPageChange('home')}
          >
            <Heart 
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-all duration-300 group-hover:scale-110" 
              style={{ color: 'var(--burgundy)' }} 
            />
            <span 
              className="text-2xl sm:text-3xl font-handwriting vintage-shadow transition-all duration-300 group-hover:text-gradient" 
              style={{ color: 'var(--charcoal)' }}
            >
              Boemi
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative text-sm font-vintage transition-all duration-300 hover-lift touch-btn ${
                  currentPage === item.id
                    ? 'font-medium'
                    : 'hover:opacity-70'
                }`}
                style={{ 
                  color: currentPage === item.id ? 'var(--burgundy)' : 'var(--charcoal)'
                }}
              >
                {item.label}
                {currentPage === item.id && (
                  <div 
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--burgundy)' }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Enhanced Right Section - Mobile Optimized */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Enhanced Music Toggle */}
            <button
              onClick={onMusicToggle}
              className="p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:bg-white/50 hover:scale-110 group touch-btn"
              style={{ color: 'var(--charcoal)' }}
              title={isMusicPlaying ? 'Pausar música' : 'Tocar música'}
            >
              {isMusicPlaying ? (
                <MusicOff className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
              ) : (
                <Music className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* Enhanced Instagram Link */}
            <a
              href="https://www.instagram.com/lojaboemi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:bg-white/50 hover:scale-110 group touch-btn"
              style={{ color: 'var(--charcoal)' }}
              title="Seguir no Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12" />
            </a>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:bg-white/50 hover:scale-110 menu-button touch-btn"
              style={{ color: 'var(--charcoal)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu - Completely Redesigned */}
      <div 
        className={`md:hidden mobile-menu transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          backgroundColor: 'var(--paper)',
          borderTop: '1px solid var(--shadow)'
        }}
      >
        <div className="px-4 py-6 space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-4 text-base font-vintage rounded-lg transition-all duration-300 hover-lift touch-btn ${
                currentPage === item.id
                  ? 'text-white shadow-lg'
                  : 'hover:bg-white/50'
              }`}
              style={{ 
                color: currentPage === item.id ? 'white' : 'var(--charcoal)',
                backgroundColor: currentPage === item.id ? 'var(--burgundy)' : 'transparent',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <Heart className="w-4 h-4 fill-current" />
                )}
              </div>
            </button>
          ))}
          
          {/* Mobile Social Links - Enhanced */}
          <div className="pt-6 mt-6 border-t" style={{ borderColor: 'var(--shadow)' }}>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/lojaboemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-4 py-4 rounded-lg transition-all duration-300 hover-lift touch-btn"
                style={{ backgroundColor: 'var(--burgundy)', color: 'white' }}
              >
                <Instagram className="w-5 h-5" />
                <span className="font-vintage">Seguir no Instagram</span>
              </a>
              
              <a
                href="https://wa.me/message/2JONHSWQ5NF4N1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-4 py-4 rounded-lg transition-all duration-300 hover-lift touch-btn"
                style={{ backgroundColor: 'var(--dusty-rose)', color: 'var(--charcoal)' }}
              >
                <span className="font-vintage">Falar no WhatsApp</span>
              </a>
            </div>
            
            <div className="text-center mt-4">
              <div className="handwritten text-sm" style={{ color: 'var(--burgundy)' }}>
                ♡ conecte-se conosco ♡
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;