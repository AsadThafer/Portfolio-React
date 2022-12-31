// import Item1 from '../images/Products.png';
// import Item2 from '../images/bitcoin.png';
import './Item.css';

function Item({ name, image, link, description, language } ) {
    return(
        <div className="item">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="accessibility">{name} image</figcaption>
          </figure>
          <h2>
            <a href={link} rel="noreferrer" target="_blank" >
              {name}
            </a>
          </h2>
          <p>
            {description}
          </p>
          <div className="programming_language">
            {" "}
            Languages : {language}
          </div>
        </div>
    )
}

export default Item;