import "./ConnectWith.css";
import Figure from "../Figure/Figure";
function ConnectWith({ connection }) {
  return (
    <div className="icon">
      <a href={connection.link} rel="noreferrer" target="_blank">
        <Figure image={connection.image} name={connection.name} />
      </a>
    </div>
  );
}

export default ConnectWith;
