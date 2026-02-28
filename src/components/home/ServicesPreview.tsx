import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    title: 'Root Canal Treatment',
    description: 'Save your natural teeth with painless root canal therapy',
    gradient: 'from-teal-500 to-teal-600',
    image: '🦷',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with natural look',
    gradient: 'from-blue-500 to-blue-600',
    image: '💎',
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with modern orthodontic solutions',
    gradient: 'from-purple-500 to-purple-600',
    image: '🎯',
  },
  {
    title: 'Teeth Whitening',
    description: 'Achieve a brighter, whiter smile in just one visit',
    gradient: 'from-pink-500 to-rose-500',
    image: '✨',
  },
  {
    title: 'Smile Design',
    description: 'Complete makeover for a perfect, confident smile',
    gradient: 'from-orange-500 to-orange-600',
    image: '😊',
  },
  {
    title: 'Kids Dentistry',
    description: 'Gentle dental care for your little ones',
    gradient: 'from-green-500 to-green-600',
    image: '👶',
  },
];

const ServicesPreview = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental solutions for all your oral health needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {service.image}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
