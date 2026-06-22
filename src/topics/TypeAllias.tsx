type Project = {
  name: string;
  stack: string[];
  year: number;
  isDeployed: boolean;
};

export default function TypeAliasPractice() {
  const project: Project = {
    name: "CivPlayers",
    stack: ["React", "TypeScript"],
    year: 2025,
    isDeployed: true,
  };

  return (
    <section className="topic">
      <h2>{project.name}</h2>
      <p>Year: {project.year}</p>
      <p>Status: {project.isDeployed ? "Deployed" : "Not deployed"}</p>

      <h3>Stack</h3>
      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}