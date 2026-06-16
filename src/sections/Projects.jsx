import { motion } from 'framer-motion';
import { PROJECTS } from '../constants/data';
import { ExternalLink, Github, Zap, Target } from 'lucide-react';

const FeaturedProject = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group relative grid lg:grid-cols-12 gap-8 mb-24 items-start"
  >
    {/* Visual Content (6 columns) */}
    <div className={`lg:col-span-6 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-card border-none bg-indigo-primary/5 transition-all duration-500 group-hover:scale-[1.01]">
         {project.image ? (
            <img 
               src={project.image} 
               alt={project.name} 
               className="w-full h-full object-cover object-top opacity-[0.85] group-hover:opacity-100 transition-opacity duration-500" 
            />
         ) : (
            <div className="absolute inset-6 flex flex-col gap-3">
               <div className="h-1.5 w-1/4 bg-indigo-primary/30 rounded-full"></div>
               <div className="flex-grow rounded-xl bg-indigo-primary/5 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 border border-indigo-primary/20 rounded-lg p-3 flex flex-col gap-3">
                     <div className="flex gap-3">
                        <div className="w-1/3 h-20 bg-indigo-primary/10 rounded-md"></div>
                        <div className="w-2/3 h-20 bg-indigo-primary/10 rounded-md"></div>
                     </div>
                     <div className="h-12 w-full bg-cyan-accent/10 rounded-md"></div>
                  </div>
               </div>
            </div>
         )}
      </div>
    </div>

    {/* Text Content (6 columns) */}
    <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="tag-pill">Featured Project</span>
        <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">{project.techStack[0]}</span>
      </div>

      <h3 className="mb-6 group-hover:text-indigo-primary transition-colors">
        {project.name}
      </h3>

      <div className="space-y-6 mb-8">
        <div>
           <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-primary mb-2">
             <Target size={14} /> The Problem
           </h4>
           <p className="text-base text-text-secondary leading-relaxed">{project.problem}</p>
        </div>
        <div>
           <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-accent mb-2">
             <Zap size={14} /> The Solution
           </h4>
           <p className="text-base text-text-secondary leading-relaxed">{project.solution}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-indigo">
          Live Demo <ExternalLink size={16} />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
           Code <Github size={16} />
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectGridItem = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="p-8 rounded-2xl glass-card border-[var(--color-border-rgba)] bg-card hover:border-indigo-primary/30 transition-all group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="w-10 h-10 rounded-lg bg-indigo-primary/10 flex items-center justify-center text-indigo-primary group-hover:bg-indigo-primary group-hover:text-white transition-colors duration-300">
        <Target size={20} />
      </div>
      <div className="flex gap-3">
        <a href={project.github} className="text-text-secondary hover:text-indigo-primary"><Github size={18} /></a>
        <a href={project.liveLink} className="text-text-secondary hover:text-indigo-primary"><ExternalLink size={18} /></a>
      </div>
    </div>
    
    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-primary transition-colors">{project.name}</h3>
    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-rgba)]">
      {project.techStack.map(tech => (
        <span key={tech} className="text-[10px] font-bold uppercase text-indigo-primary/70 tracking-widest">
           {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Projects = () => {
  const featured = PROJECTS.filter(p => p.isFeatured);
  const others = PROJECTS.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="section-container border-t border-[var(--color-border-rgba)]">
      <div className="mb-20">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="tag-pill mb-4"
        >
          My Work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects that solve <span className="text-indigo-cyan">real problems.</span>
        </motion.h2>
      </div>

      <div className="space-y-24">
        {featured.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-24">
           <h3 className="text-xl font-bold mb-10 flex items-center gap-4">
              More Projects <span className="h-px flex-grow bg-[var(--color-border-rgba)]"></span>
           </h3>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, index) => (
                <ProjectGridItem key={project.id} project={project} index={index} />
              ))}
           </div>
        </div>
      )}
    </section>
  );
};
