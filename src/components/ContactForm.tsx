import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import MagneticButton from './MagneticButton';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    console.log('Attempting to send email...');
    
    // Create a promise that rejects after 10 seconds
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), 10000)
    );

      try {
      const serviceId = 'service_gzmsp2a';
      const templateId = 'template_z6wmqut';
      const publicKey = 'mn1OhigGcJTrBK0f9';

      console.log('Attempting to send email with:', { serviceId, templateId, publicKey });

      await Promise.race([
        emailjs.send(serviceId, templateId, {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }, publicKey),
        timeoutPromise
      ]);
      
      console.log('Email sent successfully!');
      setStatus('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('idle');
      alert(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your console for details.`);
    }
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setForm({ name: '', email: '', message: '' });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 relative z-10 mt-12">
        <h3 className="font-serif text-3xl text-white mb-4">Message Sent</h3>
        <p className="text-white/60">I'll get back to you as soon as possible.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto text-left relative z-10 mt-12">
      <div>
        <input 
          required 
          type="text" 
          placeholder="Your Name" 
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors" 
        />
      </div>
      <div>
        <input 
          required 
          type="email" 
          placeholder="Your Email" 
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors" 
        />
      </div>
      <div>
        <textarea 
          required 
          placeholder="Tell me about your project..." 
          rows={4} 
          value={form.message}
          onChange={(e) => setForm({...form, message: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors resize-none"
        ></textarea>
      </div>
      <MagneticButton>
        <button type="submit" disabled={status === 'submitting'} className="w-full glass-button rounded-xl px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-sm uppercase tracking-widest font-medium flex justify-center items-center">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </MagneticButton>
    </form>
  );
}
