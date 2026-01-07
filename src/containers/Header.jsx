import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom>
      <header className="w-full bg-slate-900 border-b border-slate-800 font-header">
        <ul className="max-w-7xl mx-auto flex items-center gap-10 px-16 py-5 text-lg text-slate-300">
          <li>
            <a
              href="/"
              className="text-3xl font-logo font-semibold tracking-tight text-white transition-colors duration-200 hover:text-indigo-500"
            >
              Ian<span className="text-indigo-500"> Wang</span>
            </a>
          </li>
          <li className="flex-1" />
          {["Projects", "Skills"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-xl uppercase tracking-wider text-slate-300 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </Headroom>
  );
}