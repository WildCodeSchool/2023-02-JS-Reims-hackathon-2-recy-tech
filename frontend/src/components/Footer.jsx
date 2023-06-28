import "../App.css";
import Recytech from "../assets/RecyTech_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>RecyTech</h4>
            <ul>
              <li>
                <a href="/about">A propos</a>
              </li>
              <li>
                <a href="/services">Nos services</a>
              </li>
              <li>
                <a href="/privacy-policy">Politique de confidentialité</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Aide</h4>
            <ul>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <img src={Recytech} alt="Recytech" className="recytech-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
