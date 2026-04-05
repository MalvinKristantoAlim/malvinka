/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Code, 
  Trophy, 
  ExternalLink, 
  ChevronRight, 
  Cpu, 
  Binary,
  GraduationCap,
  Menu,
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import ContactSection from './ContactSection';
import { PortfolioData } from './types';

export default function App() {
  const DEFAULTS = {
    profileImage: './public/profile.jpeg',
    anomaniImage: './public/anomanfoto.jpeg',
    raiseImage: './public/raisenomani.jpeg',
  };

  const [data] = useState<PortfolioData>(DEFAULTS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const hoverScale = {
    scale: 1.02,
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <div id="home" className="min-h-screen relative overflow-hidden bg-obsidian">
      {/* Ambient Glows */}
      <div className="ambient-glow w-[500px] h-[500px] -top-48 -left-48" />
      <div className="ambient-glow w-[400px] h-[400px] top-1/2 -right-48 opacity-10" />
      <div className="ambient-glow w-[600px] h-[600px] -bottom-48 left-1/3 opacity-15" />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center nav-glass px-6 py-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-emerald-accent rounded-lg flex items-center justify-center text-obsidian font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              M
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">MALVIN.K.A</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 glass p-6 md:hidden z-50 flex flex-col gap-4"
            >
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-display font-bold text-white hover:text-emerald-400 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {/* Hero Section - Bento Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={hoverScale}
            className="md:col-span-8 glass p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group glass-hover"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Binary size={160} className="text-emerald-accent" />
            </div>
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-accent/10 border border-emerald-accent/20 text-emerald-accent text-[10px] font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={12} className="animate-pulse" />
                Available for Collaboration
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
                Malvin Kristanto <br />
                <span className="text-gradient">Alim</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-medium">
                Siswa Kelas 12 SMA & Calon Lulusan yang berdedikasi tinggi dalam mengeksplorasi sinergi antara <span className="text-emerald-400">Informatika</span> dan <span className="text-emerald-400">Matematika</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-emerald-accent text-obsidian font-extrabold rounded-2xl hover:bg-emerald-400 transition-all flex items-center gap-2 group shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)]">
                  Contact Me <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="px-8 py-4 border border-emerald-border rounded-2xl font-extrabold text-white hover:bg-emerald-glass transition-all backdrop-blur-sm">
                  View Projects
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image - Bento Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={hoverScale}
            className="md:col-span-4 glass overflow-hidden relative group glass-hover min-h-[300px]"
          >
            {data.profileImage ? (
              <img 
                src={data.profileImage} 
                alt="Malvin Kristanto Alim" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-emerald-accent/5">
                <Cpu size={64} className="text-emerald-accent/20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-[10px] font-black text-emerald-accent uppercase tracking-[0.2em] mb-2">Based in Indonesia</p>
              <h3 className="text-2xl font-black text-white">Grade 12 Student</h3>
            </div>
          </motion.div>

          {/* Skills - Bento Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={hoverScale}
            className="md:col-span-4 glass p-8 glass-hover flex flex-col"
          >
            <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-white">
              <div className="p-2 bg-emerald-accent/10 rounded-lg text-emerald-accent">
                <Code size={20} />
              </div>
              Coding Skills
            </h3>
            <div className="space-y-5 flex-grow">
              {[
                { name: 'React', level: '90%' },
                { name: 'TypeScript', level: '85%' },
                { name: 'Tailwind CSS', level: '95%' },
                { name: 'Python', level: '80%' },
                { name: 'SQL', level: '75%' }
              ].map(skill => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                    <span className="text-xs font-black text-emerald-400">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8 flex flex-wrap gap-2">
              {['Algorithms', 'Data Analysis', 'SPLDV', 'Logic'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-emerald-accent/5 border border-emerald-border rounded-lg text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Highlight - Bento Box */}
          <motion.div 
            id="projects"
            variants={itemVariants}
            whileHover={hoverScale}
            className="md:col-span-8 glass p-8 md:p-10 relative group overflow-hidden glass-hover"
          >
            <div className="flex flex-col lg:flex-row gap-10 h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-accent mb-6">
                    <Calculator size={20} className="glow-emerald" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Featured Project</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-white">ANOMANI PROJECT 2025</h2>
                  <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                    Analisis mendalam terhadap packaging minuman cincau <span className="text-white font-bold">NIKI ECHO</span> menggunakan konsep matematika <span className="text-emerald-400 font-bold">SPLDV</span> untuk optimasi efisiensi material dan biaya produksi.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-emerald-accent font-black text-sm uppercase tracking-widest hover:gap-4 transition-all group/btn">
                    Case Study <ArrowUpRight size={18} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="flex-1 rounded-[1.5rem] overflow-hidden border border-emerald-border relative min-h-[250px] shadow-2xl">
                {data.anomaniImage ? (
                  <img 
                    src={data.anomaniImage} 
                    alt="Anomani Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-emerald-accent/5 flex items-center justify-center">
                    <Calculator size={48} className="text-emerald-accent/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Achievement - Bento Box */}
          <motion.div 
            id="achievements"
            variants={itemVariants}
            whileHover={hoverScale}
            className="md:col-span-6 glass p-8 md:p-10 relative overflow-hidden group glass-hover"
          >
            <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
              <Trophy size={200} className="text-emerald-accent" />
            </div>
            <div className="flex items-center gap-2 text-emerald-accent mb-8">
              <Trophy size={20} className="glow-emerald" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Achievement</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-white">Finalis Lomba RAISE 2025</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Berhasil menjadi finalis dalam kompetisi Accounting Nasional bergengsi, menunjukkan kemampuan analisis finansial dan akurasi matematis di tingkat nasional.
            </p>
            <div className="rounded-[1.5rem] overflow-hidden border border-emerald-border aspect-video mb-4 shadow-2xl">
              {data.raiseImage ? (
                <img 
                  src={data.raiseImage} 
                  alt="RAISE 2025" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-emerald-accent/5 flex items-center justify-center">
                  <GraduationCap size={48} className="text-emerald-accent/20" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Education - Bento Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={hoverScale}
            className="md:col-span-6 glass p-8 md:p-10 flex flex-col justify-between glass-hover"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-accent mb-10">
                <GraduationCap size={20} className="glow-emerald" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Education</span>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-emerald-accent/30 group/edu">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-accent border-4 border-obsidian group-hover/edu:scale-125 transition-transform" />
                  <p className="text-[10px] text-emerald-400 font-black mb-2 tracking-widest">2022 - PRESENT</p>
                  <h4 className="text-xl font-black text-white mb-1">SMAK FRATERAN SURABAYA</h4>
                  <p className="text-sm text-gray-400 font-medium">Grade 12 Student focusing on Mathematics and Informatics.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-emerald-accent/10 group/edu">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white/10 border-4 border-obsidian group-hover/edu:scale-125 transition-transform" />
                  <p className="text-[10px] text-gray-500 font-black mb-2 tracking-widest uppercase">UPCOMING</p>
                  <h4 className="text-xl font-black text-white/60 mb-1">UNIVERSITAS SURABAYA</h4>
                  <p className="text-sm text-gray-500 font-medium">Targeting Computer Science or Applied Mathematics.</p>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <div className="p-5 rounded-[1.25rem] bg-emerald-accent/5 border border-emerald-border flex items-center gap-5 group/card">
                <div className="w-12 h-12 rounded-xl bg-emerald-accent flex items-center justify-center text-obsidian shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover/card:scale-110 transition-transform">
                  <Calculator size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Mathematical Precision</p>
                  <p className="text-xs text-gray-500 font-medium tracking-wide">Applied to real-world problems.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <footer className="py-12 border-t border-white/5 relative z-10 bg-obsidian/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-accent/10 rounded-lg flex items-center justify-center text-emerald-accent border border-emerald-accent/20">
              M
            </div>
            <p className="text-sm font-bold text-gray-400">
              © 2025 Malvin Kristanto Alim. <span className="text-emerald-500/50">Built with Precision.</span>
            </p>
          </div>
          <div className="flex items-center gap-8">
            {['GitHub', 'LinkedIn', 'Instagram'].map(platform => (
              <a 
                key={platform}
                href={`https://${platform.toLowerCase()}.com/${platform === 'LinkedIn' ? 'in/malvin-k-a' : platform === 'Instagram' ? 'heymalvin_' : 'MalvinKristantoAlim'}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-emerald-400 transition-all hover:-translate-y-1"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
