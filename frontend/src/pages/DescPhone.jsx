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
    <div className="desc">
      <div className="titleProduct">
        <h1>Caractéristiques</h1>
      </div>
      <section className="listDesc">
        <ul className="listDescription">
          <div className="list1">
            <li key={product.id}>
              <strong>Nom :</strong> {product.name}
            </li>
          </div>
          <div className="list1">
            <li key={2 * product.id}>
              <strong>Marque :</strong> {product.marque}
            </li>
          </div>
          <div className="list1">
            <li key={3 * product.id}>
              <strong>Prix :</strong> {product.price}
            </li>
          </div>
          <div className="list1">
            <li key={4 * product.id}>
              <strong>Etat :</strong> {product.state}
            </li>
          </div>
          <div className="list1">
            <li key={5 * product.id}>
              <strong>Stockage :</strong> {product.name}
            </li>
          </div>
          <div className="list1">
            <li key={6 * product.id}>
              <strong>RAM :</strong> {product.marque}
            </li>
          </div>
          <div className="list1">
            <li key={7 * product.id}>
              <strong>CABLE et CHARGEUR :</strong> {product.price}
            </li>
          </div>
          <div className="list1">
            <li key={8 * product.id}>
              <strong>Réseau :</strong> {product.state}
            </li>
          </div>
          <div className="list1">
            <li key={10 * product.id}>
              <strong>Commentaire :</strong> {product.commentary}
            </li>
          </div>
        </ul>
        <div className="imageProduct">
          <div key={9 * product.id}>
            <img src={product.img} alt={product.name} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DescPhone;
