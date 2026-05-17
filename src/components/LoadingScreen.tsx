import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-center">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-brand-600 p-4 rounded-3xl text-white shadow-2xl shadow-brand-500/20"
        >
          <Activity size={48} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-2xl font-display font-bold text-slate-900">
            Physio<span className="text-brand-600">Care</span>
          </span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-[0.3em] mt-1">
            Loading Excellence
          </span>
        </motion.div>
      </div>
    </div>
  );
}
