import { motion } from 'framer-motion';
import { EXPERIENCE, ACHIEVEMENTS } from '../constants/data';
import { CheckCircle2, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-container border-t border-[var(--color-border-rgba)]">
      <div className="mb-16">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="tag-pill mb-4"
        >
          My Career
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work <span className="text-indigo-cyan">Experience.</span>
        </motion.h2>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 lg:gap-16"
          >
            {/* Left: Date/Company Info */}
            <div className="md:w-[30%]">
              <div className="flex items-center gap-2 text-indigo-primary font-bold mb-2">
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
              <p className="text-text-secondary font-medium">{exp.company}</p>
            </div>

            {/* Right: Content Card */}
            <div className="md:w-[70%]">
               <div className="p-8 rounded-2xl glass-card bg-card border-[var(--color-border-rgba)] hover:border-indigo-primary/20 transition-all">
                  <div className="space-y-4 mb-8">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={18} className="text-indigo-primary mt-1 flex-shrink-0" />
                        <p className="text-base text-text-secondary leading-relaxed">{resp}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills/Achievements in this role */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--color-border-rgba)]">
                    {ACHIEVEMENTS.map((ach, i) => (
                       <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-indigo-primary/5 rounded-lg text-indigo-primary/70">
                         {ach}
                       </span>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
