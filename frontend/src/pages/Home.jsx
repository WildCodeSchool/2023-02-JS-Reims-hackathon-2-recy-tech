import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import mobile from "../assets/mobile.svg";

function Home() {
  return (
    <div className="homeHero">
      <div className="hero">
        <div className="heroText">
          <h1>Bienvenue sur Recy Tech</h1>
          <h3 className="text-home">
            Agir sur toutes les dimensions de l’exclusion numérique et sociale
          </h3>
          <Link to="/ajouteproduit" className="button-home">
            Commencer
          </Link>
        </div>
        <div className="hero-img">
          <img
            className="img-home"
            src={mobile}
            alt="Homme utilisant son téléphone"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
