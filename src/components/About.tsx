import { motion } from 'motion/react';
import data from '../data/portfolioData.json';
import { CheckCircle2, Activity } from 'lucide-react';

export default function About() {
  const { physiotherapist } = data;

  return (
    <section id="about" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                alt="Clinic Treatment" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-600/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mt-12 lg:mt-0 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm">About Me</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 leading-tight">
                Empowering Your Journey to <span className="text-brand-600">Pain-Free Living</span>
              </h3>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              {physiotherapist.about}
            </p>

            <div className="bg-brand-50/50 p-8 rounded-[32px] border border-brand-100">
              <h4 className="text-brand-700 font-display font-bold mb-3 flex items-center gap-2">
                <Activity size={18} /> My Treatment Philosophy
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {physiotherapist.philosophy}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {physiotherapist.stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-3xl font-bold text-brand-600">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4">
              {['Personalized Treatment Plans', 'Modern Therapy Techniques', 'Compassionate Patient Care'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="text-brand-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
