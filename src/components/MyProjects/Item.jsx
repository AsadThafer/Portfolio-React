import "./Item.css";
import Figure from "../Figure/Figure";

function Item({ project }) {
  console.log(project.name);
  return (
    <div className="item">
      <Figure image={project.image} name={project.name} />
      <h2>
        <a href={project.link} rel="noreferrer" target="_blank">
          {project.name}
        </a>
      </h2>
      <p>{project.description}</p>
      <div className="programming_language">
        {" "}
        Languages : {project.language}
      </div>
    </div>
  );
}

export default Item;
