import ConnectWith from "../../components/ConnectWith/ConnectWith";
import "./Footer.css";
import connections from "../../data/connections";

function Footer() {
  return (
    <footer id="contact" className="contact">
      {connections.map((connection) => {
        return <ConnectWith key={connection.id} connection={connection} />;
      })}

      <div className="copyright break"> © 2022 Asad Asad</div>
    </footer>
  );
}

export default Footer;
