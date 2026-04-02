import React, { useState } from 'react';
import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 relative z-10 mt-12">
        <h3 className="font-serif text-3xl text-white mb-4">Message Received</h3>
        <p className="text-white/60">I'll get back to you as soon as possible.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto text-left relative z-10 mt-12">
      <div>
        <input required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors" />
      </div>
      <div>
        <input required type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors" />
      </div>
      <div>
        <textarea required placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors resize-none"></textarea>
      </div>
      <MagneticButton>
        <button type="submit" disabled={status === 'submitting'} className="w-full glass-button rounded-xl px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-sm uppercase tracking-widest font-medium flex justify-center items-center">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </MagneticButton>
    </form>
  );
}
