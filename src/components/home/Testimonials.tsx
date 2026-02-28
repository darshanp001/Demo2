import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'Root Canal Treatment',
    rating: 5,
    text: 'Dr. Demo made my root canal completely painless. The clinic is very clean and the staff is so caring. Highly recommended!',
    location: 'Vastral, Ahmedabad',
  },
  {
    name: 'Rajesh Patel',
    treatment: 'Dental Implants',
    rating: 5,
    text: 'Got my dental implants done here and the results are amazing. Very professional service and the latest technology. Worth every penny!',
    location: 'Nikol, Ahmedabad',
  },
  {
    name: 'Meera Shah',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'Excellent teeth whitening service! My smile looks so bright now. Dr. Patel explained everything clearly and made me feel comfortable.',
    location: 'Vastral, Ahmedabad',
  },
  {
    name: 'Amit Desai',
    treatment: 'Braces',
    rating: 5,
    text: 'My daughter got braces here and we are very satisfied with the treatment. The doctor is very patient with kids and explains everything well.',
    location: 'Odhav, Ahmedabad',
  },
  {
    name: 'Sneha Mehta',
    treatment: 'Smile Design',
    rating: 5,
    text: 'Complete smile makeover transformed my confidence! Dr. Demo is an artist. The clinic uses the best equipment and maintains top hygiene.',
    location: 'Vastral, Ahmedabad',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their smiles
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full -mr-16 -mt-16" />

            <div className="relative">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-teal-600 font-medium">{testimonials[currentIndex].treatment}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-teal-50 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex ? 'w-8 h-3 bg-teal-600' : 'w-3 h-3 bg-gray-300 hover:bg-teal-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-teal-50 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
