import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Projects from './components/MyProjects/Projects';
import Educational from './components/MyEducation/Educational';

function App() {
  return (
    <div className="container">
      <Navigation />
      <About />
      <Projects />
      <Educational />
    </div>
  );
}

export default App;
