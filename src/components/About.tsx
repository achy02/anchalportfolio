import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a focus on cybersecurity and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Education Card */}
          <div className="space-y-6">
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-semibold text-primary">Mumbai University</h4>
                        <p className="text-muted-foreground">B.E in Computer Science and Engineering (Cybersecurity)</p>
                        <p className="text-sm text-muted-foreground">2022 - 2026</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <Award className="w-5 h-5 text-tech-green" />
                        <span className="font-semibold text-tech-green">CGPA: 9.32</span>
                        <span className="text-muted-foreground text-sm">(Till 5th Semester)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-secondary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side - Skills and Achievements */}
          <div className="space-y-6">
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Full-Stack Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Expert in Flutter, React, and modern web technologies with a focus on responsive design and performance optimization.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">UI/UX Design</h4>
                    <p className="text-muted-foreground text-sm">
                      Creating intuitive and accessible user interfaces using Figma, with strong emphasis on user research and testing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Cybersecurity</h4>
                    <p className="text-muted-foreground text-sm">
                      Specialized knowledge in application security, penetration testing, and secure development practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Recent Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">M-Indicator Hackathon 2024</h4>
                      <p className="text-muted-foreground text-sm">Finalist</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Final Year Project Exhibition 2023</h4>
                      <p className="text-muted-foreground text-sm">Runner Up</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Technical Committee Co-Ordinator</h4>
                      <p className="text-muted-foreground text-sm">Vidyalankar Polytechnic (2022)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};