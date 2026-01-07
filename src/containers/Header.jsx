import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom>
      <header className="w-full px-16 py-6 bg-sky-100 flex items-center justify-between font-header">
        <ul className="flex items-center gap-8 text-4xl font-medium text-slate-800">
          <li>
            <a href="" className="text-6xl font-logo text-amber-700 transition-all duration-300 hover:text-amber-700 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
              Ian Wang
            </a>
          </li>
          <li>
            <a href="#projects" className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.75 after:w-0 after:bg-black after:transition-all hover:after:w-full">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.75 after:w-0 after:bg-black after:transition-all hover:after:w-full">
              Skills
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}