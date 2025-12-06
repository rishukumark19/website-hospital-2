
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { navLinks, locations } from '../data/mockData';
import { 
  Menu, 
  X, 
  Home,
  FileText,
  Phone,
  BriefcaseMedical,
  Activity
} from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: View) => {
    setIsMobileMenuOpen(false);
    onNavigate(view);
    if (view === View.CONTACT) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', view: View.HOME, icon: Home },
    { name: 'Book Home Visit', view: View.HOME_COLLECTION, icon: BriefcaseMedical },
    { name: 'Download Reports', view: View.REPORT_DOWNLOAD, icon: FileText },
    { name: 'Contact Us', view: View.CONTACT, icon: Phone },
  ];

  return (
    <>
      {/* Main Navbar - Solid Primary Background like Reference */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary shadow-lg py-2' 
            : 'bg-primary py-3'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onNavigate(View.HOME)}
            >
              <div className="bg-white p-2 rounded-xl shadow-md">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col text-white">
                <span className="text-xl md:text-2xl font-heading font-bold leading-none tracking-tight">Avishkar</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 opacity-90">Diagnostic Centre</span>
              </div>
            </div>

            {/* Desktop Nav Links - Icon + Text Style */}
            <div className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.view)}
                  className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    currentView === item.view
                      ? 'text-white opacity-100 scale-105' 
                      : 'text-white/80 hover:text-white hover:scale-105'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden group p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
               {isMobileMenuOpen ? (
                 <X className="h-6 w-6" />
               ) : (
                 <Menu className="h-6 w-6" strokeWidth={2.5} />
               )}
            </button>
          </div>
        </div>

        {/* Minimal Mobile Dropdown */}
        <div 
            className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transform transition-all duration-300 ease-in-out origin-top xl:hidden ${
                isMobileMenuOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-4 invisible pointer-events-none'
            }`}
        >
            <div className="flex flex-col py-2">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleLinkClick(item.view)}
                        className="flex items-center gap-3 w-full py-4 px-6 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                    >
                        <item.icon className="h-5 w-5 text-secondary" />
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
