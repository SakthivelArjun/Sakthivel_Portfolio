import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';
import { supabase } from '../utils/supabase';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);
      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-container border-t border-[var(--color-border-rgba)]">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Contact Info */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="tag-pill mb-6">Contact</div>
            <h2>
              Let&apos;s <span className="text-indigo-cyan">work together.</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-md">
              Do you have a project or a job opportunity? I am happy to chat.
            </p>
            
            <div className="space-y-6 pt-4">
               <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-lg font-bold hover:text-indigo-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-primary/10 flex items-center justify-center text-indigo-primary">
                    <Mail size={20} />
                  </div>
                  {PERSONAL_INFO.email}
               </a>
               <div className="flex gap-4">
                  <a href={PERSONAL_INFO.github} className="btn-outline !py-2 !px-4 text-xs">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={PERSONAL_INFO.linkedin} className="btn-outline !py-2 !px-4 text-xs">
                    <Linkedin size={16} /> LinkedIn
                  </a>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Simple Form */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card p-10 rounded-2xl bg-card border-[var(--color-border-rgba)]">
             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                   <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-background border border-[var(--color-border-rgba)] rounded-lg px-4 py-3 outline-none focus:border-indigo-primary transition-all font-medium"
                        placeholder="Your Name"
                      />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-background border border-[var(--color-border-rgba)] rounded-lg px-4 py-3 outline-none focus:border-indigo-primary transition-all font-medium"
                        placeholder="Your Email"
                      />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-background border border-[var(--color-border-rgba)] rounded-lg px-4 py-3 outline-none focus:border-indigo-primary transition-all font-medium h-32 resize-none"
                        placeholder="Your Message"
                      ></textarea>
                   </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-indigo py-4"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
             </form>

             <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 bottom-0 p-6 bg-indigo-primary text-white text-center font-bold rounded-b-2xl"
                  >
                    <div className="flex items-center justify-center gap-2">
                       <CheckCircle size={18} /> Message sent successfully!
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 bottom-0 p-6 bg-rose-500 text-white text-center font-bold rounded-b-2xl"
                  >
                    <div className="flex items-center justify-center gap-2">
                       <AlertCircle size={18} /> Error sending message. Please try again.
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
