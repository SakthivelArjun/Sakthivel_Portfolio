import { motion } from "framer-motion";
import { EXPERIENCE, ACHIEVEMENTS } from "../constants/data";
import { CheckCircle2, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="section-container border-t border-[var(--color-border-rgba)]"
    >
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
        {EXPERIENCE.map((exp, index) => {
          // Splitting the duration text cleanly
          const durationYear = exp.duration.split("(")[0].trim();
          const durationRole = exp.duration.includes("(")
            ? `(${exp.duration.split("(")[1]}`
            : "";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 lg:gap-16"
            >
              {/* Left: Date/Company Info */}
              <div className="md:w-[35%] lg:w-[30%]">
                <div className="flex items-center gap-2 text-indigo-primary font-bold mb-2">
                  <Calendar size={16} />
                  <span>{durationYear}</span>
                </div>
                {durationRole && (
                  <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-6">
                    {durationRole}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="text-text-secondary font-medium">{exp.company}</p>
              </div>

              {/* Right: Content Card */}
              <div className="md:w-[65%] lg:w-[70%]">
                <div className="p-8 md:p-10 rounded-[2rem] glass-card bg-card border-[var(--color-border-rgba)] hover:border-indigo-primary/30 transition-all shadow-sm group">
                  <div className="space-y-5 mb-10">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-accent group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all"></div>
                        <p className="text-base text-text-secondary leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* What I Gained */}
                  <div className="pt-8 border-t border-[var(--color-border-rgba)]">
                    <h4 className="text-[11px] font-bold text-foreground uppercase tracking-widest mb-5">
                      Core Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {ACHIEVEMENTS.map((ach, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-[var(--color-border-rgba)] text-sm font-medium text-text-secondary transition-colors cursor-default hover:text-indigo-primary hover:border-indigo-primary/40 shadow-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-indigo-primary/70"
                          />
                          {ach}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
