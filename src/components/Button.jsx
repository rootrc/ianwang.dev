export default function Button({ text, href, newTab = true}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="inline-block mt-5 px-6 py-3 text-sm sm:text-base font-semibold uppercase bg-indigo-600 text-white border border-indigo-600 rounded-sm text-center no-underline transition-all duration-200 ease-in-out hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-md"
    >
      {text}
    </a>
  );
}