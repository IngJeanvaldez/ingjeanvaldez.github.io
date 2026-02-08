// =============================================================================
// FICHIER DE CONTENU CENTRALISÉ - PORTFOLIO JEAN PIERRE
// =============================================================================
// Ce fichier contient tout le contenu textuel et les données du portfolio.
// Modifiez ce fichier pour mettre à jour les informations affichées sur le site.

export const personalInfo = {
  name: "Mikael Azanfack",
  firstName: "Mikael",
  lastName: "Azanfack",
  initials: "MA",
  title: "Ingénieur Électricien Senior",
  subtitle: "Expert en Hydroélectricité & Systèmes de Contrôle-Commande",
  location: "Cameroun",
  emailPersonal: "azanfackmikael@yahoo.fr",
  emailProfessional: "mikael.azanfack@eneo.cm",
  phone: "+237 699 500 543 / +237 690 263 427",
  availability: "Disponible pour de nouveaux projets",
  cvUrl: "CV.pdf",
  linkedin:
    "https://www.linkedin.com/in/mikael-jean-valdez-azanfack-sagneeng-a5b664a1/",
};

export const heroStats = [
  { value: "10+", label: "Années d'Expérience" },
  { value: "5+", label: "Projets Majeurs" },
  { value: "90kV", label: "Systèmes HTB" },
];

export const expertiseAreas = [
  { label: "HTA/HTB", color: "from-amber-400 to-orange-500" },
  { label: "Hydroélectricité", color: "from-cyan-400 to-blue-500" },
  { label: "SCADA", color: "from-green-400 to-emerald-500" },
];

export const about = {
  title: "Passionné par l'Énergie",
  subtitle: "Plus de 10 ans d'expertise dans l'industrie hydroélectrique",
  description: [
    "Depuis 2014, je consacre ma carrière à l'industrie hydroélectrique au sein d'ENEO Cameroon, où j'ai progressé jusqu'au poste de Responsable Maintenance Électrique à la centrale d'Edéa.",
    "Mon expertise couvre la gestion complète des systèmes électriques HTA/HTB, la conception de systèmes de contrôle-commande SCADA, et la supervision de projets d'envergure incluant la réparation de stators de 20MW et la rénovation de systèmes d'excitation.",
    "Certifié en Management de Projet par CentraleSupélec, j'allie expertise technique et compétences managériales pour mener des projets de transformation dans le secteur énergétique.",
  ],
  qualities: [
    {
      title: "Rigueur",
      description: "Précision et attention aux détails dans chaque projet",
      details: [
        "Application stricte des normes IEC, ISO et IEEE",
        "Documentation technique exhaustive de tous les projets",
        "Procédures de vérification et validation systématiques",
        "Traçabilité complète des interventions de maintenance",
      ],
      relatedProjects: [
        "Réparation Stator 20MW",
        "Remplacement Disjoncteurs 90kV",
      ],
    },
    {
      title: "Innovation",
      description: "Solutions créatives aux défis techniques complexes",
      details: [
        "Conception de systèmes de démarrage automatique des groupes secours en situation de black-out du réseau national",
        "Optimisation des séquences de contrôle-commande SCADA",
        "Amélioration de la fiabilité des systèmes d'excitation",
        "Veille technologique continue sur les énergies renouvelables",
      ],
      relatedProjects: [
        "Automatisation Groupes Secours",
        "Rénovation Contrôle-Commande",
      ],
    },
    {
      title: "Leadership",
      description: "Formation et encadrement des équipes techniques",
      details: [
        "Formation continue des équipes ENEO depuis 2021",
        "Transfert de compétences sur systèmes HTA/HTB",
        "Management d'équipes de 15+ techniciens sur projets majeurs",
        "Certification en Leadership (GO AHEAD AFRICA, 2019)",
      ],
      relatedProjects: ["Formation ENEO", "Projets de Rénovation"],
    },
    {
      title: "Dynamisme",
      description: "Adaptabilité et proactivité face aux challenges",
      details: [
        "Adaptation rapide aux nouvelles technologies SCADA",
        "Polyvalence sur groupes turboalternateurs et systèmes HTB",
        "Gestion simultanée de multiples projets de rénovation",
        "Exploration active du solaire et design d'alternateurs",
      ],
      relatedProjects: [
        "Multiples Projets Simultanés",
        "Diversification Énergies Renouvelables",
      ],
    },
  ],
  careerStats: [
    { value: "2014", label: "Début Carrière" },
    { value: "10+", label: "Années chez ENEO" },
    { value: "20MW", label: "Plus Gros Projet" },
    // { value: "90kV", label: "Niveau HTB" },
  ],
};

export const experiences = [
  {
    period: "Fév 2020 - Présent",
    title: "Responsable Maintenance Électrique",
    company: "ENEO - Centrale Hydroélectrique d'Edéa",
    description:
      "Gestion des départs HTA d'alimentation des villes, gestion des départs HTB, gestion des groupes turboalternateurs ainsi que tous les auxiliaires associés.",
    highlights: ["Départs HTA/HTB", "Turboalternateurs", "Auxiliaires"],
    type: "current",
    detailedResponsibilities: [
      "Supervision de la maintenance préventive et corrective des équipements HTA/HTB et des groupes turboalternateurs",
      "Gestion d'une équipe de 14+ techniciens et ingénieurs",
      "Suivi et respect des normes HSE de l'équipe",
      "Planification et coordination des arrêts programmés",
      "Optimisation des procédures de maintenance",
      "Gestion du budget maintenance électrique (>100M FCFA/an)",
      "Gestion des approvisionnements et des stocks",
      // "Interface avec la direction et les autorités de régulation",
    ],
    achievements: [
      "Maintien d'un taux de disponibilité >85% des groupes",
      // "Amélioration de 25% du taux de disponibilité des groupes",
      "Réduction de 30% des temps d'intervention",
      "Zéro incident majeur depuis la prise de poste",
      // "Mise en place d'un système GMAO performant",
      "Mise en place d'un système d'évaluation des performances de l'équipe",
    ],
    skills: [
      "Leadership",
      "Gestion budgétaire",
      "Maintenance HTA/HTB",
      "Maintenance groupe hydroélectrique",
      "Management d'équipe",
    ],
    year: 2020,
  },
  {
    period: "Fév 2023 - Déc 2023",
    title: "Chef de Projet - Réparation Stator 20MW",
    company: "ENEO",
    description:
      "Direction et supervision complète du projet de réparation d'un stator d'alternateur de 20MW.",
    highlights: ["Réparation majeure", "20MW", "Alternateur"],
    type: "project",
    detailedResponsibilities: [
      "Diagnostic approfondi des défauts d'isolation stator",
      "Élaboration du cahier des charges technique",
      "Gestion des aspects logistiques",
      "Supervision quotidienne des travaux de rebobinage",
      "Coordination avec la production pour minimiser l'impact",
    ],
    achievements: [
      "Projet livré en 10 mois",
      "Gain budgétaire de 80%",
      "Remise en service réussie avec performances nominales",
    ],
    skills: [
      "Gestion de projet",
      "Machines électriques",
      "Coordination multi-acteurs",
      "Contrôle qualité",
    ],
    year: 2023,
  },
  {
    period: "Avr 2022 - Oct 2022",
    title: "Formation Executive Certificate",
    company: "CentraleSupélec - France",
    description:
      "Formation en Management de projet à l'ère du digital. Obtention du titre d'Expert en Ingénieries Projet, Innovation et Transformation.",
    highlights: ["Management digital", "Certification", "Innovation"],
    type: "education",
    detailedResponsibilities: [
      "Participation à un programme intensif de 6 mois",
      "Étude des méthodologies agiles et lean",
      "Apprentissage des outils digitaux de gestion de projet",
      "Projet de fin d'études sur transformation digitale",
      "Sessions de coaching et mentoring",
    ],
    achievements: [
      "Obtention du titre d'Expert avec mention",
      // "Projet de fin d'études noté 18/20",
      "Certification reconnue internationalement",
      "Application immédiate des acquis sur projets ENEO",
    ],
    skills: ["Agile", "Lean", "Transformation digitale", "Innovation"],
    year: 2022,
  },
  {
    period: "Jan 2021 - Présent",
    title: "Formateur Technique",
    company: "ENEO Cameroon S.A.",
    description:
      "Formation à temps partiel des équipes techniques sur les systèmes électriques et les bonnes pratiques de maintenance.",
    highlights: ["Formation", "Transfert de compétences", "Leadership"],
    type: "ongoing",
    detailedResponsibilities: [
      "Conception de modules de formation techniques",
      "Animation de sessions théoriques et pratiques",
      "Formation sur systèmes HTA/HTB et protections",
      "Formation sur les modules SCADA et contrôle-commande",
      "Évaluation et suivi des apprenants",
      "Mise à jour continue des contenus pédagogiques",
    ],
    achievements: [
      "80+ techniciens et ingénieurs formés",
      "Taux de satisfaction >90%",
      "Amélioration mesurable des compétences",
      "Réduction des erreurs opérationnelles de 40%",
    ],
    skills: ["Pédagogie", "Communication", "Expertise technique", "Évaluation"],
    year: 2021,
  },
  {
    period: "2017 - 2022",
    title: "Chef de Projet - Rénovation Systèmes",
    company: "ENEO",
    description:
      "Remplacement des régulateurs électroniques de vitesse sur groupes hydroélectriques. Rénovation des auxiliaires AC/DC. Remplacement de disjoncteurs 90kV. Réparation du rotor d'un alternateur de 20MW.",
    highlights: [
      "Régulateurs de vitesse",
      "Disjoncteurs 90kV",
      "Batteries & Chargeurs",
    ],
    type: "project",
    detailedResponsibilities: [
      "Gestion du projet de remplacement des régulateurs électroniques de vitesse",
      "Gestion de multiples projets de rénovation simultanés",
      "Coordination avec fournisseurs internationaux",
      "Supervision des travaux sur 5 jeux de batteries",
      "Remplacement de 2 disjoncteurs 90kV",
      "Réparation rotor alternateur 20MW",
      "Gestion budgétaire multi-projets",
    ],
    achievements: [
      "Portfolio de projets >1 milliards FCFA",
      "Tous projets livrés avec succès",
      "Amélioration de la fiabilité globale de 35%",
      // "Aucun dépassement budgétaire majeur",
    ],
    skills: [
      "Multi-projets",
      "Achats internationaux",
      "Planification",
      "Contrôle budgétaire",
    ],
    year: 2017,
  },
  {
    period: "Août 2016 - Fév 2020",
    title: "Superviseur Maintenance Électrique",
    company: "ENEO - Centrale Hydroélectrique d'Edéa",
    description:
      "Supervision des travaux de maintenance électrique : équipements d'évacuation d'énergie, poste HTB et HTA, contrôle-commande des groupes hydroélectriques et auxiliaires.",
    highlights: ["Postes HTB/HTA", "Contrôle-Commande", "Maintenance"],
    type: "main",
    detailedResponsibilities: [
      "Supervision quotidienne d'équipes de maintenance",
      "Planification des interventions préventives",
      "Gestion des arrêts pour travaux",
      "Coordination avec exploitant réseau",
      "Analyse des défauts et incidents",
      "Reporting technique à la hiérarchie",
    ],
    achievements: [
      "Réduction de 20% des pannes non planifiées",
      "Amélioration continue des procédures",
      "Formation de 10+ nouveaux techniciens",
      "Contribution aux projets de modernisation",
    ],
    skills: [
      "Supervision",
      "Maintenance préventive",
      "Analyse de défauts",
      "Organisation",
    ],
    year: 2016,
  },
  {
    period: "Mars 2017 - Août 2018",
    title: "Superviseur - Projet Rénovation",
    company: "ENEO",
    description:
      "Supervision des travaux du projet de rénovation du contrôle-commande et du système d'excitation de 4 groupes hydroélectriques à la centrale d'Edéa.",
    highlights: ["4 Groupes", "Système d'excitation", "Contrôle-Commande"],
    type: "project",
    detailedResponsibilities: [
      "Coordination des entreprises de modernisation",
      "Supervision des travaux SCADA",
      "Remplacement des systèmes d'excitation",
      "Tests et mise en service progressive",
      // "Formation opérateurs aux nouveaux systèmes",
      // "Gestion des interfaces avec fabricants",
    ],
    achievements: [
      "Modernisation réussie de 4 groupes de production",
      "Amélioration de la réactivité du contrôle-commande",
      "Migration SCADA sans incident majeur",
      "Projet de référence pour futures modernisations",
    ],
    skills: ["SCADA", "Systèmes d'excitation", "Automates", "Commissioning"],
    year: 2017,
  },
  {
    period: "Déc 2014 - Août 2016",
    title: "Ingénieur Électricien",
    company: "ENEO - Centrale Hydroélectrique d'Edéa",
    description:
      "Début de carrière en tant qu'ingénieur électricien, acquisition d'expertise sur les systèmes hydroélectriques et les installations HTA/HTB.",
    highlights: ["Hydroélectricité", "Systèmes HTA/HTB", "Ingénierie"],
    type: "start",
    detailedResponsibilities: [
      "Participation aux opérations de maintenance courante",
      "Apprentissage des systèmes de production",
      "Assistance aux interventions HTA/HTB",
      "Étude des schémas et documentations techniques",
      "Formation continue sur équipements de centrale",
      "Support aux équipes de supervision",
    ],
    achievements: [
      "Montée en compétence rapide",
      "Habilitations HTA/HTB obtenues",
      "Contribution aux arrêts programmés",
      "Base solide pour évolution de carrière",
    ],
    skills: [
      "Apprentissage technique",
      "HTA/HTB",
      "Hydroélectricité",
      "Maintenance",
    ],
    year: 2014,
  },
];

export const skillCategories = [
  {
    title: "Génie Électrique",
    color: "from-amber-400 to-orange-500",
    chartColor: "#f59e0b",
    skills: [
      { name: "Conception départs HTA/HTB", level: 95 },
      { name: "Dimensionnements électriques", level: 90 },
      { name: "Protections électriques", level: 92 },
      { name: "Transformateurs HT", level: 88 },
    ],
  },
  {
    title: "Hydroélectricité",
    color: "from-cyan-400 to-blue-500",
    chartColor: "#06b6d4",
    skills: [
      { name: "Groupes turboalternateurs", level: 95 },
      { name: "Systèmes d'excitation", level: 90 },
      { name: "Régulateurs de vitesse", level: 88 },
      { name: "Auxiliaires AC/DC", level: 92 },
    ],
  },
  {
    title: "Contrôle-Commande",
    color: "from-green-400 to-emerald-500",
    chartColor: "#10b981",
    skills: [
      { name: "Systèmes SCADA", level: 90 },
      { name: "Automates programmables", level: 85 },
      { name: "Instrumentation", level: 88 },
      { name: "Réseaux industriels", level: 82 },
    ],
  },
  {
    title: "Management",
    color: "from-purple-400 to-violet-500",
    chartColor: "#a855f7",
    skills: [
      { name: "Gestion de projet", level: 92 },
      { name: "Leadership d'équipe", level: 88 },
      { name: "Formation technique", level: 90 },
      { name: "Gestion de portefeuille", level: 85 },
    ],
  },
];

export const software = [
  { name: "Caneco", icon: "🔧", level: 90 },
  { name: "CYME", icon: "🔌", level: 75 },
  { name: "AutoCAD Electrique", icon: "📐", level: 80 },
  { name: "ETAP", icon: "⚡", level: 75 },
  { name: "STEP 7 Siemens", icon: "🖥️", level: 60 },
  { name: "Revit MEP", icon: "📊", level: 60 },
  { name: "MS Office", icon: "💼", level: 90 },
  { name: "MATLAB", icon: "📈", level: 80 },
  { name: "SolidWorks", icon: "🛠️", level: 55 },
];

export const standards = [
  { name: "IEC 60909", description: "Calculs de courants de court-circuit" },
  { name: "IEC 61850", description: "Communication dans les sous-stations" },
  { name: "IEEE C37", description: "Protections et relais" },
  { name: "ISO 9001", description: "Management de la qualité" },
  {
    name: "NF C 15-100",
    description: "Installations électriques basse tension",
  },
  { name: "IEC 60034", description: "Machines électriques" },
];

export const languages = [
  { name: "Français", level: 95, proficiency: "Courant" },
  { name: "Anglais", level: 60, proficiency: "Intermédiaire" },
];

export const projects = [
  {
    title: "Réparation Stator 20MW",
    category: "Machines Électriques",
    year: "2023",
    description:
      "Direction complète du projet de réparation d'un stator d'alternateur de 20MW à la centrale d'Edéa.",
    keyPoints: [
      "Diagnostic approfondi des défauts d'isolation du bobinage stator",
      "Élaboration du cahier des charges technique détaillé",
      "Supervision quotidienne des travaux pendant 10 mois",
      "Tests de mise en service et validation des performances",
    ],
    metrics: [
      { label: "Gain budgétaire", value: "80%" },
      { label: "Délais", value: "10 mois" },
      { label: "Puissance", value: "20 MW" },
      { label: "Performance", value: "100%" },
    ],
    // partners: [
    //   {
    //     name: "VOITH Hydro",
    //     logo: "voith.jpg",
    //     role: "Spécialiste en réparation de rotors d'alternateurs",
    //     website: "https://www.voith.com/corp-en/"
    //   }
    // ],
  },
  {
    title: "Rénovation de 4 pôles Rotor 20MW",
    category: "Machines Électriques",
    year: "2022",
    description:
      "Supervision de la rénovation complète de 4 pôles rotor d'un alternateur de 20MW.",
    keyPoints: [
      "Validation des schémas techniques de rénovation",
      "Comissioning de 4 pôles rotor chez le fabricant",
      "Remplacement des isolations et bobinages défectueux",
      "Installation des pôles rénovés sur site",
      "Essais et mise en service de l'alternateur",
    ],
    metrics: [
      { label: "Puissance", value: "20 MW" },
      { label: "Pôles rénovés", value: "4 unités" },
      { label: "Performance", value: "100%" },
      { label: "Fiabilité", value: "+30%" },
    ],
    partners: [
      {
        name: "VOITH Hydro",
        logo: "voith.jpg",
        role: "Spécialiste en réparation de rotors d'alternateurs",
        website: "https://www.voith.com/corp-en/",
      },
    ],
  },
  {
    title: "Remplacement Disjoncteurs 90kV",
    category: "Infrastructure HTB",
    year: "2021",
    description:
      "Remplacement de 2 disjoncteurs 90kV vétustes par des équipements modernes avec technologies SF6.",
    keyPoints: [
      "Étude technique et sélection des disjoncteurs modernes",
      "Coordination avec le dispatching national pour les consignations",
      "Supervision des travaux d'installation",
      "Tests diélectriques et mécaniques des nouveaux équipements",
      "Mise en service progressive avec protocoles de sécurité renforcés",
      "Documentation complète et formation du personnel",
    ],
    metrics: [
      { label: "Tension", value: "90 kV" },
      { label: "Unités", value: "2 disjoncteurs" },
      { label: "Coupure", value: "Zéro incident" },
      { label: "Fiabilité", value: "+40%" },
    ],
    partners: [
      {
        name: "Primelec",
        logo: "primelec.jpg",
        role: "Fournisseur de disjoncteurs HTB",
        website: "https://primelec-cm.com/",
      },
      {
        name: "GE Vernova",
        logo: "vernova.png",
        role: "Solutions d'équipements électriques haute tension",
        website: "https://www.gevernova.com",
      },
    ],
  },
  {
    title: "Régulateurs de Vitesse Électroniques",
    category: "Automatisme et Régulation",
    year: "2021",
    description:
      "Suivi du projet de remplacement de 3 régulateurs électroniques de vitesse sur groupes hydroélectriques, incluant la coordination avec le fournisseur et la supervision des tests de performance.",
    keyPoints: [
     "Validation des spécifications techniques avec le fournisseur",
      "Supervision de l'installation des régulateurs sur site",
      "Coordination des tests de performance et d'intégration",
      "Formation des équipes de maintenance sur les nouveaux systèmes",
      "Documentation technique complète du projet",
    ],
    metrics: [
      { label: "Groupes concernés", value: "3 unités" },
      { label: "Amélioration de la régulation", value: "+25%" },
      { label: "Fiabilité", value: "+40%" },
    ],
    partners: [
      {
        name: "ANDRITZ Hydro",
        logo: "andritz.png",
        role: "Fournisseur de régulateurs de vitesse électroniques pour groupes hydroélectriques",
        website: "https://www.andritz.com/",
      },
    ],
  },
  {
    title: "Automatisation Groupes Secours",
    category: "Contrôle-Commande",
    year: "2020",
    description:
      "Conception et mise en œuvre de systèmes de démarrage automatique pour groupes de secours en cas de black-out.",
    keyPoints: [
      "Analyse des besoins et conception du système d'automatisation",
      "Programmation des automates et des séquences de démarrage",
      "Tests de démarrage en conditions réelles simulées",
      "Formation des opérateurs aux nouvelles procédures",
      "Documentation technique complète des séquences",
    ],
    metrics: [
      { label: "Groupes", value: "2 unités" },
      { label: "Démarrage", value: "<30 sec" },
      { label: "Fiabilité", value: "99.9%" },
      { label: "Black-outs", value: "0 échec" },
    ],
    partners: [
      {
        name: "Noticam",
        logo: "noticam.jpg",
        role: "Fournisseur de solutions électriques, la mécanique générale et les télécommunications. Elle intervient dans la conception, l'installation, la maintenance de groupes électrogènes, d'onduleurs, de tableaux électriques et d'énergies renouvelables pour le secteur industriel. ",
        website: "https://www.noticam.net/fr",
      },
    ],
  },
  {
    title: "Rénovation Contrôle-Commande",
    category: "Modernisation",
    year: "2017-2018",
    description:
      "Suivi de la rénovation complète du système de contrôle-commande et d'excitation de 4 groupes hydroélectriques.",
    keyPoints: [
      "Migration du système de contrôle-commande vers une plateforme SCADA plus moderne",
      "Remplacement des régulateurs de tension analogiques par les numériques",
      "Mise à niveau des automates de contrôle des groupes",
      "Configuration des réseaux de communication industriels",
      "Tests et mise en service progressive groupe par groupe",
      "Formation des équipes d'exploitation",
    ],
    metrics: [
      { label: "Groupes", value: "4 unités" },
      { label: "Durée", value: "18 mois" },
      // { label: "Réactivité", value: "+60%" },
      { label: "Disponibilité", value: ">85%" },
    ],
    partners: [
      {
        name: "Flipo-richir",
        logo: "flipo-richir.png",
        role: "Spécialisée dans le domaine de l'Energie, des systèmes Electriques et des Automatismes en installation et en maintenance",
        website: "https://www.flipo-richir.eu/",
      },
    ],
  },
  {
    title: "Rénovation Batteries & Chargeurs",
    category: "Systèmes Auxiliaires",
    year: "2019-2020",
    description:
      "Remplacement complet de 5 jeux de batteries stationnaires et leurs systèmes de charge associés.",
    keyPoints: [
      "Étude de dimensionnement des nouvelles batteries",
      "Sélection de batteries NI-CAD avec durée de vie étendue",
      "Remplacement des chargeurs par des modèles intelligents",
      "Tests de capacité et de décharge sur toutes les batteries",
      "Formation du personnel à la maintenance préventive",
    ],
    metrics: [
      { label: "Jeux batteries", value: "5 unités" },
      { label: "Capacité/jeu", value: "475 Ah" },
      { label: "Tension", value: "120 VDC" },
      { label: "Durée vie", value: "+10 ans" },
      { label: "Fiabilité", value: "99.8%" },
    ],
    partners: [
      {
        name: "AEG Power Solutions",
        logo: "https://www.aegps.com/en/wp-content/uploads/2025/05/logo-coockie-aeg.png",
        role: "Fournisseur de systèmes de batteries et chargeurs intelligents",
        website: "https://www.aegps.com",
      },
      {
        name: "Universal Electrique",
        logo: "universal.png",
        role: "Distributeur local de solutions de stockage d'énergie",
        website: "https://www.universalelectrique.com/",
      },
    ],
  },
  {
    title: "Formation Continue ENEO",
    category: "Transfert de Compétences",
    year: "2021-Présent",
    description:
      "Programme de formation technique pour ingénieurs et techniciens sur les systèmes électriques modernes.",
    keyPoints: [
      "Conception de modules théoriques et pratiques adaptés",
      "Sessions sur protections électriques et relais numériques",
      "Formations SCADA et systèmes de contrôle-commande",
      "Ateliers pratiques sur matériel réel de la centrale",
      "Évaluations continues des compétences acquises",
      "Mise à jour régulière des contenus pédagogiques",
    ],
    metrics: [
      { label: "Formés", value: "80+ personnes" },
      { label: "Satisfaction", value: "90%" },
      { label: "Modules", value: "4 formations" },
      { label: "Impact", value: "-40% erreurs" },
    ],
  },
  // {
  //   title: "Projet Solaire - Conception Alternateur",
  //   category: "Énergies Renouvelables",
  //   year: "2024",
  //   description: "Conception préliminaire d'un alternateur dédié aux applications solaires pour divers projets d'énergie renouvelable.",
  //   keyPoints: [
  //     "Étude des exigences spécifiques aux applications solaires",
  //     "Conception des caractéristiques électriques et mécaniques de l'alternateur",
  //     "Sélection des matériaux optimisés pour l'efficacité énergétique",
  //     "Collaboration avec des experts en énergie solaire",
  //     "Préparation de la documentation technique pour la fabrication",
  //   ],
  //   metrics: [
  //     { label: "Puissance", value: "500 kW" },
  //     { label: "Tension", value: "690 V" },
  //     { label: "Efficacité", value: ">95%" },
  //     { label: "Durée vie", value: "20 ans" },
  //   ],
  // },
];

export const education = [
  {
    year: "2022",
    title: "Expert en Ingénieries Projet, Innovation et Transformation",
    institution: "CentraleSupélec - France",
    type: "certification",
    description:
      "Executive Certificate Online - Management de projet à l'ère du digital",
    color: "from-purple-400 to-violet-500",
  },
  {
    year: "2019",
    title: "Certification Protections Électriques",
    institution: "RACEE",
    type: "certification",
    description:
      "Protections électriques des départs HTB/HTA, transformateurs, machines synchrones et asynchrones",
    color: "from-cyan-400 to-blue-500",
  },
  {
    year: "2019",
    title: "Certification Leadership",
    institution: "Cabinet GO AHEAD AFRICA",
    type: "certification",
    description: "Formation certifiante en leadership et management d'équipes",
    color: "from-amber-400 to-orange-500",
  },
  {
    year: "2014",
    title: "Diplôme d'Ingénieur de Conception en Génie Électrique",
    institution: "École Nationale Supérieure Polytechnique de Yaoundé",
    type: "diploma",
    description:
      "Formation complète en génie électrique avec spécialisation en systèmes de puissance",
    color: "from-green-400 to-emerald-500",
  },
  {
    year: "2009",
    title: "Baccalauréat Série C",
    institution: "Lycée de Mendong - Yaoundé",
    type: "diploma",
    description:
      "Baccalauréat scientifique - Mathématiques et Sciences Physiques",
    color: "from-slate-400 to-slate-500",
  },
];

export const contact = {
  title: "Travaillons Ensemble",
  subtitle:
    "Vous avez un projet ou une opportunité? N'hésitez pas à me contacter.",
  availability: {
    status: "Disponible",
    description:
      "Ouvert aux nouvelles opportunités en hydroélectricité, énergies renouvelables (solaire), et missions de consulting en ingénierie électrique.",
  },
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Mikael Azanfack.`,
  madeWith: "Fait avec",
  location: "au Cameroun",
};

export const navigation = [
  { label: "Accueil", id: "hero" },
  { label: "À Propos", id: "about" },
  { label: "Expérience", id: "experience" },
  { label: "Compétences", id: "skills" },
  { label: "Projets", id: "projects" },
  { label: "Formation", id: "education" },
  { label: "Contact", id: "contact" },
];
