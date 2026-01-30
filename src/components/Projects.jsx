import { motion } from "framer-motion";
import ProjectCard from "../containers/ProjectCard.jsx";
import Button from "./Button.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-16 py-8">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 text-4xl font-bold text-slate-900 tracking-tight border-b-2 border-indigo-600 pb-3"
        >
          Projects
          <span className="mb-4">
            <Button text="View Portfolio" href="/Ian_Wang_Portfolio.pdf" />
          </span>
        </motion.h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: (index % 3) * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}