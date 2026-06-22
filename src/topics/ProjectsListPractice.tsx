type Project = {
  name: string;
  stack: string[];
  year: number;
  isDeployed: boolean;
};

export default function ProjectsListPractice() {
  const projects: Project[] = [
    {
      name: "CivPlayers",
      stack: ["React", "TypeScript"],
      year: 2025,
      isDeployed: true,
    },
    {
      name: "BreachExplorer",
      stack: ["Blazor", ".NET", "API"],
      year: 2025,
      isDeployed: true,
    },
    {
      name: "Portfolio",
      stack: ["React", "TypeScript", "Tailwind"],
      year: 2026,
      isDeployed: true,
    },
  ];

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.name}>
          <h2>{project.name}</h2>
          <p>Year: {project.year}</p>
          <p>Status: {project.isDeployed ? "Deployed" : "Not deployed"}</p>

          <h3>Stack</h3>
          <ul>
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}