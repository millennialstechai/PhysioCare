import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import data from '../data/portfolioData.json';

export default function Services() {
  const { services } = data;

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Specialized Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Comprehensive Care for Your <span className="text-brand-600">Recovery & Wellness</span>
          </h3>
          <p className="text-lg text-slate-600">
            We provide a wide range of physiotherapy treatments tailored to your specific needs, helping you return to your active lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Activity;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="medical-card p-10 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50/50 rounded-bl-[100px] -z-0 transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bg-brand-600/5" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200">
                    <Icon size={28} />
                  </div>
                  <div className="text-[10px] font-bold text-brand-600 uppercase tracking-[0.2em] mb-2">
                    {service.subtitle}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wide uppercase hover:gap-3 transition-all"
                  >
                    Discuss Case <LucideIcons.ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
