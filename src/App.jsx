import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Spotlight from "./components/Spotlight";
import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Workinprogress from "./components/Workinprogress";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import Icon from "./components/Icon";
import Gallery from "./components/Gallery";
import Offline from "./components/Offline";
import MenuLogo from "./assets/icons/menu.svg";
import Certificate2 from "./assets/certificate/Udemy.jpg";
import Certificate3 from "./assets/certificate/Workshop.jpg";
import Certificate5 from "./assets/certificate/UI.png";
import Certificate4 from "./assets/certificate/React.png";
import ViewMore from "./components/Portfolioview/ViewMore";
import BgImage1 from "./assets/images/table5.png";
import BgImage2 from "./assets/images/me.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstall, setIsInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      console.log("✅ beforeinstallprompt event fired!");
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    const imageList = [
      Certificate2,
      Certificate3,
      Certificate4,
      Certificate5,
      BgImage1,
      BgImage2,
    ];

    const preloadImages = () => {
      const promises = imageList.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(promises).then(() => setLoading(false));
    };

    preloadImages();
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeBar = () => {
    setIsNavOpen(false);
  };
  const openBar = () => {
    setIsNavOpen(true);
  };

  return (
    <Router>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Offline />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <button className="Openside" onClick={openBar}>
                    <img src={MenuLogo} alt="" />
                  </button>
                  <Nav
                    deferredPrompt={deferredPrompt}
                    isInstall={isInstall}
                    closeBar={closeBar}
                    isNavOpen={isNavOpen}
                  />
                  <Spotlight />
                  <About />
                  <Portfolio />
                  <Gallery />
                  <Education />
                  <Certificate />
                  <Skills />
                  <Contact />
                  <Icon />
                </>
              }
            />
            <Route path="/wip" element={<Workinprogress />} />
            <Route path="/viewmore" element={<ViewMore />} />
          </Routes>
        </>
      )}
    </Router>
  );
}
