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
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 py-2 md:px-4 md:py-2">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative bg-white border-3 border-[#333] shadow-md rounded-none">
        <div className="flex items-center">
          <span className="font-bold text-pink-500 text-md hidden sm:block">HackHerVerse~1</span>
        </div>
        
        <div className="hidden md:flex space-x-3 items-center">
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#rules">Rules</NavLink>
          <NavLink href="#themes">Themes</NavLink>
          <NavLink href="#timeline">Timeline</NavLink>
          {/* <NavLink href="#collaborators">Collaborators</NavLink> */}
          <NavLink href="#prizes">Prizes</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          {/* Collaborators link removed */}
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-1 rounded-none bg-pink-400 hover:bg-pink-500 transition-colors border-2 border-[#333] shadow-[3px_3px_0_#333] hover:shadow-[2px_2px_0_#333] hover:translate-x-[1px] hover:translate-y-[1px]"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-40 z-40 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="h-full bg-white backdrop-blur-lg shadow-md rounded-none border-3 border-[#333] box-border">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={closeMobileMenu}
              className="p-1 rounded-none bg-pink-400 hover:bg-pink-500 transition-colors border-2 border-[#333] shadow-[3px_3px_0_#333] hover:shadow-[2px_2px_0_#333] hover:translate-x-[1px] hover:translate-y-[1px]"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center pt-4 space-y-4 p-2">
            <MobileNavLink href="#hero" onClick={closeMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={closeMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#rules" onClick={closeMobileMenu}>Rules</MobileNavLink>
            <MobileNavLink href="#themes" onClick={closeMobileMenu}>Themes</MobileNavLink>
            <MobileNavLink href="#timeline" onClick={closeMobileMenu}>Timeline</MobileNavLink>
            <MobileNavLink href="#prizes" onClick={closeMobileMenu}>Prizes</MobileNavLink>
            <MobileNavLink href="#faq" onClick={closeMobileMenu}>FAQ</MobileNavLink>
            <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
            {/* Collaborators link removed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="relative font-bold text-[#333] hover:text-pink-500 transition-colors group px-3 py-1 text-sm border-2 border-transparent hover:border-[#333] hover:bg-white/80 hover:shadow-[2px_2px_0_#333]"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute -top-1 -right-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image src="/images/pixel-sparkle.svg" width={10} height={10} alt="sparkle" className="sparkle" />
      </span>
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="relative font-bold text-[#333] text-sm hover:text-pink-500 transition-colors group flex items-center px-3 py-2 w-full mb-1 bg-white border-2 border-[#333] shadow-[3px_3px_0_#333] hover:shadow-[2px_2px_0_#333] hover:translate-x-[1px] hover:translate-y-[1px]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image src="/images/pixel-sparkle.svg" width={10} height={10} alt="sparkle" className="sparkle" />
      </span>
    </a>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glassmorphism rounded-xl overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-pink-600 text-lg font-[family-name:var(--font-display)]">{question}</h3>
        <div className="transform transition-transform duration-200 " style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="p-4 pt-0 text-blue-800 bg-white/50 text-base font-[family-name:var(--font-sans)]">
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
  let opacity = 0.85; // Higher opacity for better visibility
  
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
    opacity = 0.85;
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
    <div className="glassmorphism rounded-2xl p-5 text-center transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400 rounded-full text-3xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-display)] text-blue-800">{title}</h3>
      <p className="text-base text-blue-700 font-[family-name:var(--font-sans)]">{description}</p>
    </div>
  );
};

const TimelineItem = ({ date, title, description }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10"></div>
      <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 -z-10"></div>
      <div className="glassmorphism rounded-xl p-4">
        <p className="text-sm font-semibold text-blue-500 mb-1">{date}</p>
        <h3 className="text-lg font-bold mb-2 text-blue-800">{title}</h3>
        <p className="text-sm text-blue-700">{description}</p>
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
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full flex items-center justify-center text-2xl font-bold text-white transform rotate-12">
        {number}
      </div>
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
      
      // Calculate Powerpuff Girl position based on scroll
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(newScrollY / maxScroll, 1);
      
      // Add subtle movement to Powerpuff Girl based on scroll position
      // Base position is in the left side, below the navbar where she won&apos;t be hidden
      const baseX = window.innerWidth < 768 ? 15 : 12;
      const baseY = window.innerWidth < 768 ? 25 : 22;
      
      // Add a subtle wave motion based on scroll position
      // This creates a small figure-8 pattern as the user scrolls
      const waveAmplitudeX = 3; // How far to move horizontally
      const waveAmplitudeY = 2; // How far to move vertically
      
      // Use sine and cosine with different frequencies for a complex motion
      const newX = baseX + Math.sin(scrollPercentage * Math.PI * 2) * waveAmplitudeX;
      const newY = baseY + Math.cos(scrollPercentage * Math.PI * 4) * waveAmplitudeY;
      
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
  }, [sparkles]);
  
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Clouds - simplified */}
      <div className={`fixed pointer-events-none z-0 w-full h-full overflow-hidden cloud-container ${scrollY > 100 ? 'scrolled' : ''}`}>
        {/* Just a few strategically placed clouds */}
        <PixelCloud className="absolute top-[10%] left-[5%]" variant={1} size={1.2} />
        <PixelCloud className="absolute top-[15%] right-[10%]" variant={2} size={1} />
        <PixelCloud className="absolute top-[60%] left-[15%]" variant={3} size={1.1} />
        <PixelCloud className="absolute top-[75%] right-[15%]" variant={1} size={0.9} />
      </div>
      
      {/* Random Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle-container"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            transform: `scale(${sparkle.size})`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            zIndex: 5
          }}
        >
          <div className="sparkle"></div>
        </div>
      ))}
      
      {/* Just two fixed sparkles */}
      <div className="absolute top-[20%] right-[15%] animate-spin-slow" style={{animationDelay: '0.7s'}}>
        <Image src="/images/pixel-sparkle.svg" width={24} height={24} alt="sparkle" />
      </div>
      <div className="absolute top-[70%] left-[20%] animate-spin-slow" style={{animationDelay: '1.3s'}}>
        <Image src="/images/pixel-sparkle.svg" width={20} height={20} alt="sparkle" />
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
                  alt="HackaBliss Logo" 
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
          <p className="text-lg md:text-xl mb-8 text-black-600 font-[family-name:var(--font-sans)] font-bold">
            It isn&apos;t just another hackathon. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BubbleButton primary>Register Now</BubbleButton>
            <BubbleButton>Learn More</BubbleButton>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            About HackHerVerse
          </h2>
          <div className="glassmorphism rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-lg mb-4 text-blue-900">
              HackHerVerse is an inter-college, 24-hour online hackathon exclusively for women, organized by Women Techmakers Rajalakshmi Engineering College -a vertical of Google Developer Groups On Campus - REC, Chennai. This event is designed to empower, inspire, and upskill women in technology, providing a collaborative and inclusive environment to solve real-world challenges through innovation.
              </p>
              <p className="text-lg mb-4 text-blue-900">
                Whether you're a seasoned developer or just starting out, HackHerVerse welcomes all dreamers and doers.
              </p>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center">
                  <Image src="/images/pixel-star.svg" width={16} height={16} alt="Star" className="mr-2" />
                  <span>Build projects that sparkle and shine</span>
                </li>
                <li className="flex items-center">
                  <Image src="/images/pixel-star.svg" width={16} height={16} alt="Star" className="mr-2" />
                  <span>Connect with like-minded tech enthusiasts</span>
                </li>
                <li className="flex items-center">
                  <Image src="/images/pixel-star.svg" width={16} height={16} alt="Star" className="mr-2" />
                  <span>Win fabulous prizes and eternal glory</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            Rules
          </h2>
          <div className="mb-8 glassmorphism rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-display)] text-pink-600">Download Presentation</h3>
            <p className="text-base text-blue-800 font-[family-name:var(--font-sans)] mb-4">Download the presentation to get all the details about the hackathon rules, submission guidelines, and judging criteria.</p>
            <a href="/Hackerverse_PPT.pptx" download className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PPT
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <RuleCard 
              number="1" 
              title="Team Rules & Regulations" 
              points={[
                "Each team must consist of 2 to 4 members.",
                "Teams must appoint a designated leader responsible for communication andsubmissions.",
                "Team members can be from differentacademic years and departments, but mustbelong to the same college.",
                "Only one project submission is allowed perteam; multiple entries will not be accepted.This hackathon is exclusively for womenparticipants.",
                "Any form of cheating, misconduct, orunethical behavior will result in immediate disqualification."
              ]}
            />
            <RuleCard 
              number="2" 
              title="Hackathon Rules & Regulations" 
              points={[
                "The hackathon will be conducted fully online, andteams must adhere to the official schedule",
                "All projects must be developed within thehackathon duration; pre-developed projects will notbe accepted.",
                "Teams must submit their Git repository andpresentation (PPT) before the deadline.",
                "Active participation in check-ins, mentoringsessions, and evaluations is mandatory.",
                "Projects should be innovative, feasible, functional,and well-executed within the given timeframe."
              ]}
            />
            <RuleCard 
              number="3" 
              title="Project Submission & Presentation" 
              points={[
                "For Round 1, teams must use the provided PPT template.",
                "For the final round, teams may use a custom PPT for their presentation.",
                "Teams must build at least a Minimum ViableProduct (MVP) or working prototype.",
                "If teams wish to use pre-written code, they must acknowledge in advance.",
                "Presentations must be clear, confident, and well-prepared."
              ]}
            />
            <RuleCard 
              number="4" 
              title="Code of Conduct" 
              points={[
                "Teams must be on time for all sessions.",
                "All participants must respect fellow competitors, mentors, and judges.",
                "Any form of harassment, discrimination, or misconduct will lead to immediate disqualification.",
                "Judges’ decisions are final and cannot be contested."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            Themes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <ThemeCard 
              title="Smart Sustainable Living" 
              icon="🌸" 
            />
            <ThemeCard 
              title="Health & Well-being" 
              icon="💖" 
            />
            <ThemeCard 
              title="EdTech" 
              icon="📚" 
            />
            <ThemeCard 
              title="Community Impact" 
              icon="💖" 
            />
            <ThemeCard 
              title="Open Innovation" 
              icon="✨" 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            Timeline
          </h2>
          <div className="ml-4">
            <TimelineItem 
              date="April 08, 2025" 
              title="Registration Opens" 
            />
            <TimelineItem 
              date="April 09 - 20, 2025" 
              title="Mentorship Sessions" 
            />
            <TimelineItem 
              date="April 20, 2025" 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            Prize Pool
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Second Prize */}
            <div className="glassmorphism rounded-2xl p-6 text-center w-full md:w-1/3 transform md:translate-y-4">
              <div className="relative mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-70"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <span className="text-5xl">🥈</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2 font-[family-name:var(--font-display)]">Second Prize</h3>
              <p className="text-pink-600 font-bold text-3xl mb-2">₹15,000</p>
              <p className="text-blue-800 text-base font-[family-name:var(--font-sans)]">For the first runner-up team</p>
            </div>
            
            {/* First Prize */}
            <div className="glassmorphism rounded-2xl p-6 text-center w-full md:w-1/3 transform scale-110 z-10">
              <div className="relative mb-4 mx-auto w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-70"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">🥇</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-pink-600 mb-2 font-[family-name:var(--font-display)]">First Prize</h3>
              <p className="text-pink-600 font-bold text-4xl mb-2">₹25,000</p>
              <p className="text-blue-800 text-base font-[family-name:var(--font-sans)]">For the winning team</p>
            </div>
            
            {/* Third Prize */}
            <div className="glassmorphism rounded-2xl p-6 text-center w-full md:w-1/3 transform md:translate-y-4">
              <div className="relative mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-70"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <span className="text-5xl">🥉</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2 font-[family-name:var(--font-display)]">Third Prize</h3>
              <p className="text-pink-600 font-bold text-3xl mb-2">₹10,000</p>
              <p className="text-blue-800 text-base font-[family-name:var(--font-sans)]">For the second runner-up team</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            Frequently Asked Questions
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-display)] text-blue-800">
            Organized By
          </h2>
          
          <div className="flex flex-col items-center mb-10">
            <div className="glassmorphism rounded-2xl p-6 text-center max-w-md">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image src="/images/logo.png" width={128} height={128} alt="WTM REC Logo" className="object-contain" />
                <div className="absolute -top-2 -right-2 animate-spin-slow">
                  <Image src="/images/pixel-sparkle.svg" width={20} height={20} alt="sparkle" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-2 font-[family-name:var(--font-display)]">Women Techmakers</h3>
              <h4 className="text-xl font-bold text-blue-700 mb-4 font-[family-name:var(--font-display)]">Rajalakshmi Engineering College</h4>
              <p className="text-blue-800 text-base font-[family-name:var(--font-sans)]">A vertical of Google Developer Groups On Campus - REC, Chennai</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-pink-600 mb-6 font-[family-name:var(--font-display)]">Faculty Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CS</span>
              </div>
              <h4 className="text-xl font-bold text-blue-700 mb-1 font-[family-name:var(--font-display)]">Dr. Jane Smith</h4>
              <p className="text-pink-600 text-base mb-2 font-[family-name:var(--font-sans)]">Professor, Computer Science</p>
              <p className="text-blue-800 text-base font-[family-name:var(--font-sans)]">Faculty Advisor, WTM REC</p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">IT</span>
              </div>
              <h4 className="text-xl font-bold text-blue-700 mb-1 font-[family-name:var(--font-display)]">Dr. Robert Johnson</h4>
              <p className="text-pink-600 text-base mb-2 font-[family-name:var(--font-sans)]">Associate Professor, IT Department</p>
              <p className="text-blue-800 text-base font-[family-name:var(--font-sans)]">Technical Mentor, WTM REC</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-display)] text-pink-600">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="glassmorphism p-4 rounded-xl">
              <p className="font-bold text-blue-800 mb-1 text-lg font-[family-name:var(--font-display)]">Sakthisree Moliyan Vel</p>
              <a href="tel:+918825522339" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-base font-[family-name:var(--font-sans)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 88255 22339
              </a>
            </div>
            
            <div className="glassmorphism p-4 rounded-xl">
              <p className="font-bold text-blue-800 mb-1 text-lg font-[family-name:var(--font-display)]">Prajein CK</p>
              <a href="tel:+917200246022" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-base font-[family-name:var(--font-sans)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 72002 46022
              </a>
            </div>
            
            <div className="glassmorphism p-4 rounded-xl">
              <p className="font-bold text-blue-800 mb-1 text-lg font-[family-name:var(--font-display)]">Sre varsha N</p>
              <a href="tel:+917200467328" className="text-pink-500 hover:text-pink-700 transition-colors flex items-center justify-center text-base font-[family-name:var(--font-sans)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 72004 67328
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-blue-800 hover:text-blue-600 transition-colors relative group">
              <span className="text-2xl">
                <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
              </span>
              <span className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image src="/images/pixel-sparkle.svg" width={12} height={12} alt="sparkle" />
              </span>
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 transition-colors relative group">
              <Image src="/instagram.svg" width={24} height={24} alt="Instagram" />
              <span className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image src="/images/pixel-sparkle.svg" width={12} height={12} alt="sparkle" />
              </span>
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 transition-colors relative group">
              <Image src="/gmail.svg" width={24} height={24} alt="Gmail" />
              <span className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image src="/images/pixel-sparkle.svg" width={12} height={12} alt="sparkle" />
              </span>
            </a>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-blue-800 mb-1">
              Website Developed by
            </p>
            <a href="https://www.linkedin.com/in/srevarsha" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors font-medium">
              Sre varsha N
            </a>
          </div>
          
          <p className="text-sm text-purple-700">
            © 2025 WTM REC. All rights reserved.
          </p>
        </div>
      </footer>
      </section>
    </main>
  );
}
