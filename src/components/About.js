import "./About.css";
import Figure from "./Figure";
const myImage = require("../images/Asad_Asad.jpg");
function About() {
  return (
    <div>
      <section id="about" className="about">
        <Figure image={myImage} name={"Asad Thafer Asad"} />
        <h1>Asad Thafer Asad</h1>
        <p>Web Developer - ECU Tuner</p>
      </section>

      <section>
        <h2>About Me</h2>
        <p>
          My name is Asad Asad. I am a computer systems engineer student, I will
          graduate this semester I have a good knowledge in web development ,I
          am also a Junior Automotive ECU tuner . this is just a simple
          portfolio Page about me. don't expect to find too much about me in
          here, I am still young and learning..
        </p>
      </section>
    </div>
  );
}

export default About;
