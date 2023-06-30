import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DescPhone() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6000"
      }/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Description du téléphone</h1>
      <img src="cheminPhoto" alt="TéléphoneN1" />
      <p>{}</p>

      <h2>Caractéristiques :</h2>
      <ul>
        <li key={product.id}>
          <strong>Nom</strong> {product.name}
        </li>
        <li key={2 * product.id}>
          <strong>Marque</strong> {product.marque}
        </li>
        <li key={3 * product.id}>
          <strong>Prix</strong> {product.price}
        </li>
        <li key={4 * product.id}>
          <strong>Etat</strong> {product.state}
        </li>
        <li key={5 * product.id}>
          <strong>Stockage</strong> {product.name}
        </li>
        <li key={6 * product.id}>
          <strong>RAM</strong> {product.marque}
        </li>
        <li key={7 * product.id}>
          <strong>CABLE et CHARGEUR</strong> {product.price}
        </li>
        <li key={8 * product.id}>
          <strong>Réseau</strong> {product.state}
        </li>
        <li key={9 * product.id}>
          <strong>Image</strong> <img src={product.img} alt={product.name} />
        </li>
        <li key={10 * product.id}>
          <strong>Commentaire</strong> {product.commentary}
        </li>
      </ul>
    </div>
  );
}

export default DescPhone;
