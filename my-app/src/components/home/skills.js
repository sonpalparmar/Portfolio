import React from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  Globe, 
  Terminal,
  Box,
  LineChart,
  Cpu,
  Server
} from 'lucide-react';
import './skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Programming",
      icon: <Code2 size={32} />,
      items: ["Python", "C++", "SQL"],
      color: "#4C51BF"
    },
    {
      category: "AI/ML",
      icon: <Brain size={32} />,
      items: ["TensorFlow", "PyTorch", "Scikit-learn"],
      color: "#2B6CB0"
    },
    {
      category: "Databases",
      icon: <Database size={32} />,
      items: ["MongoDB", "PostgreSQL", "MySQL"],
      color: "#2C7A7B"
    },
    {
      category: "Web Development",
      icon: <Globe size={32} />,
      items: ["FastAPI", "Flask", "React"],
      color: "#2F855A"
    },
    {
      category: "DevOps",
      icon: <Terminal size={32} />,
      items: ["Docker", "Git", "AWS"],
      color: "#744210"
    },
    {
      category: "Data Science",
      icon: <LineChart size={32} />,
      items: ["Pandas", "NumPy", "Matplotlib"],
      color: "#702459"
    },
    {
      category: "Backend",
      icon: <Server size={32} />,
      items: ["FastAPI", "REST", "GraphQL"],
      color: "#285E61"
    },
    {
      category: "GenAI",
      icon: <Cpu size={32} />,
      items: ["LangChain", "LlamaIndex", "Transformers"],
      color: "#4A5568"
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-underline"></div>
      </div>

      <div className="skills-grid-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-card-overlay"></div>

              <div className="skill-icon-container">
                <div className="skill-icon">
                  {skill.icon}
                </div>
              </div>

              <h3 className="skill-category">
                {skill.category}
              </h3>

              <ul className="skill-list">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="skill-item">
                    <Box size={14} className="skill-item-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="skill-decoration">
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;