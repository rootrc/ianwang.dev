import { useState, useEffect, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "./containers/Header";
import Greeting from "./components/Greeting";
import Projects from "./components/Projects";
import TopButton from "./containers/TopButton";
import SplashScreen from "./containers/SplashScreen";
import '@fortawesome/fontawesome-free/css/all.min.css';

const splashScreen = {
  enabled: true,
  duration: 2200,
};

function App() {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsShowingSplashAnimation(false);
    }, splashScreen.duration);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <div className="min-h-screen bg-white text-slate-900 font-text">
          <Header />
          <Greeting />
          <Projects />
          <TopButton />
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log("If you're reading this, Hi i'm Ian!");