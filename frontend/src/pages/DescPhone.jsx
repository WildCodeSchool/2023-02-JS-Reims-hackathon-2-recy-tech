import React from "react";

function DescPhone() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, eros in lobortis covallis, mauris risuss tincidunt libero, in tempus nulla neque eu quam. Sed non mattis justo.";
  const caracteristiques = [
    { nom: "Ecran", valeur: "6 pouces" },
    { nom: "Ram", valeur: "6go" },
    { nom: "Mémoire", valeur: "64go" },
    { nom: "Réseau", valeur: "4G" },
    { nom: "Chargeur", valeur: "Oui" },
  ];

  return (
    <div>
      <h1>Description du téléphone</h1>
      <img src="cheminPhoto" alt="TéléphoneN1" />
      <p>{description}</p>

      <h2>Caractéristiques :</h2>
      <ul>
        {caracteristiques.map((caracteristique, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <strong>{caracteristique.nom}:</strong> {caracteristique.valeur}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DescPhone;
