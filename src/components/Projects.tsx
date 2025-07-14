import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "BlueCollar",
      description: "A comprehensive job platform connecting blue-collar workers with employers, featuring real-time location-based matching and secure verification systems.",
      longDescription: [
        "Design and Implemented the BlueCollar App developed a user-friendly interface for both job seekers and employers, promoting transparent communication.",
        "Streamlined the job search process with Real-Time Location-Based features and advanced matching algorithms.",
        "Leveraged Firestore Database for secure and organized storage, ensuring the integrity of critical data.",
        "Established an Admin panel for verification purposes, enhancing security and ensuring hirers can view verified profiles only."
      ],
      technologies: ["Dart", "Firebase", "ReactJs", "Figma"],
      date: "January 2023",
      githubUrl: "https://github.com/achy02/BlueCollar",
      liveUrl: "https://github.com/achy02/BlueCollar",
      image: "🔧",
      category: "Full-Stack"
    },
    {
      title: "Eyeshine",
      description: "An AI-powered mobile application designed to assist visually impaired users with object detection, face recognition, and volunteer support systems.",
      longDescription: [
        "The app uses the Gemini API for real-time object detection, providing audio feedback to help visually impaired users identify objects and obstacles.",
        "It features face recognition technology that allows users to recognize familiar individuals, improving social interactions.",
        "A volunteer support system connects users with local volunteers who assist with daily tasks like grocery shopping, medical appointments, and errands."
      ],
      technologies: ["Dart", "MongoDB", "Figma", "Gemini API", "AI/ML"],
      date: "September 2024",
      githubUrl: "https://github.com/achy02/Eyeshine",
      liveUrl: "https://github.com/achy02/Eyeshine",
      image: "👁️",
      category: "AI/Accessibility"
    },
    {
      title: "AppShield Scan",
      description: "A comprehensive mobile security solution for scanning Android APKs, detecting vulnerabilities, and providing detailed threat analysis reports.",
      longDescription: [
        "Built a mobile app to upload and scan Android APKs for security vulnerabilities with secure user authentication.",
        "Developed a real-time analysis engine for threat detection and risk reporting.",
        "Integrated MongoDB for user management and scan history with optimized schema design and indexing.",
        "Designed a clean Material UI with real-time progress and interactive vulnerability reports."
      ],
      technologies: ["Dart", "MongoDB", "Figma", "Security Tools", "Material UI"],
      date: "April 2025",
      githubUrl: "https://github.com/achy02/AppShield-Scan",
      liveUrl: "https://github.com/achy02/AppShield-Scan",
      image: "🛡️",
      category: "Cybersecurity"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card group h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <CardTitle className="text-xl mb-1 group-hover:text-gradient-primary transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Short description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Detailed features */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.longDescription.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:bg-gradient-secondary border-0 text-white transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary hover:bg-gradient-secondary border-0 text-white hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/achy02" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
