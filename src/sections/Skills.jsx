import { motion } from 'framer-motion';
import { SKILLS } from '../constants/data';
import { Code2, Layout, Database, Settings, ShieldCheck, Cpu } from 'lucide-react';

const icons = [Code2, Layout, Database, ShieldCheck, Settings, Cpu];

export const Skills = () => {
  return (
    <section id="skills" className="section-container border-t border-[var(--color-border-rgba)]">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag-pill mb-4"
        >
          My Tech Stack
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Modern <span className="text-indigo-cyan">Technologies.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((cluster, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl glass-card bg-card border-[var(--color-border-rgba)] hover:border-indigo-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-primary/10 flex items-center justify-center text-indigo-primary group-hover:bg-indigo-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-0">{cluster.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-background border border-[var(--color-border-rgba)] text-sm font-medium hover:border-indigo-primary/40 hover:text-indigo-primary transition-all cursor-default shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
