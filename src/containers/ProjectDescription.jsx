import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const descriptionVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectDescription({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-lg bg-slate-900 p-8  shadow-2xl text-slate-100"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-indigo-600">
              {project.title}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              {project.longDescription}
            </p>
            <div className="mt-4 overflow-hidden rounded-md border border-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[60vh] object-contain bg-slate-800"
              />
            </div>
            <span className="mt-4 flex flex-wrap gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg text-sm flex items-center gap-2 mr-4 transition-all duration-200 ease-out hover:-translate-y-1 "
              >
                <i className="fab fa-github text-2xl"></i>
                GitHub
              </a>
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-indigo-500">
                  {tech}
                </span>
              ))}


            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
