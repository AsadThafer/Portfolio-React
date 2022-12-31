import './ConnectWith.css';
import Accessibility from '../Accessibility';
function ConnectWith({ name, image, link} ) {
    return(
        <div className="icon">
            <a href={link} rel="noreferrer" target="_blank" >
          <figure>
            <img src={image} alt={name} />
            <Accessibility name={name} />
          </figure>
            </a>
          </div>
    )
}

export default ConnectWith;