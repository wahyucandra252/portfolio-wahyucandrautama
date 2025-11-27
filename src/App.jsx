import React, { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 80,
    });
  }, []);

  return (
    <MainLayout>
      <Home />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default App;
