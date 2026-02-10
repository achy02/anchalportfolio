import { motion } from 'framer-motion';

const CyberCharacter = () => {
    return (
        <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 rounded-full animate-pulse" />

            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]"
            >
                {/* Head */}
                <motion.path
                    d="M50 20 L55 25 L50 30 L45 25 Z"
                    fill="#00f3ff"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Body */}
                <motion.path
                    d="M50 30 L60 45 L50 60 L40 45 Z"
                    stroke="#00f3ff"
                    strokeWidth="2"
                    fill="rgba(0, 243, 255, 0.2)"
                />

                {/* Left Arm */}
                <motion.path
                    d="M40 45 L30 55"
                    stroke="#00f3ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Right Arm */}
                <motion.path
                    d="M60 45 L70 55"
                    stroke="#00f3ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ rotate: [0, -20, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Legs - Running Animation */}
                <motion.path
                    d="M50 60 L40 80"
                    stroke="#00f3ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ d: ["M50 60 L45 80", "M50 60 L55 75", "M50 60 L45 80"] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                />

                <motion.path
                    d="M50 60 L60 80"
                    stroke="#00f3ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ d: ["M50 60 L55 75", "M50 60 L45 80", "M50 60 L55 75"] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};

export default CyberCharacter;
