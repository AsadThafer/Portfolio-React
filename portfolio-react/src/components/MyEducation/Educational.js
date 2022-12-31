import Study from "./Study";
import "./educational.css";
import study1Image from "../../images/university.jpg";
import study2Image from "../../images/school.jpg";

function Educational() {
  return (
    <section id="educational">
      <h2>Educational Background</h2>
      <div className="studyinfo">
        <Study
          name={"Kadoorie University"}
          image={study1Image}
          title={"Palestine Technical University - Kadoorie"}
          degree={"Bachelor's degree, Computer Systems Engineering"}
          GPA={"79.1"}
          Period={"2018-Present"}
        />
        <Study 
            name={"Al-Fadiliyah"}
            image={study2Image}
            title={"Al-Fadiliyah Scientific High School"}
            degree={"High school-scientific Tawjihi"}
            GPA={"95.3"}
            Period={"2017-2018"}
        />
      </div>
    </section>
  );
}

export default Educational;
