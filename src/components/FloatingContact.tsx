import { motion } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "919876543210";
  const message = "Hi Dr. Aryan, I'd like to book a physiotherapy consultation.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-white text-slate-900 rounded-full shadow-2xl flex items-center justify-center border border-slate-100 hover:bg-slate-50 transition-all"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20bd5c] transition-all"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Live Chat
        </span>
      </motion.a>
    </div>
  );
}
