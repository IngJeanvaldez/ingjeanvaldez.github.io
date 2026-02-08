import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Settings, 
  Battery, 
  RotateCcw, 
  Shield, 
  Cpu,
  ChevronRight,
  X
} from 'lucide-react';
import { projects as projectsData } from '../content';

const iconMap = {
  'Machines Électriques': RotateCcw,
  'Infrastructure HTB': Zap,
  'Contrôle-Commande': Cpu,
  'Modernisation': Settings,
  'Systèmes Auxiliaires': Battery,
  'Transfert de Compétences': Shield,
};

const colorMap = {
  'Machines Électriques': 'from-cyan-400 to-blue-500',
  'Infrastructure HTB': 'from-amber-400 to-orange-500',
  'Contrôle-Commande': 'from-green-400 to-emerald-500',
  'Modernisation': 'from-purple-400 to-violet-500',
  'Systèmes Auxiliaires': 'from-rose-400 to-pink-500',
  'Transfert de Compétences': 'from-blue-400 to-indigo-500',
};

const projects = projectsData.map(project => ({
  id: projectsData.indexOf(project) + 1,
  title: project.title,
  category: project.category,
  year: project.year,
  icon: iconMap[project.category] || Settings,
  color: colorMap[project.category] || 'from-cyan-400 to-blue-500',
  description: project.description,
  details: project.keyPoints,
  metrics: project.metrics.reduce((acc, m) => ({ ...acc, [m.label]: m.value }), {})
}));

const projectsOriginal = [
  {
    id: 1,
    title: 'Réparation Stator 20MW',
    category: 'Maintenance Majeure',
    year: '2023',
    icon: RotateCcw,
    color: 'from-cyan-400 to-blue-500',
    description: 'Direction complète du projet de réparation d\'un stator d\'alternateur de 20MW à la centrale hydroélectrique d\'Edéa.',
    details: [
      'Diagnostic approfondi des défauts d\'isolation',
      'Coordination des équipes techniques',
      'Supervision du rebobinage complet',
      'Tests et mise en service réussie'
    ],
    metrics: { puissance: '20 MW', durée: '10 mois', équipe: '15 personnes' }
  },
  {
    id: 2,
    title: 'Rénovation Contrôle-Commande',
    category: 'Automatisation',
    year: '2017-2018',
    icon: Cpu,
    color: 'from-green-400 to-emerald-500',
    description: 'Supervision du projet de rénovation du contrôle-commande et du système d\'excitation de 4 groupes hydroélectriques.',
    details: [
      'Modernisation des systèmes SCADA',
      'Remplacement des automates obsolètes',
      'Intégration des nouveaux régulateurs',
      'Formation des opérateurs'
    ],
    metrics: { groupes: '4 unités', système: 'SCADA', durée: '18 mois' }
  },
  {
    id: 3,
    title: 'Remplacement Disjoncteurs 90kV',
    category: 'Haute Tension',
    year: '2017-2022',
    icon: Zap,
    color: 'from-amber-400 to-orange-500',
    description: 'Projet de remplacement de 2 disjoncteurs HTB 90kV pour améliorer la fiabilité du poste d\'évacuation.',
    details: [
      'Études de coordination des protections',
      'Planification des coupures réseau',
      'Installation et raccordement',
      'Essais de mise en service'
    ],
    metrics: { tension: '90 kV', nombre: '2 DJ', niveau: 'HTB' }
  },
  {
    id: 4,
    title: 'Réparation Rotor Alternateur',
    category: 'Machines Tournantes',
    year: '2017-2022',
    icon: RotateCcw,
    color: 'from-purple-400 to-violet-500',
    description: 'Réparation complète du rotor d\'un alternateur de 20MW incluant le remplacement des pôles défectueux.',
    details: [
      'Démontage et inspection complète',
      'Remplacement des enroulements',
      'Équilibrage dynamique',
      'Remontage et essais'
    ],
    metrics: { puissance: '20 MW', type: 'Rotor', durée: '8 mois' }
  },
  {
    id: 5,
    title: 'Rénovation Auxiliaires AC/DC',
    category: 'Alimentation',
    year: '2017-2022',
    icon: Battery,
    color: 'from-rose-400 to-pink-500',
    description: 'Rénovation complète des auxiliaires alternatifs et continus de la centrale d\'Edéa.',
    details: [
      'Remplacement de 5 jeux de batteries',
      'Installation de 5 chargeurs neufs',
      'Mise à niveau des tableaux AC',
      'Amélioration de l\'autonomie secours'
    ],
    metrics: { batteries: '5 jeux', chargeurs: '5 unités', type: 'AC/DC' }
  },
  {
    id: 6,
    title: 'Automatisation Groupes Secours',
    category: 'Automatisation',
    year: '2017',
    icon: Shield,
    color: 'from-blue-400 to-indigo-500',
    description: 'Participation au projet de démarrage automatique des groupes de secours lors de black-out sur le RIS.',
    details: [
      'Conception des séquences de démarrage',
      'Programmation des automates',
      'Tests de simulation black-out',
      'Validation des temps de réponse'
    ],
    metrics: { type: 'Black-out', réseau: 'RIS', réponse: 'Auto' }
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
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
            Réalisations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Projets <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Majeurs</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Des projets d'envergure qui ont marqué ma carrière dans l'hydroélectricité
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${project.color} rounded-xl shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-slate-500">{project.year}</span>
                </div>

                {/* Content */}
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all">
                  <span>Voir détails</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
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
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                <div className={`inline-flex p-3 bg-gradient-to-br ${selectedProject.color} rounded-xl mb-6`}>
                  <selectedProject.icon className="w-8 h-8 text-white" />
                </div>

                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Points Clés</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 mt-2 bg-cyan-400 rounded-full" />
                        <span className="text-slate-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/50 rounded-xl mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-slate-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Partners Section */}
                {projectsData.find(p => p.title === selectedProject.title)?.partners && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Partenaires & Fournisseurs</h4>
                    <div className="grid gap-4">
                      {projectsData.find(p => p.title === selectedProject.title).partners.map((partner, i) => (
                        <motion.a
                          key={i}
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/30 transition-all group"
                        >
                          {partner.logo && (
                            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                              <img 
                                src={partner.logo} 
                                alt={partner.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h5 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {partner.name}
                            </h5>
                            <p className="text-sm text-slate-400 mt-1">{partner.role}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </motion.a>
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