import React from "react";

function Home() {
  return (
    <div>
      <h1 className="title-home">Bienvenue sur RecyTech</h1>
      <p className="text-home">
        Créer un outil qui permet de classifier les téléphones et générer
        automatiquement les résultats en fonction de ces classifications.
        imprimer une étiquette en code QR (fiche de vente)
      </p>
      <img
        src="https://www.pourquoidocteur.fr/media/article/COPY_istock-1310872540-1668442314.jpg"
        alt="Homme utilisant son téléphone"
      />
      <a
        href="https://emmaus-connect.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <br />
        <button className="button-home">Accéder au site</button>
      </a>
    </div>
  );
}

export default Home;
