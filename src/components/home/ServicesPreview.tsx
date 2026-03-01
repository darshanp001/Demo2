import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Import PNG icons
import rootCanalIcon from '../../assests/icons/root-canal.png';
import dentalImplantIcon from '../../assests/icons/dental-implant.png';
import bracesIcon from '../../assests/icons/braces.png';

type AccentColor = 'teal' | 'blue' | 'violet';

interface Service {
  title: string;
  description: string;
  accent: AccentColor;
  tag: string;
  iconImage: string;
}

const services: Service[] = [
  {
    title: 'Root Canal Treatment',
    description: 'Save your natural teeth with gentle, painless root canal therapy using the latest rotary endodontics.',
    accent: 'teal',
    iconImage: rootCanalIcon,
    tag: 'Pain-Free',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, titanium-rooted replacements for missing teeth that look, feel, and function naturally.',
    accent: 'blue',
    iconImage: dentalImplantIcon,
    tag: 'Lifetime Solution',
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your smile with modern metal braces or discreet clear aligner systems.',
    accent: 'violet',
    iconImage: bracesIcon,
    tag: 'Enhance Appearance',
  },
];

const accentMap: Record<AccentColor, { icon: string; badge: string; line: string; glow: string }> = {
  teal:    { icon: 'text-teal-600',   badge: 'bg-teal-50 text-teal-700',   line: 'bg-teal-500',   glow: 'group-hover:shadow-teal-100' },
  blue:    { icon: 'text-blue-600',   badge: 'bg-blue-50 text-blue-700',   line: 'bg-blue-500',   glow: 'group-hover:shadow-blue-100' },
  violet:  { icon: 'text-violet-600', badge: 'bg-violet-50 text-violet-700', line: 'bg-violet-500', glow: 'group-hover:shadow-violet-100' },
};

const ServicesPreview = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <svg className="absolute top-0 right-0 opacity-[0.03] w-96 h-96" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#0d9488" strokeWidth="1"/>
          <circle cx="200" cy="200" r="140" stroke="#0d9488" strokeWidth="1"/>
          <circle cx="200" cy="200" r="100" stroke="#0d9488" strokeWidth="1"/>
          <circle cx="200" cy="200" r="60" stroke="#0d9488" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive Care for{' '}
              <span className="relative inline-block">
                Every Smile
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full" />
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-xl mx-auto">
              From routine check-ups to full smile transformations — we have you covered.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const colors = accentMap[service.accent];

            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-2xl ${colors.glow} transition-all duration-500 cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] ${colors.line} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Icon + Badge row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`${colors.icon} transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}>
                    <img 
                      src={service.iconImage} 
                      alt={`${service.title} icon`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${colors.badge}`}>
                    {service.tag}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#services"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.icon} group-hover:gap-2.5 transition-all duration-300`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Subtle bottom-right decoration */}
                <div className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full ${colors.line} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100 rounded-2xl px-8 py-7 bg-gradient-to-r from-teal-50/60 to-white transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-1">Looking for something specific?</p>
            <p className="text-gray-600 text-sm">Browse our full list of treatments and find the right solution for you.</p>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-teal-200 hover:shadow-teal-300 hover:scale-105 transition-all duration-300"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
