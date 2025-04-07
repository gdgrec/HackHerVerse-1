'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';

// Components
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-3 py-2 md:px-4 md:py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between relative bg-white border-2 border-[#333] shadow-md rounded-none">
        <div className="flex items-center">
          <span className="font-bold text-pink-500 text-sm sm:text-base md:text-lg">HackHerVerse~1</span>
        </div>
        
        {/* Desktop Menu - Hidden on small screens, visible on medium and up */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-5 xl:space-x-6 items-center">
          <NavLink href="#hero" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">Home</NavLink>
          <NavLink href="#about" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">About</NavLink>
          <NavLink href="#rules" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">Rules</NavLink>
          <NavLink href="#themes" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">Themes</NavLink>
          <NavLink href="#timeline" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">Timeline</NavLink>
          <NavLink href="#prizes" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">Prizes</NavLink>
          <NavLink href="#faq" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">FAQ</NavLink>
          <NavLink href="#contact" className="px-2 md:px-2 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base xl:text-lg">Contact</NavLink>
        </div>
        
        {/* Mobile Menu Button - Visible on small screens, hidden on medium and up */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-none bg-pink-400 hover:bg-pink-500 transition-colors border-2 border-[#333] shadow-[3px_3px_0_#333] hover:shadow-[2px_2px_0_#333] hover:translate-x-[1px] hover:translate-y-[1px]"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Visible when toggled, hidden on medium and up */}
      <div className={`fixed top-0 right-0 bottom-0 w-48 sm:w-56 z-40 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="h-full bg-white backdrop-blur-lg shadow-md rounded-none border-2 sm:border-3 border-[#333] box-border">
          {/* Close button */}
          <div className="flex justify-end p-3 sm:p-4">
            <button 
              onClick={closeMobileMenu}
              className="p-2 rounded-none bg-pink-400 hover:bg-pink-500 transition-colors border-2 border-[#333] shadow-[3px_3px_0_#333] hover:shadow-[2px_2px_0_#333] hover:translate-x-[1px] hover:translate-y-[1px]"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4 sm:w-5 sm:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center pt-3 sm:pt-4 space-y-3 sm:space-y-4 p-2 sm:p-3">
            <MobileNavLink href="#hero" onClick={closeMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={closeMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#rules" onClick={closeMobileMenu}>Rules</MobileNavLink>
            <MobileNavLink href="#themes" onClick={closeMobileMenu}>Themes</MobileNavLink>
            <MobileNavLink href="#timeline" onClick={closeMobileMenu}>Timeline</MobileNavLink>
            <MobileNavLink href="#prizes" onClick={closeMobileMenu}>Prizes</MobileNavLink>
            <MobileNavLink href="#faq" onClick={closeMobileMenu}>FAQ</MobileNavLink>
            <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`relative font-bold text-[#333] hover:text-pink-500 transition-colors group py-0.5 ${className || ''}`}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="hidden xl:inline-block absolute -top-1 -right-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image src="/images/pixel-sparkle.svg" width={4} height={4} alt="sparkle" className="w-[4px] h-[4px] lg:w-[6px] lg:h-[6px]" />
      </span>
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
    
    // Call the original onClick (to close the mobile menu)
    if (onClick) onClick();
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="relative font-bold text-[#333] text-sm sm:text-base hover:text-pink-500 transition-colors group flex items-center px-3 sm:px-4 py-2 sm:py-3 w-full mb-1 sm:mb-2 bg-white border-2 border-[#333] shadow-[3px_3px_0_#333] hover:shadow-[2px_2px_0_#333] hover:translate-x-[1px] hover:translate-y-[1px]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image src="/images/pixel-sparkle.svg" width={12} height={12} alt="sparkle" className="sparkle sm:w-[14px] sm:h-[14px]" />
      </span>
    </a>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glassmorphism rounded-xl overflow-hidden">
      <button
        className="w-full p-2 sm:p-3 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold text-pink-600 text-[15px] sm:text-[17px] md:text-lg font-[family-name:var(--font-display)] pr-2">{question}</p>
        <div className="transform transition-transform duration-200 flex-shrink-0" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="p-2 sm:p-3 pt-0 text-blue-800 bg-white/50 text-[12px] sm:text-sm md:text-base font-[family-name:var(--font-sans)]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const PixelCloud = ({ className = '', style = {}, size = 1, variant = 1 }) => {
  // Determine which cloud variant to use
  const cloudSrc = `/images/pixel-cloud${variant > 1 ? variant : ''}.svg`;
  
  // Determine animation class based on variant
  let animationClass = '';
  let width = 140;
  let height = 100;
  let opacity = 0.90; // Higher opacity for better visibility
  
  // Responsive sizing based on screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Adjust size for smaller screens
  const responsiveSize = isSmallScreen ? size * 0.7 : size;
  
  if (variant === 1) {
    animationClass = 'animate-float-slow';
    width = 140;
    height = 100;
    opacity = 0.;
  } else if (variant === 2) {
    animationClass = 'animate-float-medium';
    width = 120;
    height = 90;
    opacity = 0.9;
  } else {
    animationClass = 'animate-float-fast';
    width = 110;
    height = 80;
    opacity = 0.95;
  }
  
  return (
    <div 
      className={`pointer-events-none ${animationClass} ${className}`} 
      style={{
        ...style,
        zIndex: 0,
      }}
    >
      <Image 
        src={cloudSrc} 
        width={width} 
        height={height} 
        alt="Pixel Cloud" 
        style={{ 
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))', 
          opacity: opacity,
          transition: 'all 0.5s ease',
          transform: `scale(${responsiveSize})`
        }}
        priority={false}
        loading="lazy"
      />
    </div>
  );
};

const PixelSparkle = ({ className = '', style = {}, size = 1 }) => {
  return (
    <div 
      className={`sparkle-container ${className}`} 
      style={{
        ...style,
        transform: `scale(${size})`,
      }}
    >
      <Image 
        src="/images/pixel-sparkle.svg" 
        width={20} 
        height={20} 
        alt="Pixel Sparkle" 
        className="sparkle" 
        style={{ animationDelay: `${Math.random() * 2}s` }}
      />
    </div>
  );
};

const BubbleButton = ({ children, primary = false, className = '', href = '#' }) => {
  return (
    <a 
      href={href}
      className={`
        button-primary relative overflow-hidden px-6 py-3 font-bold transition-all
        ${primary ? 'bg-[#ff66c4]' : 'bg-[#66c4ff]'} 
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-full h-0 bg-white/20 transition-all duration-300 group-hover:h-full"></span>
      {primary && (
        <div className="absolute -top-2 -right-2">
          <Image src="/images/pixel-sparkle.svg" width={16} height={16} alt="sparkle" className="animate-spin-slow" />
        </div>
      )}
    </a>
  );
};

const ThemeCard = ({ title, icon, description }) => {
  return (
    <div className="glassmorphism rounded-2xl p-4 sm:p-5 text-center transform transition-transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 rounded-full text-2xl sm:text-3xl shadow-md">
        <div className="text-black w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-[16px] sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 font-[family-name:var(--font-display)] text-blue-800">{title}</h3>
      <p className="text-[13px] sm:text-base text-blue-700 font-[family-name:var(--font-sans)]">{description}</p>
    </div>
  );
};

const TimelineItem = ({ date, title, description }) => {
  return (
    <div className="relative mb-8 pl-6 sm:pl-8">
      <div className="absolute left-0 top-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pink-500 border-2 sm:border-4 border-blue-200 z-10"></div>
      <div className="absolute left-1.5 sm:left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 -z-10"></div>
      <div className="glassmorphism rounded-xl p-3 sm:p-4">
        <p className="text-[13px] sm:text-[15px] font-semibold text-blue-500 mb-1">{date}</p>
        <h3 className="text-[15px] sm:text-[17px] md:text-lg font-bold mb-1 sm:mb-2 text-blue-800">{title}</h3>
        {description && <p className="text-[12px] sm:text-[14px] md:text-base text-blue-700">{description}</p>}
      </div>
    </div>
  );
};

const CollaboratorLogo = ({ name, logo }) => {
  return (
    <div className="glassmorphism rounded-2xl p-4 flex items-center justify-center transform transition-transform hover:scale-105">
      <div className="w-20 h-20 flex items-center justify-center">
        <span className="text-xl font-bold text-blue-800 text-center">{name}</span>
      </div>
    </div>
  );
};

const RuleCard = ({ number, title, points }) => {
  return (
    <div className="glassmorphism rounded-2xl p-5 relative overflow-hidden">
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full flex items-center justify-center text-2xl font-semibold text-black transform rotate-12">
        {number}
      </div>s
      <div className="ml-8 mt-2">
        <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-display)] text-pink-600">{title}</h3>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start text-base text-blue-800 font-[family-name:var(--font-sans)]">
              <span className="inline-block w-4 h-4 mt-0.5 mr-2 bg-pink-200 border-2 border-[#333] rounded-sm flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const [powerpuffPosition, setPowerpuffPosition] = useState({ x: 12, y: 22 });
  const [powerpuffSize, setPowerpuffSize] = useState(120);

  useEffect(() => {
    // Set initial Powerpuff position based on screen size
    setPowerpuffPosition({ 
      x: window.innerWidth < 768 ? 15 : 12, 
      y: window.innerWidth < 768 ? 25 : 22 
    });
    
    // Initialize scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value to change when elements become visible
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on initial load
    setTimeout(animateOnScroll, 100);

    // Set initial Powerpuff size based on screen width - IMPORTANT for mobile devices
    if (window.innerWidth < 350) {
      setPowerpuffSize(35); // Very small screens
    } else if (window.innerWidth < 640) {
      setPowerpuffSize(45); // Small mobile screens
    } else if (window.innerWidth < 768) {
      setPowerpuffSize(50); // Larger mobile screens
    } else if (window.innerWidth < 1024) {
      setPowerpuffSize(55); // Tablets
    } else {
      setPowerpuffSize(60); // Desktop
    }
    
    // Call handleResize immediately to ensure proper sizing
    handleResize();

    // Generate random sparkles
    const newSparkles = [];
    const sparkleCount = window.innerWidth < 768 ? 8 : 15;
    
    for (let i = 0; i < sparkleCount; i++) {
      newSparkles.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      });
    }
    setSparkles(newSparkles);
    
    // Define handleResize function for both initial setup and window resize events
    function handleResize() {
      // Update sparkles count based on screen width
      const sparkleCount = window.innerWidth < 768 ? 8 : 15;
      
      // Update Powerpuff Girl size based on screen width
      if (window.innerWidth < 350) {
        setPowerpuffSize(35); // Very small screens
      } else if (window.innerWidth < 640) {
        setPowerpuffSize(45); // Small mobile screens
      } else if (window.innerWidth < 768) {
        setPowerpuffSize(50); // Larger mobile screens
      } else if (window.innerWidth < 1024) {
        setPowerpuffSize(55); // Tablets
      } else {
        setPowerpuffSize(60); // Desktop
      }
      if (sparkleCount !== sparkles.length) {
        const updatedSparkles = [];
        for (let i = 0; i < sparkleCount; i++) {
          if (i < sparkles.length) {
            updatedSparkles.push(sparkles[i]);
          } else {
            updatedSparkles.push({
              id: i,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              size: Math.random() * 0.5 + 0.5,
              delay: Math.random() * 2,
              duration: Math.random() * 3 + 2,
            });
          }
        }
        setSparkles(updatedSparkles);
      }
    };
    
    // Track scroll position for animations, cloud opacity, and Powerpuff Girl movement
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('.fade-in-up, .fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      // Calculate Powerpuff Girl position based on scroll
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(newScrollY / maxScroll, 1);
      
      // Base position is in the left side, below the navbar
      const baseX = window.innerWidth < 768 ? 15 : 12;
      const baseY = window.innerWidth < 768 ? 25 : 22;
      
      // Enhanced wave motion with larger amplitude and multiple frequencies
      const waveAmplitudeX = 8; // Increased horizontal movement
      const waveAmplitudeY = 6; // Increased vertical movement
      
      // Complex motion pattern using multiple sine waves
      const newX = baseX + 
        Math.sin(scrollPercentage * Math.PI * 2) * waveAmplitudeX + 
        Math.sin(scrollPercentage * Math.PI * 4) * (waveAmplitudeX * 0.3);
      
      const newY = baseY + 
        Math.cos(scrollPercentage * Math.PI * 3) * waveAmplitudeY + 
        Math.cos(scrollPercentage * Math.PI * 6) * (waveAmplitudeY * 0.2);
      
      setPowerpuffPosition({ x: newX, y: newY });
    };
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Call handleResize once to set initial sizes
    handleResize();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run only once on mount
  
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Clouds - simplified */}
      <div className="fixed pointer-events-none z-0 w-full h-full overflow-hidden cloud-container ${scrollY > 100 ? 'scrolled' : ''}">
        {/* Enhanced clouds with larger sizes and better visibility */}
        <PixelCloud className="absolute top-[10%] left-[5%]" variant={1} size={1.6} />
        <PixelCloud className="absolute top-[15%] right-[10%]" variant={2} size={1.4} />
        <PixelCloud className="absolute top-[60%] left-[15%]" variant={3} size={1.5} />
        <PixelCloud className="absolute top-[75%] right-[15%]" variant={1} size={1.3} />
        <PixelCloud className="absolute top-[40%] right-[25%]" variant={2} size={1.2} />
        <PixelCloud className="absolute top-[30%] left-[30%]" variant={1} size={1.3} />
      </div>
      
      {/* Enhanced Random Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle-container"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            transform: `scale(${window.innerWidth < 640 ? sparkle.size * 1.8 : sparkle.size * 2.5})`, /* Responsive sizing */
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            zIndex: 5,
            opacity: 1 /* Full visibility */
          }}
        >
          <div className="sparkle"></div>
        </div>
      ))}
      
      {/* Enhanced fixed sparkles with responsive sizes for different screen sizes */}
      <div className="absolute top-[20%] right-[15%] animate-spin-slow" style={{animationDelay: '0.7s'}}>
        <Image src="/images/pixel-sparkle.svg" width={36} height={36} alt="sparkle" className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] opacity-90" />
      </div>
      <div className="absolute top-[70%] left-[20%] animate-spin-slow" style={{animationDelay: '1.3s'}}>
        <Image src="/images/pixel-sparkle.svg" width={32} height={32} alt="sparkle" className="w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] opacity-90" />
      </div>
      <div className="absolute top-[40%] right-[30%] animate-spin-slow" style={{animationDelay: '2s'}}>
        <Image src="/images/pixel-sparkle.svg" width={34} height={34} alt="sparkle" className="w-[34px] h-[34px] sm:w-[45px] sm:h-[45px] opacity-90" />
      </div>
      <div className="absolute top-[50%] left-[10%] animate-spin-slow" style={{animationDelay: '1s'}}>
        <Image src="/images/pixel-sparkle.svg" width={38} height={38} alt="sparkle" className="w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] opacity-90" />
      </div>
      
      {/* Powerpuff Girl that follows scroll */}
      <div 
        className="fixed pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: `${powerpuffPosition.x}%`,
          top: `${powerpuffPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.9
        }}
      >
        <div className="relative">
          <Image 
            src="/images/powepuff.png" 
            width={powerpuffSize} 
            height={powerpuffSize} 
            alt="Powerpuff Girl" 
            className="drop-shadow-lg powerpuff-animate"
          />
          <div className="absolute -top-3 -right-3 animate-spin-slow">
            <Image src="/images/pixel-sparkle.svg" width={16} height={16} alt="sparkle" />
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="animate-pulse-slow relative">
              <div className="absolute -top-8 -left-8 z-10">
                <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
              </div>
              <div className="absolute -top-8 -right-8 z-10">
                <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
              </div>
              <div className="absolute -bottom-8 -left-8 z-10">
                <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
              </div>
              <div className="absolute -bottom-8 -right-8 z-10">
                <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
              </div>
              <div className="w-full flex justify-center">
                <Image 
                  src="/images/logo.png" 
                  width={500} 
                  height={500} 
                  alt="HackHerVerse Logo" 
                  className="mb-4 drop-shadow-xl w-auto h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]" 
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" />
              </div>
              <div className="absolute -bottom-2 -left-4 animate-spin-slow" style={{animationDelay: '0.5s'}}>
                <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" />
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl mb-8 text-pink-600 font-[family-name:var(--font-serif)] font-bold italic animate-pulse-slow hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
            <Image src="/images/pixel-sparkle.svg" width={20} height={20} alt="sparkle" className="mr-2" />
            She Codes, She Leads, She Inspires
            <Image src="/images/pixel-sparkle.svg" width={20} height={20} alt="sparkle" className="ml-2" />
          </p>
          <div className="flex justify-center">
            <BubbleButton href="https://unstop.com/p/hackherverse-she-codes-she-leads-she-inspires-rajalakshmi-engineering-college-1458148" target="_blank" rel="noopener noreferrer" primary>Register Now</BubbleButton>
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>
      
      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-5xl mb-8 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">About HackHerVerse</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          <div className="glassmorphism rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-responsive-lg mb-6 text-blue-900 leading-relaxed">
              HackHerVerse is an inter-college, 24-hour online hackathon exclusively for women, organized by Women Techmakers Rajalakshmi Engineering College -a vertical of Google Developer Groups On Campus - REC, Chennai. This event is designed to empower, inspire, and upskill women in technology, providing a collaborative and inclusive environment to solve real-world challenges through innovation.
              </p>
              <p className="text-responsive-lg mb-6 text-blue-900 leading-relaxed">
                Whether you're a seasoned developer or just starting out, HackHerVerse welcomes all dreamers and doers.
              </p>
              <ul className="space-y-4 text-blue-800 text-responsive-lg">
                <li className="flex items-center">
                  <Image src="/images/pixel-star.svg" width={24} height={24} alt="Star" className="mr-3" />
                  <span className="font-medium">Build projects that sparkle and shine</span>
                </li>
                <li className="flex items-center">
                  <Image src="/images/pixel-star.svg" width={24} height={24} alt="Star" className="mr-3" />
                  <span className="font-medium">Connect with like-minded tech enthusiasts</span>
                </li>
                <li className="flex items-center">
                  <Image src="/images/pixel-star.svg" width={24} height={24} alt="Star" className="mr-3" />
                  <span className="font-medium">Win fabulous prizes and eternal glory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>
      
      {/* Rules Section */}
      <section id="rules" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-5xl mb-8 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">Rules</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          <div className="mb-8 glassmorphism rounded-2xl p-6 text-center">
            <h3 className="text-responsive-3xl font-bold mb-4 font-[family-name:var(--font-display)] text-pink-600">Download PPT Template</h3>
            <p className="text-responsive-lg text-blue-800 font-[family-name:var(--font-sans)] mb-4 font-medium">PPT Template for Round 1. Deadline for PPT submission is 24th April.</p>
            <BubbleButton 
              primary 
              href="/Hackerverse_PPT.pptx" 
              download 
              className="inline-flex items-center justify-center gap-2 min-w-[200px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-flex mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PPT</span>
            </BubbleButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <RuleCard 
              number="1" 
              title="Team Rules & Regulations" 
              points={[
                "Each team must have 2 to 4 women participants.",
                "Teams must appoint a designated leader for communication and submissions.",
                "Members can be from different years/departments, but from the same college.",
                "Only one project submission per team is allowed.",
                "Unethical behavior, misconduct, or cheating will lead to disqualification."
              ]}
            />
            <RuleCard 
              number="2" 
              title="Hackathon Rules" 
              points={[
                "The hackathon will be conducted entirely online.",
                "Teams must follow the official event schedule.",
                "GitHub repository and PPT submission are mandatory before the deadline.",
                "All work must be original and team-created.",
                "Participation in all sessions—check-ins, mentorship, and evaluations is compulsory."
              ]}
            />
            <RuleCard 
              number="3" 
              title="Project Submission & Presentation" 
              points={[
                "Round 1 submissions must use the official PPT template.",
                "Finalists may use a custom PPT for their demo.",
                "Teams must build at least a Minimum Viable Product (MVP) or prototype.",
                "Pre-written code must be acknowledged in advance."
              ]}
            />
            <RuleCard 
              number="4" 
              title="Code of Conduct" 
              points={[
                "Be punctual for all hackathon activities.",
                "Treat all fellow participants, mentors, and judges with respect.",
                "Harassment, discrimination, or misconduct will not be tolerated.",
                "Judges' decisions are final and binding."
              ]}
            />
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>
      
      {/* Theme Section */}
      <section id="themes" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-5xl mb-8 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">Themes</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <ThemeCard 
              title="Smart Sustainable Living" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v19"/><path d="M5 8c1.5 2.5 5 2.5 6.5 0S16 8 17.5 10.5 22 11 22 8"/><path d="M5 16c1.5-2.5 5-2.5 6.5 0S16 16 17.5 13.5 22 13 22 16"/></svg>}
            />
            <ThemeCard 
              title="Health & Well-being" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>}
            />
            <ThemeCard 
              title="EdTech" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
            />
            <ThemeCard 
              title="Community Impact" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>}
            />
            <ThemeCard 
              title="Open Innovation" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
            />
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>
      
      {/* Timeline Section */}
      <section id="timeline" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-4xl mb-8 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">Timeline</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          <div className="ml-4">
            <TimelineItem 
              date="April 08, 2025" 
              title="Registration Opens" 
            />
            <TimelineItem 
              date="April 09 - 24, 2025" 
              title="Mentorship Sessions" 
            />
            <TimelineItem 
              date="April 24, 2025" 
              title="Submission Deadline" 
            />
            <TimelineItem 
              date="April 28, 2025" 
              title="Shortlisted Teams of Round 1 Announced" 
            />
            <TimelineItem 
              date="April 29 - May 02, 2025" 
              title="Round 2 Mentorship Sessions" 
            />
            <TimelineItem 
              date="May 03 - 04, 2025" 
              title="Final Hackathon" 
            />
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>

      {/* Prize Pool Section */}
      <section id="prizes" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-4xl mb-8 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">Prize Pool</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Second Prize */}
            <div className="glassmorphism rounded-2xl p-6 text-center w-full md:w-1/3 transform md:translate-y-4">
              <div className="relative mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-70 animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image src="/2nd.png" width={120} height={120} alt="Second Prize" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" />
                </div>
              </div>
              <h3 className="text-responsive-3xl font-bold text-blue-700 mb-2 font-[family-name:var(--font-display)]">Second Prize</h3>
              <p className="text-pink-600 font-bold text-responsive-3xl mb-2">₹5,000</p>
              <p className="text-blue-800 text-responsive-lg font-[family-name:var(--font-sans)]">For the first runner-up team</p>
            </div>
            
            {/* First Prize */}
            <div className="glassmorphism rounded-2xl p-6 text-center w-full md:w-1/3 transform scale-110 z-10">
              <div className="relative mb-4 mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-70 animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image src="/1st.png" width={140} height={140} alt="First Prize" className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" />
                </div>
              </div>
              <h3 className="text-responsive-3xl font-bold text-pink-600 mb-2 font-[family-name:var(--font-display)]">First Prize</h3>
              <p className="text-blue-600 font-bold text-responsive-4xl mb-2">₹10,000</p>
              <p className="text-pink-600 text-responsive-lg font-[family-name:var(--font-sans)]">For the winning team</p>
            </div>
            
            {/* Third Prize */}
            <div className="glassmorphism rounded-2xl p-6 text-center w-full md:w-1/3 transform md:translate-y-4">
              <div className="relative mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-70 animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image src="/3rd.png" width={120} height={120} alt="Third Prize" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" />
                </div>
              </div>
              <h3 className="text-responsive-3xl font-bold text-blue-700 mb-2 font-[family-name:var(--font-display)]">Third Prize</h3>
              <p className="text-pink-600 font-bold text-responsive-3xl mb-2">₹5,000</p>
              <p className="text-blue-800 text-responsive-lg font-[family-name:var(--font-sans)]">For the second runner-up team</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-3xl mb-8 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            <FaqItem 
              question="Who can participate in HackHerVerse?" 
              answer="HackHerVerse is exclusively for women participants. Teams must consist of 2-4 members from the same college, though they can be from different academic years and departments."
            />
            <FaqItem 
              question="Is there a registration fee?" 
              answer="No, participation in HackHerVerse is completely free of charge. We believe in providing equal opportunities for all women in technology."
            />
            <FaqItem 
              question="What if I don&apos;t have a team?" 
              answer="We encourage you to form a team before registering. However, if you&apos;re having trouble finding teammates, reach out to us and we&apos;ll try to connect you with other participants looking for team members."
            />
            <FaqItem 
              question="Do I need to have coding experience?" 
              answer="While some coding experience is helpful, we welcome participants of all skill levels. What&apos;s most important is your enthusiasm to learn and create. We&apos;ll have mentors available to guide you throughout the hackathon."
            />
            <FaqItem 
              question="What should I bring to the hackathon?" 
              answer="Since this is an online hackathon, you&apos;ll need a computer with a stable internet connection. Make sure you have the necessary software installed for your project. It&apos;s also good to have a quiet workspace and stay hydrated!"
            />
            <FaqItem 
              question="How will the projects be judged?" 
              answer="Projects will be evaluated based on innovation, technical complexity, practicality, presentation quality, and adherence to the chosen theme. Our panel of judges includes industry professionals and academics."
            />
            <FaqItem 
              question="Can we form teams from different colleges?" 
              answer="Yes, you can form teams from different colleges, but all team members must be from the same college."
            />
            <FaqItem
              question="Can we showcase hardware projects?"
              answer="This is a a software-focused hackathon. Projects that combine software and hardware are allowed, as long as the demo can be presented clearly online. Howewever, purely hardware-based projects are not allowed."
            />
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>

      {/* Organized By Section */}
      <section id="organizers" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-responsive-4xl sm:text-responsive-5xl mb-6 sm:mb-8 md:mb-10 text-center font-[family-name:var(--font-display)] text-black relative inline-block">
            <span className="relative z-10">Organized By</span>
            <span className="absolute -top-3 sm:-top-4 md:-top-6 -right-3 sm:-right-4 md:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" className="sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={22} height={22} alt="sparkle" className="sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          
          <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
            <div className="glassmorphism rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-1 sm:mb-2 md:mb-3 relative">
                <div className="absolute -top-2 -right-2 animate-spin-slow">
                  <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] opacity-90" />
                </div>
              </div>
              <Image 
                src="/wtmreclogo.png" 
                width={300} 
                height={300} 
                alt="WTM Logo" 
                className="w-32 sm:w-40 md:w-48 lg:w-44 mx-auto mb-2 sm:mb-3 md:mb-4 object-contain" 
              />
              <h3 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-pink-600 mb-0.5 sm:mb-1 md:mb-2 font-[family-name:var(--font-display)]">Women Techmakers</h3>
              <h4 className="text-responsive-lg sm:text-responsive-xl font-bold text-blue-700 mb-1 sm:mb-2 md:mb-3 font-[family-name:var(--font-display)]">Rajalakshmi Engineering College</h4>
              <p className="text-responsive-sm sm:text-responsive-base text-blue-800 font-[family-name:var(--font-sans)]">A vertical of Google Developer Groups On Campus - REC, Chennai</p>
            </div>
          </div>
          
          <h3 className="text-responsive-3xl text-center text-pink-600 mb-6 font-[family-name:var(--font-display)]">Faculty Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <h4 className="text-responsive-2xl font-bold text-blue-700 mb-1 font-[family-name:var(--font-display)]">Dr P Kumar</h4>
              <p className="text-pink-600 text-responsive-lg mb-2 font-[family-name:var(--font-sans)]">Head Of the Department, CSE</p>
              <p className="text-blue-800 text-responsive-lg font-[family-name:var(--font-sans)]">Convenor WTM REC</p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <h4 className="text-responsive-2xl font-bold text-blue-700 mb-1 font-[family-name:var(--font-display)]">Dr. Rakesh Kumar</h4>
              <p className="text-pink-600 text-responsive-lg mb-2 font-[family-name:var(--font-sans)]">Assistant Professor, CSE</p>
              <p className="text-blue-800 text-responsive-lg font-[family-name:var(--font-sans)]">Faculty Coordinator, WTM REC</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>
      
      {/* Collaborators Section - Commented out as requested */}
      {/*
      <section id="collaborators" className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto section-container relative">
          <div className="absolute -top-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-0" />
          </div>
          <div className="absolute -top-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform -rotate-90" />
          </div>
          <div className="absolute -bottom-3 -right-3">
            <Image src="/images/pixel-corner.svg" width={24} height={24} alt="corner" className="transform rotate-180" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-[family-name:var(--font-fredoka)] text-blue-800">
            Collaborators
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            <CollaboratorLogo name="PixelCorp" />
            <CollaboratorLogo name="DreamTech" />
            <CollaboratorLogo name="PastelAI" />
            <CollaboratorLogo name="CloudByte" />
            <CollaboratorLogo name="StarCode" />
            <CollaboratorLogo name="BubbleData" />
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl mx-auto py-2 flex justify-center">
        <Image src="/images/pixel-divider.svg" width={800} height={24} alt="divider" className="w-full max-w-4xl" />
      </div>
      */}
      
      {/* Footer */}
      <section id="contact">
      <footer className="py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center section-container">
          <h2 className="text-responsive-4xl mb-8 text-center font-[family-name:var(--font-display)] text-pink-600 relative inline-block">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
              <Image src="/images/pixel-sparkle.svg" width={30} height={30} alt="sparkle" className="sm:w-[40px] sm:h-[40px] animate-pulse" />
            </span>
            <span className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6">
              <Image src="/images/pixel-sparkle.svg" width={28} height={28} alt="sparkle" className="sm:w-[36px] sm:h-[36px] animate-spin-slow" />
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="glassmorphism p-4 rounded-xl">
              <p className="font-bold text-blue-800 mb-1 text-responsive-lg font-[family-name:var(--font-display)]">Sakthisree Moliyan Vel</p>
              <a href="tel:+918825522339" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-responsive-lg font-[family-name:var(--font-sans)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 88255 22339
              </a>
            </div>
            
            <div className="glassmorphism p-4 rounded-xl">
              <p className="font-bold text-blue-800 mb-1 text-responsive-lg font-[family-name:var(--font-display)]">Srevarsha N</p>
              <a href="tel:+917200246022" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-responsive-lg font-[family-name:var(--font-sans)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7200467328
              </a>
            </div>
            
            <div className="glassmorphism p-4 rounded-xl">
              <p className="font-bold text-blue-800 mb-1 text-responsive-lg font-[family-name:var(--font-display)]">Prajein C K</p>
              <a href="tel:+917200467328" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-responsive-lg font-[family-name:var(--font-sans)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 72002 46022
              </a>
            </div>
          </div>
          
          <div className="p-4 rounded-xl mb-8 max-w-[300px] mx-auto">
            <p className="font-bold text-blue-800 mb-2 text-responsive-lg font-[family-name:var(--font-display)]">Email us at</p>
            <a href="mailto:gdgrec@gmail.com" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-responsive-lg font-[family-name:var(--font-sans)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              gdgrec@gmail.com
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/company/women-techmakers-rec?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition-colors relative group">
              <span className="text-2xl">
                <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
              </span>
              <span className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" />
              </span>
            </a>
            <a href="https://www.instagram.com/wtmrec/#" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition-colors relative group">
              <Image src="/instagram.svg" width={24} height={24} alt="Instagram" />
              <span className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" />
              </span>
            </a>
            <a href="https://www.youtube.com/@gdgrec" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition-colors relative group">
              <Image src="/youtube.svg" width={26} height={26} alt="Gmail" />
              <span className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" />
              </span>
            </a>
          </div>
          
          <div className="mb-4 glassmorphism p-3 rounded-xl max-w-[250px] mx-auto group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <p className="text-base text-blue-800 font-bold font-[family-name:var(--font-display)] relative">
                <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/images/pixel-sparkle.svg" width={16} height={16} alt="sparkle" />
                </span>
                Website Developed by
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <a href="https://www.linkedin.com/in/srevarsha" target="_blank" rel="noopener noreferrer" 
               className="text-pink-500 hover:text-pink-700 transition-all duration-300 font-medium text-responsive-lg flex items-center justify-center group-hover:scale-105">
              Sre varsha N
            </a>
          </div>
          
          <p className="text-responsive-lg text-purple-700 font-medium">
            &copy; 2025 WTM REC. All rights reserved.
          </p>
        </div>
      </footer>
      </section>
    </main>
  );
}
