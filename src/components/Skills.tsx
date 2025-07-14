import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Shield, Database, Wrench, Smartphone } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    // {
    //   title: "Languages & Databases",
    //   icon: <Code2 className="w-6 h-6" />,
    //   color: "text-tech-blue",
    //   bgColor: "bg-tech-blue/10",
    //   skills: ["Dart", "Java", "TypeScript", "MongoDB", "Firebase", "SQL"],
    //   description: "Proficient in multiple programming languages and database technologies"
    // },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10",
      skills: ["VS Code", "Cursor", "Figma", "Android Studio", "Canva", "FlutterFlow", "Mobsf", "Zap", "Wireshark"],
      description: "Expert in development environments and design tools"
    },
    {
      title: "Technologies & Frameworks",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-tech-cyan",
      bgColor: "bg-tech-cyan/10",
      skills: ["Flutter", "React", "Ethical Hacking"],
      description: "Modern frameworks for cross-platform development"
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      color: "text-tech-green",
      bgColor: "bg-tech-green/10",
      skills: ["Figma", "User Research", "Prototyping", "Responsive Design", "Material UI", "Accessibility"],
      description: "Creating intuitive and accessible user experiences"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Analysis", "APK Scanning", "Network Security"],
      description: "Specialized knowledge in application and network security"
    },
    // {
    //   title: "Cloud & DevOps",
    //   icon: <Database className="w-6 h-6" />,
    //   color: "text-primary",
    //   bgColor: "bg-primary/10",
    //   skills: ["Firebase", "Git", "Version Control", "CI/CD", "Cloud Functions", "Real-time Databases"],
    //   description: "Cloud services and modern development workflows"
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="portfolio-card group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-gradient-primary transition-all duration-300">
                    {category.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="tech-skill text-xs hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Core <span className="text-gradient-primary">Competencies</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h4 className="font-semibold mb-6 text-primary">Development Expertise</h4>
                <div className="space-y-4">
                  {[
                    { skill: "Flutter/Dart", level: 90 },
                    { skill: "React/TypeScript", level: 85 },
                    { skill: "Firebase/NoSQL", level: 80 },
                    { skill: "Mobile Development", level: 88 }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h4 className="font-semibold mb-6 text-primary">Design & Security</h4>
                <div className="space-y-4">
                  {[
                    { skill: "UI/UX Design", level: 85 },
                    { skill: "Cybersecurity", level: 75 },
                    { skill: "User Research", level: 80 },
                    { skill: "Security Testing", level: 70 }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
