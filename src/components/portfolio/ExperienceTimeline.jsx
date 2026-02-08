import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Zap, 
  Award, 
  X, 
  CheckCircle2,
  TrendingUp,
  Clock
} from 'lucide-react';
import { experiences } from '../content';

const getTypeConfig = (type) => {
  const configs = {
    current: { color: 'from-green-400 to-emerald-500', label: 'Poste Actuel', icon: TrendingUp },
    project: { color: 'from-cyan-400 to-blue-500', label: 'Projet', icon: Award },
    education: { color: 'from-purple-400 to-violet-500', label: 'Formation', icon: Award },
    ongoing: { color: 'from-amber-400 to-orange-500', label: 'En cours', icon: Clock },
    main: { color: 'from-blue-400 to-indigo-500', label: 'Poste Clé', icon: Briefcase },
    start: { color: 'from-slate-400 to-slate-500', label: 'Début Carrière', icon: Zap },
  };
  return configs[type] || configs.main;
};

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(null);

  // Sort experiences by year
  const sortedExperiences = [...experiences].sort((a, b) => b.year - a.year);

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Electrical Schematic Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal lines */}
              <line x1="0" y1="100" x2="80" y2="100" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
              <line x1="120" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
              {/* Resistor symbol */}
              <path d="M 80 100 L 85 90 L 95 110 L 105 90 L 115 110 L 120 100" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cyan-500" />
              {/* Vertical connection */}
              <line x1="100" y1="0" x2="100" y2="80" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
              {/* Capacitor symbol */}
              <line x1="95" y1="80" x2="105" y2="80" stroke="currentColor" strokeWidth="2" className="text-cyan-500" />
              <line x1="95" y1="85" x2="105" y2="85" stroke="currentColor" strokeWidth="2" className="text-cyan-500" />
              <line x1="100" y1="85" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
              {/* Node point */}
              <circle cx="100" cy="100" r="3" fill="currentColor" className="text-cyan-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
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
            Parcours Professionnel
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10+ Années</span> d'Excellence
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Une progression constante dans l'industrie hydroélectrique
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent transform -translate-x-1/2 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {sortedExperiences.map((exp, index) => {
              const config = getTypeConfig(exp.type);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setHoveredYear(exp.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 lg:left-1/2 top-6 lg:-translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setSelectedExperience(exp)}
                      className={`relative w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${config.color} rounded-2xl flex items-center justify-center shadow-xl cursor-pointer group`}
                    >
                      <config.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                      
                      {/* Pulse effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.color} rounded-2xl animate-ping opacity-20`} />
                      
                      {/* Year label */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: hoveredYear === exp.year ? 1 : 0, scale: hoveredYear === exp.year ? 1 : 0.8 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
                      >
                        {exp.year}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 lg:ml-0 lg:grid lg:grid-cols-2 lg:gap-8 ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Empty column for alternating layout */}
                    <div className={`hidden lg:block ${isLeft ? '' : 'lg:col-start-1'}`} />
                    
                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      onClick={() => setSelectedExperience(exp)}
                      className={`p-6 bg-slate-900/80 border-2 border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl ${
                        isLeft ? 'lg:col-start-2' : 'lg:col-start-1'
                      }`}
                    >
                      {/* Type Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium rounded-full bg-gradient-to-r ${config.color} text-white`}>
                        {config.label}
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-cyan-500" />
                        <span className="text-cyan-400 font-medium text-sm">{exp.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explorer les détails</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Connecting Line to Timeline (Desktop only) */}
                  <div className={`hidden lg:block absolute top-12 ${isLeft ? 'left-1/2 right-auto' : 'right-1/2 left-auto'} w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-cyan-500/30 to-transparent' : 'from-transparent to-cyan-500/30'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { value: '2014', label: 'Début Carrière', icon: Zap },
              { value: '10+', label: 'Années chez ENEO', icon: Briefcase },
              { value: '20MW', label: 'Plus Gros Projet', icon: Award },
              // { value: '90kV', label: 'Niveau HTB', icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="w-6 h-6 text-cyan-500 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Details Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Header */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium rounded-full bg-gradient-to-r ${getTypeConfig(selectedExperience.type).color} text-white`}>
                    {getTypeConfig(selectedExperience.type).label}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    {selectedExperience.period}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedExperience.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-cyan-500" />
                    <span className="text-lg text-cyan-400 font-medium">{selectedExperience.company}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  {selectedExperience.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                    Responsabilités Principales
                  </h4>
                  <div className="grid gap-3">
                    {selectedExperience.detailedResponsibilities?.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                      >
                        <ChevronRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {selectedExperience.achievements && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full" />
                      Réalisations & Impact
                    </h4>
                    <div className="grid gap-3">
                      {selectedExperience.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20"
                        >
                          <CheckCircle2 className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {selectedExperience.skills && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-violet-500 rounded-full" />
                      Compétences Développées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}