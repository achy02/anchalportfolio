
const Background = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-white dark:bg-gray-950">
            {/* Animated Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/30 blur-[120px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/30 blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-500/30 blur-[120px] animate-blob animation-delay-4000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
    );
};

export default Background;
