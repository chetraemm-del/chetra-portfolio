import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import About from "./components/About";

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
          <div id="skill" className="h-screen">hello</div>
        </div>
      )}
    </div>
  );
}

export default App;
