import "./App.css";
import About from "./Sections/About/About";
import Navigation from "./components/NavBar/Navigation";
import Projects from "./Sections/Projects/Projects";
import Educational from "./Sections/Education/Educational";
import GoUp from "./components/GoUpButton/GoUp";
import Footer from "./Sections/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Navigation />
      <About />
      <Projects />
      <Educational />
      <GoUp />
      <Footer />
    </div>
  );
}

export default App;
