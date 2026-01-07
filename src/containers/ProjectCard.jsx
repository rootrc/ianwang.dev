import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDescription from "./ProjectDescription";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -6 }}
        onClick={() => setOpen(true)}
        className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
      >
        <div className="aspect-4/3 overflow-hidden rounded-lg bg-gray-100">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {project.title}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {project.description}
        </p>
      </motion.div>
      <ProjectDescription
        project={open ? project : null}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}