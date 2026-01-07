import ProjectCard from "../containers/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-16 py-8">
      <h2 className="mb-12 text-4xl font-bold text-slate-900 tracking-tight border-b-2 border-indigo-600 pb-3">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}