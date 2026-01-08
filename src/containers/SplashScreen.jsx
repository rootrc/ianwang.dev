export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50">
      <span
        className="font-logo text-6xl font-medium inline-block overflow-hidden whitespace-nowrap border-r-2 border-slate-900 animate-typing"
      >
        Ian <span className="text-indigo-500">Wang</span>
      </span>
    </div>
  );
}