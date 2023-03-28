import Study from "../../components/MyEducation/Study";
import "./educational.css";
import studies from "../../data/studies";

function Educational() {
  return (
    <section id="educational">
      <h2>Educational Background</h2>
      <div className="studyinfo">
        {studies.map((study) => (
          <Study key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}

export default Educational;
