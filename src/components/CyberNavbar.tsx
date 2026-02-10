import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCpu, FiLayout, FiCode, FiFileText, FiMail } from 'react-icons/fi';

const navItems = [
    { id: 'home', label: 'HOME', icon: FiHome, color: 'hover:text-cyan-400' },
    { id: 'about', label: 'ABOUT ME', icon: FiUser, color: 'hover:text-violet-500' },
    { id: 'skills', label: 'SKILLS', icon: FiCpu, color: 'hover:text-green-400' },
    { id: 'designs', label: 'DESIGNS', icon: FiLayout, color: 'hover:text-purple-400' },
    { id: 'projects', label: 'PROJECTS', icon: FiCode, color: 'hover:text-yellow-400' },
    { id: 'resume', label: 'RESUME', icon: FiFileText, color: 'hover:text-orange-400', isLink: true, href: '/resume.pdf' },
    { id: 'contact', label: 'CONTACT', icon: FiMail, color: 'hover:text-red-400' },
];

const CyberNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string, isLink?: boolean, href?: string) => {
        if (isLink && href) {
            window.open(href, '_blank');
            return;
        }
        const element = document.getElementById(id); // Simple ID lookup first

        // In our CyberHome, sections might not have IDs perfectly set up or might be further down.
        // However, assuming standard IDs are present. 
        if (element) {
            // Offset for fixed header
            const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
            setIsOpen(false);
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/30 py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                CYBER<span className="text-cyan-500">.PORTFOLIO</span>
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id, item.isLink, item.href)}
                                        className={`group relative px-4 py-2 rounded-md text-sm font-bold transition-colors text-slate-300 ${item.color}`}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {item.label}
                                        </span>
                                        {/* Hover Effect */}
                                        <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md"></span>
                                        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-cyan-500 p-2"
                            >
                                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden bg-black/95 border-b border-cyan-500/30 backdrop-blur-xl"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id, item.isLink, item.href)}
                                        className={`w-full text-left px-4 py-3 rounded-md text-base font-bold flex items-center gap-3 text-slate-300 ${item.color} hover:bg-white/5 transition-all`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default CyberNavbar;
