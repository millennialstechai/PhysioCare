import { Activity, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import data from '../data/portfolioData.json';

export default function Footer() {
  const { physiotherapist, contact } = data;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Activity size={24} />
              </div>
              <span className="text-xl font-display font-bold">
                Physio<span className="text-brand-500">Care</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional physiotherapy services dedicated to restoring your mobility, strength, and overall wellness through evidence-based care.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-brand-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-sm">
              {data.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-brand-500 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <div>© {currentYear} PhysioCare. All Rights Reserved.</div>
          <div>{physiotherapist.qualification} | {physiotherapist.location}</div>
        </div>
      </div>
    </footer>
  );
}
