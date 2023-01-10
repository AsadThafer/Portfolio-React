import "./Figure.css";

function Figure({ image, name }) {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption className="accessibility">{name} </figcaption>
    </figure>
  );
}

export default Figure;
