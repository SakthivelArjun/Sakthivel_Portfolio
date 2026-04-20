import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { PERSONAL_INFO } from '../../constants/data';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 backdrop-blur-lg bg-background/80 border-b border-[var(--color-border-rgba)]' : 'py-8 bg-transparent'
      }`}
    >
      <div className="w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-indigo-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
            {PERSONAL_INFO.brandingName.charAt(0)}
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            {PERSONAL_INFO.brandingName}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-text-secondary hover:text-indigo-primary uppercase tracking-widest transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-6 w-[1px] bg-[var(--color-border-rgba)]"></div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#contact" className="btn-indigo !py-2 !px-5 text-sm">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass-card md:hidden z-40 overflow-hidden border-b border-[var(--color-border-rgba)]"
          >
            <ul className="p-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-bold hover:text-indigo-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-indigo w-full"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
