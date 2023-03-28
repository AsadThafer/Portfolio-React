import "./Figure.css";

function Figure({ image, name }) {
  return (
    <figure>
      <img src={image} alt={name} />
      {name ? <figcaption className="accessibility">{name}</figcaption> : null}
    </figure>
  );
}

export default Figure;
