import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const times = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(times);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About/>
          <div className=" h-30 bg-black"></div>
          <Skill/>
          
          <Project/>
        </div>
      )}
    </div>
  );
}

export default App;
