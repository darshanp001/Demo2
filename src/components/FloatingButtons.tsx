import { Phone, MessageCircle, Calendar } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      <a
        href="https://wa.me/9179031439"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 z-40 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp Us
        </span>
      </a>

      <a
        href="tel:+91799021439"
        className="fixed bottom-24 right-6 w-14 h-14 bg-teal-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-teal-500/50 transition-all duration-300 z-40 group md:hidden"
      >
        <Phone className="w-6 h-6" />
      </a>

      <a
        href="#contact"
        className="fixed bottom-6 left-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 hover:shadow-teal-500/50 transition-all duration-300 z-40"
      >
        <Calendar className="w-5 h-5" />
        <span className="font-medium">Book Appointment</span>
      </a>
    </>
  );
};

export default FloatingButtons;
