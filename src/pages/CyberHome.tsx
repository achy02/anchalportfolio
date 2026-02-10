import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CyberCharacter from '../components/CyberCharacter';
import CyberNavbar from '../components/CyberNavbar';
import CyberBackground from '../components/CyberBackground';
import { skills, projects, designs, aboutMe, experiences, achievements, quotes } from '../data/content';
import { FiGithub, FiLinkedin, FiExternalLink, FiFigma, FiAward, FiShield, FiTarget } from 'react-icons/fi';

const iconMap: { [key: string]: any } = {
    FiAward: FiAward,
    FiShield: FiShield,
    FiTarget: FiTarget
};

const CyberHome = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Character path/animation
    const characterScale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [1, 1.2, 0.8, 0.5]);
    const characterY = useTransform(smoothProgress, [0, 0.2], ["0%", "30%"]);
    const characterOpacity = useTransform(smoothProgress, [0.95, 1], [1, 0]);

    return (
        <div ref={containerRef} className="bg-slate-900 min-h-[500vh] relative overflow-hidden text-white font-rajdhani selection:bg-cyan-500 selection:text-black">

            <CyberNavbar />
            <CyberBackground />

            {/* Progress Bar */}
            <motion.div
                style={{ scaleX: smoothProgress }}
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50 shadow-[0_0_10px_#00f3ff]"
            />

            {/* Fixed Character */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                <motion.div style={{ scale: characterScale, y: characterY, opacity: characterOpacity }}>
                    <CyberCharacter />
                </motion.div>
            </div>

            {/* Hero Section */}
            <section id="home" className="h-screen flex flex-col items-center justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center p-8 bg-slate-900/50 backdrop-blur-md border border-cyan-500/30 rounded-xl box-neon-blue max-w-4xl mx-4"
                >
                    <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter shadow-cyan-500/50 drop-shadow-lg font-orbitron">
                        <span className="text-white">SYSTEM</span>.<span className="text-cyan-400">ONLINE</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-cyan-200 mb-8 font-light">
                        Welcome to the Digital Universe of <span className="text-neon-purple font-bold font-orbitron">Anchal Tiwari</span>
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#about" className="px-8 py-3 bg-cyan-500/10 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all rounded uppercase tracking-widest text-sm font-bold font-orbitron">
                            INITIALIZE SEQUENCE
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-4xl bg-black/60 backdrop-blur-xl p-10 border border-purple-500/30 rounded-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500 rounded-br-xl"></div>

                    <h2 className="text-4xl font-bold text-neon-purple mb-8 text-center font-orbitron">USER_PROFILE</h2>
                    <p className="text-lg text-slate-300 leading-relaxed text-center mb-8">
                        {aboutMe.bio}
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-mono text-cyan-400">
                        <div>
                            <span className="opacity-50 block text-xs">LOCATION</span>
                            {aboutMe.location}
                        </div>
                        <div>
                            <span className="opacity-50 block text-xs">EMAIL</span>
                            {aboutMe.email}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Skills Hologram Section */}
            <section id="skills" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-neon-blue mb-8 border-b border-cyan-500/30 pb-4 inline-block font-orbitron">SKILL_MATRIX</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-cyan-400 mb-2 font-bold text-sm uppercase tracking-wider">Frameworks & Core</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.frameworks.concat(skills.core).map((skill, i) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="px-3 py-1 border border-cyan-500/30 bg-cyan-900/20 rounded backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors cursor-default"
                                        >
                                            <span className="text-cyan-300 text-sm">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-neon-purple mb-2 font-bold text-sm uppercase tracking-wider">Languages & Tools</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.languages.concat(skills.tools).map((skill, i) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + i * 0.05 }}
                                            className="px-3 py-1 border border-violet-500/30 bg-violet-900/20 rounded backdrop-blur-sm hover:bg-violet-500/20 hover:border-violet-400 transition-colors cursor-default"
                                        >
                                            <span className="text-violet-300 text-sm">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hologram Visual */}
                    <motion.div
                        className="order-1 md:order-2 flex justify-center perspective-1000"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 transform-style-3d animate-spin-slow">
                            {/* Rings */}
                            <div className="absolute inset-0 border-2 border-cyan-500 rounded-full opacity-30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border-2 border-dashed border-neon-purple rounded-full opacity-30 animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-10 border border-cyan-200 rounded-full opacity-20 animate-pulse"></div>

                            {/* Core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                                <span className="text-cyan-400 font-bold text-xl tracking-widest z-10 drop-shadow-[0_0_10px_rgba(0,243,255,1)]">CORE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Timeline Section */}
            <section className="min-h-screen py-20 relative z-10 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold text-neon-purple mb-20 text-center shadow-purple-500/50 drop-shadow-md font-orbitron">EXPERIENCE_LOGS</h2>
                <div className="relative max-w-5xl w-full px-4">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className={`relative pl-24 md:pl-0 md:grid md:grid-cols-2 text-left ${index % 2 === 0 ? 'md:text-right' : ''} group`}
                            >
                                <div className={`${index % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 backdrop-blur-sm">
                                        <h3 className="text-xl text-cyan-400 font-bold tracking-wide">{exp.role}</h3>
                                        <h4 className="text-lg text-white font-semibold mb-2">{exp.company}</h4>
                                        <div className={`flex items-center gap-2 text-slate-400 font-mono text-xs mb-4 uppercase tracking-wider ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <span>{exp.duration}</span>
                                            <span>|</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <ul className={`text-sm text-slate-300 space-y-2 list-none inline-block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full -translate-x-1/2 mt-6 flex items-center justify-center bg-slate-900 border-2 z-10 transition-all duration-500
                        ${index % 2 === 0
                                        ? 'border-neon-purple group-hover:shadow-[0_0_15px_#8b5cf6] group-hover:bg-violet-900'
                                        : 'border-cyan-500 group-hover:shadow-[0_0_15px_#00f3ff] group-hover:bg-cyan-900'}`
                                }>
                                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-violet-500' : 'bg-cyan-500'}`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] font-orbitron">
                        ACHIEVEMENTS_UNLOCKED
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => {
                            const Icon = iconMap[achievement.icon] || FiAward;
                            return (
                                <motion.div
                                    key={achievement.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-slate-900/50 border border-yellow-500/30 p-8 rounded-xl backdrop-blur-sm text-center group hover:border-yellow-400 hover:bg-slate-800/80 transition-all"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 group-hover:bg-yellow-500/20 text-yellow-500 transition-colors">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                                    <p className="text-slate-400 text-sm">{achievement.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] font-orbitron">
                        PROJECT_DATABASE
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05, z: 20 }}
                                className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl backdrop-blur-md hover:border-cyan-500 hover:bg-slate-800/80 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400">
                                            <FiExternalLink />
                                        </a>
                                    )}
                                </div>
                                <p className="text-slate-400 text-sm mb-6 min-h-[60px]">{project.description}</p>

                                {project.tags && (
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag: string) => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Designs Section */}
            <section id="designs" className="min-h-screen py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] font-orbitron">
                        INTERFACE_DESIGNS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                        {designs.map((design, index) => (
                            <motion.div
                                key={design.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05, z: 20 }}
                                className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl backdrop-blur-md hover:border-violet-500 hover:bg-slate-800/80 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">{design.title}</h3>
                                    <a href={design.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400">
                                        <FiFigma />
                                    </a>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 min-h-[60px]">{design.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    <span className="text-xs px-2 py-1 bg-violet-900/20 text-violet-300 rounded border border-violet-700/50">UI/UX</span>
                                    <span className="text-xs px-2 py-1 bg-purple-900/20 text-purple-300 rounded border border-purple-700/50">Figma</span>
                                </div>

                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-violet-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-violet-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* System Logs / Quotes Section */}
            <section className="py-20 relative z-10 bg-slate-900/80 border-t border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-500 tracking-widest uppercase font-orbitron">
                        // SYSTEM_THOUGHTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {quotes.map((quote, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-black/40 border border-slate-800 p-6 rounded border-l-4 border-l-cyan-500/50"
                            >
                                <p className="text-slate-300 font-mono text-sm leading-relaxed mb-3">"{quote.text}"</p>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-cyan-500 font-bold">- {quote.author}</span>
                                    <span className="text-slate-600 uppercase tracking-wider">[{quote.category}]</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <section id="contact" className="py-20 bg-black/80 relative z-10 border-t border-slate-800 backdrop-blur-xl">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-white font-orbitron">TERMINATE_SESSION?</h2>
                    <p>Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                    </p>

                    <div className="flex justify-center gap-8 mb-12">
                        <a href={aboutMe.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_20px_#00f3ff] p-3 rounded-full transition-all bg-slate-900 border border-slate-700 hover:border-cyan-500">
                            <FiGithub size={28} />
                        </a>
                        <a href={aboutMe.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-purple hover:shadow-[0_0_20px_#8b5cf6] p-3 rounded-full transition-all bg-slate-900 border border-slate-700 hover:border-neon-purple">
                            <FiLinkedin size={28} />
                        </a>
                        <a href="https://figma.com/@anchalvtiwari" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 hover:shadow-[0_0_20px_#a855f7] p-3 rounded-full transition-all bg-slate-900 border border-slate-700 hover:border-purple-500">
                            <FiFigma size={28} />
                        </a>
                    </div>

                    <div className="max-w-2xl mx-auto border-t border-slate-800 pt-8 text-slate-500 text-sm">
                        <p className="mb-2">System Status: OPERATIONAL</p>
                        <p>© 2026 Anchal Tiwari. All rights reserved.</p>
                        {/* <p>Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                        </p> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CyberHome;

