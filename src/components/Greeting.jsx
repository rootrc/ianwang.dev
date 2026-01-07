import HoverEmoji from "../containers/HoverEmoji.jsx";
import SocialMedia from "./SocialMedia.jsx";
import Button from "./Button.jsx";
import AnimatedImage from "../containers/AnimatedImage.jsx";

export default function Greeting() {
  return (
    <section id="greeting" className="mx-auto max-w-7xl px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900">
            Hi, I’m <span className="text-indigo-600">Ian</span> <HoverEmoji />
          </h1>
          <ul className="space-y-4 text-base text-slate-700">
            <li className="flex gap-2 group">
              <span className="text-indigo-600 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
              <span>Studying Computer Engineering @</span>
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 font-medium text-yellow-500 transition-colors duration-300 hover:text-yellow-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-yellow-500 after:transition-colors hover:after:bg-yellow-600"
              >
                <img
                  src="/uwaterloo.jpg"
                  alt="University of Waterloo"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span>UWaterloo</span>
              </a>
            </li>
            <li className="flex gap-2 group">
              <span className="text-indigo-600 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
              <span>Bronze Medalist in the</span>
              <a
                href="https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCOResults.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 font-medium text-blue-400 transition-colors duration-300 hover:text-blue-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-400 after:transition-colors hover:after:bg-blue-500"
              >
                <img
                  src="/CEMC.png"
                  alt="CEMC"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span>Canadian Computing Olympiad</span>
              </a>
            </li>
            <li className="flex gap-2 group">
              <span className="text-indigo-600 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
              Performance-focused software engineer with interest in backend systems
            </li>
            <li className="flex gap-2 group">
              <span className="text-indigo-600 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
              Enjoy optimizing performance-critical code paths
            </li>
            <li className="flex gap-2 group">
              <span className="text-indigo-600 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
              Seeking Summer 2026 Software Engineering Internships
            </li>
          </ul>
          <SocialMedia />
          <Button text="View Resume" href="/resume.pdf" />
        </div>

        <AnimatedImage />
      </div>
    </section>
  );
}