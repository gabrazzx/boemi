import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle music toggle
  const handleMusicToggle = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Handle page transitions with loading
  const handlePageChange = (page: string) => {
    if (page !== currentPage) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  // Add enhanced custom styles with mobile-first approach
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
      
      /* Enhanced Typography - Mobile First */
      .font-handwriting {
        font-family: 'Dancing Script', cursive;
        font-weight: 500;
        letter-spacing: 0.5px;
        font-size: 1.1rem;
        line-height: 1.4;
      }
      
      .font-serif {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 1.3;
      }

      .font-vintage {
        font-family: 'Crimson Text', serif;
        font-weight: 400;
        line-height: 1.6;
        font-size: 1rem;
      }

      .font-elegant {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 400;
        letter-spacing: 0.3px;
        line-height: 1.7;
        font-size: 1.05rem;
      }

      /* Mobile Typography Scaling */
      @media (min-width: 640px) {
        .font-handwriting {
          font-size: 1.2rem;
        }
        .font-vintage {
          font-size: 1rem;
        }
        .font-elegant {
          font-size: 1.1rem;
        }
      }

      @media (min-width: 1024px) {
        .font-handwriting {
          font-size: 1.3rem;
        }
        .font-vintage {
          font-size: 1.05rem;
        }
        .font-elegant {
          font-size: 1.15rem;
        }
      }

      /* Enhanced Color Palette */
      :root {
        --cream: #FAF8F5;
        --cream-dark: #F5F1EB;
        --dusty-rose: #D4A574;
        --dusty-rose-light: #E2B888;
        --terracotta: #B8956A;
        --sage: #8B9A8C;
        --burgundy: #8B4B5C;
        --burgundy-light: #A05B6C;
        --deep-wine: #6B3E4A;
        --charcoal: #2C2C2C;
        --charcoal-light: #3A3A3A;
        --paper: #FEFCF9;
        --shadow: rgba(44, 44, 44, 0.1);
        --shadow-dark: rgba(44, 44, 44, 0.2);
      }

      /* Enhanced Scrollbar */
      ::-webkit-scrollbar {
        width: 4px;
      }
      
      @media (min-width: 768px) {
        ::-webkit-scrollbar {
          width: 6px;
        }
      }
      
      ::-webkit-scrollbar-track {
        background: var(--cream);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, var(--burgundy), var(--deep-wine));
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, var(--burgundy-light), var(--burgundy));
      }

      /* Enhanced Paper Texture */
      .paper-texture {
        background: 
          radial-gradient(circle at 20% 80%, rgba(139, 75, 92, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(139, 154, 140, 0.015) 0%, transparent 50%),
          var(--cream);
        background-size: 300px 300px, 200px 200px, 150px 150px;
        background-position: 0 0, 50px 50px, 100px 100px;
      }

      @media (min-width: 768px) {
        .paper-texture {
          background-size: 400px 400px, 300px 300px, 200px 200px;
          background-position: 0 0, 100px 100px, 200px 200px;
        }
      }

      /* Enhanced Vintage Photo Effects - Mobile Optimized */
      .vintage-photo {
        filter: sepia(20%) contrast(1.15) brightness(1.05) saturate(0.95);
        border: 4px solid white;
        box-shadow: 
          0 4px 16px rgba(0,0,0,0.1), 
          0 2px 8px rgba(0,0,0,0.06),
          0 0 0 1px rgba(0,0,0,0.04);
        transform: rotate(-0.3deg);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }

      @media (min-width: 768px) {
        .vintage-photo {
          border: 8px solid white;
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.12), 
            0 4px 16px rgba(0,0,0,0.08),
            0 0 0 1px rgba(0,0,0,0.05);
          transform: rotate(-0.5deg);
        }
      }

      .vintage-photo::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .vintage-photo:hover {
        transform: rotate(0deg) scale(1.02);
        box-shadow: 
          0 8px 24px rgba(0,0,0,0.12), 
          0 4px 12px rgba(0,0,0,0.08);
      }

      @media (min-width: 768px) {
        .vintage-photo:hover {
          transform: rotate(0deg) scale(1.03);
          box-shadow: 
            0 16px 48px rgba(0,0,0,0.15), 
            0 8px 24px rgba(0,0,0,0.1);
        }
      }

      .vintage-photo:hover::after {
        opacity: 1;
      }

      /* Enhanced Polaroid Effect - Mobile Optimized */
      .polaroid {
        background: linear-gradient(to bottom, #ffffff, #fefefe);
        padding: 8px 8px 24px 8px;
        box-shadow: 
          0 4px 12px rgba(0,0,0,0.12), 
          0 2px 6px rgba(0,0,0,0.08),
          0 0 0 1px rgba(0,0,0,0.04);
        transform: rotate(0.5deg);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      @media (min-width: 768px) {
        .polaroid {
          padding: 12px 12px 36px 12px;
          box-shadow: 
            0 8px 24px rgba(0,0,0,0.15), 
            0 4px 12px rgba(0,0,0,0.1),
            0 0 0 1px rgba(0,0,0,0.05);
          transform: rotate(1deg);
        }
      }

      .polaroid::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
        pointer-events: none;
      }

      .polaroid:nth-child(even) {
        transform: rotate(-0.5deg);
      }

      @media (min-width: 768px) {
        .polaroid:nth-child(even) {
          transform: rotate(-1deg);
        }
      }

      .polaroid:hover {
        transform: rotate(0deg) scale(1.02) translateY(-2px);
        box-shadow: 
          0 12px 24px rgba(0,0,0,0.15), 
          0 6px 12px rgba(0,0,0,0.1);
        z-index: 10;
      }

      @media (min-width: 768px) {
        .polaroid:hover {
          transform: rotate(0deg) scale(1.05) translateY(-4px);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.2), 
            0 10px 20px rgba(0,0,0,0.15);
        }
      }

      /* Enhanced Tape Effect - Mobile Optimized */
      .tape {
        position: relative;
      }

      .tape::before {
        content: '';
        position: absolute;
        top: -4px;
        left: 15%;
        width: 30px;
        height: 12px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
        border: 1px solid rgba(0,0,0,0.08);
        transform: rotate(-2deg);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        border-radius: 1px;
      }

      .tape::after {
        content: '';
        position: absolute;
        top: -4px;
        right: 20%;
        width: 25px;
        height: 12px;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
        border: 1px solid rgba(0,0,0,0.08);
        transform: rotate(3deg);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        border-radius: 1px;
      }

      @media (min-width: 768px) {
        .tape::before {
          top: -6px;
          width: 50px;
          height: 16px;
          transform: rotate(-3deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .tape::after {
          top: -6px;
          width: 40px;
          height: 16px;
          transform: rotate(4deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
      }

      /* Enhanced Handwritten Notes */
      .handwritten {
        font-family: 'Dancing Script', cursive;
        color: var(--burgundy);
        transform: rotate(-0.3deg);
        text-shadow: 1px 1px 2px rgba(0,0,0,0.08);
        font-weight: 500;
      }

      @media (min-width: 768px) {
        .handwritten {
          transform: rotate(-0.5deg);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
        }
      }

      /* Enhanced Vintage Buttons - Mobile Optimized */
      .vintage-btn {
        background: linear-gradient(135deg, var(--burgundy) 0%, var(--deep-wine) 100%);
        color: white;
        border: 2px solid var(--deep-wine);
        box-shadow: 
          0 4px 12px rgba(139, 75, 92, 0.25), 
          inset 0 1px 0 rgba(255,255,255,0.2);
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        font-weight: 500;
        letter-spacing: 0.5px;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }

      @media (min-width: 768px) {
        .vintage-btn {
          box-shadow: 
            0 6px 16px rgba(139, 75, 92, 0.3), 
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
      }

      .vintage-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s ease;
      }

      .vintage-btn:hover, .vintage-btn:active {
        background: linear-gradient(135deg, var(--burgundy-light) 0%, var(--burgundy) 100%);
        transform: translateY(-2px);
        box-shadow: 
          0 8px 16px rgba(139, 75, 92, 0.35), 
          inset 0 1px 0 rgba(255,255,255,0.3);
      }

      @media (min-width: 768px) {
        .vintage-btn:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 12px 24px rgba(139, 75, 92, 0.4), 
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
      }

      .vintage-btn:hover::before {
        left: 100%;
      }

      .vintage-btn:active {
        transform: translateY(-1px);
      }

      /* Touch-friendly button sizing */
      .touch-btn {
        min-height: 48px;
        min-width: 48px;
        padding: 12px 16px;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }

      /* Enhanced Animations */
      @keyframes fadeInUp {
        from { 
          opacity: 0; 
          transform: translateY(30px);
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from { 
          opacity: 0; 
          transform: translateX(-30px);
        }
        to { 
          opacity: 1; 
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from { 
          opacity: 0; 
          transform: translateX(30px);
        }
        to { 
          opacity: 1; 
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from { 
          opacity: 0; 
          transform: scale(0.95);
        }
        to { 
          opacity: 1; 
          transform: scale(1);
        }
      }

      .fade-in {
        animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-in-left {
        animation: fadeInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-in-right {
        animation: fadeInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .scale-in {
        animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Staggered animations */
      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
      .stagger-4 { animation-delay: 0.4s; }

      /* Enhanced Decorative Elements */
      .decorative-border {
        border: 2px solid var(--dusty-rose);
        background: linear-gradient(45deg, transparent 25%, rgba(212, 165, 116, 0.05) 25%, rgba(212, 165, 116, 0.05) 50%, transparent 50%);
        background-size: 15px 15px;
        position: relative;
      }

      @media (min-width: 768px) {
        .decorative-border {
          background-size: 20px 20px;
        }
      }

      .decorative-border::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border: 1px solid rgba(212, 165, 116, 0.3);
        pointer-events: none;
      }

      @media (min-width: 768px) {
        .decorative-border::before {
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
        }
      }

      /* Enhanced Film Grain */
      .film-grain {
        position: relative;
      }

      .film-grain::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(0,0,0,0.04) 1px, transparent 1px);
        background-size: 30px 30px, 20px 20px;
        pointer-events: none;
        mix-blend-mode: overlay;
        opacity: 0.4;
      }

      @media (min-width: 768px) {
        .film-grain::after {
          background-size: 50px 50px, 30px 30px;
          opacity: 0.6;
        }
      }

      /* Enhanced Text Effects */
      .vintage-shadow {
        text-shadow: 
          1px 1px 2px rgba(0,0,0,0.15), 
          0 0 10px rgba(139, 75, 92, 0.1),
          0.5px 0.5px 0 rgba(255,255,255,0.05);
      }

      @media (min-width: 768px) {
        .vintage-shadow {
          text-shadow: 
            2px 2px 4px rgba(0,0,0,0.2), 
            0 0 20px rgba(139, 75, 92, 0.15),
            1px 1px 0 rgba(255,255,255,0.1);
        }
      }

      .text-gradient {
        background: linear-gradient(135deg, var(--burgundy) 0%, var(--deep-wine) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Loading Animation */
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--cream);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
      }

      .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid var(--dusty-rose);
        border-top: 3px solid var(--burgundy);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @media (min-width: 768px) {
        .loading-spinner {
          width: 40px;
          height: 40px;
        }
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* Enhanced Hover Effects */
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .hover-lift:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0,0,0,0.12);
      }

      @media (min-width: 768px) {
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      }

      /* Enhanced Grid Layouts - Mobile First */
      .masonry-grid {
        column-count: 1;
        column-gap: 1rem;
      }

      @media (min-width: 640px) {
        .masonry-grid {
          column-count: 2;
          column-gap: 1.5rem;
        }
      }

      @media (min-width: 1024px) {
        .masonry-grid {
          column-count: 3;
          column-gap: 2rem;
        }
      }

      .masonry-item {
        break-inside: avoid;
        margin-bottom: 1.5rem;
      }

      @media (min-width: 768px) {
        .masonry-item {
          margin-bottom: 2rem;
        }
      }

      /* Mobile-specific improvements */
      @media (max-width: 767px) {
        /* Ensure proper spacing on mobile */
        .mobile-padding {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .mobile-spacing {
          margin-bottom: 2rem;
        }

        /* Improve touch targets */
        button, a {
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Better text readability */
        h1, h2, h3, h4, h5, h6 {
          line-height: 1.2;
        }

        p {
          line-height: 1.6;
        }

        /* Prevent horizontal scroll */
        * {
          max-width: 100%;
          box-sizing: border-box;
        }
      }

      /* Smooth page transitions */
      .page-transition-enter {
        opacity: 0;
        transform: translateY(15px);
      }

      .page-transition-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s ease;
      }

      .page-transition-exit {
        opacity: 1;
        transform: translateY(0);
      }

      .page-transition-exit-active {
        opacity: 0;
        transform: translateY(-15px);
        transition: all 0.3s ease;
      }

      /* Accessibility improvements */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* Focus styles for keyboard navigation */
      button:focus-visible, a:focus-visible {
        outline: 2px solid var(--burgundy);
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'collections':
        return <Collections />;
      case 'about':
        return <About />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen paper-texture" style={{ backgroundColor: 'var(--cream)' }}>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="text-center">
            <div className="loading-spinner mb-4"></div>
            <div className="handwritten text-base sm:text-lg" style={{ color: 'var(--burgundy)' }}>
              carregando...
            </div>
          </div>
        </div>
      )}

      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isMusicPlaying={isMusicPlaying}
        onMusicToggle={handleMusicToggle}
      />
      
      <main className={`fade-in ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {renderCurrentPage()}
      </main>
      
      <Footer />

      {/* Enhanced Background Music Indicator - Mobile Optimized */}
      {isMusicPlaying && (
        <div className="fixed bottom-4 left-4 bg-black/90 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm z-40 handwritten backdrop-blur-sm border border-white/20">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-1 h-2 sm:h-3 bg-white rounded-full animate-pulse"></div>
              <div className="w-1 h-3 sm:h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="hidden sm:inline">música ambiente tocando</span>
            <span className="sm:hidden">♪ tocando</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;