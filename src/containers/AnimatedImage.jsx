import { motion } from "framer-motion";

export default function AnimatedImage() {
  return (
    <div className="flex flex-1 justify-center">
      <a href="" target="_blank" rel="noopener noreferrer">
        <motion.img
          src="/portrait.jpg"
          alt="Portrait of Ian"
          className="w-64 sm:w-72 md:w-80 rounded-xl shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: -1,
            boxShadow: "0px 30px 60px rgba(0,0,0,0.35)",
          }}
        />
      </a>
    </div>
  );
}