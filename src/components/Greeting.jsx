import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import SocialMedia from "./SocialMedia.jsx";
import Button from "./Button.jsx";
import AnimatedImage from "../containers/AnimatedImage.jsx";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const image = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Greeting() {
  return (
    <section id="greeting" className="mx-auto max-w-7xl px-16 py-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="space-y-8" variants={container}>
          <motion.h1 variants={item} className="text-6xl font-bold tracking-tight text-slate-900" >
            Hi, I’m
            <span className="text-indigo-600 font-extrabold"> Ian </span>
            <span className="inline-block origin-[70%_70%] animate-wave">{emoji("👋")}</span>
          </motion.h1>
          <motion.h2 variants={item} className="text-2xl tracking-tight text-slate-900">
            I build efficient software with a focus on algorithms and performance 🧩
          </motion.h2>
          <motion.ul variants={container} className="space-y-4 text-base text-slate-700">
            {[
              <>
                <span>Computer Engineering @</span>
                <a
                  href="https://uwaterloo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 font-medium text-yellow-500 transition-colors duration-300 hover:text-yellow-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-yellow-500 after:transition-colors hover:after:bg-yellow-600"
                >
                  <img src="/uwaterloo.jpg" alt="UWaterloo" className="h-6 w-6 rounded-full" />
                  <span>UWaterloo</span>
                </a>
              </>,
              <>
                <span>Bronze Medalist in the</span>
                <a
                  href="https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCOResults.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 font-medium text-blue-400 transition-colors duration-300 hover:text-blue-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-400 after:transition-colors hover:after:bg-blue-500"
                >
                  <img src="/CEMC.png" alt="CEMC" className="h-6 w-6 rounded-full" />
                  <span>Canadian Computing Olympiad</span>
                </a>
              </>,
              "I like algorithms, systems, and making code run fast!",
              "In my free time, I solve nonograms, read, and work on my puzzle game",
              "Seeking Summer 2026 SWE Internships",
            ].map((content, i) => (
              <motion.li key={i} variants={item} className="flex gap-2 group">
                <span className="text-indigo-600 mr-2 transition-transform group-hover:translate-x-1.5">
                  →
                </span>
                {content}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={item} className="flex items-center gap-16">
            <SocialMedia />
            <span className="-mt-4">
              <Button text="View Resume" href="/resume.pdf" />
            </span>
          </motion.div>
        </motion.div>

        <motion.div variants={image}>
          <AnimatedImage />
        </motion.div>
      </motion.div>
    </section>
  );
}