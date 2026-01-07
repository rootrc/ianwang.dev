import { useEffect, useState } from "react";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const TopEvent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    scrollFunction();
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <button
      onClick={TopEvent}
      title="Go to top"
      className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}