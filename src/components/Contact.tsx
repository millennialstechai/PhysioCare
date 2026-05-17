import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import data from '../data/portfolioData.json';

export default function Contact() {
  const { contact } = data;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Get in Touch</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 leading-tight">
                Schedule Your <span className="text-brand-600">Free Consultation</span>
              </h3>
              <p className="text-lg text-slate-600">
                Take the first step towards a pain-free life. Fill out the form or reach out to us directly through any of our contact channels.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Our Clinic', value: contact.address },
                { icon: Phone, title: 'Call Us', value: contact.phone },
                { icon: Mail, title: 'Email Us', value: contact.email },
                { icon: Clock, title: 'Working Hours', value: contact.hours },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-brand-50 text-brand-600 p-4 rounded-2xl h-fit">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 mt-16 lg:mt-0"
          >
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={48} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-slate-900">Appointment Requested!</h4>
                    <p className="text-slate-600">We will get back to you within 24 working hours.</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Rahul Gupta"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Message / Condition</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="Briefly describe your condition or recovery goals..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-5 text-lg shadow-xl shadow-brand-600/20">
                    Book Appointment <Send size={20} />
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
              
              {/* Decorative circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-50 rounded-full -z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
