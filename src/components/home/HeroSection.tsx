import { Calendar, Award, Shield, Sparkles } from 'lucide-react';
import dentalImg from '../../assests/dental.jpg';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Trusted Dental Care Since 2015</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                Advanced Dental Care
              </span>
              <br />
              <span className="text-gray-900">With Gentle Touch</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience painless, modern dental treatments in a comfortable environment. Your smile is our priority.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white text-teal-700 rounded-full font-semibold border-2 border-teal-200 hover:border-teal-400 hover:bg-teal-50 hover:scale-105 transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Shield, label: '100% Safe', sub: 'Sterilized' },
                { icon: Award, label: 'Expert Care', sub: '10+ Years' },
                { icon: Sparkles, label: 'Painless', sub: 'Treatment' },
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gray-200 relative">
              <img
  src={dentalImg}
  alt="Beautiful smile"
  className="w-full h-full object-cover"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-gray-900">5000+ Happy Patients</p>
                  <p className="text-sm text-gray-500">Trusted dental care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
