import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import data from '../data/portfolioData.json';

export default function Testimonials() {
  const { testimonials } = data;

  return (
    <section id="testimonials" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Testimonials</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 leading-tight">
            What Our <span className="text-brand-600">Patients Say</span>
          </h3>
          <p className="text-slate-600">
            Trust is the foundation of our care. Here are some experiences from patients who have successfully completed their recovery journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-brand-100/50 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 text-brand-50 group-hover:text-brand-100 transition-colors">
                <Quote size={80} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array( testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#0ea5e9" className="text-brand-500" />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
