import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants/data';
import { ArrowRight, Download, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center relative overflow-hidden pt-18 pb-16">
      {/* Background Glow */}
      <div className="absolute top-[-5%] right-[5%] w-[45%] h-[45%] rounded-full bg-indigo-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:w-[60%]" style={{padding: "40px"}}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-indigo-primary/40"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-primary">
                  {PERSONAL_INFO.title}
                </span>
              </div>

              <h1 className="mb-6">
                {PERSONAL_INFO.tagline.split(' ').slice(0, 2).join(' ')} <br/>
                <span className="text-indigo-cyan">{PERSONAL_INFO.tagline.split(' ').slice(2).join(' ')}</span>
              </h1>
              
              <div className="max-w-lg mb-10">
                <p className="text-lg text-text-secondary leading-relaxed">
                  {PERSONAL_INFO.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <motion.a 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects" 
                  className="btn-indigo"
                >
                  View My Work <ArrowRight size={18} />
                </motion.a>
                <div className="flex items-center gap-4">
                  <a href={PERSONAL_INFO.resume} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-indigo-primary transition-colors flex items-center gap-2">
                    <Download size={18} /> Resume
                  </a>
                  <span className="h-4 w-px bg-border-rgba"></span>
                  <a href="#contact" className="text-sm font-semibold hover:text-indigo-primary transition-colors flex items-center gap-2">
                    <Mail size={18} /> Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Illustration Area */}
          <div className="lg:w-[40%] w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-1 rounded-3xl bg-gradient-to-br from-indigo-primary/5 to-cyan-accent/5">
                <div className="aspect-square rounded-[1.4rem] bg-card overflow-hidden relative border border-white/5 shadow-xl">
                   {/* Profile Image */}
                    <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                      <img 
                        src={PERSONAL_INFO.profileImage} 
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
