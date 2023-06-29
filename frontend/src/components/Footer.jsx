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
            <li>
              <a href="/about">A propos</a>
            </li>
            <li>
              <a href="/privacy-policy">Politique de confidentialité</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
