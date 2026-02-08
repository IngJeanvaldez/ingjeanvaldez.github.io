import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users, Rocket, Download, MapPin, ChevronRight, X } from 'lucide-react';
import { personalInfo, about } from '../content';

const iconMap = {
  'Rigueur': Target,
  'Innovation': Lightbulb,
  'Leadership': Users,
  'Dynamisme': Rocket,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedQuality, setSelectedQuality] = useState(null);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            À Propos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {about.title.split("l'")[0]}l'
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{about.title.split("l'")[1]}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
                {/* Circuit Pattern Inside */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
                
                {/* Profile Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 mb-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-cyan-500/30">
                    {personalInfo.initials}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{personalInfo.title}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-1/4 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl shadow-xl"
              >
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-xs text-slate-400">Années Exp.</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-4 bottom-1/4 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl shadow-xl"
              >
                <div className="text-2xl font-bold text-green-400">ENEO</div>
                <div className="text-xs text-slate-400">Hydroélectricité</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Expert en Ingénieries Projet, Innovation et Transformation
            </h3>
            
            <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
              {about.description.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace('Responsable Maintenance Électrique', '<strong class="text-white">Responsable Maintenance Électrique</strong>').replace('CentraleSupélec', '<strong class="text-cyan-400">CentraleSupélec</strong>') }} />
              ))}
            </div>

            {/* Download CV Button */}
            {/* <motion.a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </motion.a> */}
          </motion.div>
        </div>

        {/* Qualities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {about.qualities.map((quality, index) => {
            const Icon = iconMap[quality.title];
            return (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedQuality(quality)}
              className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-colors">
                {Icon && <Icon className="w-6 h-6 text-cyan-400" />}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{quality.title}</h4>
              <p className="text-sm text-slate-400 mb-3">{quality.description}</p>
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>En savoir plus</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          );
          })}
        </motion.div>

        {/* Quality Details Modal */}
        <AnimatePresence>
          {selectedQuality && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedQuality(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedQuality(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[selectedQuality.title];
                    return Icon ? <Icon className="w-8 h-8 text-cyan-400" /> : null;
                  })()}
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">{selectedQuality.title}</h3>
                <p className="text-lg text-slate-300 mb-8">{selectedQuality.description}</p>

                {/* Details */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                    Exemples Concrets
                  </h4>
                  <ul className="space-y-3">
                    {selectedQuality.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                      >
                        <div className="w-1.5 h-1.5 mt-2 bg-cyan-400 rounded-full flex-shrink-0" />
                        <span className="text-slate-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Related Projects */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full" />
                    Projets Associés
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedQuality.relatedProjects.map((project, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-400"
                      >
                        {project}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}