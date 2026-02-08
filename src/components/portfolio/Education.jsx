import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Shield } from 'lucide-react';
import { education as educationData } from '../content';

const iconMap = {
  'certification': Award,
  'diploma': GraduationCap,
};

const education = educationData.map(edu => ({
  ...edu,
  icon: iconMap[edu.type] || GraduationCap
}));

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            Formation & Certifications
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Parcours <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Académique</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Une formation continue pour rester à la pointe de l'innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ml-24 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  {/* Year Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gradient-to-r ${item.color} text-white`}>
                    {item.year}
                    {item.type === 'certification' && <Award className="w-3 h-3" />}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Formation Continue
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Engagé dans une démarche d'apprentissage permanent, je me forme régulièrement sur les nouvelles 
            technologies du secteur énergétique, notamment le solaire photovoltaïque et les systèmes de 
            stockage d'énergie, pour anticiper les évolutions du marché.
          </p>
        </motion.div>
      </div>
    </section>
  );
}