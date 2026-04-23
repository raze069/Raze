/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Play, MonitorPlay, PenTool, Mail, ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import CustomYouTubeEmbed from './components/CustomYouTubeEmbed';
import MagneticButton from './components/MagneticButton';
import ContactButtons from './components/ContactButtons';
import { PROJECTS, Project } from './data';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeShowreel, setActiveShowreel] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Modal Scroll Lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen relative selection:bg-white/20 selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/80 origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* Liquid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transform-gpu translate-z-0">
        <div className="liquid-blob blob-1"></div>
        <div className="liquid-blob blob-2"></div>
        <div className="liquid-blob blob-3"></div>
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none transform-gpu" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>
      
      <CustomCursor />

      {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 flex justify-center">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-full px-5 py-3 md:px-6 flex items-center gap-4 md:gap-6 w-[90%] md:w-auto justify-center max-w-md"
        >
          <a href="#hero" className="font-serif font-bold text-lg tracking-widest hover:text-white/80 transition-colors">R.</a>
          <div className="w-px h-3 bg-white/20"></div>
          <div className="flex gap-3 md:gap-5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/70">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </motion.div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen relative flex items-center justify-center px-4 md:px-16 lg:px-24 pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20">
            <div className="w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Corner Labels (Hero only) */}
          <div className="absolute inset-0 pointer-events-none z-20 p-8 hidden md:flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.2 }}
                className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white font-medium flex items-center gap-3"
              >
                <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                AVAILABILITY: OPEN
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.3 }}
                className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white font-medium"
              >
                @RAZEFOREAL
              </motion.div>
            </div>
            <div className="flex justify-between items-end">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start text-left space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-px bg-white/40"></div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-medium">
                    Video Editor & Graphics Designer
                  </p>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="font-serif text-[50px] md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-white"
                >
                  Crafting <br />
                  <span className="text-white/40 italic font-light">Visual</span> <br />
                  Stories
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="max-w-md text-white/60 text-[11px] uppercase tracking-[0.3em] leading-relaxed"
              >
                I help brands and creators turn raw ideas into high-impact, polished content that stands out in the digital landscape.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="pt-4 flex flex-wrap items-center gap-4 md:gap-6"
              >
                <MagneticButton>
                  <a href="#showreel" className="glass-button animate-border-glow rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
                    View Showreel <Play className="w-3 h-3" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#contact" className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end lg:-mt-8"
            >
              <div className="relative w-full max-w-[450px] lg:max-w-none h-[350px] md:h-[450px] lg:h-[550px] rounded-3xl md:rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 border border-white/10 rounded-3xl md:rounded-[2rem] z-20 group-hover:border-white/20 transition-colors duration-500"></div>
                <img 
                  src="https://i.ibb.co/zTk2rWkK/9-2.png" 
                  alt="Portrait"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 transform-gpu"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Name Label */}
                <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-30">
                  <p className="text-white font-serif text-3xl md:text-4xl tracking-tight drop-shadow-2xl">Jenish Sahukhal</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.3em] mt-2">Director & Editor</p>
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-30 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2.5 border border-white/10 shadow-xl"
                >
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/90 font-medium">Available for work</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Showreel Section - Carousel Layout */}
        <section id="showreel" className="py-16 md:py-20 px-4 md:px-16 lg:px-24 relative z-20 overflow-hidden render-optimized">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="font-serif text-5xl md:text-[75px] italic leading-[1] md:leading-[25px] mb-0 pb-[12px] tracking-tighter">
                <span className="block text-white/40 italic text-xl md:text-3xl mb-2 md:mb-4 tracking-normal">The</span>
                Showreels
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[280px] sm:h-[320px] md:h-[450px] flex items-center justify-center w-full"
            >
              {/* Navigation Arrows */}
              <MagneticButton 
                onClick={() => setActiveShowreel((prev) => (prev - 1 + 3) % 3)}
                className="absolute left-0 md:left-8 top-1/2 -translate-y-[calc(50%+2rem)] md:-translate-y-[calc(50%+4rem)] z-30 p-2 md:p-4 rounded-full bg-black/40 md:bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors" />
              </MagneticButton>
              
              <MagneticButton 
                onClick={() => setActiveShowreel((prev) => (prev + 1) % 3)}
                className="absolute right-0 md:right-8 top-1/2 -translate-y-[calc(50%+2rem)] md:-translate-y-[calc(50%+4rem)] z-30 p-2 md:p-4 rounded-full bg-black/40 md:bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors" />
              </MagneticButton>

              <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                {[
                  { id: "do78TF5cJl8", title: "Personal Brand Showreel" },
                  { id: "5H2B1owjTg4", title: "Cinematic Showreel" },
                  { id: "iMr7fRWRWLU", title: "Creative Showreel" },
                ].map((video, i) => {
                  const isActive = activeShowreel === i;
                  const isLeft = (activeShowreel - 1 + 3) % 3 === i;
                  const isRight = (activeShowreel + 1) % 3 === i;

                  return (
                    <motion.div
                      key={i}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(e, info) => {
                        if (info.offset.x < -50) {
                          setActiveShowreel((prev) => (prev + 1) % 3);
                        } else if (info.offset.x > 50) {
                          setActiveShowreel((prev) => (prev - 1 + 3) % 3);
                        }
                      }}
                      initial={false}
                      animate={{
                        x: isActive ? "0%" : isLeft ? "-60%" : "60%",
                        scale: isActive ? 1 : 0.85,
                        zIndex: isActive ? 10 : 5,
                        opacity: isActive ? 1 : 0.6,
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                        mass: 1
                      }}
                      className="absolute w-[85%] md:w-[65%] max-w-[800px] cursor-pointer"
                      onClick={() => setActiveShowreel(i)}
                    >
                      <div className={`relative aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 ${isActive ? 'ring-1 ring-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)]' : 'ring-1 ring-white/5 pointer-events-none'}`}>
                        <CustomYouTubeEmbed
                          videoId={video.id}
                          title={video.title}
                          className="w-full h-full"
                          isActive={isActive}
                        />
                        {!isActive && <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>}
                      </div>
                      
                      <motion.div 
                        animate={{ 
                          opacity: isActive ? 1 : 0, 
                          y: isActive ? 0 : 30,
                          scale: isActive ? 1 : 0.95
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: isActive ? 0.15 : 0,
                          ease: "easeOut"
                        }}
                        className="mt-6 md:mt-8 flex justify-between items-end pointer-events-none px-2"
                      >
                        <div className="text-left">
                          <div className="inline-flex items-center gap-3 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60">Now Playing</p>
                          </div>
                          <h3 className="font-serif text-2xl md:text-4xl text-white tracking-tight">{video.title}</h3>
                        </div>
                        <div className="text-right hidden md:block">
                          <p className="text-5xl font-light text-white/10 font-mono">0{i + 1}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Carousel Controls */}
            {/* Removed carousel controls as requested */}
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-20 md:py-32 px-4 md:px-16 lg:px-24 render-optimized">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 md:gap-8"
            >
              <h2 className="font-serif text-5xl md:text-[75px] italic font-normal mt-0 pt-0 pb-0 leading-[1] md:leading-[30px] tracking-tighter">
                <span className="block text-white/40 italic text-xl md:text-3xl mb-2 md:mb-4 tracking-normal">Featured</span>
                Selected Works
              </h2>
              <p className="max-w-xs text-white/60 text-[11px] uppercase tracking-[0.3em] leading-relaxed mt-0 pt-0 pb-0 mb-3">
                A collection of high-impact visual stories and cinematic identities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={i}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
                  className={`group relative ${project.colSpan} ${project.heightClass.replace('h-[400px]', 'h-[350px]').replace('lg:h-[460px]', 'lg:h-[400px]').replace('lg:h-[450px]', 'lg:h-[400px]')} rounded-[2rem] overflow-hidden cursor-pointer`}
                >
                  {/* Image Container with Parallax Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img 
                      src={project.img} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      initial={{ scale: 1.3 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-700 transform-gpu"
                    />
                  </div>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 border border-white/5 group-hover:border-white/30 transition-colors duration-500 rounded-[2rem]"></div>
                  
                  {/* Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end ${project.isLarge ? 'p-8 md:p-12' : 'p-6 md:p-8'}`}>
                    <div className="relative z-10">
                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-4"
                      >
                        <div className="w-8 h-px bg-white/20 group-hover:bg-white/60 group-hover:w-12 transition-all duration-500"></div>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors duration-500">{project.category}</p>
                      </motion.div>
                      
                      <div className="flex items-end justify-between">
                        <h3 className={`font-serif tracking-tighter leading-none transform group-hover:-translate-y-2 text-white/90 group-hover:text-white transition-all duration-500 pt-0 mt-0 -mb-5 ${project.isLarge ? 'text-[30px] md:text-4xl lg:text-5xl' : 'text-[30px] md:text-3xl'}`}>
                          {project.title}
                        </h3>
                        <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-widest text-white/0 group-hover:text-white transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 md:py-32 px-4 md:px-16 lg:px-24 render-optimized">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-end mb-16 md:mb-24"
            >
              <h2 className="font-serif text-5xl md:text-[75px] italic no-underline leading-[1] md:leading-[25px] tracking-tighter flex-1">
                <span className="block text-white/40 italic text-xl md:text-3xl mb-2 md:mb-4 tracking-normal">The</span>
                Discipline
              </h2>
              <p className="max-w-md text-white/60 text-[11px] uppercase tracking-[0.3em] leading-relaxed md:-mb-2.5 pb-0 mb-4">
                A specialized approach that bridges the gap between high-retention viral content and high-end cinematic storytelling.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-[2rem] md:rounded-3xl p-6 md:p-10 group"
              >
                <MonitorPlay className="w-10 h-10 text-white/40 mb-8 group-hover:text-white transition-colors" />
                <h3 className="font-serif mb-4 text-2xl md:text-[32px] italic">Video Editing</h3>
                <p className="text-white/70 leading-relaxed mb-8 font-sans text-sm md:text-[15px]">
                  Engineered for the modern feed. From high-retention, fast-paced viral hooks that stop the scroll to cinematic narratives that leave a lasting legacy.
                </p>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40"></div> High-Retention Hook Strategy</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40"></div> Viral Pacing & Sound Design</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40"></div> Cinematic Color Grading</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-[2rem] md:rounded-3xl p-6 md:p-10 group"
              >
                <PenTool className="w-10 h-10 text-white/40 mb-8 group-hover:text-white transition-colors" />
                <h3 className="font-serif mb-4 text-2xl md:text-[32px] italic">Graphic Design</h3>
                <p className="text-white/70 leading-relaxed mb-8 text-sm md:text-[15px]">
                  Creating striking visual identities, key art, and digital assets that demand attention and communicate complex ideas instantly.
                </p>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40"></div> Brand Identity & Typography</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40"></div> Key Art & Poster Design</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40"></div> UI/UX Visuals</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 md:px-16 lg:px-24 relative render-optimized">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-panel rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden mx-0 md:mx-auto"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <h2 className="font-serif text-[40px] md:text-6xl tracking-tight mb-4 md:mb-6 relative z-10">
                Let's create <br/><span className="italic text-white/60">something</span> iconic.
              </h2>
              <p className="text-sm font-normal not-italic text-white/70 mb-12 max-w-md mx-auto relative z-10">
                Currently available for freelance projects and collaborations worldwide.
              </p>
              
              <ContactButtons />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 px-4 md:px-16 lg:px-24 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[8px] md:text-xs uppercase tracking-[0.2em] text-white/60 gap-4 md:gap-0">
          <p>&copy; {new Date().getFullYear()} Raze. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 mt-2 md:mt-0">
            <a href="https://www.instagram.com/razeforeal/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://drive.google.com/drive/folders/1ZXImsJ9Pfe4tVw4-ni97JndrUuJTaTTY?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Drive</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>
        </footer>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl md:rounded-[2rem] p-4 md:p-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="mb-8 md:mb-10 pr-10 md:pr-12">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 mb-2">{selectedProject.category}</p>
                <h3 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6">{selectedProject.title}</h3>
                <p className="text-white/70 leading-relaxed max-w-2xl text-xs md:text-sm">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {selectedProject.videos.map((videoId, idx) => (
                  <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/10">
                    <CustomYouTubeEmbed
                      videoId={videoId}
                      title={`${selectedProject.title} Video ${idx + 1}`}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
