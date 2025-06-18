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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm border-b'
      }`} 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(250, 248, 245, 0.98)' : 'rgba(250, 248, 245, 0.92)',
        borderColor: 'var(--shadow)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onPageChange('home')}
          >
            <Heart 
              className="w-6 h-6 fill-current transition-all duration-300 group-hover:scale-110" 
              style={{ color: 'var(--burgundy)' }} 
            />
            <span 
              className="text-3xl font-handwriting vintage-shadow transition-all duration-300 group-hover:text-gradient" 
              style={{ color: 'var(--charcoal)' }}
            >
              Boemi
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative text-sm font-vintage transition-all duration-300 hover-lift ${
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

          {/* Enhanced Right Section */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Music Toggle */}
            <button
              onClick={onMusicToggle}
              className="p-2.5 rounded-full transition-all duration-300 hover:bg-white/50 hover:scale-110 group"
              style={{ color: 'var(--charcoal)' }}
              title={isMusicPlaying ? 'Pausar música' : 'Tocar música'}
            >
              {isMusicPlaying ? (
                <MusicOff className="w-5 h-5 group-hover:animate-pulse" />
              ) : (
                <Music className="w-5 h-5" />
              )}
            </button>

            {/* Enhanced Instagram Link */}
            <a
              href="https://www.instagram.com/lojaboemi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-all duration-300 hover:bg-white/50 hover:scale-110 group"
              style={{ color: 'var(--charcoal)' }}
              title="Seguir no Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12" />
            </a>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-full transition-all duration-300 hover:bg-white/50 hover:scale-110"
              style={{ color: 'var(--charcoal)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          backgroundColor: 'var(--paper)',
          borderTop: '1px solid var(--shadow)'
        }}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 text-base font-vintage rounded-lg transition-all duration-300 hover-lift ${
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
          
          {/* Mobile Social Links */}
          <div className="pt-4 mt-4 border-t" style={{ borderColor: 'var(--shadow)' }}>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.instagram.com/lojaboemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover-lift"
                style={{ backgroundColor: 'var(--burgundy)', color: 'white' }}
              >
                <Instagram className="w-4 h-4" />
                <span className="font-vintage text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;