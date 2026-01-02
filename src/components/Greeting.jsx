import HoverEmoji from "../containers/HoverEmoji.jsx";
import SocialMedia from "./SocialMedia.jsx";
import Button from "./Button.jsx";

export default function Greeting() {
  return (
    <section className="mx-auto max-w-8xl px-16 py-10">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-gray-900">
              Hi, I&apos;m Ian <HoverEmoji />
            </h1>
            <p className="text-xl text-gray-700 pt-6">
              Computer Engineering student at the University of Waterloo,
              passionate about coding and problem-solving.
            </p>
          </div>

          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mr-3">➤</span>
              <span>Studying Computer Engineering @</span>
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 font-medium
                  text-yellow-500 transition-colors duration-300
                  hover:text-yellow-600
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full
                  after:bg-yellow-500 after:transition-colors
                  hover:after:bg-yellow-600"
              >
                <img
                  src="/uwaterloo.jpg"
                  alt="University of Waterloo"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span>UWaterloo</span>
              </a>
            </li>

            <li className="flex items-start gap-2">
              <span className="mr-3">➤</span>
              <span>Bronze Medalist in the</span>
              <a
                href="https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCOResults.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 font-medium
                  text-blue-400 transition-colors duration-300
                  hover:text-blue-500
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full
                  after:bg-blue-400 after:transition-colors
                  hover:after:bg-blue-500"
              >
                <img
                  src="/CEMC.png"
                  alt="CEMC"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span>Canadian Computing Olympiad</span>
              </a>
            </li>

            <li className="flex items-start gap-2">
              <span className="mr-3">➤</span>
              <span>Intrested in software engineering, backend systems, and performance-critical code</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mr-3">➤</span>
              <span>Seeking Summer 2026 Software Engineering Internships</span>
            </li>
          </ul>
          <SocialMedia />
          <div className="flex justify-start space-x-16">
            <a href="#contact" className="button-link">
              <Button text="Contact me" />
            </a>
            <a
              href="https://www.linkedin.com/in/ian-wang-362b34305/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              <Button text="Download my resume" />
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src="The Magician.jpg"
            alt="The Magician tarot card"
            className="w-64 rounded-xl shadow-lg sm:w-72 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
