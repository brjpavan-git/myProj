const projects = [
  {
    title: "Portfolio Website",
    description: "Responsive React portfolio website.",
    tech: "React, CSS",
  },
  {
    title: "Employee Dashboard",
    description: "Dashboard with reusable UI components.",
    tech: "React, JavaScript",
  },
  {
    title: "Task Manager",
    description: "CRUD application using React.",
    tech: "React, REST API",
  },
];

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.tech}</small>
          </div>
        ))}
      </div>
    </>
  );
}