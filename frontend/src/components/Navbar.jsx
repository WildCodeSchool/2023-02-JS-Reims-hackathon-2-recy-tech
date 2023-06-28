import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/">
          <li>Accueil</li>
        </Link>
      </ul>
    </nav>
  );
}
// function Navbar() {
//   return (
//     <div className="Navbar">
//       <img src={logo} alt="logoEmmaus" className="logo" />
//       <ul className="NavList">
//         <li className="listNavbar">
//           <img src={home} alt="accueil" />
//           Accueil
//         </li>
//         <li className="listNavbar">
//           <img src={add} alt="" />
//           Ajouter des telephones
//         </li>
//         <li className="listNavbar">
//           <img src={list} alt="" />
//           Liste des telephones
//         </li>
//       </ul>
//     </div>
//   );
// }

export default Navbar;
