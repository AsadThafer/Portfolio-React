import './Study.css';

function Study({ name, image, title, degree, GPA,Period } ) {
    return (
        <div className="study">
            <figure>
                <img src={image} alt = {name} />
                <figcaption className="accessibility">{name} image</figcaption>
            </figure>
            <h2>
                {title}
            </h2>
            <ul>
                <li>🎓 {degree} </li>
                <li>📜 {GPA} </li>
                <li>📅 {Period} </li>
            </ul>
        </div>
    )};

export default Study;