import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Demo Dental</h3>
                <p className="text-xs text-teal-300">Hospital</p>
              </div>
            </div>
            <p className="text-sm text-teal-200 mb-4">
              Your trusted partner for comprehensive dental care with a gentle touch.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-teal-200 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Root Canal', 'Dental Implants', 'Teeth Whitening', 'Braces', 'Smile Design', 'Kids Dentistry'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-teal-200 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-teal-200">
                   Ahmedabad, Gujarat 382418
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+91799021439" className="text-teal-200 hover:text-teal-400 transition-colors">
                  +91 0799023439
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@demodental.com" className="text-teal-200 hover:text-teal-400 transition-colors">
                  info@demodental.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-teal-200">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-8 text-center">
          <p className="text-sm text-teal-300">
            © {new Date().getFullYear()} Demo Dental Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
