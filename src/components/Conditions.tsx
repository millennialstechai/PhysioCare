import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import data from '../data/portfolioData.json';

export default function Conditions() {
  const { conditions } = data;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative mesh background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Clinical Expertise</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 leading-tight">
                Specialized Treatment for <span className="text-brand-600">Common & Complex Conditions</span>
              </h3>
              <p className="text-lg text-slate-600">
                I help patients manage pain and recover function from a wide variety of musculoskeletal and neurological issues. My expertise covers everything from acute sports injuries to chronic postural imbalances.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {conditions.map((condition, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-brand-50/30 border border-brand-100/50 hover:bg-brand-100 transition-colors">
                  <div className="text-brand-600 shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{condition}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary w-fit">
                Start Your Recovery <TrendingUp size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mt-16 lg:mt-0 relative"
          >
            <div className="absolute -inset-4 bg-brand-500/5 rounded-[40px] blur-2xl -z-10" />
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { label: 'Manual Therapy', icon: '🤲' },
                { label: 'Posture Correction', icon: '📏' },
                { label: 'Mobilization', icon: '🦿' },
                { label: 'Strength Prep', icon: '🏋️' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-brand-500/5 group hover:-translate-y-2 transition-transform">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <div className="text-sm font-bold text-slate-800 tracking-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
