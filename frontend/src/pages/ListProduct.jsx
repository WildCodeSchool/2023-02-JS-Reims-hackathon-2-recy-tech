import React, { useEffect, useState } from "react";
import "../App.css";

function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: "Téléphone 1",
        model: "Modèle 1",
        category: "Catégorie A",
      },
      {
        id: 2,
        name: "Téléphone 2",
        model: "Modèle 2",
        category: "Catégorie B",
      },
      {
        id: 3,
        name: "Téléphone 3",
        model: "Modèle 3",
        category: "Catégorie C",
      },
    ];

    setProducts(fetchedProducts);
  }, []);

  return (
    <div>
      <h1>Liste des téléphones</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Modèle</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.model}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
