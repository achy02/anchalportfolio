import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: "FyreGig",
      role: "UI/UX Designer Intern",
      location: "Remote",
      duration: "Dec 2024 – Feb 2025",
      type: "Internship",
      description: [
        "Designed a comprehensive end-to-end UI/UX experience for the Fundsmama mobile app and website using Figma, focusing on user accessibility, seamless navigation, and an intuitive interface.",
        "Developed wireframes, interactive prototypes, and high-fidelity responsive designs, ensuring a consistent experience across devices.",
        "Conducted user research, usability testing, and iterative design improvements to enhance user engagement and retention.",
        "Collaborated closely with developers, product managers, and stakeholders to align design decisions with business objectives and technical feasibility.",
        "Ensured the successful implementation of a fully functional, live platform, optimizing the design for real-world use."
      ],
      skills: ["Figma", "UI/UX Design", "User Research", "Prototyping", "Responsive Design"],
      color: "bg-gradient-primary"
    },
    {
      company: "AD Infotech",
      role: "Developer Intern",
      location: "Remote",
      duration: "June 2022 – August 2022",
      type: "Internship",
      description: [
        "Assisted in development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.",
        "Worked with Google Firebase to manage user inputted data across multiple platforms including web and mobile apps.",
        "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
        "Utilized Android Studio as a development environment in order to visualize the application in both iOS and Android."
      ],
      skills: ["Flutter", "Dart", "Firebase", "Git", "Android Studio", "iOS Development"],
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey in design and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-8 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background"></div>
                  
                  {/* Experience card */}
                  <div className="ml-12 md:ml-20">
                    <Card className="portfolio-card group">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Building2 className="w-5 h-5 text-primary" />
                              <h3 className="text-2xl font-bold text-gradient-primary">
                                {exp.company}
                              </h3>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <ul className="space-y-3">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h5 className="font-semibold mb-3 text-sm">Technologies & Skills:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="tech-skill text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};