import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Justify.ai",
      description: "AI platform to simplify legal texts into plain language.",
      longDescription: [
        "Simplifies complex legal jargon using Retrieval-Augmented Generation.",
        "Supports IPC, CrPC, IT Act references with OCR-powered PDF uploads.",
        "Multilingual output (English, Hindi, Marathi, etc.)",
        "Built with Next.js front-end and FastAPI + LangChain backend."
      ],
      technologies: ["Next.js", "TypeScript", "FastAPI", "LangChain", "Firebase"],
      date: "Mid 2025",
      githubUrl: "https://github.com/achy02/Justify.ai",
      liveUrl: "#",
      image: "⚖️",
      category: "AI/NLP"
    },
    {
      title: "Song‑Chords",
      description: "Cross‑platform Flutter app for viewing and organizing guitar chords.",
      longDescription: [
        "Displays song lyrics with chords in a clean UI.",
        "Supports search, browsing, and cross‑platform deployment.",
        "Modular architecture ready for extensions like transposition."
      ],
      technologies: ["Flutter", "Dart"],
      date: "Early 2025",
      githubUrl: "https://github.com/achy02/Song-Chords",
      liveUrl: "#",
      image: "🎸",
      category: "Mobile"
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
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

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

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-gradient-secondary border-0 text-white transition-all duration-300" asChild>
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

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-secondary border-0 text-white hover:scale-105 transition-all duration-300" asChild>
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
