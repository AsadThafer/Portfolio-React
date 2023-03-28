import "./About.css";
import Figure from "../../components/Figure/Figure";
const myImage = require("../../images/Asad_Asad.jpg");
function About() {
  return (
    <div>
      <section id="about" className="about">
        <Figure image={myImage} />
        <h1>Asad Thafer Asad</h1>
        <p>Web Developer - ECU Tuner</p>
      </section>

      <section>
        <h2>About Me</h2>
        <p>
          "a web frontend developer and recent graduate, highly motivated and
          passionate about creating visually appealing and functional websites.
          With strong technical skills in HTML, CSS, JavaScript and React, I am
          committed to delivering top-quality web development projects. I have a
          solid understanding of frontend technologies and I am constantly
          updating my skills to stay ahead of industry trends."
        </p>
      </section>
    </div>
  );
}

export default About;
