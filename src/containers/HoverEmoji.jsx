import { useState } from "react";

export default function HoverEmoji() {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-flex items-center text-6xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`transition-transform duration-300 ease-in-out ${hovered ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        👋
      </span>

      <span
        className={`absolute transition-transform duration-300 ease-in-out ${hovered ? "opacity-100 scale-120" : "opacity-0 scale-90"}`}
        style={{ transformOrigin: "center bottom" }}
      >
        👋
      </span>
    </span>
  );
}