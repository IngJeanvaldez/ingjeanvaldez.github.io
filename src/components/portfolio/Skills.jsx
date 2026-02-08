import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Zap, 
  Droplets, 
  Settings, 
  Monitor, 
  Shield, 
  Cpu,
  FileText,
  Users,
  Globe,
  Wrench,
  BarChart3,
  Activity
} from 'lucide-react';
import { 
  RadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { skillCategories, software, standards, languages } from '../content';

const iconMap = {
  'Génie Électrique': Zap,
  'Hydroélectricité': Droplets,
  'Contrôle-Commande': Settings,
  'Management': Users,
};

const skillCategoriesWithIcons = skillCategories.map(cat => ({
  ...cat,
  icon: iconMap[cat.title] || Settings
}));

// Prepare radar chart data
const radarData = skillCategoriesWithIcons.map(cat => {
  const avgLevel = cat.skills.reduce((sum, skill) => sum + skill.level, 0) / cat.skills.length;
  return {
    category: cat.title,
    value: avgLevel,
    fullMark: 100
  };
});

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold">{payload[0].payload.category}</p>
        <p className="text-cyan-400 text-sm">{payload[0].value.toFixed(1)}% maîtrise</p>
      </div>
    );
  }
  return null;
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [viewMode, setViewMode] = useState('radar'); // 'radar' or 'bars'

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
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
            Expertise Technique
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Compétences & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Savoir-Faire</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Une expertise complète couvrant l'ensemble de la chaîne de valeur hydroélectrique
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setViewMode('radar')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              viewMode === 'radar'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
            }`}
          >
            <Activity className="w-4 h-4" />
            Vue Radar
          </button>
          <button
            onClick={() => setViewMode('bars')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              viewMode === 'bars'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Vue Détaillée
          </button>
        </motion.div>

        {/* Radar Chart View */}
        {viewMode === 'radar' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Radar Chart */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                <div className="relative p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl">
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={radarData}>
                      <PolarGrid 
                        stroke="#334155" 
                        strokeWidth={1}
                      />
                      <PolarAngleAxis 
                        dataKey="category" 
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickLine={{ stroke: '#475569' }}
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]}
                        tick={{ fill: '#64748b', fontSize: 10 }}
                        tickCount={6}
                      />
                      <Radar
                        name="Compétences"
                        dataKey="value"
                        stroke="#06b6d4"
                        fill="#06b6d4"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Categories Legend */}
              <div className="space-y-4">
                {skillCategoriesWithIcons.map((category, index) => {
                  const avgLevel = category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length;
                  return (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onHoverStart={() => setSelectedCategory(category.title)}
                      onHoverEnd={() => setSelectedCategory(null)}
                      className={`p-5 bg-slate-800/50 border rounded-2xl transition-all cursor-pointer ${
                        selectedCategory === category.title
                          ? 'border-cyan-500/50 bg-slate-800/80 scale-105'
                          : 'border-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${avgLevel}%` } : {}}
                                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                className={`h-full bg-gradient-to-r ${category.color}`}
                              />
                            </div>
                            <span className="text-sm font-bold text-cyan-400 min-w-[3rem] text-right">
                              {avgLevel.toFixed(0)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Sub-skills preview */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="text-xs px-2 py-1 bg-slate-700/50 text-slate-400 rounded"
                          >
                            {skill.name.split(' ').slice(-1)[0]}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Detailed Bars View */}
        {viewMode === 'bars' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
            >
            {skillCategoriesWithIcons.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 lg:p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List with Enhanced Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`
                        }} />
                        
                        {/* Progress bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: catIndex * 0.1 + skillIndex * 0.15, ease: "easeOut" }}
                          className={`relative h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, delay: catIndex * 0.1 + skillIndex * 0.15 + 1, ease: "easeInOut" }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Software & Standards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Software */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 lg:p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Logiciels Maîtrisés</h3>
            </div>
            {/* <div className="grid grid-cols-2 gap-3">
              {software.map((soft, index) => (
                <motion.div
                  key={soft.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="relative flex items-center gap-3 p-3 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all" />
                  <span className="text-xl relative z-10">{soft.icon}</span>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors relative z-10">{soft.name}</span>
                </motion.div>
              ))}
            </div> */}
            <div className="space-y-4">
              {software.map((soft, index) => (
                <motion.div
                  key={soft.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{soft.icon}</span>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {soft.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-purple-400">{soft.level}%</span>
                  </div>
                  <div className="relative h-2.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 9px)`
                    }} />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${soft.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-400 to-violet-500 rounded-full shadow-lg relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, delay: 1.6 + index * 0.1, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Standards & Languages */}
          <div className="space-y-8">
            {/* Standards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 lg:p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Normes Internationales</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {standards.map((standard, idx) => (
                  <motion.div
                    key={standard.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative px-5 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all cursor-pointer"
                  >
                    <span className="font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{standard.name}</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-slate-800 border border-cyan-500/30 text-xs text-slate-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none z-10">
                      {standard.description}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 lg:p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Langues</h3>
              </div>
              <div className="space-y-5">
                {languages.map((lang, langIndex) => (
                  <div className="group" key={lang.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 group-hover:text-white transition-colors font-medium">{lang.name}</span>
                      <span className={`text-sm font-bold ${lang.level >= 90 ? 'text-green-400' : 'text-amber-400'}`}>{lang.proficiency}</span>
                    </div>
                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 9px)`
                      }} />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.7 + langIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${lang.level >= 90 ? 'from-green-400 to-emerald-500' : 'from-amber-400 to-orange-500'} rounded-full shadow-lg relative overflow-hidden`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, delay: 1.7 + langIndex * 0.1, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}