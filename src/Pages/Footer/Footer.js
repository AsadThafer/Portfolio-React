import ConnectWith from "../../components/ConnectWith/ConnectWith";
import "./Footer.css";

import EmailImage from "../../images/Email_256px.png";
import LinkedInImage from "../../images/linkedin_512px.png";
import GithubImage from "../../images/github_512px.png";
import CallMeImage from "../../images/call_512px.png";

function Footer() {
  return (
    <footer id="contact" className="contact">
      <ConnectWith
        name={"Email Me"}
        image={EmailImage}
        link={"mailto:asad.thaferasad@gmail.com"}
      />
      <ConnectWith
        name={"Mobile Call"}
        image={CallMeImage}
        link={"tel:+970595681131"}
      />
      <ConnectWith
        name={"Git_hub Profile"}
        image={GithubImage}
        link={"https://github.com/asadthafer"}
      />
      <ConnectWith
        name={"linked_in Profile"}
        image={LinkedInImage}
        link={"https://www.linkedin.com/in/asad-asad/"}
      />

      <div className="copyright break"> © 2022 Asad Asad</div>
    </footer>
  );
}

export default Footer;
