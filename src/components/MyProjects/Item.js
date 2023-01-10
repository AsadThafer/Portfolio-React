import "./Item.css";
import Figure from "../Figure";

function Item({ name, image, link, description, language }) {
  return (
    <div className="item">
      <Figure image={image} name={name} />
      <h2>
        <a href={link} rel="noreferrer" target="_blank">
          {name}
        </a>
      </h2>
      <p>{description}</p>
      <div className="programming_language"> Languages : {language}</div>
    </div>
  );
}

export default Item;
