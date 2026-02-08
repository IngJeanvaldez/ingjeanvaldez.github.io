import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronUp, Heart } from 'lucide-react';
import { personalInfo, footer } from '../content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
              {personalInfo.initials}<span className="text-cyan-400">.</span>
              </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>{footer.copyright}</span>
            <span>{footer.madeWith}</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>{footer.location}</span>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 transition-all"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}