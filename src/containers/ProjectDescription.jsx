import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const descriptionVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function ProjectDescription({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => onClose()}
        >
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
          >

            <button
              onClick={() => onClose()}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Close Button"
            >
              <i className="fas fa-times text-xl"></i>
            </button>

            <h2 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {project.longDescription}
            </p>

            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full rounded-lg"
            />
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg text-sm flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-2xl"></i>
                GitHub
              </motion.a>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}