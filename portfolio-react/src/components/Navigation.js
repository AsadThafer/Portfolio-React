import './Navigation.css';

function Navigation() {
    return (
    <header className="navigation">
    <div className="container">
      <nav>
        <a className="logo" href="index.html">
          Asad Asad
        </a>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#educational">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
    )};

export default Navigation;