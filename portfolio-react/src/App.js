import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Projects from './components/MyProjects/Projects';
import Educational from './components/MyEducation/Educational';
import GoUp from './components/GoUp';
function App() {
  return (
    <div className="container">
      <Navigation />
      <About />
      <Projects />
      <Educational />
      <GoUp />
    </div>
  );
}

export default App;
