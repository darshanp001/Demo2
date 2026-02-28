import { Heart, Microscope, Shield, Users, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
  {
    icon: Heart,
    title: 'Painless Treatment',
    description: 'Advanced techniques ensuring comfortable, pain-free procedures',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Microscope,
    title: 'Latest Equipment',
    description: 'State-of-the-art technology for precise diagnosis and treatment',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Sterilized Clinic',
    description: 'Highest standards of hygiene and infection control',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Experienced Dentist',
    description: 'Expert care from qualified and certified professionals',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: DollarSign,
    title: 'Affordable Care',
    description: 'Quality dental treatment at reasonable prices',
    color: 'from-green-500 to-green-600',
  },
];

const FeaturesSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Demo Dental</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining expertise, technology, and care for your perfect smile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
