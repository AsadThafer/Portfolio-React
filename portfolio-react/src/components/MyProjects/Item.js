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