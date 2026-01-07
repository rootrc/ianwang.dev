import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "./containers/Header";
import Greeting from "./components/Greeting";
import Projects from "./components/Projects";
import TopButton from "./containers/TopButton";
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 font-text">
      <Header />
      <Greeting />
      <Projects />
      <TopButton />
    </div>
  </StrictMode>,
)
