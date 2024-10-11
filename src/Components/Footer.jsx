import React from 'react';
import { ChevronUp } from 'lucide-react';
import logo from '../assets/img/logo.webp'

const Footer = () => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'Contact Us', url: '/contact' },
    { text: 'Corrections Policy', url: '/corrections' },
    { text: 'Terms of Use', url: '/terms' },
    { text: 'Copyright Policies', url: '/copyright' },
    { text: 'Editorial Policy', url: '/editorial' },
    { text: 'Ethics Policy', url: '/ethics' },
    { text: 'Fact Checking Policy', url: '/fact-checking' },
    { text: 'Ownership Policy', url: '/ownership' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img 
            src={logo}
            alt="AnimeMangaToon Logo" 
            className="h-20"
          />
        </div>
        
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          {links.map((link, index) => (
            <React.Fragment key={link.url}>
              <a href={link.url} className="hover:text-orange-500 transition-colors">
                {link.text}
              </a>
              {index < links.length - 1 && (
                <span className="text-gray-500">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        
        <div className="text-center text-orange-500 mb-4">
          © Copyright 2024 AnimeMangaToon | All Rights Reserved
        </div>

        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;