import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Award, Users } from 'lucide-react';
import data from '../data/portfolioData.json';

export default function Hero() {
  const { physiotherapist } = data;

  return (
    <section id="home" className="relative min-height-[90vh] pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-50/50 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-40 -left-20 -z-10 w-64 h-64 bg-medical-teal/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold"
            >
              <Award size={16} />
              <span>{physiotherapist.qualification}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1]"
            >
              {physiotherapist.tagline.split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? 'text-brand-600 block' : ''}>{word} </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-lg leading-relaxed"
            >
              Professional Physiotherapy Care in <span className="text-slate-900 font-semibold">{physiotherapist.location.split(',')[0]}</span> focused on your recovery, mobility, and long-term wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary">
                Book Consultation <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn-secondary">
                Our Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-sm font-medium text-slate-700">Certified Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full">
                  <Users size={18} />
                </div>
                <span className="text-sm font-medium text-slate-700">{physiotherapist.experience}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 0.4 }}
            className="lg:w-1/2 mt-16 lg:mt-0 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
                alt="Physiotherapist" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Experience Card Overlay */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-50 p-3 rounded-2xl text-brand-600">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient Recovery Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
