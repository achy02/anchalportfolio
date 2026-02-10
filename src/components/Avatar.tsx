
import { motion } from 'framer-motion';

export const Avatar = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Floating Cyber Elements */}
                <motion.g
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Base Hood/Head */}
                    <defs>
                        <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>

                    <circle cx="100" cy="90" r="50" fill="url(#cyber-grad)" className="opacity-20" />
                    <path d="M50 200 C50 160 80 140 100 140 C120 140 150 160 150 200" fill="#1e293b" />
                    <path d="M60 140 C60 100 70 60 100 60 C130 60 140 100 140 140" fill="#0f172a" />

                    {/* Glowing Visor */}
                    <motion.rect
                        x="70" y="95" width="60" height="15" rx="5"
                        fill="#0ea5e9"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Holographic Interface Circles */}
                    <motion.circle
                        cx="100" cy="100" r="70"
                        fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                        cx="100" cy="100" r="60"
                        fill="none" stroke="#d946ef" strokeWidth="1" strokeDasharray="10 5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Shield Icon Floating */}
                    <motion.path
                        d="M160 60 L180 70 V90 C180 105 170 115 160 120 C150 115 140 105 140 90 V70 L160 60"
                        fill="url(#cyber-grad)"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />

                    {/* Code Symbols */}
                    <motion.text x="30" y="80" fill="#10b981" fontSize="14" fontWeight="bold" opacity="0.8">{`</>`}</motion.text>
                    <motion.text x="160" y="150" fill="#f59e0b" fontSize="12" fontWeight="bold" opacity="0.8">{`{ }`}</motion.text>
                </motion.g>
            </motion.svg>
        </div>
    );
};
