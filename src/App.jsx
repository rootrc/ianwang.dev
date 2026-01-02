import Header from "./components/Header";
import Greeting from "./components/Greeting";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300">
        <Header />
        <Greeting />
    </div>
  );
}