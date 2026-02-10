
export const generatePattern = (id: number | string) => {
    const seeds = [
        { title: "Circuit", bg: "bg-slate-900", accent: "#3b82f6" },
        { title: "Net", bg: "bg-indigo-900", accent: "#8b5cf6" },
        { title: "Hex", bg: "bg-fuchsia-900", accent: "#d946ef" },
        { title: "Wave", bg: "bg-blue-900", accent: "#0ea5e9" },
        { title: "Dot", bg: "bg-emerald-900", accent: "#10b981" },
        { title: "Grid", bg: "bg-orange-900", accent: "#f97316" },
    ];

    const seed = seeds[Number(id) % seeds.length];

    return (
        <div className={`w-full h-full ${seed.bg} relative overflow-hidden flex items-center justify-center`}>
            <svg className="absolute inset-0 w-full h-full opacity-20" width="100%" height="100%">
                <pattern id={`pattern-${id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    {Number(id) % 3 === 0 && <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke={seed.accent} strokeWidth="2" fill="none" />}
                    {Number(id) % 3 === 1 && <circle cx="20" cy="20" r="2" fill={seed.accent} />}
                    {Number(id) % 3 === 2 && <path d="M0 0h40v40H0z" fill="none" stroke={seed.accent} strokeWidth="1" />}
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${id})`} />
            </svg>
            <div className="z-10 text-white opacity-20 transform rotate-12 text-9xl font-bold select-none pointer-events-none">
                {String(id).padStart(2, '0')}
            </div>
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full`}></div>
            <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full`}></div>
        </div>
    );
};
