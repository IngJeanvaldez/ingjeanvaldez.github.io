import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Zap, Briefcase } from 'lucide-react';
import { personalInfo, contact } from '../content';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Personnel',
    value: personalInfo.emailPersonal,
    href: `mailto:${personalInfo.emailPersonal}`,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Briefcase,
    label: 'Email Professionnel',
    value: personalInfo.emailProfessional,
    href: `mailto:${personalInfo.emailProfessional}`,
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: personalInfo.phone,
    href: null,
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: personalInfo.location,
    href: null,
    color: 'from-amber-400 to-orange-500'
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {contact.title.split(' ')[0]} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{contact.title.split(' ')[1]}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 bg-gradient-to-br ${info.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-2">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-white font-medium hover:text-cyan-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-lg">Disponible</span>
              </div>
              <p className="text-slate-300">
                Ouvert aux nouvelles opportunités en hydroélectricité, énergies renouvelables (solaire), 
                et missions de consulting en ingénierie électrique.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2 text-slate-400 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              {/* <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 text-white"
              >
                <Zap className="w-5 h-5" />
                <span className="font-medium">Télécharger mon CV</span>
              </a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}