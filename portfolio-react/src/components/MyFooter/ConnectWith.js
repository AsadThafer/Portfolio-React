import "./ConnectWith.css";
import Figure from "../Figure";
function ConnectWith({ name, image, link }) {
  return (
    <div className="icon">
      <a href={link} rel="noreferrer" target="_blank">
        <Figure image={image} name={name} />
      </a>
    </div>
  );
}

export default ConnectWith;
