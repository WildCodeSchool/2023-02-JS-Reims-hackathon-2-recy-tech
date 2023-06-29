import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logoEmmaus from "../assets/emmauslogo.png";
import home from "../assets/home1.png";
import add from "../assets/add1.svg";
import liste from "../assets/liste.svg";

import "../App.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <img src={logoEmmaus} alt="" className="logo" />
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/" className="home" onClick={() => setIsMobile(false)}>
          <li className="nav-list">
            <img src={home} alt="" />
            Accueil
          </li>
        </Link>
        <Link
          to="/ajouteproduit"
          className="add"
          onClick={() => setIsMobile(false)}
        >
          <li className="nav-list">
            <img src={add} alt="" />
            Ajouter un télephone
          </li>
        </Link>
        <Link
          to="/listeproduit"
          className="listProduct"
          onClick={() => setIsMobile(false)}
        >
          <li className="nav-list">
            {" "}
            <img src={liste} alt="" />
            Liste des Téléphones
          </li>
        </Link>
      </ul>
      <button
        type="button"
        className="mobile-menu-icon"
        onClick={toggleMobileMenu}
      >
        {isMobile ? (
          <AiOutlineClose className="faXmark" />
        ) : (
          <FaBars className="FaBars" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
