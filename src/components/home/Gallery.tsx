import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const galleryImages = [
  { title: 'Modern Reception Area', color: 'from-teal-400 to-teal-500' },
  { title: 'Advanced Treatment Room', color: 'from-blue-400 to-blue-500' },
  { title: 'Sterilization Station', color: 'from-purple-400 to-purple-500' },
  { title: 'Patient Consultation Area', color: 'from-pink-400 to-rose-500' },
  { title: 'Latest Dental Equipment', color: 'from-orange-400 to-orange-500' },
  { title: 'Comfortable Waiting Area', color: 'from-green-400 to-green-500' },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern facilities designed for your comfort and care
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className={`aspect-video bg-gradient-to-br ${galleryImages[currentIndex].color} relative transition-all duration-500`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-3xl md:text-4xl font-bold mb-4">
                    {galleryImages[currentIndex].title}
                  </p>
                  <p className="text-white/90 text-lg">State-of-the-art facility</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? 'w-8 h-3 bg-teal-600' : 'w-3 h-3 bg-gray-300 hover:bg-teal-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
