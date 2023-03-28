import "./Projects.css";
import React from "react";
import Item from "../../components/MyProjects/Item";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="items">
        {projects.map((project) => (
          <Item key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
