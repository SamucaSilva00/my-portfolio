import "./i18n";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
