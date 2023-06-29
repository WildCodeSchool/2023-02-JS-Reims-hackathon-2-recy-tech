import { Link } from "react-router-dom";
import "../App.css";
import Recytech from "../assets/RecyTech_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img src={Recytech} alt="Recytech" className="recytech-logo" />
      </div>
      <div className="row">
        <div className="footer-col">
          <ul className="footerList">
            <Link
              to="https://emmaus-connect.org/politique-de-confidentialite/"
              target="blank"
            >
              <li>Politique de confidentialité</li>
            </Link>
            <Link to="https://emmaus-connect.org/offres-emploi/" target="blank">
              <li>FAQ</li>
            </Link>

            <li>Tous droits réservés © Emmaüs Connect</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
