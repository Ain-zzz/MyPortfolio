import React from "react";
import MyNavbar from "./navbar";
import Home from "./home";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import "bootstrap/dist/css/bootstrap.min.css";


const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />
      
      {/* Centered Main Content */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="w-100">
          <Home />
          <section id="skills" className="py-5 bg-light">
            <Skills />
          </section>
          <section id="projects" className="py-5">
            <Projects />
          </section>
          <section id="contact" className="py-5 bg-light">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;

