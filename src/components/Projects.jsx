import ProjectCard from "../containers/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};