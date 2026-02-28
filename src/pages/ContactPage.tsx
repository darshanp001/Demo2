import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', phone: '', treatment: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule your appointment today and take the first step towards a healthier smile
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div ref={ref} className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-teal-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ahmedabad, Gujarat 382418
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+91799231439"
                        className="text-teal-600 hover:text-teal-700 font-medium text-lg"
                      >
                        +91 079903439
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:info@demodental.com"
                        className="text-teal-600 hover:text-teal-700"
                      >
                        info@demodental.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Cases</h3>
                <p className="text-teal-100 mb-6">
                  We handle dental emergencies 24/7. Call us immediately for urgent care.
                </p>
                <a
                  href="tel:+9179903439"
                  className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Call</span>
                </a>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-teal-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Appointment</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                    <p className="text-green-700 font-medium">
                      Thank you! We'll contact you shortly to confirm your appointment.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="treatment" className="block text-sm font-semibold text-gray-700 mb-2">
                      Treatment Required *
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      required
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                    >
                      <option value="">Select a treatment</option>
                      <option value="root-canal">Root Canal Treatment</option>
                      <option value="implants">Dental Implants</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="braces">Braces & Aligners</option>
                      <option value="smile-design">Smile Design</option>
                      <option value="extraction">Tooth Extraction</option>
                      <option value="kids">Kids Dentistry</option>
                      <option value="gum">Gum Treatment</option>
                      <option value="other">Other / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your dental concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-700 to-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-teal-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4890922!2d72.6398!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzgnMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Demo Dental Hospital Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
