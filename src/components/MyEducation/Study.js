import "./Study.css";
import Figure from "../Figure";

function Study({ name, image, title, degree, GPA, Period }) {
  return (
    <div className="study">
      <Figure image={image} name={name} />
      <h2>{title}</h2>
      <ul>
        <li>🎓 {degree} </li>
        <li>📜 {GPA} </li>
        <li>📅 {Period} </li>
      </ul>
    </div>
  );
}

export default Study;
