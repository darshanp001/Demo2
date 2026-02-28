import { Calendar, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Your Smile Deserves<br />Expert Care
        </h2>
        <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto">
          Book your appointment today and take the first step towards a healthier, brighter smile
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white text-teal-700 rounded-full font-semibold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </a>
          <a
            href="tel:+9179902149"
            className="px-8 py-4 bg-teal-800/50 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-teal-800 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call: +91 079903439</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: '5000+', label: 'Happy Patients' },
            { number: '10+', label: 'Years Experience' },
            { number: '15000+', label: 'Treatments Done' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </p>
              <p className="text-teal-200 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
