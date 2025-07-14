import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, MapPin, BadgeCheck, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer blending cybersecurity knowledge with user-focused design and modern development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Journey, Education, Stats */}
          <div className="space-y-6">
            {/* My Journey Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    My Journey
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I’m <span className="font-semibold text-primary">Anchal Tiwari</span>, a motivated developer and designer. I began my technical journey at <span className="font-semibold">Vidyalankar Polytechnic</span>, earning a diploma in Computer Engineering in 2023. During my internship, I discovered Flutter and started building real-world mobile apps.
                    <br /><br />
                    In 2023, I joined <span className="font-semibold">Thakur College of Engineering</span> as a direct second-year entrant in Computer Science with a focus on Cybersecurity. I’ve also worked as the <span className="font-semibold">lead UI/UX designer intern at FyreGig</span>, designing the Fundsmama app and website end-to-end using Figma. This experience helped me combine design thinking with secure development principles.
                    <br /><br />
                    Today, I continue to sharpen my skills in cybersecurity and frontend engineering, with a long-term goal of creating secure, elegant, and user-friendly digital solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Education
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-lg font-semibold text-primary">Thakur College of Engineering</h4>
                          <p className="text-muted-foreground">B.E in Computer Science and Engineering (Cybersecurity)</p>
                          <p className="text-sm text-muted-foreground">2023 - 2026</p>
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
            </motion.div>

            {/* Quick Stats */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
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
            </motion.div>
          </div>

          {/* Right side - Skills and Achievements */}
          <div className="space-y-6">
            {/* Core Competencies */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    Core Competencies
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Full-Stack Development</h4>
                      <p className="text-muted-foreground text-sm">
                        Proficient in Flutter, React, and modern web technologies. I focus on clean code, performance, and responsive user experiences.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">UI/UX Design</h4>
                      <p className="text-muted-foreground text-sm">
                        Skilled in Figma and design systems. I translate user needs into accessible, beautiful interfaces backed by strong research.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Cybersecurity</h4>
                      <p className="text-muted-foreground text-sm">
                        Knowledge of application security, threat modeling, and secure development practices. I strive to write secure, reliable code.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Recent Achievements
                  </h3>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
