import productsImage from "../images/Products.png";
import cryptoImage from "../images/bitcoin.png";
import todoListImage from "../images/todo_list_480px.png";
import shoppingListImage from "../images/shopping_512px.png";
import onlineStoreImage from "../images/Online Shop_512px.png";
const projects = [
  {
    id: 1,
    name: "Manage Products",
    image: productsImage,
    link: "https://manageproducts.netlify.app",
    description:
      "Simple site to Manage Products with the ability to add ,delete and update each product , validating the submission form.",
    language: "JavaScript & Jquery",
    source_code: "https://github.com/AsadThafer/manage_products",
  },
  {
    id: 2,
    name: "Crypto Currency",
    image: cryptoImage,
    link: "https://asad-cryptocurrency.netlify.app",
    description:
      "Simple site depends on API to track crypto Curriences Prices and Dominant Currencies chart",
    language: "JavaScript & Jquery",
    source_code: "https://github.com/AsadThafer/crypto_currencies",
  },
  {
    id: 3,
    name: "To-do List",
    image: todoListImage,
    link: "https://asad-todo-list.netlify.app",
    description:
      "simple todo list application written in JavaScript.It allows users to create, update status,search and delete todo list items.",
    language: "JavaScript",
    source_code: "https://github.com/AsadThafer/TODO-List",
  },
  {
    id: 4,
    name: "Shopping List",
    image: shoppingListImage,
    link: "https://shopping-list-asad.netlify.app",
    description: "Simple Shopping List Application",
    language: "React",
    source_code: "https://github.com/AsadThafer/Shopping-List-React",
  },
  {
    id: 5,
    name: "Asad's Store",
    image: onlineStoreImage,
    link: "https://asad-store.netlify.app",
    description:
      "Asad's Store is a web application for selling gaming-related codes, subscriptions, and accounts. This project is built with React and Bootstrap.",
    language: "React",
    source_code: "https://github.com/AsadThafer/asad_store",
  },
];

export default projects;
