import Item1Image from "../images/Products.png";
import Item2Image from "../images/bitcoin.png";
import Item3Image from "../images/todo_list_480px.png";
import Item4Image from "../images/shopping_512px.png";
import Item5Image from "../images/Online Shop_512px.png";
const projects = [
  {
    id: 1,
    name: "manage Products",
    image: Item1Image,
    link: "https://manageproducts.netlify.app",
    description:
      "Simple site to Manage Products with the ability to add ,delete and update each product , validating the submission form.",
    language: "JavaScript & Jquery",
  },
  {
    id: 2,
    name: "cryptocurrency",
    image: Item2Image,
    link: "https://asad-cryptocurrency.netlify.app",
    description:
      "Simple site depends on API to track crypto Curriences Prices and Dominant Currencies chart",
    language: "JavaScript & Jquery",
  },
  {
    id: 3,
    name: "Todo List",
    image: Item3Image,
    link: "https://asad-todo-list.netlify.app",
    description:
      "simple todo list application written in JavaScript.It allows users to create, update status,search and delete todo list items.",
    language: "JavaScript",
  },
  {
    id: 4,
    name: "Shopping List",
    image: Item4Image,
    link: "https://shopping-list-asad.netlify.app",
    description: "Simple Shopping List Application",
    language: "React",
  },
  {
    id: 5,
    name: "Asad's Store",
    image: Item5Image,
    link: "https://asad-store.netlify.app",
    description:
      "Asad's Store is a web application for selling gaming-related codes, subscriptions, and accounts. This project is built with React and Bootstrap.",
    language: "React",
  },
];

export default projects;
