export const projects = [
  {
    id: 0,
    title: "PRISM",
    description: "A real-time continuous delirium monitoring wearable",
    longDescription:
      "A real-time continuous delirium monitoring wearable. Using an Arduino Nano ESP32, it sends sensor data from a pulse oximeter and an accelerometer via WiFi to an ExpressJS backend. All this data is presented on our simple-to-use frontend for healthcare professionals to interact with.",
    image: "PRISM_thumbnail.png",
    tech: ["HTML", "CSS", "JavaScript", "Express.js"],
    github: "https://github.com/boccos/ECE198",
  },
  {
    id: 1,
    title: "Continent Procedural Generator",
    description: "A tool for creating detailed, procedural maps of fantasy continents",
    longDescription:
      "A tool for creating detailed, procedural maps of fantasy continents. It utilizes noise-based terrain generation, biome classification, river modelling, and artifact removal algorithms to produce natural-looking landscapes complete with towns and geographic features.",
    image: "generator_thumbnail.png",
    tech: ["Python", "NumPy", "Matplotlib", "Tkinter"],
    github: "https://github.com/rootrc/Continent-Procedural-Generator",
  },
  {
    id: 2,
    title: "LyX Previewer",
    description: "An application to preview your LyX view in Google Drive",
    longDescription:
      "A Python-based GUI application that fetches .lyx files from Google Drive, converts them to HTML, and renders output to a web browser, eliminating manual conversion for previewing files.",
    image: "lyx_thumbnail.png",
    tech: ["Python, Tkinter"],
    github: "https://github.com/alanwang981/lyx-previewer",
  },
  {
    id: 3,
    title: "Kindle Game",
    description: "A dynamic, procedurally generated game in Java Swing",
    longDescription:
      "A a rouge-like game where you explore a semi-randomly generated series of dark, icy caves and caverns. Discover optimal pathways down, avoid traps, and find various abilities in chests—all while your light source is diminishing and the clock is ticking down.",
    image: "kindle_thumbnail.png",
    tech: ["Java", "Swing (Java)"],
    github: "thing",
  },
];