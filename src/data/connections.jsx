import EmailImage from "../images/Email_256px.png";
import LinkedInImage from "../images/linkedin_512px.png";
import GithubImage from "../images/github_512px.png";
import CallMeImage from "../images/call_512px.png";

const connections = [
  {
    id: 1,
    name: "Email Me",
    image: EmailImage,
    link: "mailto:asad.thaferasad@gmail.com",
  },
  {
    id: 2,
    name: "Mobile Call",
    image: CallMeImage,
    link: "tel:+970595681131",
  },
  {
    id: 3,
    name: "Git_hub Profile",
    image: GithubImage,
    link: "https://github.com/asadthafer",
  },
  {
    id: 4,
    name: "linked_in Profile",
    image: LinkedInImage,
    link: "https://www.linkedin.com/in/asad-asad/",
  },
];

export default connections;
