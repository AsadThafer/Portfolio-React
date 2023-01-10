import "./Projects.css";
import React from "react";
import Item from "../../components/MyProjects/Item";
import Item1Image from "../../images/Products.png";
import Item2Image from "../../images/bitcoin.png";
import Item3Image from "../../images/todo_list_480px.png";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="items">
        <Item
          name={"manage Products"}
          image={Item1Image}
          link={"https://manageproducts.netlify.app"}
          description={
            "Simple site to Manage Products with the ability to add ,delete and update each product , validating the submission form."
          }
          language={"JavaScript & Jquery"}
        />
        <Item
          name={"cryptocurrency"}
          image={Item2Image}
          link={"https://asad-cryptocurrency.netlify.app"}
          description={
            "Simple site depends on API to track crypto Curriences Prices and Dominant Currencies chart"
          }
          language={"JavaScript & Jquery"}
        />
        <Item
          name={"Todo List"}
          image={Item3Image}
          link={"https://asad-todo-list.netlify.app"}
          description={
            "simple todo list application written in JavaScript.It allows users to create, update status,search and delete todo list items."
          }
          language={"JavaScript"}
        />
      </div>
    </section>
  );
}

export default Projects;
