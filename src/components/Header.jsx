export default function Header() {
  return (
    <header className="w-full px-8 py-6">
      <ul className="flex gap-8 text-4xl font-medium text-gray-700">
        <li>
          <a href="#about" className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">
            About
          </a>
        </li>
        <li>
          <a href="#projects"className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">
            Projects
          </a>
        </li>
        {/* <li>
          <a href="#Skills" className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">
            Skills
          </a>
        </li> */}
      </ul>
    </header>
  );
}