export default function Footer() {
  return (
    <footer className="mt-16 bg-white font-light">
      <div className="mx-auto max-w-7xl px-16 pb-2">
        <div className="border-t border-indigo-600" />
        <div className="flex justify-between text-xs text-gray-500 italic opacity-80 mt-2">
          <span>© 2026 Ian Wang</span>
          <span>Last updated: {new Date(__LAST_UPDATED__).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
        </div>
      </div>
    </footer>
  );
};