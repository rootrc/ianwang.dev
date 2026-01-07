import Header from "./containers/Header";
import Greeting from "./components/Greeting";
import Projects from "./components/Projects";
import TopButton from "./containers/TopButton";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 font-text">
        <Header />
        <Greeting />
        <Projects />
        <TopButton />
    </div>
  );
}