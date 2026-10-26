import { useState } from "react";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A React portfolio website built using reusable components.",
    },
    {
      title: "Student Management System",
      description: "A web application for managing student records and information.",
    },
    {
      title: "Weather App",
      description: "A simple app that shows the current weather for a city.",
    },
  ];

  return (
    <div className="page">
      <h1>My Projects</h1>

      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
