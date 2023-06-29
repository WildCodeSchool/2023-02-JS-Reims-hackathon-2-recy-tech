import React, { useEffect, useState } from "react";
import "../App.css";

function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5001"}/products`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  /**  function duplicateproducts() {
    const dupP=[];
    for (let i = 0; i < 100; i += 1) {
      dupP.push(...products);
    }
    return dupP;
  } */

  return (
    <div>
      <h1>Liste des téléphones</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
