import { motion } from "framer-motion";
import { ABOUT_ME } from "../constants/data";
import { Target, Shield, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="section-container border-t border-[var(--color-border-rgba)]"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Heading and Intro */}
        <div className="lg:w-[40%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="tag-pill mb-6">About Me</div>
            <h2>
              I build websites that are{" "}
              <span className="text-indigo-cyan">fast and easy to use.</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              {ABOUT_ME.bio}
            </p>
          </motion.div>
        </div>

        {/* Right: Detailed Points and Stats */}
        <div className="lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {/* Strategy Cards */}
            <div className="p-8 rounded-2xl glass-card border-none bg-indigo-primary/5">
              <Shield size={28} className="text-indigo-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Good Code</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I write clear and clean code that is easy to manage and grow as
                your project needs.
              </p>
            </div>
            <div className="p-8 rounded-2xl glass-card border-none bg-cyan-accent/5">
              <Rocket size={28} className="text-cyan-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">High Speed</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I focus on making sure websites load fast and work smoothly for
                everyone.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="sm:col-span-2 grid grid-cols-3 gap-4 pt-4">
              {ABOUT_ME.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col border-l-2 border-indigo-primary/20 pl-4 py-2"
                >
                  <span className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
