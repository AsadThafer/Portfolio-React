import "./Item.css";
import Figure from "../Figure/Figure";
import githublogo from "../../images/mark-github.svg";

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
      <div className="source_code">
        <a
          href={project.source_code}
          rel="noreferrer"
          target="_blank"
          className="source_code_link"
        >
          <img
            src={githublogo}
            alt="github logo"
            style={{ width: "30px", height: "30px" }}
          />{" "}
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Item;
