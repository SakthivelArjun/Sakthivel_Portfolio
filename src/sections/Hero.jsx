import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants/data";
import { Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center relative overflow-hidden pt-24 pb-20"
    >
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-indigo-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-accent/5 blur-[100px] pointer-events-none"></div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0 pointer-events-none mix-blend-overlay"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Main Content */}
          <div className="lg:w-[55%] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Tagline */}
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight mb-8">
                {PERSONAL_INFO.tagline.split(" ").slice(0, 2).join(" ")}{" "}
                <br className="hidden md:block" />
                <span className="bg-clip-text">
                  {PERSONAL_INFO.tagline.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <div className="max-w-xl mb-12">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
                  {PERSONAL_INFO.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <motion.a
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(99,102,241,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="btn-indigo flex items-center gap-2 text-base px-6 py-3.5"
                >
                  View My Work
                </motion.a>
                <div className="flex items-center gap-5 ml-2">
                  <a
                    href={PERSONAL_INFO.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm font-bold text-text-secondary hover:text-indigo-primary transition-colors"
                  >
                    <div className="p-2.5 rounded-full bg-background border border-[var(--color-border-rgba)] group-hover:border-indigo-primary/40 transition-colors">
                      <Download size={18} />
                    </div>
                    Resume
                  </a>
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 text-sm font-bold text-text-secondary hover:text-indigo-primary transition-colors"
                  >
                    <div className="p-2.5 rounded-full bg-background border border-[var(--color-border-rgba)] group-hover:border-indigo-primary/40 transition-colors">
                      <Mail size={18} />
                    </div>
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Illustration Area */}
          <div
            className="lg:w-[45%] w-full relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full max-w-[420px] mx-auto"
            >
              {/* Image Container with stacked card effect */}
              <div className="relative mt-8 lg:mt-0">
                {/* Decorative background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-primary/20 to-cyan-accent/20 rounded-[2.5rem] transform rotate-3 scale-105 border border-[var(--color-border-rgba)]"></div>

                {/* Main Image Card */}
                <div className="glass-card p-2.5 rounded-[2.5rem] bg-card/60 backdrop-blur-2xl border border-[var(--color-border-rgba)] shadow-2xl relative z-10">
                  <div className="aspect-[4/5] rounded-[2rem] bg-indigo-primary/5 overflow-hidden relative border border-[var(--color-border-rgba)] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] group">
                    <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                      <img
                        src={PERSONAL_INFO.profileImage}
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover object-top opacity-95 transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Inner vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none"></div>
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
