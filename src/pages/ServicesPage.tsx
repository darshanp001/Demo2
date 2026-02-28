import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import rootCanalImg from "../assests/boy-at-the-dentist.jpg.jpeg";
import dentalImplantImg from "../assests/close-up-of-a-dental-tooth-implant-or-healthy-human-teeth-white-enamel-and-dental-implants-surgery-concept-by-ai-generated-free-photo.jpg.jpeg";
import teethWhiteningImg from "../assests/teeth_whitening.jpeg";
import bracesImg from "../assests/braces_vs_aliners.jpeg";
import smileMakeoverImg from "../assests/smile-correction.jpg.jpeg";
import toothExtractionImg from "../assests/Tooth-Extraction-Procedure.jpg.jpeg";
import kidsDentistryImg from "../assests/little-cute-funny-smiling-girl-260nw-2235064531.jpg.jpeg";
import gumTreatmentImg from "../assests/dis-estetigi-ve-gulus-tasariminin-farki-nedir-1.jpg.jpeg";

const services = [
  {
    title: "Root Canal Treatment",
    image: rootCanalImg,
    shortDesc: "Save your natural teeth with advanced endodontic therapy",
    fullDesc:
      "Our painless root canal treatments use the latest rotary endodontics and apex locators to ensure precision and comfort. We preserve your natural tooth structure while eliminating infection and pain.",
  },
  {
    title: "Dental Implants",
    image: dentalImplantImg,
    shortDesc:
      "Permanent solution for missing teeth with natural appearance",
    fullDesc:
      "Replace missing teeth with titanium implants that fuse with your jawbone. Our implants look, feel, and function like natural teeth, offering a long-lasting solution with high success rates.",
  },
  {
    title: "Teeth Whitening",
    image: teethWhiteningImg,
    shortDesc: "Professional whitening for a brighter, confident smile",
    fullDesc:
      "Achieve a dazzling white smile with our professional teeth whitening treatments. Using safe, effective bleaching agents, we can lighten your teeth by several shades in just one visit.",
  },
  {
    title: "Braces & Aligners",
    image: bracesImg,
    shortDesc: "Straighten teeth with modern orthodontic solutions",
    fullDesc:
      "We offer both traditional braces and clear aligners to correct misaligned teeth. Our customized treatment plans ensure optimal results while maintaining your comfort throughout the process.",
  },
  {
    title: "Smile Makeover",
    image: smileMakeoverImg,
    shortDesc: "Complete transformation for your perfect smile",
    fullDesc:
      "A comprehensive approach combining veneers, crowns, whitening, and contouring to give you the smile of your dreams. Customized to your facial features and preferences.",
  },
  {
    title: "Tooth Extraction",
    image: toothExtractionImg,
    shortDesc: "Gentle removal with minimal discomfort",
    fullDesc:
      "When a tooth cannot be saved, we perform extractions with utmost care using advanced techniques and local anesthesia. Surgical extractions for wisdom teeth are also available.",
  },
  {
    title: "Kids Dentistry",
    image: kidsDentistryImg,
    shortDesc: "Specialized dental care for children",
    fullDesc:
      "We create a fun, friendly environment for children to receive dental care. From preventive treatments to cavity fillings, we ensure your child develops good oral health habits early.",
  },
  {
    title: "Gum Treatment",
    image: gumTreatmentImg,
    shortDesc: "Expert care for healthy gums and prevention",
    fullDesc:
      "Comprehensive periodontal care including deep cleaning, scaling, root planing, and gum disease treatment. We help prevent and treat gum problems to maintain your oral health.",
  },
];

const ServicesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dental solutions tailored to your needs,
              delivered with expertise and care.
            </p>
          </div>

          {/* Grid - FIXED with items-start */}
          <div
            ref={ref}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-teal-50 hover:bg-teal-100 transition duration-300"
                  >
                    <span className="text-sm font-semibold text-teal-700">
                      {expandedIndex === index ? "Show Less" : "Learn More"}
                    </span>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      {expandedIndex === index ? (
                        <ChevronUp className="w-4 h-4 text-teal-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-teal-700" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Expand Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="bg-teal-50 rounded-2xl p-5 border-l-4 border-teal-500">
                      <p className="text-gray-700 mb-4">
                        {service.fullDesc}
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Book Now →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Schedule a consultation for a comprehensive evaluation and personalized treatment plan.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;