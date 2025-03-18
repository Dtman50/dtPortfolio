import { React } from "react";
import Nav from "./Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import IT from "./IT";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-gray-950 text-gray-50">
      <Nav />
      <Home />
      <AboutMe />
      <Projects />
      <IT />
      <Footer />
    </div>
  );
}

export default App;
