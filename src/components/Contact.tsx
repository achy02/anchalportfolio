import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "anchalvtiwari@gmail.com",
      link: "mailto:anchalvtiwari@gmail.com",
      description: "Best way to reach me for professional inquiries",
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7021248560",
      link: "tel:+917021248560",
      description: "Available for calls during business hours",
      color: "text-tech-green",
      bgColor: "bg-tech-green/10"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/anchal-tiwari",
      description: "Professional networking and updates",
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "View my projects",
      link: "https://github.com/achy02",
      description: "Check out my code and contributions",
      color: "text-tech-cyan",
      bgColor: "bg-tech-cyan/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on something amazing together
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact info */}
            <div className="space-y-8">
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Let's Talk</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always interested in new opportunities, collaborations, and interesting projects. 
                    Whether you have a question, want to discuss a project, or just want to say hello, 
                    I'd love to hear from you!
                  </p>

                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="group">
                        <a 
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <div className={`p-3 rounded-lg ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                            <div className={method.color}>
                              {method.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              {method.title}
                            </h4>
                            <p className="font-medium text-sm mb-1">{method.value}</p>
                            <p className="text-muted-foreground text-xs">{method.description}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick contact buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:bg-gradient-secondary border-0 text-white hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:anchalvtiwari@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="gradient-border hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/anchal-tiwari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Additional info */}
            <div className="space-y-8">
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Currently Based</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">🏙️ Mumbai, India</h4>
                      <p className="text-muted-foreground text-sm">
                        Available for remote work and local collaborations
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">🎓 Student Status</h4>
                      <p className="text-muted-foreground text-sm">
                        Final year Computer Science Engineering student, graduating in 2026
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">💼 Open To</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          "Full-time Opportunities",
                          "Internships",
                          "Freelance Projects",
                          "Collaborations"
                        ].map((item, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What I Can Help With</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Mobile App Development</h4>
                        <p className="text-muted-foreground text-xs">Flutter, React Native, cross-platform solutions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">UI/UX Design</h4>
                        <p className="text-muted-foreground text-xs">User research, prototyping, responsive design</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Web Development</h4>
                        <p className="text-muted-foreground text-xs">React, TypeScript, modern web technologies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Security Consulting</h4>
                        <p className="text-muted-foreground text-xs">Vulnerability assessment, security analysis</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 p-8 bg-gradient-primary rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start something amazing?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that make a difference. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="mailto:anchalvtiwari@gmail.com">
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
