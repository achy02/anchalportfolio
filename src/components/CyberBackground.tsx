import { useRef, useEffect } from 'react';
import { SiKalilinux, SiWireshark, SiPython, SiGnubash, SiReact, SiFlutter, SiDocker, SiFigma } from 'react-icons/si';

const CyberBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops: number[] = new Array(columns).fill(1);

        // Colorful characters
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;':,./<>?";
        const colors = ["#00f3ff", "#8b5cf6", "#00ff00", "#ffff00"]; // Cyan, Violet, Green, Yellow

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.fillStyle = color;
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030014]">
            {/* Matrix / Log Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

            {/* Floating Gradient Blobs for Color */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-cyan-600/40 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-600/40 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            {/* Floating Cyber Icons */}
            <div className="absolute inset-0">
                <FloatingIcon Icon={SiKalilinux} color="text-slate-400" top="10%" left="10%" delay={0} size={120} opacity={0.6} />
                <FloatingIcon Icon={SiWireshark} color="text-blue-500" top="20%" left="80%" delay={2} size={140} opacity={0.5} />
                <FloatingIcon Icon={SiPython} color="text-yellow-500" top="70%" left="15%" delay={5} size={110} opacity={0.6} />
                <FloatingIcon Icon={SiGnubash} color="text-green-500" top="50%" left="50%" delay={1} size={180} opacity={0.2} />
                <FloatingIcon Icon={SiDocker} color="text-blue-400" top="85%" left="75%" delay={3} size={100} opacity={0.6} />

                {/* Added for more color */}
                <FloatingIcon Icon={SiReact} color="text-cyan-400" top="30%" left="25%" delay={4} size={110} opacity={0.5} />
                <FloatingIcon Icon={SiFlutter} color="text-blue-400" top="60%" left="85%" delay={6} size={90} opacity={0.6} />
                <FloatingIcon Icon={SiFigma} color="text-violet-400" top="15%" left="60%" delay={2.5} size={90} opacity={0.6} />
            </div>

            {/* Scanline Overlay */}
            <div className="scanline" />
        </div>
    );
};

const FloatingIcon = ({ Icon, top, left, delay, size, color, opacity = 0.5 }: { Icon: any, top: string, left: string, delay: number, size: number, color: string, opacity?: number }) => {
    return (
        <div
            className={`absolute ${color} animate-float`}
            style={{
                top,
                left,
                fontSize: size,
                opacity,
                animationDelay: `${delay}s`,
                filter: 'drop-shadow(0 0 15px currentColor)'
            }}
        >
            <Icon />
        </div>
    );
}

export default CyberBackground;
