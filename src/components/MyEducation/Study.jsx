import "./Study.css";
import Figure from "../Figure/Figure";

function Study({ study }) {
  return (
    <div className="study">
      <Figure image={study.image} name={study.name} />
      <h2>{study.title}</h2>
      <ul>
        <li>🎓 {study.degree} </li>
        <li>📜 {study.gPA} </li>
        <li>📅 {study.Period} </li>
      </ul>
    </div>
  );
}

export default Study;
