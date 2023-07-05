import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MyProjects from "./sections/MyProjects";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <MyProjects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
