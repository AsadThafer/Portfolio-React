import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
      <Navigation />
      <About />
      <Projects />
    </div>
  );
}

export default App;
