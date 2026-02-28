import { Award, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const DoctorIntro = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] bg-gradient-to-br from-teal-400 to-teal-600 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center">
                    <p className="text-white text-3xl font-bold text-center">
                      Dr. Demo<br />Patel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">10+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              <span>Your Trusted Dental Expert</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Dr. Demo Patel</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience in providing exceptional dental care, Dr. Demo Patel combines expertise with compassion to deliver outstanding results.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  title: 'Expert Qualifications',
                  desc: 'BDS, MDS in Conservative Dentistry & Endodontics',
                },
                {
                  icon: Award,
                  title: 'Specialized Training',
                  desc: 'Advanced certifications in implantology and cosmetic dentistry',
                },
                {
                  icon: Heart,
                  title: 'Patient-Centered Approach',
                  desc: 'Gentle care with focus on comfort and satisfaction',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;
