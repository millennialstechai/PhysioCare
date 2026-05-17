/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';

// Lazy load sections for better performance
const About = lazy(() => import('./components/About'));
const Conditions = lazy(() => import('./components/Conditions'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingContact = lazy(() => import('./components/FloatingContact'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen selection:bg-brand-500/10 selection:text-brand-600">
      <Navbar />
      
      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-40" />}>
          <About />
          <Conditions />
          <Services />
          
          {/* Transition Section */}
          <section className="py-20 bg-brand-600 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-tight">
                Ready to take the first step towards <span className="opacity-80">better health?</span>
              </h2>
              <p className="text-brand-100 text-lg max-w-2xl mx-auto">
                Join 200+ satisfied patients who have reclaimed their mobility and health through our expert physiotherapy care.
              </p>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-50 hover:scale-105 transition-all shadow-2xl shadow-black/20"
                >
                  Book Your Appointment
                </a>
              </div>
            </div>
          </section>

          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingContact />
      </Suspense>
    </div>
  );
}

