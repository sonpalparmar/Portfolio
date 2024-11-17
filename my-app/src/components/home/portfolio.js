import React from 'react';
import './portfolio.css';
import { 
  Github, 
  ExternalLink, 
  Database, 
  Code2, 
  Brain,
  Building2,
  Calendar,
  MapPin,
  Rocket,
  Stars,
  Sparkles
} from 'lucide-react';

const ProjectCard = ({ project }) => {
  const getProjectClass = (title) => {
    if (title.toLowerCase().includes('ai')) return 'gradient-ai';
    if (title.toLowerCase().includes('database')) return 'gradient-database';
    return 'gradient-web';
  };

  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <div className={`project-header ${getProjectClass(project.title)}`}>
          <div className="shimmer-wrapper">
            <div className="shimmer-effect"></div>
          </div>
          <div className="project-icon-wrapper">
            {project.icon}
          </div>
          <Sparkles className="decoration-icon decoration-top-right" size={24} />
          <Stars className="decoration-icon decoration-bottom-left" size={24} />
        </div>
        
        <div className="project-content">
          <div className="project-title-wrapper">
            <h3 className="project-title">{project.title}</h3>
            <Rocket className="project-title-icon" />
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="tech-stack">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="project-links">
            <a href={project.github} className="project-link">
              <Github size={20} />
              <span>Code</span>
            </a>
            <a href={project.link} className="project-link">
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const experience = [
    {
      role: "Associate Software Engineer",
      company: "Xenonstack",
      location: "Mohali, Punjab",
      period: "Jan 2024 – Aug 2024",
      description: [
        "Completed an internship focusing on backend development with Golang, FastAPI, and Python",
        "Developed frontend features using React.js, enhancing user interfaces and experience",
        "Collaborated in a team environment on multiple projects"
      ],
      icon: <Building2 size={24} />
    },
    {
      role: "Summer Intern",
      company: "LPU University",
      location: "LPU Jalandhar(Punjab)",
      period: "June 2023 – July 2023",
      description: [
        "Data Analysis and Visualization using Python",
        "Used Tech: Python | NumPy | Matplotlib | Seaborn | Pandas | Machine Learning",
        "Final project related to Machine Learning with flight passenger data"
      ],
      icon: <Building2 size={24} />
    }
  ];

  const projects = [
    {
      title: "Document Management & AI Query System",
      description: "Smart document management with an AI-powered chatbot that provides intelligent, context-aware responses. Built with modern architecture focusing on scalability and performance.",
      tech: ["FastAPI", "Qdrant DB", "GPT-4", "Vector Search"],
      icon: <Brain size={48} className="header-icon" />,
      link: "#",
      github: "#"
    },
    {
      title: "Smart Recruitment Platform",
      description: "Next-gen recruitment system with AI-powered candidate matching, automated profile creation, and intelligent job recommendations. Features a robust backend for handling complex workflows.",
      tech: ["Golang", "Postgres", "Redis", "REST API"],
      icon: <Database size={48} className="header-icon" />,
      link: "#",
      github: "#"
    },
    {
      title: "AI Resume Parser",
      description: "Modern web application that leverages AI to extract and structure information from resumes. Features real-time parsing, smart categorization, and skill matching.",
      tech: ["React", "FastAPI", "NLP", "Docker"],
      icon: <Code2 size={48} className="header-icon" />,
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Experience Section */}
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <div className="section-underline"></div>
      </div>

      <div className="experience-grid">
        {experience.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-details">
                <span><Building2 size={16} /> {exp.company}</span>
                <span><Calendar size={16} /> {exp.period}</span>
                <span><MapPin size={16} /> {exp.location}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="section-header">
        <h2 className="section-title">
          Featured Projects
          <Rocket className="section-title-icon" size={32} />
        </h2>
        <div className="section-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;