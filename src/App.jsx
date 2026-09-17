import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

const MainLayout = () => (
  <>
    <Navbar />
    <main className="relative min-h-screen w-screen">
      <Hero />
      <section id="about">
        <About />
      </section>
      <div className=" h-30 bg-black"></div>
      <section id="skill">
        <Skill />
      </section>

      <section id="project">
        <Project />
      </section>
    </main>
  </>
);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const times = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(times);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route
              path="/project/project-detail/:id"
              element={<ProjectDetail />}
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
