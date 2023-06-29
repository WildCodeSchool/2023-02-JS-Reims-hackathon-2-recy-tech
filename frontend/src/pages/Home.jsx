import "../App.css";
import React from "react";
import mobile from "../assets/mobile.svg";

function Home() {
  return (
    <div className="homeHero">
      <div className="hero">
        <div className="heroText">
          <h1>Bienvenue sur RecyTech</h1>
          <p className="text-home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
            repellendus eveniet tempora aspernatur exercitationem a iste sed
            quaerat, sequi facilis repudiandae consectetur laboriosam nisi.
            Neque similique tenetur ipsum optio.
          </p>
          <button type="button" className="button-home">
            Commencer
          </button>
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
