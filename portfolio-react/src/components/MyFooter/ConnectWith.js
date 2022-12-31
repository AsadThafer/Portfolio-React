import './ConnectWith.css';

function ConnectWith({ name, image, link} ) {
    return(
        <div className="icon">
            <a href={link} rel="noreferrer" target="_blank" >
          <figure>
            <img src={image} alt={name} />
            <figcaption className="accessibility">{name} image</figcaption>
          </figure>
            </a>
          </div>
    )
}

export default ConnectWith;