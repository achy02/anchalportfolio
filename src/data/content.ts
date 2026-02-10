export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string | null;
}

export interface Design {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string | null;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  type: string;
  projectLink?: string | null;
  description: string[];
  skills: string[];
  color: string;
}

export const aboutMe = {
  title: "Cybersecurity Analyst & UI/UX Architect",
  bio: "I am a Final Year Computer Science Engineering student specializing in CyberSecurity at Mumbai University with a CGPA of 9.8 (Till 7th Semester). I occupy the unique intersection where robust security meets intuitive design. My expertise spans investigating endpoint threats and building secure infrastructure to designing accessible, high-fidelity user interfaces. I don't just build applications; I engineer secure, user-centric digital experiences.",
  location: "Mumbai, India",
  email: "anchalvtiwari@gmail.com",
  linkedin: "https://www.linkedin.com/in/anchal-tiwari2023/",
  github: "https://github.com/achy02"
};

export const skills = {
  languages: ["Dart", "React Js", "Python", "Typescript", "MongoDB", "FireBase", "SQL"],
  tools: ["VS Code", "Cursor", "Figma", "Android Studio", "Canva", "FlutterFlow", "Mobsf", "Zap", "Wireshark", "Cortex XDR"],
  frameworks: ["Flutter", "React", "Ethical Hacking"],
  core: ["UI/UX Design", "Cybersecurity", "Mobile App Development", "Frontend Development"]
};

export const education = [
  {
    school: "Mumbai University",
    degree: "B.E in Computer Science and Engineering (CyberSecurity)",
    duration: "2022 - 2026",
    grade: "CGPA: 9.8"
  }
];

export const experiences: Experience[] = [
  {
    company: "TATA VOLTAS Limited",
    role: "IT & Network Security Intern",
    location: "On-Site",
    duration: "July 2025 - Dec 2025",
    type: "Internship",
    description: [
      "Investigated and remediated endpoint threats, including malware and suspicious activity, using Cortex XDR.",
      "Leveraged SIEM and Firewall tools to detect and block malicious IPs and phishing attempts, enhancing incident response.",
      "Partnered with VAPT teams to validate vulnerability reports and recommend strategies for risk reduction.",
      "Coordinated with cross-functional teams to build a centralized security dashboard and manage critical network upgrades."
    ],
    skills: ["Cortex XDR", "SIEM", "Firewall", "VAPT", "Incident Response"],
    color: "bg-gradient-to-r from-red-500 to-orange-500"
  },
  {
    company: "FyreGig",
    role: "UI/UX Designer Intern",
    location: "Remote",
    duration: "Dec 2024 – Feb 2025",
    type: "Internship",
    projectLink: "https://play.google.com/store/apps/details?id=com.fundsmama.personalloan",
    description: [
      "Designed the end-to-end UI/UX for the Fundsmama app and website using Figma, focusing on accessibility and navigation.",
      "Created wireframes, interactive prototypes, and high-fidelity responsive designs to visualize the user journey.",
      "Collaborated with developers and stakeholders to align design strategies with business goals and technical constraints.",
      "Delivered a fully functional live platform by optimizing designs for real-world implementation and usability."
    ],
    skills: ["Figma", "UI/UX", "Prototyping", "Wireframing", "User Research"],
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
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
    skills: ["Flutter", "Dart", "Firebase", "Git", "Android Studio"],
    color: "bg-gradient-to-r from-blue-500 to-cyan-500"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "CyberAppSec",
    description: "A containerized cybersecurity awareness platform using Flask and Docker to visualize threat levels. Implemented DevSecOps pipeline with Jenkins and Trivy for automated security scanning. Infrastructure as Code provided via Terraform on AWS.",
    tags: ["React JS", "Docker", "AWS", "Terraform", "Jenkins", "Trivy"],
    link: "https://github.com/achy02/cyber-app",
    image: null
  },
  {
    id: 2,
    title: "Eyeshine",
    description: "Real-time object detection app for visually impaired users using Gemini API. Features face recognition and a volunteer support system connecting users with local help for daily tasks.",
    tags: ["Dart", "MongoDB", "Figma", "Gemini API", "Flutter"],
    link: "https://github.com/achy02/Eyeshine",
    image: null
  },
  {
    id: 3,
    title: "BlueCollar",
    description: "A user-friendly interface for job seekers and employers with Real-Time Location-Based features. Features a secure Firestore Database and an Admin panel for verification purposes.",
    tags: ["Dart", "Firebase", "ReactJs", "Firestore"],
    link: "https://github.com/achy02/BlueCollar",
    image: null
  }
];

export const designs: Design[] = [
  {
    id: 1,
    title: "Fundsmama Fintech App",
    description: "Complete UI/UX design for a personal loan application, focusing on trust, clarity, and ease of application flow.",
    link: "https://www.figma.com/design/5uScTaEl9MdRed98Tkdlbb/Untitled?node-id=0-1&t=gDjbtGrer6Od5h5A-1",
    image: null
  },
  {
    id: 2,
    title: "CyberSecurity Dashboard",
    description: "Dark-mode threat monitoring dashboard interface with real-time data visualization widgets.",
    link: "https://www.figma.com/@anchalvtiwari",
    image: null
  },
  {
    id: 3,
    title: "E-Commerce Mobile Interface",
    description: "Modern, clean shopping experience design with focus on product photography and smooth checkout.",
    link: "https://www.figma.com/design/DWlZcLV5FxNBtfThRR1rMd/Shopping-App?t=gDjbtGrer6Od5h5A-1",
    image: null
  }
];

export const achievements = [
  {
    id: 1,
    title: "M-Indicator Hackathon 2024 Finalist",
    description: "Reached the final round of the prestigious M-Indicator Hackathon, showcasing innovative technical solutions.",
    icon: "FiAward"
  },
  {
    id: 2,
    title: "Project Exhibition Runner Up 2023",
    description: "Secured Runner Up position in the Final Year Project Exhibition at Vidyalankar Polytechnic.",
    icon: "FiTarget"
  },
  {
    id: 3,
    title: "Technical Committee Co-Ordinator",
    description: "Led and coordinated technical events and initiatives at Vidyalankar Polytechnic (2022).",
    icon: "FiShield"
  }
];

export const quotes = [
  {
    text: "Security is not a product, but a process.",
    author: "Bruce Schneier",
    category: "Cyber"
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    category: "Creative"
  },
  {
    text: "The only persistent threat is the one you don't see.",
    author: "Cyber Mantra",
    category: "Cyber"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "Creative"
  }
];
