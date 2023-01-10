import "./App.css";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/MyProjects/Projects";
import Educational from "./components/MyEducation/Educational";
import GoUp from "./components/GoUp";
import Footer from "./components/MyFooter/Footer";
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
