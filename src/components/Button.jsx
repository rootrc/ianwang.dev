export default function Button({ text, href, newTab = false, className = "" }) {
  return (
    <span className={`mt-5 ${className}`}>
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="inline-block bg-amber-600 border border-amber-600 text-white font-bold px-6 py-3 rounded-md uppercase text-center no-underline transition-all duration-300 ease-in-out hover:bg-amber-700 hover:-translate-y-1 cursor-pointer mr-12 last:mr-0 text-base sm:text-sm sm:px-5 sm:py-3 xs:text-xs"
      >
        {text}
      </a>
    </span>
  );
}