import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDescription from "./ProjectDescription";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -4, scale: 1.01 }}
        onClick={() => setOpen(true)}
        className="group cursor-pointer rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-indigo-500"
      >
        <div className="relative aspect-4/3 overflow-hidden rounded-md bg-slate-200">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-indigo-500">
          {project.title}
        </h2>
        <p className="mt-2 text-m leading-relaxed text-slate-600 line-clamp-2">
          {project.description}
        </p>
        {project.tech && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700">
                ...
              </span>
            )}
          </div>
        )}
        <div className="absolute top-3 right-3 rounded-full bg-white/80 px-2 py-1 text-xl font-medium text-slate-700 opacity-0 transition-opacity group-hover:opacity-100">
          ↗
        </div>
      </motion.div>
      <ProjectDescription
        project={open ? project : null}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}