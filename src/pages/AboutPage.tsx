import { Award, GraduationCap, Heart, Users, Microscope, Shield, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import Gallery from '../components/home/Gallery';
import doctorImg from '../assests/doctor.jpg';

const AboutPage = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Demo Dental</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional dental care with a perfect blend of advanced technology and compassionate service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gray-200 relative">
                  <img
                    src={doctorImg}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/45 via-teal-900/10 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                      Dr. Demo
                      <br />
                      Patel
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-2xl">10+</p>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Dental Care in Ahmedabad
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Demo Patel is a highly qualified and experienced dental professional dedicated to providing world-class dental care to patients of all ages.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: GraduationCap,
                    title: 'Qualifications',
                    desc: 'BDS, MDS in Conservative Dentistry & Endodontics',
                  },
                  {
                    icon: Award,
                    title: 'Specializations',
                    desc: 'Root Canal, Implants, Cosmetic Dentistry, Orthodontics',
                  },
                  {
                    icon: Heart,
                    title: 'Philosophy',
                    desc: 'Patient comfort and satisfaction is our top priority',
                  },
                  {
                    icon: Shield,
                    title: 'Commitment',
                    desc: 'Delivering ethical, evidence-based dental care',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-teal-50 transition-all duration-300 group">
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
            </div>
          </div>
        </div>
      </section>
{/* 
      <section ref={ref1} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference that quality care and modern technology make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: 'Advanced Technology',
                desc: 'Latest dental equipment including digital X-rays, intraoral cameras, and laser dentistry',
              },
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Strict sterilization protocols and international hygiene standards',
              },
              {
                icon: Heart,
                title: 'Gentle Approach',
                desc: 'Painless treatments with sedation options for anxious patients',
              },
              {
                icon: Users,
                title: 'Family Care',
                desc: 'Comprehensive dental services for patients of all ages',
              },
              {
                icon: Award,
                title: 'Experienced Team',
                desc: 'Qualified professionals with years of specialized training',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                desc: 'Thousands of successful treatments and satisfied patients',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-teal-50/50 rounded-3xl p-8 border border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-500 ${
                  isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Gallery/>

      <section ref={ref2} className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedCounter
              end={5000}
              label="Happy Patients"
              isVisible={isVisible2}
              delay={0}
            />
            <AnimatedCounter
              end={10}
              label="Years Experience"
              suffix="+"
              isVisible={isVisible2}
              delay={200}
            />
            <AnimatedCounter
              end={15000}
              label="Treatments Done"
              isVisible={isVisible2}
              delay={400}
            />
            <AnimatedCounter
              end={98}
              label="Success Rate"
              suffix="%"
              isVisible={isVisible2}
              delay={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface AnimatedCounterProps {
  end: number;
  label: string;
  suffix?: string;
  isVisible: boolean;
  delay: number;
}

const AnimatedCounter = ({ end, label, suffix = '+', isVisible, delay }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 50;
      const increment = end / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, delay]);

  return (
    <div className="text-center group">
      <p className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-teal-200 text-lg">{label}</p>
    </div>
  );
};

export default AboutPage;
