import "./GoUp.css";
import GoUpImage from "../images/up_512px.png";
import Figure from "./Figure";
function GoUp() {
  return (
    <a className="goup" href="/#">
      <Figure image={GoUpImage} name="Go Up" />
    </a>
  );
}

export default GoUp;
