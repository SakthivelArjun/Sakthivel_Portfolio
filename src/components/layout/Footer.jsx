import { PERSONAL_INFO } from '../../constants/data';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-[var(--color-border-rgba)] bg-background">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-primary flex items-center justify-center text-white font-bold text-lg">
              {PERSONAL_INFO.name.charAt(0)}
            </div>
            <span className="text-xl font-bold tracking-tight">{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-sm text-text-secondary">
            Building clean and fast web applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-indigo-primary transition-colors">
            <Github size={20} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-indigo-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-text-secondary hover:text-indigo-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Action & Copyright */}
        <div className="flex flex-col md:items-end gap-2 text-right">
          <button
             onClick={scrollToTop}
             className="flex items-center gap-2 text-sm font-bold text-indigo-primary hover:text-indigo-700 transition-colors uppercase tracking-[0.2em]"
          >
            Back to top <ArrowUp size={16} />
          </button>
          <p className="text-xs text-text-secondary">© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
