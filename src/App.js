import "./App.css";
import About from "./Pages/About/About";
import Navigation from "./components/NavBar/Navigation";
import Projects from "./Pages/Projects/Projects";
import Educational from "./Pages/Education/Educational";
import GoUp from "./components/GoUpButton/GoUp";
import Footer from "./Pages/Footer/Footer";
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
