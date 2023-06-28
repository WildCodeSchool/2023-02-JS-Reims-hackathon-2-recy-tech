import logo from "../assets/emmauslogo.png";
import home from "../assets/home1.png";
import add from "../assets/add1.svg";
import list from "../assets/liste.svg";
import "../App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="logoEmmaus" className="logo" />
      <ul className="NavList">
        <li className="listNavbar">
          <img src={home} alt="accueil" />
          Accueil
        </li>
        <li className="listNavbar">
          <img src={add} alt="" />
          Ajouter des telephones
        </li>
        <li className="listNavbar">
          <img src={list} alt="" />
          Liste des telephones
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
