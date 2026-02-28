import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-700 to-teal-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-teal-900">Demo Dental</h1>
              <p className="text-xs text-teal-600">Excellence in Dentistry</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  currentPage === link.href.slice(1)
                    ? 'text-teal-700'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 transform origin-left transition-transform duration-300 ${
                    currentPage === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
            <a
              href="tel:+91799031439"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-teal-700" /> : <Menu className="w-6 h-6 text-teal-700" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-teal-100 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === link.href.slice(1)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+91799021439"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
