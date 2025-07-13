import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-tech-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-tech-cyan/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          {/* Main heading with animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient-primary">Anchal</span>{' '}
              <span className="text-foreground">Tiwari</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6">
              <span className="inline-block animate-pulse">💻</span> Full-Stack Developer & UI/UX Designer
            </div>
          </div>

          {/* Animated description */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Computer Science Engineering student specializing in Cybersecurity with expertise in 
              <span className="text-gradient-secondary font-semibold"> Flutter, React, and UI/UX Design</span>. 
              Passionate about creating secure, user-friendly applications.
            </p>
          </div>

          {/* Contact info and social links */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm md:text-base">
              <a 
                href="tel:+917021248560" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                📞 +91 7021248560
              </a>
              <span className="text-border">|</span>
              <a 
                href="mailto:anchalvtiwari@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                ✉️ anchalvtiwari@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary border-0 text-white hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/anchal-tiwari" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="gradient-border hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/achy02" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:anchalvtiwari@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-secondary border-0 text-white hover:scale-105 transition-all duration-300 animate-pulse-glow"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce hover:scale-110 transition-transform duration-300"
            >
              <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
